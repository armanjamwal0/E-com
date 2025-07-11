import api from "../../api";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Links from "../Links/Link";

function Landing({setAuthenticated ,setLoading, loading}) {
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/");
        if (res.data.authenticated){
          nav('/home') // if user is already login then return home 
          setAuthenticated(true) // if is true then return private route home
          console.log("User:", res.data);
          setLoading(true)
        }
      } catch (err) {
        console.log("error : ", err);
        setAuthenticated(false)
      }
      finally{
        setLoading(false)
      }
    })();
  }, []);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Next-Gen Devices, Delivered
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Upgrade your lifestyle with our curated collection of flagship
            phones and accessories. Reliable delivery, secure checkout, and
            top-tier support — everything you need, all in one place..
          </p>

          <Links label={"Get started"} to={"/login"}>
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Links>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
