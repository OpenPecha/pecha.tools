import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Card, CardContent, CardHeader } from "~/shadComponent/ui/card";
import { ToastAction } from "~/shadComponent/ui/toast";
import { useToast } from "~/shadComponent/ui/use-toast";
import getRandomLightColor from "~/utils/getRandomColor";
import Login from "./Login";
function Main({ tools }) {
  return (
    <main>
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
  let getColor = getRandomLightColor(index);
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
    if (user) {
      if (list.url) {
        if (user) navigate("/tool/" + list.name.replace(" ", "_"));
      }
      if (!list.url) {
        alert("you are not assigned to this tool");
      }
    }
  };
  return (
    <>
      <Card
        onClick={handleClick}
        className={`tool ${getColor} cursor-pointer text-center w-full relative overflow-hidden hover:scale-95 transition-all duration-500 `}
      >
        <CardHeader>
          <img
            src={list?.ICON}
            alt="card-icon"
            className="w-20 h-20 mx-auto object-contain"
          />
        </CardHeader>
        <CardContent>
          <div className=" uppercase text-center text-slate-700 font-semibold">
            {list.name.replaceAll("_", " ")}
          </div>
        </CardContent>
        {list.demo && (
          <Link
            to={"/demo/" + list.name}
            className="link absolute -bottom-5 right-0  uppercase text-sm text-gray-400 dark:bg-slate-600  dark:text-gray-200  font-light hover:text-black bg-gray-100  px-2 "
          >
            demo
          </Link>
        )}
      </Card>
    </>
  );
}

export default Main;
