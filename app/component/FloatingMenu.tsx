import { Menu, Transition } from "@headlessui/react";
import { Link, useLoaderData } from "@remix-run/react";
import { Fragment, useRef } from "react";

function FloatingMenu() {
  let { user } = useLoaderData();
  const isAdmin = user?.role === "admin";
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
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
  );
}

export default FloatingMenu;
