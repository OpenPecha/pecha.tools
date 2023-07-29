import { Link, useLoaderData } from "@remix-run/react";

function Main() {
  const { status } = useLoaderData();
  return (
    <main>
      <h1 className="tool-list-title">Annotation Tools</h1>
      <section>
        <div className="tool-list">
          {status.map((list) => {
            return <Tool list={list} key={list.name} />;
          })}
        </div>
      </section>
    </main>
  );
}

function Tool({ list }) {
  const linkStyle = {
    textDecoration: "none",
    fontFamily: "serif",
    color: "black",
  };
  return (
    <div className="tool-item">
      <Link to={"/tool/" + list.name} style={linkStyle}>
        <div className={"tool-icon " + list.name}></div>
        <div className="tool-name">{list.name}</div>
      </Link>
    </div>
  );
}

export default Main;
