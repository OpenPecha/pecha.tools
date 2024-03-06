import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { useState } from "react";
import { MdFeedback } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function FeedBucket() {
  let { user } = useRouteLoaderData("root");
  let [show, setShow] = useState(false);
  let email = user?.email;
  let name = user?.name;
  let feedFunction = () => {
    const feedbucket = document.querySelector("feedbucket-app");
    feedbucket?.classList.remove("hidden");

    if (user) {
      setShow(true);

      (function (k, s) {
        s = document.createElement("script");
        s.module = true;
        s.defer = true;
        s.src = "https://cdn.feedbucket.app/assets/feedbucket.js";
        s.dataset.feedbucket = k;
        document.head.appendChild(s);
      })("fvsQpmglx4sVSPLhRGfA");

      window.feedbucketConfig = {
        reporter: {
          name,
          email,
        },
      };
    } else {
      alert("login first");
    }
  };
  let hideFeedBucket = () => {
    setShow(false);
    const feedbucket = document.querySelector("feedbucket-app");
    feedbucket?.classList.add("hidden");
  };
  let esukhia_user = email?.includes("@esukhia.org");
  let monlam_user = email?.includes("@monlam.ai");
  return (
    <div
      className={`fixed right-2 ${
        !show ? "bottom-1 md:top-[50%]" : "top-[58%] md:top-[65%]"
      } `}
    >
      {!show ? (
        <button
          onClick={feedFunction}
          className="shadow-md bg-white rounded-full p-2"
        >
          <MdFeedback size={24} color={"#d73449"} />
        </button>
      ) : (
        <button
          className="shadow-md rounded-full bg-white p-2"
          onClick={hideFeedBucket}
        >
          <RxCross2 size={24} color={"#d73449"} />
        </button>
      )}
    </div>
  );
}

export default FeedBucket;
