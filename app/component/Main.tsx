import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Card, CardContent, CardHeader } from "~/shadComponent/ui/card";
import { ToastAction } from "~/shadComponent/ui/toast";
import { useToast } from "~/shadComponent/ui/use-toast";
import getRandomLightColor from "~/utils/getRandomColor";
function Main({ tools }) {
  return (
    <main className="flex-1">
      <section>
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 px-[20px] ">
          {tools.map((list, index) => {
            return (
              <div className=" rounded-lg" key={list.name}>
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
  let toast = useToast();
  function login() {
    let loginBtn = document.getElementById("login-btn");
    loginBtn?.click();
  }
  function checkAuth() {
    if (!user) {
      toast.toast({
        title: "Login !",
        description: "please login to use this tool",
        action: (
          <ToastAction altText="Try again" onClick={login}>
            Login
          </ToastAction>
        ),
      });
    }
    return;
  }
  
  let handleClick = () => {
    checkAuth();
    if (list.url) {
      if (user) navigate("/tool/" + list.name.replace(" ", "_"));
    }
    if (!list.url && user) {
      toast.toast({
        title: "No-access",
        description: "you are not assigned to this tool",
      });
    }
  };
  let getColor = getRandomLightColor(index);

  if(!list.active) return null;

  return (
    <div className="rounded-md relative shadow-md bg-[#2d3354] hover:bg-[#2a2c48] tool  z-0 cursor-pointer text-center w-full  overflow-hidden  transition-all duration-500">
      <div
        onClick={handleClick}
        className={`tool z-0 cursor-pointer text-center w-full overflow-hidden  transition-all duration-500 `}
      >
        <CardHeader>
          <img
            src={list?.icon}
            alt="card-icon"
            className={` h-24 mx-auto object-contain ${getColor} `}
          />
        </CardHeader>
        <hr className={`${getColor} border-none h-[1px]`}/>
        <CardContent>
          <div className=" uppercase text-center text-[#e9eaeb] font-semibold">
            {list.name.replaceAll("_", " ")}
          </div>
        </CardContent>
      </div>
      {list.demo && (
        <Link
          to={"/demo/" + list.name}
          className="link absolute z-10 -bottom-5 right-0  uppercase text-sm text-gray-400 dark:bg-slate-600  dark:text-gray-200  font-light hover:text-black bg-gray-100  px-2 "
        >
          demo
        </Link>
      )}
    </div>
  );
}

export default Main;
