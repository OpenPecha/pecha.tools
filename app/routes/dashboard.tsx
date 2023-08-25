import { LoaderFunction } from "@remix-run/node";
import React from "react";

import Dashboard from "~/component/Dashboard";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);

  return {
    user,
  };
};

function dashboard() {
  return <Dashboard />;
}

export default dashboard;
