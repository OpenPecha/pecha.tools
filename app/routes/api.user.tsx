import { LoaderFunction } from "@remix-run/node";
import { getUser } from "~/modal/user";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let email = url.searchParams.get("email") as string;
  let user = getUser(email);

  return user;
};
