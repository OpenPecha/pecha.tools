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

  if (!user) return { user };
  let data = toolList.map(async (list) => {
    let data = await fetch(list.url + "/api/user/" + user.username);
    let res = await data.json();
    return { name: list.name, data: res.users, url: list.url };
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
  const { user } = useLoaderData();
  if (!user)
    return (
      <Form
        action="/auth/auth0"
        method="post"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          style={{
            padding: 10,
            border: "1px solid black",
            background: "transparent",
            cursor: "pointer ",
            transition: "0.3s all ease",
          }}
        >
          Login
        </button>
      </Form>
    );
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
