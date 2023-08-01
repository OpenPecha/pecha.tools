import {
  defer,
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Await, Form, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { fetchToolInfo } from "~/api/getUserToolInfo";
import Header from "~/component/Header";
import History from "~/component/History";
import Main from "~/component/Main";
import { toolList } from "~/constant";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let tools = fetchToolInfo(user?.email);

  if (!user) return { user, status: toolList };
  let data = toolList.map(async (list) => {
    if (!list.needUser) return { name: list.name, url: list.url };
    let data = await fetch(list.url + "/api/user/" + user.username);
    let res = await data.json();
    return { name: list.name, data: res.users || null, url: list.url };
  });
  let status = await Promise.all(data);
  return defer({ user, status, tools });
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
      <div className="container">
        <Suspense fallback={<p>Loading package location...</p>}>
          <Await
            resolve={data.tools}
            errorElement={<p>Error loading package location!</p>}
          >
            {(tools) => <Main tools={tools} />}
          </Await>
        </Suspense>
        <History />
      </div>
    </div>
  );
}
