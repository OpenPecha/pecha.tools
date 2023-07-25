import { Form } from "@remix-run/react";

// If the user lands on this page, we redirect back to / if they are already logged in.

// This form would take us to the auth0 route, which would redirect to the Auth0 login page.

export default function Login() {
  return (
    <Form action="/auth/auth0" method="post">
      <button className="login-btn">Login</button>
    </Form>
  );
}
