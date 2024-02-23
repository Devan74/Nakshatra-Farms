import React from "react";
import Image from "next/image";
import FooterLogo from "../../public/assets/footerLogo.png";
import Whatsapp from "../../public/assets/whatsapp.png";
import Twitter from "../../public/assets/twitter.png";
import Instagram from "../../public/assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 footer_bg h-full md:h-[604px]">
      <div className="container mt-[5rem] px-4">
        <div className="flex flex-col md:flex-row md:justify-around md:gap-8">
          <div className="md:w-auto mb-8">
            <div className="relative left-[-10%] mb-5">
              <Image src={FooterLogo} alt="Footer Logo" width={195} height={65} />
            </div>
            <div className="mt-4 md:w-[311px]">
              <p>
                At Nakshatra Farms, we believe in the purity of nature and the
                essence of traditional practices. Our journey began with a
                vision to provide you with the finest quality products
                straight from the heart of nature.
              </p>
            </div>
            <div className="mt-4 font-bold">
              <p className="font-bold underline text-xl text-[#FECB39]">
                Social Media
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <a href="#" target="#">
                  <Image src={Whatsapp} alt="Whatsapp" width={30} height={30} />
                </a>
                <a href="#" target="#">
                  <Image src={Twitter} alt="Twitter" width={30} height={30} />
                </a>
                <a href="#" target="#">
                  <Image src={Instagram} alt="Instagram" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-auto mb-8 font-bold">
            <div>
              <p className="underline text-xl text-[#FECB39]">Explore</p>
              <ul className="mt-5">
                <li className="hover:text-green-600 transition duration-300">
                  <a href="#">Shop</a>
                </li>
                <li className="mt-5 hover:text-green-600 transition duration-300">
                  <a href="#">Our Story</a>
                </li>
                <li className="mt-5 hover:text-green-600 transition duration-300">
                  <a href="#">Gallery</a>
                </li>
                <li className="mt-5 hover:text-green-600 transition duration-300">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-auto mb-8 font-bold">
            <div>
              <p className="underline text-xl text-[#FECB39]">Our Products</p>
              <ul className="mt-5">
                <li className="hover:text-green-600 transition duration-300">
                  <a href="#">A2 Ghee and Sweets</a>
                </li>
                <li className="mt-5 hover:text-green-600 transition duration-300">
                  <a href="#">Organic Oil</a>
                </li>
                <li className="mt-5 hover:text-green-600 transition duration-300">
                  <a href="#">Pooja Essentials</a>
                </li>
                <li className="mt-5 hover:text-green-600 transition duration-300">
                  <a href="#">Cow Dunk</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-auto text-[14px] font-bold">
            <div className="mb-5">
              <p className="underline text-xl text-[#FECB39] mb-5">Contact Us</p>
              <p className="mb-5">E. DHARMARAJAN, NAKSHATRA FARMS,</p>
              <p className="mb-5">S.R. GARDENS, KOTTAIKULAM, PATTUKOTTAI,</p>
              <p className="mb-5">TAMIL NADU- 614601, INDIA.</p>
            </div>
            <div>
              <div className="flex flex-row mb-5">
                <p className="font-bold">Phone:</p>
                <p className="ml-3">+91 9384394340</p>
              </div>
              <div className="flex flex-row">
                <p className="font-bold">Email:</p>
                <p className="ml-3">contact@nakshtrafarms.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
