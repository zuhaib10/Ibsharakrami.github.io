import React, { useEffect } from "react";
import "../App.css";
import Lottie from "lottie-react";
import Ainme from "../assets/images/animation_ll3qwv5o.json"
import "aos/dist/aos.css";
import Aos from "aos";
const Contacts = (props)=>{
  console.log("props===>",props)
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return(
    <section class="bg-white dark:bg-gray-900 pt-10"
    style={{ backgroundColor: props.backgroundColor ,paddingTop:75,paddingBottom:25}}
    >

            <h1 className="text-6xl ml-4 mr-4 md:text-6xl "
          style={{
              textAlign: 'center',
              fontFamily: "AsgardTrial",
              color: props.backgroundColor === "#0D0630" ? "white" : "#000",
              fontWeight: "bold",

            }}
            data-aos="fade-up"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"

         >Let's talk about your project</h1>

    <div class="container px-6 py-1  items-center justify-center sm:flex flex-row  ">
     <div className=" flex flexrow items-center justify-center  sm:w-1/2 " >

     <Lottie animationData={Ainme} className="w-96 h-96 items-center justify-center -mt-10 sm:mt-0" data-aos="fade-up"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"/>

     </div>
     <div className="-mt-10 sm:mt-1 sm:w-1/2  ">
     <form action="https://formspree.io/f/xnqkpqwp" method="POST" data-aos="fade-up"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
        <div class="mb-4">
          <label for="full-name" class="block text-sm font-medium text-gray-700" >Full Name</label>
          <input type="text" id="full-name" name="full-name" class="mt-1 pl-3 block w-full rounded-md h-10 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 sm:w-3/4" style={{backgroundColor: props.backgroundColor === "#0D0630" ? "#0F0A3A" : "#D9DBE9",color:props.backgroundColor === "#0D0630" ? "white" : "#000"}} />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="mt-1 pl-3  block w-full rounded-md border-gray-300 h-10 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 sm:w-3/4" style={{backgroundColor: props.backgroundColor === "#0D0630" ? "#0F0A3A" : "#D9DBE9",color:props.backgroundColor === "#0D0630" ? "white" : "#000"}}/>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 pl-3  block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 sm:w-3/4" style={{backgroundColor: props.backgroundColor === "#0D0630" ? "#0F0A3A" : "#D9DBE9",color:props.backgroundColor === "#0D0630" ? "white" : "#000"}}></textarea>
        </div>
        <div class="mt-4">
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 sm:w-3/4">Send Inquiry</button>
        </div>
      </form>

</div>

    </div>
</section>
  )
}

export default Contacts;
