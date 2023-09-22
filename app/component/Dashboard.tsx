import React from "react";

function Dashboard() {
  let iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      {loading && <div>loading</div>}
      <iframe
        src="https://metabase.pecha.tools/public/dashboard/cdbff6e1-8727-49fb-a91c-7adea8602a4d#refresh=10"
        style={{ border: "0" }}
        className="w-full h-screen"
        allowTransparency={true}
        ref={iframeRef}
        onLoad={() => setLoading(false)}
      ></iframe>
    </>
  );
}

export default Dashboard;
