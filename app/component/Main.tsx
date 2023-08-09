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
      <h1 className="tool-list-title">Annotation Tools </h1>
      {/* {!user && showMessage && ( */}
      <div
        className="bg-slate-800 text-white width-full px-4 py-2 capitalize"
        style={{
          display: "flex",
          gap: 5,
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          alignItems: "center",
          height: "50px",
          zIndex: 1000,
          transform: !showMessage ? "translateY(100%)" : "translateY(0)",
        }}
      >
        <div>Login by</div>
        <Form
          action="/auth/auth0"
          className="px-6 sm:px-0 max-w-sm text-blue-500"
          method="post"
        >
          <button type="submit" className="hover:text-white">
            {" "}
            clicking here !!
          </button>
        </Form>
      </div>
      {/* )} */}
      <section>
        <div className="tool-list">
          {status.map((list) => {
            let disabled = list.needUser ? !user : false;
            return (
              <div onClick={checkAuth}>
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
    <div
      className="tool-item min-w-fit "
      style={{ opacity: disabled ? 0.4 : 1 }}
    >
      <Link to={"/tool/" + list.name.replace(" ", "_")} style={linkStyle}>
        <div className={"tool-icon " + list.name}></div>
        <div className="tool-name">{list.name}</div>
      </Link>
    </div>
  );
}

function ProdigyTools({ tool }) {
  if (!tool?.department) return null;
  return (
    <div className="tool-item">
      <Link to={"/tool/" + tool.department} style={linkStyle}>
        <div className={"tool-icon " + tool.department}></div>
        <div className="tool-name">{tool.department}</div>
      </Link>
    </div>
  );
}

export default Main;
