import { Form } from "@remix-run/react";

// If the user lands on this page, we redirect back to / if they are already logged in.

// This form would take us to the auth0 route, which would redirect to the Auth0 login page.

export default function Login() {
  return (
    <Form action="/auth/auth0" className="px-6 sm:px-0 max-w-sm" method="post">
      <button
        type="submit"
        className="text-white w-full  bg-[#3b5681] hover:bg-[#3b5681]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 "
      >
        <img src="/svg/login.png" />
        LOG IN<div></div>
      </button>
    </Form>
  );
}
