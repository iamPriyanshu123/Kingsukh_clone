import React from "react";
import Out from "../pictures/out.jpg";
import Ayodhya from "../pictures/ayodhya.webp";
import large from "../pictures/large.jpg";
import Small from "../pictures/small.jpg";
import Baranti from "../pictures/baranti.webp";
import Service from "../pictures/service.jpg";
import "../styles/Home.css";
import { Navbar } from "./Navbar";
import { Menubar } from "../Components/Menubar";
import { MdOutlineSecurity } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";
import { HiOutlineMap } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";
import CountUp, { useCountUp } from "react-countup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const Home = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <section className="header" id="main-head">
        <Navbar></Navbar>
        <Menubar></Menubar>
        <div className="cont-text flex flex-col relative mt-28 ">
          <p className="head-para text-center text-white text-2xl opacity-55">
            Simple - Unique - Friendly
          </p>
          <h1 className="header-head text-center text-6xl font-semibold text-white mt-4 p-2 tracking-wider">
            Make Yourself At Home <br />
            In Our <span className="text-pink-600">Guest House</span>.
          </h1>
        </div>
      </section>
      <section className="booking-cont h-28 bg-white flex justify-center">
        <div className="booking-form h-28 relative bottom-14 bg-white rounded-lg shadow-lg ml-4 mr-4">
          <div className="btn-booking relative flex justify-center mt-8">
            <button className="bg-pink-700 w-36 h-12 text-emerald-50 rounded-lg text-lg ">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* <section className='about-cont grid md:grid-cols-2 xl:gap-24 mt-20 sm:grid-cols-1 p-5' id='about-main'>
                <div className="about-image xl:ml-56 mb-12 sm:mr-20">
                    <img className='rounded-xl sm:m-8' src={Out} alt="about image" />
                </div>
                <div style={{ width: '40vw' }} className="about-content xl:mt-16 sm:text-center sm:w-96 md:p-7 relative">
                    <p className='text-lg font-semibold text-left'>ABOUT US  <div className='inline-block w-16 border-b-4 relative bottom-1 left-4 border-pink-500'></div></p>
                    <h2 className='font-semibold lg:text-5xl mt-6 text-3xl text-left'>The Best Holidays Start Here!</h2>
                    <p className='text-justify  mt-6'>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
                    <h4 className='mt-6 text-lg font-bold text-blue-700 text-left'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</h4>
                    <h4 className='lg:mt-2 text-lg font-bold text-blue-700 mt-0 text-left'>Contact us: +91 9007062180</h4>
                    <button className='bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-4 relative -left-52 '>BOOK NOW</button>
                </div>
            </section> */}
      <section
        className="md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-1"
        id="about-main"
      >
        <div className="h-auto m-4">
          <img
            className="rounded-xl xl:p-36 relative xl:left-24 xl:bottom-12"
            src={Out}
            alt="about image"
          />
        </div>
        <div className="h-auto relative xl:top-40 xl:right-8">
          <p className="text-lg font-semibold text-left xl:pl-16 m-4">
            ABOUT US{" "}
            <div className="inline-block w-16 border-b-4 relative bottom-1 left-4 border-pink-500"></div>
          </p>
          <h2 className="font-semibold xl:text-5xl mt-6 text-3xl text-left xl:pl-16 m-4">
            The Best Holidays Start <br />
            Here!
          </h2>
          <p className="text-justify  mt-6 xl:pl-16 xl:pr-16 m-4">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <h4 className="mt-6 text-lg font-bold text-blue-700 text-left xl:pl-16 m-4">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </h4>
          <h4 className="lg:mt-2 text-lg font-bold text-blue-700 mt-0 text-left xl:pl-16 m-4">
            Contact us: +91 9007062180
          </h4>
          <button className="bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-4 relative xl:left-16 m-4">
            BOOK NOW
          </button>
        </div>
      </section>

      {/* <section className='rooms-cont mb-48 mt-12' id="Rooms">
                <div className='rooms-content inline-block'>
                    <p className='font-semibold tracking-widest relative left-44'>OUR LIVING ROOM <div className='w-16 border-b-2 border-pink-500 inline-block align-middle '></div></p>
                    <h2 className='font-bold text-4xl relative left-44 leading-snug'><span>The Most Memorable Rest <br /> Time Starts Here.</span></h2>
                </div>
                <div className='xl:grid xl:grid-cols-3 gap-8 relative  mt-10'>
                    <div className='md:w-auto pb-20 mt-6 relative xl:left-40'>
                        <div>
                            <img className='rounded-t-xl' src={Small} alt="" />
                        </div>
                        <div className='shadow-xl'>
                            <h4 className='font-semibold text-xl ml-4'>Cozy Haven Room</h4>
                            <p className='p-6 text-lg font-normal text-gray-500 text-opacity-80'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
                                <br />Starting from <span className='font-semibold text-black'>Rs. 1000/night</span></p>
                            <div className='p-1 pl-6 relative bottom-4'>
                                <button className='bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-4  -left-52 '>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-auto pb-20 mt-6  relative'>
                        <div>
                            <img className='rounded-t-xl' src={large} alt="" />
                        </div>
                        <div className='shadow-xl'>
                            <h4 className='font-semibold text-xl ml-4'>Spacious Serenity Suite</h4>
                            <p className='md:p-3 text-lg font-normal text-gray-500 text-opacity-80'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
                                <br />Starting from <span className='font-semibold text-black'>Rs. 1500/night</span></p>
                            <div className='p-1 pl-6 relative bottom-4'>
                                <button className='bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-4  -left-52 '>BOOK NOW</button>
                            </div>

                        </div>
                    </div>
                </div>

            </section> */}

      <section className="rooms-cont" id="Rooms">
        <div className="rooms-content inline-block ">
          <div className="relative xl:-ml-0">
            <p className="font-semibold tracking-widest relative xl:left-44 pl-4">
              OUR LIVING ROOM{" "}
              <div className="w-16 border-b-2 border-pink-500 inline-block align-middle "></div>
            </p>
          </div>
          <div className="relative  mt-3">
            <h2 className="font-bold text-4xl relative xl:left-40 leading-snug pl-4 ">
              <div className="w-auto">
                The Most Memorable Rest <div>Time Starts Here.</div>
              </div>
            </h2>
          </div>
        </div>
        <div className="xl:grid xl:grid-cols-3 gap-8 sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 xl:ml-32">
          <div className="h-auto xl:p-8 mt-8 ">
            <div className="m-4">
              <img className="rounded-t-xl" src={Small} alt="" />
            </div>
            <div className="shadow-xl bg-white m-4">
              <h4 className="font-semibold text-xl ml-4">Cozy Haven Room</h4>
              <p className="p-4 text-lg font-normal text-gray-500 text-opacity-80 -mt-3 sm:ml-4 xl:ml-0">
                Escape to comfort in our Cozy Haven Room, a snug retreat
                designed for intimate relaxation.
              </p>
              <p className="p-4 text-lg font-normal text-gray-500 text-opacity-80 -mt-4">
                Starting from{" "}
                <span className="font-semibold text-black">Rs. 1000/night</span>
              </p>
              <div className="p-1 pl-6 relative bottom-4 -ml-2">
                <button className="bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-7  -left-52 ">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          <div className="h-auto xl:p-8 relative xl:-left-24 mt-8">
            <div className="m-4">
              <img className="rounded-t-xl" src={large} alt="" />
            </div>
            <div className="shadow-xl bg-white m-4">
              <h4 className="font-semibold text-xl ml-4">
                Spacious Serenity Suite
              </h4>
              <p className="md:p-3 text-lg font-normal text-gray-500 text-opacity-80 ml-4 xl:ml-0">
                Indulge in luxury and ample space in our Spacious Serenity
                Suite, where tranquility meets roomy elegance.
              </p>
              <p className="p-4 text-lg font-normal text-gray-500 text-opacity-80">
                Starting from{" "}
                <span className="font-semibold text-black">Rs. 1000/night</span>
              </p>
              <div className="p-1 pl-6 relative bottom-4 -ml-2">
                <button className="bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-2  -left-52 ">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          {/* <div className='h-96'></div> */}
        </div>
      </section>

      {/* <section className='services-cont bg-slate-800 mt-20 mb-8' id='Services'>
                <div className='grid grid-cols-2 gap-6'>
                    <div></div>

                    <div className='service-inner-cont bg-orange-300 md:mr-12 inline-block md:w-96 md:relative md:right-8'>
                        <span><p className='font-semibold tracking-widest relative left-16 top-10 inline-block'>SERVICES <div className='w-16 border-b-4 border-pink-500 inline-block align-middle'></div></p></span>
                        <h1 className='text-4xl font-bold relative top-12 left-16 inline-block'>Strive Only For The <br />Best.</h1>
                        <div className='relative top-20 left-16 inline-block'>

                            <span className='mt-10 flex font-semibold text-xl opacity-80 ml-2 '><MdOutlineSecurity style={{ marginRight: '10px', fontSize: '30px' }} />High Class Security</span>


                            <span className='mt-10 flex font-semibold text-xl opacity-80 ml-2'><Ri24HoursLine style={{ marginRight: '10px', fontSize: '30px' }} />24 Hours Room Service</span>


                            <span className='mt-10 flex font-semibold text-xl opacity-80 ml-2'><IoMdRestaurant style={{ marginRight: '10px', fontSize: '30px' }} />Restaurant</span>


                            <span className='mt-10 flex font-semibold text-xl opacity-80 ml-2'><HiOutlineMap style={{ marginRight: '10px', fontSize: '30px' }} />Tourist Guide Support</span>

                        </div>
                    </div>
                </div>

            </section> */}

      <section id="Services" className="service-cont w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div className="relative hidden sm:block"></div>

          {/* Right Side */}
          <div className="bg-white relative xl:mr-36 md:mr-4 md:mb-8 lg:mb-0">
            <div className="py-8 sm:py-16 flex justify-center sm:justify-start">
              <div className="relative max-w-xl md:ml-8 md:m-auto">
                {/* Title */}
                <p className="font-semibold text-lg text-black lg:relative lg:-top-6 lg:left-20">
                  SERVICES{" "}
                  <span className="inline-block w-16 h-1 bg-pink-500 relative -top-1"></span>
                </p>

                <h2 className="font-semibold text-3xl lg:text-4xl  text-black lg:relative  lg:left-20">
                  Strive Only For The <br className="hidden sm:block" />
                  Best.
                </h2>

                {/* Services List */}
                <ul className="text-black mt-6 space-y-4 lg:relative lg:left-12">
                  <li className="font-semibold text-lg flex items-center text-black">
                    <span className="p-2 bg-blue-100 rounded-full mr-4 text-blue-400 text-xl">
                      <i className="ri-shield-star-line"></i>
                    </span>
                    High Class Security
                  </li>
                  <li className="font-semibold text-lg flex items-center text-black">
                    <span className="p-2 bg-pink-100 rounded-full mr-4 text-pink-400 text-xl">
                      <i className="ri-24-hours-line"></i>
                    </span>
                    24 Hours Room Service
                  </li>
                  <li className="font-semibold text-lg flex items-center text-black">
                    <span className="p-2 bg-violet-100 rounded-full mr-4 text-violet-400 text-xl">
                      <i className="ri-restaurant-2-fill"></i>
                    </span>
                    Restaurant
                  </li>
                  <li className="font-semibold text-lg flex items-center text-black">
                    <span className="p-2 bg-red-100 rounded-full mr-4 text-red-400 text-xl">
                      <i className="ri-map-2-line"></i>
                    </span>
                    Tourist Guide Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-20 "></div>
      <section className="booking-cont h-auto bg-white flex justify-center">
        <div className="booking-form h-auto relative bg-white rounded-lg shadow-2xl drop-shadow-[8px_0_10px_rgba(0.1,0.1,0.1,0.1)] ml-4 mr-4">
          <div className="flex justify-around py-12 flex-wrap">
            <div>
              <CountUp
                start={0}
                end={100}
                enableScrollSpy
                className="font-semibold text-4xl ml-11"
              />
              <span className="font-semibold text-4xl">+</span>
              <p className="text-lg">Bookings Completed</p>
            </div>
            <div>
              <CountUp
                start={0}
                end={150}
                enableScrollSpy
                className="font-semibold text-4xl ml-10"
              />
              <span className="font-semibold text-4xl">+</span>
              <p className="text-lg ">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-20 "></div>

      <section id="Gallery">
        <div className="relative xl:-ml-0">
          <p className="font-semibold tracking-widest relative text-center">
            GALLERY{" "}
            <div className="w-16 border-b-2 border-pink-500 inline-block align-middle "></div>
          </p>
        </div>
        <div class="grid grid-cols-4 gap-2 p-4 items-start">
          <img
            src={Out}
            class="col-span-1 row-span-2 object-cover w-full h-full"
          />

          <img src={Ayodhya} class="col-span-1 object-cover w-full h-full" />
          <img src={Small} class="col-span-1 object-cover w-full h-full" />
          <img src={large} class="col-span-1 object-cover w-full h-full" />
          <img
            src="https://media.istockphoto.com/id/1464591970/photo/modern-luxury-riad-living-room-garden-and-swimming-pool-in-courtyard-morocco-style.jpg?s=2048x2048&w=is&k=20&c=EVm4osXVu5CQ574l7yNbTCkjD89yVy8AfFHb3Hcghts="
            class="col-span-1 object-cover w-full h-full"
          />
          <img src={Baranti} class="col-span-1 object-cover w-full h-full" />
          <img src={Service} class="col-span-1 object-cover w-full h-full" />
        </div>
      </section>
      <section className="Contact-form min-h-screen"id="Contact-Us">
        <div className="relative lg:mt-20 m-auto lg:ml-36 flex flex-col lg:flex-row items-center lg:items-start justify-center  lg:gap-0 lg:bg-white  bg-[#e82574]">
          {/* Main form item */}
          <div className="form-item w-[90%] lg:w-[60vw] bg-white m-auto mt-4 lg:mt-0 shadow-[0_20px_40px_rgba(0,0,0,0.40)] rounded-3xl py-6 min-h-[70vh]">
            <div className="flex justify-center mt-8 lg:mr-64">
              <h3 className="text-[#e82574] lg:text-[1.5vw] text-[5vw] font-semibold" >
                Send a Message
              </h3>
            </div>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
              noValidate
              autoComplete="off"
               className="px-6 lg:ml-60 lg:mt-8"
            >
              <div>
                <TextField
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </div>

              <div className="mt-4">
                <TextField
                  id="standard-basic"
                  label="Email Address"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Mobile Number"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Write your message here..."
                  variant="standard"
                  multiline
                  rows={2} // optional: agar textarea jaisa chahiye
                />
              </div>
              <br />
              <button className="bg-pink-600 w-full lg:w-36 h-12 text-white rounded-3xl text-lg mt-4 align-middle">
                Send
              </button>
            </Box>
          </div>

          {/* Side box */}
          <div className="form-item lg:rounded-3xl bg-[#e82574] lg:absolute lg:bottom-8 lg:left-20 h-[50vh] w-[90%] lg:h-[90%] lg:w-1/4 flex">
            {/*   <div className="flex justify-center lg:mt-12 lg:mr-32">
              <h3 className="lg:text-[1.5vw] text-[7vw] font-semibold ">
                Contact Info
              </h3>
            </div>
            <IoLocationSharp className="text-3xl text-white mt-3" />
            <CgMail/> */}
            <div className="mx-10 my-10 ">
              <h3 className="lg:text-[1.5vw] text-[7vw] font-semibold ">
                Contact Info
              </h3>
              <div className="mx-5 my-5 flex">
                <div>
                  <IoLocationSharp className="text-3xl text-white lg:mt-5 mt-5 md:mt-0" />
                </div>
                <div>
                  <p className="text-white ml-4">
                    Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                    723156
                  </p>
                </div>
              </div>
              <div className="mx-5 my-5 flex">
                <div>
                  <a href="mailto: kkghosh0099@gmail.com">
                    {" "}
                    <CgMail className="text-3xl text-white mt-3" />{" "}
                  </a>
                </div>
                <div>
                  <p className="text-white ml-4 mt-3">
                    <a href="mailto: kkghosh0099@gmail.com">
                      kkghosh0099@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="mx-5 my-5 flex">
                <div>
                  <a href="tell:9007062180">
                    {" "}
                    <BiSolidPhoneCall className="text-3xl text-white " />
                  </a>
                </div>
                <div>
                  <p className="text-white ml-4">
                    <a href="tell:9007062180"> +91 9007062180</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      <section className="Location mt-4 lg:mt-0">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017366468987!2d86.85491947500921!3d23.58633232407507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1754199903859!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "50vh" }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <footer className="bg-black pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 text-center">
          <div className="bg-black" style={{ width: "100%", height: "100%" }}>
            <h3 className="text-lg font-semibold p-8 lg:pt-20">
              Kingsukh Guest House
            </h3>
            <p className="text-zinc-500 text-start w-96 lg:w-96 lg:pl-24 pl-12 font-semibold text-lg pr-3">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <div className="text-center lg:pr-10 pb-4">
              <button className="bg-pink-600 w-36 h-12 text-emerald-50 rounded-lg text-lg mt-4">
                BOOK NOW
              </button>
            </div>
          </div>
          <div className="bg-black" style={{ width: "100%", height: "100%" }}>
            <h3 className="text-lg font-semibold uppercase p-8 lg:pt-20">
              Quick Links
            </h3>
            <ul className="lg:text-start lg:pl-24 text-center pb-6">
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Browse Destinations
                </li>
              </a>
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Special Offers & Packages
                </li>
              </a>
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Room Types & Amenities
                </li>
              </a>
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Customer Reviews & Ratings
                </li>
              </a>
            </ul>
          </div>
          <div className="bg-black" style={{ width: "100%", height: "100%" }}>
            <h3 className="text-lg font-semibold uppercase p-8 lg:pt-20">
              Our Services
            </h3>
            <ul className="lg:text-start lg:pl-24 text-center pb-6">
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Concierge Assistance
                </li>
              </a>
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Flexible Booking Options
                </li>
              </a>
              <a href="#">
                <li className="footer-list text-zinc-500">Airport Transfers</li>
              </a>
              <a href="#">
                <li className="footer-list text-zinc-500">
                  Wellness & Recreation
                </li>
              </a>
            </ul>
          </div>
          <div className="bg-black" style={{ width: "100%", height: "100%" }}>
            <h3 className="text-lg font-semibold uppercase p-8 lg:pt-20">
              Contact Us
            </h3>
            <address className="text-zinc-500 lg:text-justify lg:w-64 lg:ml-20 text-lg font-semibold">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </address>
            <br />
            <p className="footer-list text-zinc-500 text-center lg:pr-24 text-lg font-semibold">
              abc@gmail.com
            </p>
            <p className="footer-list text-zinc-500 text-center lg:pr-28 text-lg font-semibold">
              +919191919191
            </p>
          </div>
        </div>
        <p
          className="text-zinc-500 text-center p-2 pt-24 "
          style={{ width: "100%" }}
        >
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </p>
      </footer>
    </>
  );
};
