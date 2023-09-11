import {
  defer,
  redirect,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import Header from "~/component/Header";
import Main from "~/component/Main";
import { getUserSession } from "~/services/session.server";
import { isAuthenticated, userProfileState } from "~/store";
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

export const meta: V2_MetaFunction = () => {
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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Suspense fallback={<p>Loading package location...</p>}>
          <Await
            resolve={data.tools}
            errorElement={<p>Error loading package location!</p>}
          >
            {(tools) => <Main tools={tools} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
