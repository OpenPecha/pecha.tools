import { LoaderFunction } from "@remix-run/node";

import Dashboard from "~/component/Dashboard";
import Header from "~/component/Header";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;

  return {
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV },
    user,
  };
};

function dashboard() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Dashboard />;
    </div>
  );
}

export default dashboard;
