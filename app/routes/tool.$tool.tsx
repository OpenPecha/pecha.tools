import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { toolList } from "~/constant";
import { authenticator } from "~/services/auth.server";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });
  let toolname = params.tool;
  let filtered = toolList.filter((tool) => tool.name === toolname);
  let user = await getUserSession(request);
  let url = filtered[0].url + "?session=" + user.email;
  return {
    url,
  };
};

function Tool() {
  const { url } = useLoaderData();
  const [loaded, setLoaded] = useState(false);
  function onLoadFunction() {
    setLoaded(true);
    console.log("loaded");
  }

  return (
    <div style={{ maxWidth: "100vw", maxHeight: "100vh", overflow: "hidden" }}>
      {!loaded && <Loading />}
      <iframe src={url} onLoad={onLoadFunction}></iframe>
    </div>
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
