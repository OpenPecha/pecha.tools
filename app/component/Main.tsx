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
                <Tool list={list} key={list.name} disabled={disabled} />;
              </div>
            );
          })}
          {!tools?.error && <ProdigyTools tool={tools} />}
        </div>
      </section>
    </main>
  );
}
const linkStyle = {
  textDecoration: "none",
  fontFamily: "serif",
  color: "black",
};
function Tool({ list, disabled }) {
  return (
    <Link to={"/tool/" + list.name.replace(" ", "_")} style={linkStyle}>
      <div
        className="card  w-30 bg-white shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        style={{ opacity: disabled ? 0.4 : 1 }}
      >
        <figure className="hidden md:block">
          <div className={"tool-icon " + list.name}></div>
        </figure>
        <div className="card-body uppercase text-center">{list.name}</div>
      </div>
    </Link>
  );
}

function ProdigyTools({ tool }) {
  if (!tool?.department) return null;
  return (
    <Link to={"/tool/" + tool.department} style={linkStyle}>
      <div className="card max-w-20 bg-white shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        <figure className="hidden md:block">
          <div className={"tool-icon " + tool.department}></div>
        </figure>
        <div className="card-body uppercase text-center">{tool.department}</div>
      </div>
    </Link>
  );
}

export default Main;
