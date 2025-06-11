import footerlinks from "./footerlinks";
import {
  Footer,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
function MyFooterGroup(){
    return(
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        {footerlinks.map((group, index) => ( // here you need to {} this return nothing () but you add then it means in react return this in present ()
                <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  {group.title}
                </h2>
                <FooterLinkGroup col>
                  {group.links.map((link,index) => (
                    <FooterLink key= {index} href={link.href}>{link.name}</FooterLink>
                  ))}
                </FooterLinkGroup>
              </div>
            ))}
            </div>
    );
}

export default MyFooterGroup;