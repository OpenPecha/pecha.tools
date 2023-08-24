import { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef, useState } from "react";
import Header from "~/component/Header";
import { toolList } from "~/constant";

export const loader: LoaderFunction = async ({ request, params }) => {
  let toolname = params.tool;
  if (toolList.find((d) => d.name === toolname)) {
    let filtered = toolList.find((tool) => tool.name === toolname);
    let url = filtered?.demo;
    return {
      url,
      toolname,
    };
  }
};
export const meta: V2_MetaFunction = ({ params }) => {
  let toolname = params.tool;
  return [
    { title: `Pecha_tools | demo-${toolname}` },
    {
      name: "description",
      content: `demo of pecha tools - ${toolname}`,
    },
  ];
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
