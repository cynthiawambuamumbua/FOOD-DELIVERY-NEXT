import React from "react";
import { FaReact } from "react-icons/fa";
import { FaStar} from "react-icons/fa";

const Menu=()=>{
    return(
        <div className="mt-9">
            <h1 className="text-5xl mt-12 ml-9">Our <span className="text-red-800">Regular</span> Menu</h1>
            <br/>
            <p className="ml-9">These Are Our Regular Menus.You can<br/>Order Anything You Like.</p>
            <div className="flex justify-end mr-14 mt-(-6)">
        <button className="border border-red-600 bg-red-600 text-white px-4 py-2 rounded mb-9">See All</button>
       </div>
       <br/>
       <br/>
       <div className="flex ml-24 gap-80">
        <div className="ml-9">
        <div className="border-red rounded-full roundedfull outline outline-offset-2 outline-8 outline-red-500">
        <img
          src="./images/chickenBurger2.jpeg"
          alt="chicken burger"
          className="border rounded-full border-red-600"
        />
      </div>
            <div className="w-339 h-270 ml-2em border border-box mt-2em">
      <div className="bg-red-200 p-4 h-full rounded ml-auto mt-0">
        <h1 className="text-black-800">Chicken Burger</h1>
        <div className="flex">
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          (160)
        </div>
        <div className="flex mt-6">
          <p>$3.50</p>
          <button className="ml-7 border border-red-600 bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </div>
        <div className="ml-9">
        <div className="border-red rounded-full roundedfull outline outline-offset-2 outline-8 outline-red-500">
        <img
          src="./images/chickenPizza2.jpeg"
          alt="chicken burger"
          className="border rounded-full border-red-600 w-56"
        />
      </div>
            <div className="w-339 h-270 ml-2em border border-box mt-2em">
      <div className="bg-red-200 p-4 h-full rounded ml-auto mt-0">
        <h1>Chicken Pizza</h1>
        <div className="flex">
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          (142)
        </div>
        <div className="flex mt-6">
          <p>$4.20</p>
          <button className="ml-7 border border-red-600 bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </div>
        <div className="ml-9">
        <div className="border-red rounded-full roundedfull outline outline-offset-2 outline-8 outline-red-500">
        <img
          src="./images/chickenFry.jpeg"
          alt="chicken burger"
          className="border rounded-full border-red-600 w-56"
        />
      </div>
            <div className="w-339 h-270 ml-2em border -box mt-2em">
      <div className="bg-red-200 p-4 h-full rounded ml-auto mt-0">
        <h1>Chicken Fry</h1>
        <div className="flex">
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          (123)
        </div>
        <div className="flex mt-6">
          <p>$5.00</p>
          <button className="ml-7 border border-red-600 bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </div>
        </div> 
        <br/>
        <br/>
        <br/>


        <div className="flex gap-60 ml-24">
        <div className="ml-9">
        <div>
        <img
          src="./images/humberger3.png"
          alt="chicken burger"
        />
      </div>
            <div className="w-339 h-270 ml-2em border border-box mt-2em">
            <div className="bg-red-200 p-4 h-full rounded ml-auto mt-0">
        <h1>Grill Sandwich</h1>
        <div className="flex">
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          (112)
        </div>
        <div className="flex mt-6">
          <p>$4.80</p>
          <button className="ml-7 border border-red-600 bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </div>
        <div className="ml-9">
        <div>
        <img
          src="./images/humberger1.png"
          alt="chicken burger"
        />
      </div>
      <div className="w-339 h-270 ml-2em border border-box mt-2em">
      <div className="bg-red-200 p-4 h-full rounded ml-auto mt-0">
        <h1>Taco Traifi</h1>
        <div className="flex">
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          (152)
        </div>
        <div className="flex mt-6">
          <p>$3.63</p>
          <button className="ml-7 border border-red-600 bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </div>
        <div className="ml-9">
        <div>
        <img
          src="./images/humberger2.png"
          alt="chicken burger"
        />
      </div>
      <div className="w-339 h-270 ml-2em border border-box mt-2em">
      <div className="bg-red-200 p-2 h-full rounded ml-auto mt-(-3)">
        <h1 className="text-black-1800">Noddle's ramen</h1>
        <div className="flex">
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          <FaStar size={16} color="gold" />
          (163)
        </div>
        <div className="flex mt-6">
          <p>$6.50</p>
          <button className="ml-7 border border-red-600 bg-red-600 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </div>

        </div>
        <br/>
        <br/>
        <br/>

        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 ml-4"> 
     <img
     src="./images/hamb.png"
     alt="hamb"
     className="w-70 mx-h-100 ml-3 mt-4"
   />
 <div className="stacked-images">
 <img
          src="./images/hamb2.png"
          alt="hamb"
          className="w-350 border-radius-2 mx-h-100 ml-3"
        />
        <br/>
         <img
          src="./images/hamb3.png"
          alt="hamb"
          className="w-120 ml-12 mb-12 border-radius-2 mx-h-100 ml-3"
        />
  </div> 
 </div>
        </div>
        </div>

    )
}
export default Menu