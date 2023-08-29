import React from "react";
import { FaPinterest,FaInstagram, FaTwitter, FaFacebook  } from "react-icons/fa";
const Footer = () =>{
    return(
        <div className="flex gap-80 bg-red-200 ">
        <div className="ml-6">
        <h3 className="text-red-800 text-2xl">Foodish</h3>
        <p>Continue Food 2023 All right reserved </p>
        <h3 className="h3">Follow us on</h3>
        <div className="flex gap-6">
    <FaPinterest size={20} />
    <FaInstagram size={20} />
    <FaTwitter size={20} />
    <FaFacebook size={20} />
</div>
        </div>
        <div className="footer1">
        <h3 className="text-red-800 text-2xl">Information</h3>
            <p>Home</p>
            <p>Offer</p>
            <p>Service</p>
            <p>About Us</p>
        </div>
        <div className="footer2">
        <h3 className="text-red-800 text-2xl">Menu</h3>
            <p>Quality</p>
            <p>Make achoice</p>
            <p>Salada with vegetable </p>
            <p>Fast food delivery</p>
            <p>Subscribe</p>
        </div>
        <div className="footer3">
        <h3 className="text-red-800 text-2xl">Contact</h3>
            <p>Explore</p>
            <p>tel: +2540726794700</p>
            <p>Info @foodish.com</p>
            <p>1245, New York USA</p>
        </div>
        </div>
    );
}
export default Footer;