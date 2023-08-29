import React from "react";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import { FaShoppingBag,FaPlayCircle,FaTruck,FaRecycle, FaArrowAltCircleRight} from "react-icons/fa";

const Category=()=>{
    return(
        <div className="mt-12 ml-12 ">
            <div className="ml-44 mb-6">
            <p className="text-red-500 font-extrabold text-6xl">All Fast Food is<br/> Available at <span className="underline" style={{ textDecorationColor: "orange" }} >Foodle</span></p>
            </div>
            <div className="flex items-center ml-44">
            <img src="./images/man.png" alt="Man" className="mt-12"/> 
            <p className="ml-12 mt-9">We Are Just A Click Away When You Crave For Delicious Fast Food</p>
            <br/>
            </div>
            <br/>
            <br/>
            <div className="flex ml-44">
            <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded">
        <FaShoppingBag size={16} color="orange" />
        Buy Now
      </button>
      <p className="flex items-center gap-2 text-black ml-8 mt-4">
      <FaPlayCircle size={34} color="orange" />
       How To Order
      </p>
      </div>
      <div className=" mr-20">
        <img src="./images/Sandwich.png" alt="Sandwich" className="ml-auto mt-[-20rem]" />
        </div>
            <div className="flex gap-60 ml-24 mt-24">
            <div>
            <FaTruck size={34} color="orange" />
             <h4>Fast Delivery</h4>    
            <p className="black">The Food Will Be Delivered To<br/>
            Your Home Within 1-2 Hours Of<br/>
                    Your Ordering</p>
            </div>
            <div>
            <FaRecycle size={34} color="orange" />
                <h4>Fresh Food</h4>
                <p className="black">Your Food Will Be delivered<br/>
                100% Fresh To Your Home.We<br/>
                Do Not Deliver Stale Food</p>
                </div>
                <div>
                <FaTruck size={34} color="orange" />
                    <h4>Free Delivery</h4>
                    <p className="black">Your Food Delivery Is<br/>
                    Absolutely Free No Cost <br/>
                    Just Order And Enjoy</p>
                </div>
                </div>
                <br/>
                <br/>
                <div className="items-center flex mt-16">
                    <h5 className="text-5xl">Best <span className="text-red-500">Delivered</span>Categories</h5>
                    <p className="text-lg text-center mt-12" style={{ marginLeft: "27rem"}}>Here Are Some Of Our Best Distributed Categories.If You Want You<br/> Can Order From Here</p>
                </div>
                <br/>
                <br/>
                <div className="flex justify-between">
                    <div className="mt-5">
                        <img src="./images/chicken burger.png" alt="chicken burger"/>
                        <p className="text-black-1800 ml-54">Chicken Burger</p>
                        <p className="text-red-500 flex items-center">Order Now<FaArrowAltCircleRight size={14} color="red"/></p>
                    </div>
                    <div className="mt-5">
                        <img src="./images/chickenPizza.png" alt="chicken Pizza"/>
                        <p className="text-black-1800">Chicken Pizza</p>
                        <p className="text-red-500 flex items-center">Order Now<FaArrowAltCircleRight size={14} color="red"/></p>
                    </div>
                    <div className="mt-5">
                        <img src="./images/FrenchFries.png" alt="French Fries"/>
                        <p className="text-black-1800">French Fries</p>
                        <p className="text-red-500 flex items-center">Order Now<FaArrowAltCircleRight size={14} color="red"/></p>
                    </div>
                </div>

                </div>
        
    )
}
export default Category