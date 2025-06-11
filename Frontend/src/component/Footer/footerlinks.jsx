import { href } from "react-router-dom";

const footerlinks = [
  {
    title: "Resources",
    links: [
      { name: "Flowbite", href: "https://flowbite.com/" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { name: "Github", href: "https://github.com/themesberg/flowbite" },
      { name: "Discord", href: "https://discord.gg/4eeurUVvTy" },
    ],
  },
  {
    title:'Legal',
    links:[
        {name:'Privacy Policy',href:'#'},
        {name:'Terms &amp; Conditions',href:'#'}
    ]
  },
];

export  default footerlinks;
