// app/routes/app/auth0/logout.tsx
import { redirect, type LoaderFunction } from "@remix-run/node";

// Here we use the logout function of the authenticator to logout the user and clear the Auth0 session.
export const loader: LoaderFunction = async ({ request }) => {
  return redirect("/");
};
