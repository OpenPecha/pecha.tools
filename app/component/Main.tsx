import { Link, useLoaderData } from "@remix-run/react";

function Main() {
  const { status, user } = useLoaderData();
  return (
    <main>
      <h1>Tools</h1>
      <section>
        <div className="tool-list">
          {user &&
            status.map((list) => {
              return <Tool list={list} key={list.name} />;
            })}
        </div>
      </section>
    </main>
  );
}

function Tool({ list }) {
  return (
    <div className="tool-item">
      <Link to={list.name}>
        <div className="tool-name">{list.name}</div>
      </Link>
    </div>
  );
}

export default Main;
