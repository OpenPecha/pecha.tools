import {
  defer,
  redirect,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Await, Form, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { fetchToolInfo } from "~/api/getUserToolInfo";
import Header from "~/component/Header";
import Main from "~/component/Main";
import { getUserSession } from "~/services/session.server";
import { getCombineTools } from "~/utils/combineTools";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let toolList = await getCombineTools(user?.email);
  if (!user) redirect("/");
  return defer({ user, tools: toolList });
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
