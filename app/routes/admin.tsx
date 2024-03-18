import { ActionFunction, LoaderFunction, json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
import { changeActiveStatus, getTools } from "~/modal/tool";
import { getUserSession } from "~/services/session.server";
import { Button } from "~/shadComponent/ui/button";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  if (user.email === "tenkus47@gmail.com") {
    const toolList = await getTools();
    return json(toolList);
  }
  return json(
    { error: "You are not authorized to access this page" },
    { status: 401 }
  );
};

export const action: ActionFunction = async ({ request }) => {
  const formdata = await request.formData();
  let _action = formdata.get("_action") as string;
  let id = formdata.get("id") as string;
  let _active = formdata.get("_active") as string;
  const active = _active === "true" ? true : false;
  if (_action === "changeActiveStatus") {
    let changeStatus = changeActiveStatus(id, active);
    return changeStatus;
  }
  return null;
};

function admin() {
  const tools = useLoaderData();
  let error = tools?.error;
  if (error) return <div>{error}</div>;
  const ChangeFetcher = useFetcher();
  const handleActiveStatusChange = (id: string, active: boolean) => {
    ChangeFetcher.submit(
      { _action: "changeActiveStatus", id, _active: active },
      { method: "POST" }
    );
  };
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Tools List</h2>
      {ChangeFetcher.state !== "idle" && (
        <div className="text-center">Loading...</div>
      )}
      {tools.length > 0 ? (
        <ul className="space-y-4">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="flex justify-between bg-white shadow overflow-hidden rounded-lg p-4"
            >
              <div>
                <h3 className="text-xl font-semibold">{tool.name} </h3>{" "}
                {tool.description && <p className="mt-1">{tool.description}</p>}
                <div className="mt-2">
                  {tool.url && (
                    <a
                      href={tool.url}
                      className="text-blue-500 hover:underline"
                    >
                      Website
                    </a>
                  )}
                  {tool.demo && (
                    <a
                      href={tool.demo}
                      className="ml-4 text-blue-500 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="h-full max-h-[10vh] flex items-center">
                {tool.active !== undefined && (
                  <Button
                    onClick={() =>
                      handleActiveStatusChange(tool.id, !tool.active)
                    }
                    className="mt-1"
                    style={{
                      backgroundColor: tool.active ? "#4caf50" : "#f44336",
                    }}
                  >
                    Status: {tool.active ? "Active" : "Inactive"}
                  </Button>
                )}
                {tool.icon && (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="mt-2 max-h-[10vh]"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tools found.</p>
      )}
    </div>
  );
}

export default admin;
