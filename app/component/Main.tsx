import { Form, Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
let timer;
function Main({ tools }) {
  const { user, status } = useLoaderData();
  const [showMessage, setShowMessage] = useState(false);
  function checkAuth() {
    if (timer) clearTimeout(timer);
    if (!user) {
      setShowMessage(true);
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }
  return (
    <main>
      <h1 className="text-xl font-bold">Annotation Tools </h1>
      {/* {!user && showMessage && ( */}
      <div
        className="toast toast-start capitalize"
        style={{
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          alignItems: "center",
          height: "50px",
          zIndex: 1000,
          transform: !showMessage ? "translateY(110%)" : "translateY(0)",
        }}
      >
        <div className="alert alert-info">
          Login by
          <Form
            action="/auth/auth0"
            className="px-6 sm:px-0 max-w-sm"
            method="post"
          >
            <button
              type="submit"
              className="link text-red-700 hover:text-black animate-pulse"
            >
              clicking here !!
            </button>
          </Form>
        </div>
      </div>
      {/* )} */}
      <section>
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px]">
          {status.map((list) => {
            let disabled = list.needUser ? !user : false;
            return (
              <div onClick={checkAuth} className="text-center mx-auto">
                <Tool list={list} key={list.name} disabled={disabled} />
              </div>
            );
          })}
          {!tools?.error && (
            <div className="text-center mx-auto w-48">
              <ProdigyTools tool={tools} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Tool({ list, disabled }) {
  return (
    <Link to={"/tool/" + list.name.replace(" ", "_")}>
      <div
        className="card  w-full bg-white shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        style={{ opacity: disabled ? 0.4 : 1 }}
      >
        <div className="hidden md:block">
          <div className={"tool-icon " + list.name}></div>
        </div>
        <div className="card-body uppercase text-center">{list.name}</div>
      </div>
    </Link>
  );
}

function ProdigyTools({ tool }) {
  if (!tool?.department) return null;
  return (
    <Link to={"/tool/" + tool.department}>
      <div className="card  bg-white shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="hidden md:block">
          <div className={"tool-icon " + tool.department}></div>
        </div>
        <div className="card-body uppercase text-center">{tool.department}</div>
      </div>
    </Link>
  );
}

export default Main;
