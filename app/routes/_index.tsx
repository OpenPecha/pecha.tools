import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Header from "~/component/Header";
import History from "~/component/History";
import Login from "~/component/Login";
import Main from "~/component/Main";
import UserInfo from "~/component/UserInfo";
import { toolList } from "~/constant";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);

  if (!user) return { user, status: toolList };
  let data = toolList.map(async (list) => {
    let data = await fetch(list.url + "/api/user/" + user.username);
    let res = await data.json();
    return { name: list.name, data: res.users || null, url: list.url };
  });
  let status = await Promise.all(data);
  return { user, status };
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
  return (
    <div>
      <Header />
      <UserInfo />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Main />
        <History />
      </div>
    </div>
  );
}
