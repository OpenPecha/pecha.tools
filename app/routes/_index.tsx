import { MetaFunction, type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import Header from "~/component/Header";
import Main from "~/component/Main";
import { getUserSession } from "~/services/session.server";
import { getCombineTools } from "~/utils/combineTools";

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
  env: {
    AUTH0_DOMAIN: string | undefined;
    AUTH0_CLIENT_ID: string | undefined;
    NODE_ENV: string | undefined;
  };
}
export const loader: LoaderFunction = async ({ request }) => {
  let user = await getUserSession(request);
  let toolList = await getCombineTools(user?.email);
  let { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV } = process.env;
  return json({
    user,
    tools: toolList,
    env: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, NODE_ENV },
  });
};

export const meta: MetaFunction = () => {
  return [
    { title: "Pecha_tools" },
    {
      name: "description",
      content: "pecha tools is collection of tool used for mt",
    },
  ];
};

export default function Index() {
  let data = useLoaderData<LoaderData>();
  const [showNotification, setShowNotification] = useState(true);

  // Check localStorage on component mount to determine if notification should be shown
  useEffect(() => {
    const checkNotificationStatus = () => {
      try {
        const dismissedAt = localStorage.getItem('workspace-notification-dismissed');
        if (dismissedAt) {
          const dismissedTime = parseInt(dismissedAt, 10);
          const now = Date.now();
          const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
          
          // If less than 5 minutes have passed since dismissal, keep it hidden
          if (now - dismissedTime < fiveMinutes) {
            setShowNotification(false);
          } else {
            // More than 5 minutes have passed, remove the localStorage entry and show notification
            localStorage.removeItem('workspace-notification-dismissed');
            setShowNotification(true);
          }
        }
      } catch (error) {
        // If localStorage is not available, just show the notification
        console.warn('localStorage not available:', error);
        setShowNotification(true);
      }
    };

    checkNotificationStatus();
  }, []);

  const handleCloseNotification = () => {
    try {
      // Save current timestamp to localStorage
      localStorage.setItem('workspace-notification-dismissed', Date.now().toString());
    } catch (error) {
      console.warn('Could not save to localStorage:', error);
    }
    setShowNotification(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#1f2228] to-[#171a1f] min-h-screen flex flex-col text-[#e9eaeb]">
      <Header />

      {/* New Website Notification Banner */}
      {showNotification && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 border-b border-blue-500/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  🎉 <strong>New!</strong> Check out our enhanced workspace experience
                </p>
                <p className="text-sm text-blue-100">
                  Visit our new dedicated workspace platform for improved tools and features
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center space-x-2">
              <a
                href="https://workspace.pecha.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-white/20 text-sm font-medium rounded-md text-white bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                Visit Workspace
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <button
                onClick={handleCloseNotification}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Close notification"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      )}

      <div className="mx-auto w-full md:max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col items-center text-center mb-8 max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              fontFamily: '"Rubik","Open Sans",sans-serif',
            }}
          >
            Pecha Tools Collection
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            A suite of professional tools designed for machine translation and text processing
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-8"></div>
        </div>
        
        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-xl font-semibold text-gray-200">
            Available Tools
          </h2>
        </div>
        
        <Main tools={data?.tools} />
      </div>
    </div>
  );
}
