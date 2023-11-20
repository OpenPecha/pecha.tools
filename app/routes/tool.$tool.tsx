import { Menu, Transition } from "@headlessui/react";
import { LoaderFunction, MetaFunction, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Header from "~/component/Header";
import Login from "~/component/Login";
import { getUserSession } from "~/services/session.server";
import { getCombineTools } from "~/utils/combineTools";

export const loader: LoaderFunction = async ({ request, params }) => {
  let user = await getUserSession(request);
  if (!user) redirect("/");
  let toolname = params.tool;

  let toolList = await getCombineTools(user?.email);
  if (toolList.find((d) => d.name === toolname)) {
    let filtered = toolList.filter((tool) => tool.name === toolname);
    let url = filtered[0].url;
    if (!filtered[0].url.includes("session")) {
      console.log(url);
      url = filtered[0].url + "?session=" + user?.email;
    }

    return {
      url,
      toolname,
      user,
    };
  }
  return null;
};

export const meta: MetaFunction = ({ params }) => {
  let toolname = params.tool;
  return [
    { title: `Pecha_tools | ${toolname}` },
    {
      name: "description",
      content: "pecha tools is collection of tool used for mt",
    },
  ];
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Tool() {
  const { url, user } = useLoaderData();
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);
  function onLoadFunction() {
    const iframe = iframeRef.current;
    if (iframe) {
    }
    setLoaded(true);
  }
  const isAdmin = user?.role === "admin";

  return (
    <>
      {/* <Header /> */}
      <div className="relative  overflow-hidden h-[100dvh]">
        {!loaded && <Loading />}
        <iframe src={url} onLoad={onLoadFunction} ref={iframeRef}></iframe>
        <div className="absolute top-4 right-4 rounded-full">
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="z-20 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.picture}
                  title={user?.email}
                  alt={user?.email.split("@")[0][0]}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {user.name}
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/dashboard"}
                      className={classNames(
                        isAdmin ? "" : "hidden",
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/logout"}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Tool;

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      loading.... wait for a moment
    </div>
  );
}
