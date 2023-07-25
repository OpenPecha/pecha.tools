import { Link } from "@remix-run/react";
import { toolList } from "~/constant";

function Main() {
  return (
    <main>
      <h1>Tools</h1>
      <section>
        <div className="tool-list">
          {toolList.map((list) => {
            return (
              <Link key={list.name} to={"/" + list.name} className="tool-item">
                {list.name}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
