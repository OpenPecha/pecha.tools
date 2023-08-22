import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef, useState } from "react";
import { fetchToolInfo } from "~/api/getUserToolInfo";
import Header from "~/component/Header";
import { authenticator } from "~/services/auth.server";
import { getUserSession } from "~/services/session.server";
import { getCombineTools } from "~/utils/combineTools";

export const loader: LoaderFunction = async ({ request, params }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });
  let user = await getUserSession(request);
  let toolname = params.tool;
  toolname = toolname?.replace("_", " ");
  let toolList = await getCombineTools(user.email);
  if (toolList.find((d) => d.name === toolname)) {
    let filtered = toolList.filter((tool) => tool.name === toolname);
    let url = "https://" + filtered[0].url;
    if (!filtered[0].url.includes("work")) {
      url = filtered[0].url + "?session=" + user.email;
    }
    return {
      url,
      toolname,
      user,
    };
  }
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
