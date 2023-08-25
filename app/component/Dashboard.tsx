import React from "react";

function Dashboard() {
  let iframeRef = React.useRef<HTMLIFrameElement>(null);
  return (
    <div className="h-[calc(100dvh-90px)] w-screen overflow-scroll">
      <iframe
        src="https://metabase.pecha.tools/public/dashboard/cdbff6e1-8727-49fb-a91c-7adea8602a4d#refresh=10"
        style={{ border: "0" }}
        width="800"
        height="600"
        allowTransparency={true}
        ref={iframeRef}
      ></iframe>
    </div>
  );
}

export default Dashboard;
