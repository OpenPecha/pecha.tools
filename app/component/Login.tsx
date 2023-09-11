import { Form, Link, useLoaderData, useLocation } from "@remix-run/react";
import { useAuth0 } from "./hook/useAuth";
import { useRef, useState } from "react";
import { redirect } from "@remix-run/node";
import { BsMeta } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
// If the user lands on this page, we redirect back to / if they are already logged in.

// This form would take us to the auth0 route, which would redirect to the Auth0 login page.

export default function Login() {
  let loginRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        onClick={() => loginRef.current?.showModal()}
        className="text-white w-full  bg-[#3b5681] hover:bg-[#3b5681]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 "
      >
        <img src="/svg/login.png" />
        LOG IN<div></div>
      </button>
      <dialog ref={loginRef} className="modal">
        <div className="modal-box">
          <LoginForm />
        </div>
        <form
          method="dialog"
          className="transition-all duration-75 backdrop-blur-sm modal-backdrop  "
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

function LoginForm() {
  let { env } = useLoaderData();
  let { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = env;
  let location =
    NODE_ENV === "production" ? "https://pecha.tools" : "http://localhost:3000";
  const auth0Config = {
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: location + "/callback",
    responseType: "token id_token",
    scope: "email profile openid",
  };

  const { loginWithGoogle, passwordlessLogin, verifyPasswordlessCode } =
    useAuth0(auth0Config);
  const [email, setEmail] = useState("");
  const [redirectEmail, setRedirectEmail] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showOtpField, setShowOtpField] = useState(false);
  // Passwordless login
  const handlePasswordlessLogin = async (e) => {
    e.preventDefault();
    try {
      const resEmail = await passwordlessLogin(email);
      if (resEmail) {
        setShowOtpField(true);
        setRedirectEmail(resEmail);
      }
    } catch (err) {
      console.log("err: ", err);
    }
  };

  // Login with Google
  const handleGoogleLogin = () => {
    loginWithGoogle();
  };
  async function handleLoginPassword(e) {
    e.preventDefault();
    //access code
    let code = parseInt(inputRef.current?.value);
    try {
      let res = await verifyPasswordlessCode(redirectEmail, code);
      console.log(res);
    } catch (err) {
      console.log("code verification error : ", err);
    }
  }
  return (
    <div className="h-full login-container">
      <div className="flex min-h-full flex-col justify-center  sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src="/favicon.ico"
            className="mx-auto w-auto"
            style={{ height: "15vh" }}
          />
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-stone-600">
            Pecha tools
          </h2>
          <div className="mx-auto  mt-2 text-center text-sm  leading-9 tracking-tight text-stone-900">
            Log in to Pecha tools to continue using tools
          </div>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[426px]">
          <div className="bg-white   sm:rounded-lg sm:px-12">
            {redirectEmail ? (
              <div></div>
            ) : (
              <>
                <div>
                  <div className="cursor-pointer mt-6 flex flex-col gap-3">
                    <a
                      onClick={handleGoogleLogin}
                      className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-3 dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                      <FcGoogle />
                      <span className="text-lg font-semibold leading-6">
                        Google
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-stone-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm font-regular leading-6">
                    <span className="bg-white px-6 text-stone-500">
                      Or sign in with
                    </span>
                  </div>
                </div>
              </>
            )}
            {!showOtpField ? (
              <form onSubmit={handlePasswordlessLogin}>
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-stone-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition"
                  >
                    Continue
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-800">
                    Check your inbox
                  </h3>
                  <p className="text-sm text-stone-700/70">
                    We have sent you a magic link. If you did not receive the
                    email,
                    <button
                      onClick={handlePasswordlessLogin}
                      type="button"
                      className="font-medium underline underline-offset-2 decoration-primary-700/25 hover:text-primary-700 hover:decoration-primary-700/50 transition"
                    >
                      send a new one
                    </button>
                    .
                  </p>
                </div>
                <div className="mt-6 flex flex-col">
                  <form onSubmit={handleLoginPassword}>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-stone-900"
                      >
                        Enter code
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          ref={inputRef}
                          name="password"
                          type="password"
                          required
                          autoFocus
                          className="block w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="mb-8">
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition"
                      >
                        Sign in
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setRedirectEmail(null);
                          setShowOtpField(false);
                        }}
                      >
                        go back
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
