"use client";
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import Experience from './components/Experience'
import { AiOutlinePhone } from "react-icons/ai";
import Plx from "react-plx";
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { AiOutlineCar } from "react-icons/ai";

export default function Home() {

  


  return (
    <>

      <main className='main_container px-5 '>


        <div className='text_container'>
          <nav>
            <div class="nav_container">
              <div className='flex flex-1 items-center justify-between'>
                <h1 className='logo '><AiOutlineCar /><span>Car Wash</span></h1>
                <h1>
                  <a href="Tel:1234567890" className='menu_link flex flex-1 items-center '><div>+1 789 456 1234</div> <div><AiOutlinePhone /></div></a>
                </h1>
              </div>

              {/* <div class="popover" id="menu">
                <div class='content'>
                  <a href="#" class="close"></a>
                  <div class='nav'>
                    <ul class='nav_list'>

                      <div class='nav_list_item'>
                        <li><a href="#">Home</a></li>
                      </div>
                      <div class='nav_list_item'>
                        <li><a href="#" onClick={scroll}>About</a></li>
                      </div>
                      <div class='nav_list_item'>
                        <li><a href="#">Products</a></li>
                      </div>
                      <div class='nav_list_item'>
                        <li><a href="#">Services</a></li>
                      </div>
                      <div class='nav_list_item'>
                        <li><a href="#">Contact</a></li>
                      </div>

                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </nav>




        </div>
        <div className='canvas_container'>
          <Canvas>
            <Experience />
          </Canvas>
        </div>
      </main>
    </>
  )
}
