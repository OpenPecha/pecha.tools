import { Link, useLoaderData } from "@remix-run/react";

function Main({ tools }) {
  const { user, status } = useLoaderData();
  return (
    <main>
      <h1 className="tool-list-title">Annotation Tools </h1>
      {!user && (
        <div style={{ color: "red", marginBottom: 8 }}>login to use tools</div>
      )}
      <section>
        <div className="tool-list">
          {status.map((list) => {
            return <Tool list={list} key={list.name} />;
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
function Tool({ list }) {
  return (
    <div className="tool-item">
      <Link to={"/tool/" + list.name} style={linkStyle}>
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
