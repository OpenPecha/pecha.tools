import { defer, MetaFunction, type LoaderFunction } from "@remix-run/node";
import { Await, Link, NavLink, useLoaderData } from "@remix-run/react";
import { Suspense, useEffect } from "react";
import Header from "~/component/Header";
import Main from "~/component/Main";
import { getUserSession } from "~/services/session.server";
import { Button } from "~/shadComponent/ui/button";
import { getCombineTools } from "~/utils/combineTools";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let toolList = await getCombineTools(user?.email);
  let { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return defer({
    user,
    tools: toolList,
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV },
  });
};

export const meta: MetaFunction = () => {
  return [
    { title: "Pecha_tools" },
    {
      name: "description",
      content: "pecha tools is collection of tool used for mt",
    },
  ];
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between mt-2">
          <h1
            className="text-2xl ml-4 font-semibold "
            style={{
              fontFamily: '"Rubik","Open Sans",sans-serif',
            }}
          >
            Tools{" "}
          </h1>
          <div className="flex">
            <Link to="/dashboard" className="btn btn-sm mr-6">
              <Button className="sm:truncate bg-white text-slate-500 hover:bg-white hover:text-slate-600  sm:tracking-tight">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <Main tools={data.tools} />
      </div>
    </div>
  );
}
