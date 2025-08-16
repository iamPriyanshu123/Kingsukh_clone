import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
import '../styles/Menubar.css'
import 'animate.css';
export const Menubar = () => {
    const [open, isOpen] = useState(false);
    return (
        <>
            <div className='block container h-20 '>
                <div className='menu-cont'>
                    <div className='relative left-14 -top-2'>
                        <p className='text-white font-semibold'>Kingsukh <br />Guest House</p>
                    </div>
                    <div className='relative'>
                        <button style={{ color: 'white', fontSize: '25px' }}>{!open ? <IoMenu onClick={() => { isOpen(!open); console.log('menu') }} /> : <MdCancelPresentation onClick={() => { isOpen(!open); console.log('cancel') }} />}</button>
                        {(open) && <div className='animate__animated animate__slideInDown' style={{backgroundColor:'#E82574',color:'white',width:'100vw',position:'absolute',right:'-32px',top:'45px',display:'flex',justifyContent:'center',zIndex:'1',opacity:'0.9'}}>
                             <div>
                                <ul className='mt-12 mb-12 text-center'>
                                    <a href="#main-head"><li className='mt-6'>Home</li></a>
                                   <a href="#about-main"> <li className='mt-6'>About</li></a>
                                   <a href="#Services"> <li className='mt-6'>Services</li></a>
                                    <a href="#Rooms"><li className='mt-6'>Rooms</li></a>
                                    <a href="#Gallery"><li className='mt-6'>Gallery</li></a>
                                    <li className='mt-6'>Contact</li>
                                </ul>
                             </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}
