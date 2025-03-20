import React from "react";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="flex flex-col justify-center px-20 py-12 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="px-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <FooterColumn width="w-3/12">
              <h2 className="self-start text-xl font-bold leading-none text-white">
                Indegene Careers
              </h2>
              <p className="mt-7 text-base leading-4 text-gray-400">
                Building the future of healthcare, powered by AI.
              </p>
            </FooterColumn>

            <FooterColumn width="w-3/12">
              <h2 className="self-start text-xl font-bold text-white">
                Quick Links
              </h2>
              <ul className="mt-7 text-base text-gray-400">
                <li className="pb-3 max-md:pr-5">
                  <FooterLink text="About Us" />
                </li>
                <li className="pb-3.5 mt-2 whitespace-nowrap max-md:pr-5">
                  <FooterLink text="Careers" />
                </li>
                <li className="pb-3.5 mt-2 whitespace-nowrap max-md:pr-5">
                  <FooterLink text="Contact" />
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn width="w-3/12">
              <h2 className="self-start text-xl font-bold leading-none text-white whitespace-nowrap">
                Connect
              </h2>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d18397f83ce02d977f1f4f44453ab15bc9df8e49?placeholderIfAbsent=true&apiKey=8f286a89216d48f19ceeeaf7437e58bd"
                alt="Social media icons"
                className="object-contain mt-8 aspect-[11.76] w-[284px]"
              />
            </FooterColumn>

            <FooterColumn width="w-3/12">
              <h2 className="text-xl font-bold leading-none text-white">
                Location
              </h2>
              <address className="mt-9 text-base leading-4 text-gray-400 not-italic">
                123 Tech Park Bangalore, 560001 India
              </address>
            </FooterColumn>
          </div>
        </div>
        <div className="px-16 pt-8 pb-2 mt-12 text-base leading-none text-center text-gray-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 Indegene. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
