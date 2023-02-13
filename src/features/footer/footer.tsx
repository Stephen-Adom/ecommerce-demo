/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { SiNike } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="mt-5 bg-[#eaeaea]">
      <div className="container w-full lg:w-[80%] mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row items-center lg:items-start justify-center gap-x-20 gap-y-10 py-10">
        <div className="w-full lg:w-[40%] flex flex-col gap-y-6">
          <a
            title="Ecommerce-demo"
            href="javascript.void(0)"
            className="navbar-brand w-[50%] sm:w-[50%] md:w-[50%] lg:w-lg-[20%] mx-auto lg:mx-0"
          >
            <SiNike className="mx-auto text-6xl sm:text-6xl md:text-7xl lg:text-7xl" />
          </a>

          <p className="text-[#5f5f5f] w-full lg:w-[50%] text-center lg:text-left">
            We believe brand interaction is key in commu-nication. Real
            innovations and a positive
          </p>

          <div className="flex items-center justify-center gap-3 social-links lg:justify-start">
            <a href="#" title="twitter">
              <AiOutlineTwitter className="text-xl" />
            </a>
            <a href="#" title="instagram">
              <AiOutlineInstagram className="text-xl" />
            </a>
            <a href="#" title="youtube">
              <AiFillYoutube className="text-xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold">About Us</h5>
          <ul className="list-none">
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                Features
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                FAQ's
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                News
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold">Company</h5>
          <ul className="list-none">
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                Core Values
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                Partner w/ us
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                Blog
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-[#5f5f5f] text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold">Get in touch</h5>

          <form action="" className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Your email here..."
              className="bg-[#dcdcdc] px-3 py-4"
            />
            <button type="submit" className="w-full py-4 text-white bg-black">
              Get Access
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-t-[#dad9d9] py-10">
        <div className="container w-full lg:w-[80%] mx-auto px-10 text-[#5f5f5f] text-sm">
          <p>TravelAgent @ 2023. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
