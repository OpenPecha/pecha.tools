import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/component/Header";
import Main from "~/component/Main";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);

  return { user };
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
  return (
    <div>
      <Header user={user} />
      <Main />
    </div>
  );
}
