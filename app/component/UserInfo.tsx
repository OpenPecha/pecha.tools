import { useLoaderData } from "@remix-run/react";
import React from "react";

function UserInfo() {
  const { user } = useLoaderData();
  let { username } = user;

  return <div style={{ padding: 20 }}>Welcome, {username} !</div>;
}

export default UserInfo;
