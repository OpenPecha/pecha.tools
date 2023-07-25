import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { toolList } from "~/constant";
import { authenticator } from "~/services/auth.server";
import { getUserSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });
  let toolname = params.tool;
  let filtered = toolList.filter((tool) => tool.name === toolname);
  let user = await getUserSession(request);
  let url = filtered[0].url + "?session=" + user.email;
  return {
    url,
  };
};

function Tool() {
  const { url } = useLoaderData();
  return <iframe src={url}></iframe>;
}

export default Tool;
