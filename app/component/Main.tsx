import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { CardContent, CardHeader } from "~/shadComponent/ui/card";
import { ToastAction } from "~/shadComponent/ui/toast";
import { useToast } from "~/shadComponent/ui/use-toast";
import getRandomLightColor from "~/utils/getRandomColor";

interface Tool {
  name: string;
  icon?: string;
  url?: string;
  demo?: boolean;
  active?: boolean;
}

interface LoaderData {
  user?: {
    email: string;
    name: string;
    picture: string;
  };
  tools: Tool[];
}
function Main({ tools }: Readonly<{ tools: Tool[] }>) {
  return (
    <main className="flex-1 py-6">
      <section>
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 px-4 md:px-6">
          {tools.map((list: Tool, index: number) => {
            return (
              <div className="rounded-lg transform transition-all duration-300 hover:scale-105" key={list.name}>
                <Tool list={list} key={list.name} index={index} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Tool({ list, index }: Readonly<{ list: Tool; index: number }>) {
  let { user } = useLoaderData<LoaderData>();
  let navigate = useNavigate();
  let toast = useToast();
  function login() {
    let loginBtn = document.getElementById("login-btn");
    loginBtn?.click();
  }
  function checkAuth(): boolean {
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
      return false;
    }
    return true;
  }
  
  const handleClick = () => {
    if (!checkAuth()) return;
    
    if (list.url) {
      navigate("/tool/" + list.name.replace(" ", "_"));
    } else {
      toast.toast({
        title: "No-access",
        description: "you are not assigned to this tool",
      });
    }
  };
  let getColor = getRandomLightColor(index);

  if(!list.active) return null;

  return (
    <div className="rounded-lg relative shadow-lg bg-gradient-to-b from-[#2d3354] to-[#232842] hover:from-[#323868] hover:to-[#282d4d] tool z-0 cursor-pointer text-center w-full overflow-hidden transition-all duration-300 border border-gray-700 hover:border-blue-400/50">
      <button
        onClick={handleClick}
        className={`tool z-0 cursor-pointer text-center w-full overflow-hidden transition-all duration-300 p-1 bg-transparent`}
        aria-label={`Open ${list.name} tool`}
      >
        <CardHeader className="pb-2">
          <div className="rounded-full bg-gray-800/50 p-4 w-24 h-24 mx-auto flex items-center justify-center shadow-inner">
            <img
              src={list?.icon}
              alt="card-icon"
              className={`h-16 w-16 mx-auto object-contain ${getColor} filter drop-shadow-md`}
            />
          </div>
        </CardHeader>
        <hr className={`${getColor} border-none h-[2px] w-3/4 mx-auto opacity-70 rounded-full`}/>
        <CardContent className="pt-3 pb-4">
          <div className="uppercase text-center text-[#e9eaeb] font-semibold tracking-wide text-sm md:text-base">
            {list.name.replace(/_/g, " ")}
          </div>
        </CardContent>
      </button>
      {list.demo && (
        <Link
          to={"/demo/" + list.name}
          className="link absolute z-10 bottom-0 right-0 uppercase text-xs font-medium text-gray-300 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-tl-md transition-colors duration-200"
        >
          demo
        </Link>
      )}
    </div>
  );
}

export default Main;
