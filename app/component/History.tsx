import { useLoaderData } from "@remix-run/react";
import React from "react";

function History() {
  const { status } = useLoaderData();

  return (
    <div
      style={{ flex: 1, maxWidth: 340, border: "1px solid black", margin: 20 }}
    >
      <h1>History</h1>
      {status.map((list) => {
        return <EachHistory list={list} />;
      })}
    </div>
  );
}

function EachHistory({ list }) {
  let data = list.data;
  let accept = data?.text.length;
  let reject = data?.rejected_list.length;
  let ignore = data?.ignored_list.length;

  let showHistory = accept === 0 && reject === 0 && ignore === 0 ? false : true;
  if (!showHistory) return null;
  return (
    <div style={{ padding: 10 }}>
      <h4>{list.name}</h4>
      <div>accept:{data?.text.length}</div>
      <div>reject:{data?.rejected_list.length}</div>
      <div>ignored:{data?.ignored_list.length}</div>
      <hr style={{ marginTop: 10 }} />
    </div>
  );
}

export default History;
