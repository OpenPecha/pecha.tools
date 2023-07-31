import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef, useState } from "react";
import { fetchToolInfo } from "~/api/getUserToolInfo";
import Header from "~/component/Header";
import { toolList } from "~/constant";
import { authenticator } from "~/services/auth.server";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });
  let toolname = params.tool;
  let user = await getUserSession(request);
  let tool = await fetchToolInfo(user.username);
  let tool_name = tool?.department;
  if (tool_name) {
    return {
      url: tool.url,
      user,
    };
  }

  let filtered = toolList.filter((tool) => tool.name === toolname);
  let url = filtered[0].url + "?session=" + user.email;
  return {
    url,
    toolname,
    user,
  };
};

function Tool() {
  const { url } = useLoaderData();
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);
  function onLoadFunction() {
    const iframe = iframeRef.current;
    if (iframe) {
    }
    setLoaded(true);
  }
  return (
    <>
      <Header />

      <div className="iframe-container">
        {!loaded && <Loading />}
        <iframe src={url} onLoad={onLoadFunction} ref={iframeRef}></iframe>
      </div>
    </>
  );
}

export default Tool;

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      loading.... wait for a moment
    </div>
  );
}
