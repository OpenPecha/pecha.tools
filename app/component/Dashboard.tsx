import React from "react";
import Loader from "./Loader";

function Dashboard() {
  let iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && <Loader />}
      <iframe
        src="https://metabase.pecha.tools/public/dashboard/cdbff6e1-8727-49fb-a91c-7adea8602a4d#refresh=10"
        className="w-full h-[150vh]"
        allowTransparency={true}
        ref={iframeRef}
        onLoad={() => setLoading(false)}
      ></iframe>
    </>
  );
}

export default Dashboard;
