import React from "react";

function SocialIcon({ href='#', children, IconName= null }) {
  return (
    <a href={href} className="mx-2">
      {children}
      <span className="sr-only">{IconName}</span>
    </a>
  );
}
export default SocialIcon;
