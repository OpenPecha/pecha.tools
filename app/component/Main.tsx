import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useState, useMemo } from "react";
import getRandomLightColor from "~/utils/getRandomColor";
let timer;
function Main({ tools }) {
  const { user } = useLoaderData();
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
        <div className="alert alert-info">Login to access the tools</div>
      </div>
      <section>
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px]">
          {tools.map((list, index) => {
            return (
              <div onClick={checkAuth} className=" rounded-lg" key={list.name}>
                <Tool list={list} key={list.name} index={index} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Tool({ list, index }) {
  let { user } = useLoaderData();
  let navigate = useNavigate();
  let getColor = getRandomLightColor(index);
  let handleClick = () => {
    if (list.url) {
      if (user) navigate("/tool/" + list.name.replace(" ", "_"));
    }
    if (!list.url) {
      alert("you are not assigned to this tool");
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`tool cursor-pointer text-center w-full relative overflow-hidden `}
      >
        <div
          className={`${getColor}  w-full  border-2 border-gray-300  dark:bg-slate-500 dark:text-white rounded  hover:shadow-sm hover:scale-95 hover:text-xl transition-all duration-300 ease-in-out`}
        >
          <div className="hidden md:block">
            <div
              className="p-2 rounded bg-transparent bg-no-repeat bg-center bg-contain mb-2 mx-auto grid place-items-center h-[110px] w-[110px]"
              style={{ backgroundImage: `url("${list?.ICON}")` }}
            ></div>
          </div>
          <div className="px-[2vw] py-4 uppercase text-center">
            {list.name.replaceAll("_", " ")}
          </div>
        </div>
        {list.demo && (
          <Link
            to={"/demo/" + list.name}
            className="link absolute -bottom-5 right-0  uppercase text-sm text-gray-400 dark:bg-slate-600  dark:text-gray-200  font-light hover:text-black bg-gray-100  px-2 "
          >
            demo
          </Link>
        )}
      </div>
    </>
  );
}

export default Main;
