import MyFooterGroup from "./footerGroup";
import { FooterIcon, Footer } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import SocialIcon from "./footerIcon";
import { TiSocialFacebookCircular } from "react-icons/ti";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';

function MyFooter() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          {/* here i add footerGroup  */}
          <MyFooterGroup />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0  space-x-6">
            {/* i need to  add her link  */}
            <SocialIcon href={"#"} IconName={"Github"}>
              <GitHubIcon className="text-gray-500 hover:text-gray-900 dark:hover:text-white w-6 h-6" />
            </SocialIcon>
            <SocialIcon href={"#"} IconName={"Github"}>
              <FacebookIcon className="text-gray-500 hover:text-gray-900 dark:hover:text-white w-6 h-6" />
            </SocialIcon>
             <SocialIcon href={"#"} IconName={"Github"}>
              <XIcon className="text-gray-500 hover:text-gray-900 dark:hover:text-white w-6 h-6" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
