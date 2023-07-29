import { useLoaderData } from "@remix-run/react";
import React from "react";

function UserInfo() {
  const { user } = useLoaderData();
  if (!user)
    return (
      <div style={{ color: "red", fontFamily: "sans-serif", padding: 20 }}>
        login to use tools
      </div>
    );
  return <div className="h1">Welcome, {user?.username}</div>;
}

export default UserInfo;
