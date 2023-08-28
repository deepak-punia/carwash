import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { OrbitControls, ScrollControls, Stage, PerspectiveCamera, Text, Scroll, useScroll } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { MdOutlineCleanHands, MdOutlineDoNotTouch, MdOutlineSanitizer } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail, AiOutlinePushpin } from "react-icons/ai"
import { TfiShine } from "react-icons/tfi";
import { TbPerfume } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
const Section1 = () => {
    const scroll = useScroll()
    const tls = useRef();

    const [op1, setop1] = useState(1);
    const [op11, setop11] = useState(1);
    const [op2, setop2] = useState(1);
    const [op21, setop21] = useState(1);
    const [op3, setop3] = useState(1);
    const [op31, setop31] = useState(1);
    const [op4, setop4] = useState(1);
    useFrame(() => {
        // data.offset = current scroll position, between 0 and 1, dampened
        // data.delta = current delta, between 0 and 1, dampened
        //tls.current.seek(scroll.offset * tls.current.duration())
        setop1(1 - scroll.range(0, 1 / 4))
        setop11(1 - scroll.range(0, 1 / 10))
        setop2(scroll.curve(1 / 7, 3 / 7))
        setop21(scroll.curve(1 / 7, 2 / 7))
        setop3(scroll.curve(2 / 5, 3 / 6))
        setop4(scroll.curve(6 / 8, 5 / 6))

    })


    return (
        <div>
            <div className="section1" >

                <div id="sec1" style={{ opacity: op1 }} className=' flex flex-col items-center justify-center pb-56 mb-16 lg:pb-96 mb-16' >

                    <div class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-8xl dark:text-white">Keeping Your Car New!</div>

                    <p class=" first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Sparkling Cars, Happy Lives! Your Trusted Car Wash Service.</p>
                </div>

                <div className='section1_features' style={{ opacity: op11 }}>
                    <div className='feature_1'>
                        <div className='feature_left'><TfiShine /></div>
                        <div className='feature_right'>
                            <div className='feature_title'>Heightened Care</div>
                            <div className='feature_text'>Our state-of-the-art equipment provides a thorough yet delicate cleaning process.</div>
                        </div>
                    </div>
                    <div className='feature_1'>
                        <div className='feature_left'><MdOutlineCleanHands /></div>
                        <div className='feature_right'>
                            <div className='feature_title'>Natural Cleaners</div>
                            <div className='feature_text'>We only use natural, eco-friendly cleaning solutions that are both safe for the environment and gentle on your car. </div>
                        </div>
                    </div>

                    <div className='feature_1'>
                        <div className='feature_left'><TbPerfume /></div>
                        <div className='feature_right'>
                            <div className='feature_title'>Aromatization</div>
                            <div className='feature_text'>Choose from a range of pleasing scents to invigorate your car's interior. </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="#section2" className="section2" >
                <div id="sec2" style={{ opacity: op2 }} className=' flex flex-col items-end justify-center pe-5' >

                    <div class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl dark:text-white">MODERN EQUIPMENT</div>

                    <p class=" first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">State-of-the-art car wash equipment to ensure your vehicle gets the gentle yet efficient clean it deserves. </p>
                </div>

                <div className='section2_features' style={{ opacity: op21 }}>
                    <div className='feature_2'>
                        <div className='feature2_left'><MdOutlineDoNotTouch /></div>
                        <div className='feature2_right'>
                            Contactless Washing

                        </div>
                    </div>
                    <div className='feature_2'>
                        <div className='feature2_left'><FiSun /></div>
                        <div className='feature2_right'>
                            UV Sanitization

                        </div>
                    </div>

                    <div className='feature_2'>
                        <div className='feature2_left'><MdOutlineSanitizer /></div>
                        <div className='feature2_right'>
                            Precision Cleaning

                        </div>
                    </div>

                </div>
            </div>

            <div className="section3" style={{ opacity: op3 }}>
                <div id="sec1" className=' flex flex-col items-start justify-center ps-5' >

                    <div class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl dark:text-white">Premium Service</div>

                    <p class=" first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From basic washes to full-service detailing, we offer a variety of packages tailored to fit your needs and budget.</p>
                </div>

                <div className='section3_features' style={{ opacity: op31 }}>
                    <div className='feature_3'>
                        <div className='feature3_left'><div className='price_lable'>$25/</div><div className='price_length'>month</div></div>
                        <div className='feature3_right'>
                            Plan 1

                        </div>
                    </div>
                    <div className='feature_3'>
                        <div className='feature3_left'><div className='price_lable'>$35/</div><div className='price_length'>month</div></div>
                        <div className='feature3_right'>
                            Plan 2

                        </div>
                    </div>

                    <div className='feature_3'>
                        <div className='feature3_left'><div className='price_lable'>$45/</div><div className='price_length'>month</div></div>
                        <div className='feature3_right'>
                            Plan 3

                        </div>
                    </div>

                </div>
            </div>
            <div className="section4" style={{ opacity: op4 }}>
                <div id="sec1" className=' contactus flex flex-col items-center justify-center  pt-96 mt-16' >

                    <div class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl dark:text-white">Contact Us</div>

                    <p class=" first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Have questions or want to book an appointment? We'd love to hear from you!</p>
                    <div className='contact_us flex items-end justify-end gap-10'>
                        <p class="flex items-center justify-center gap-1 first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"><AiOutlinePhone /><span>123 456 7890</span></p>
                        <p class="flex items-center justify-center gap-1 first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"><AiOutlineMail /><span>email@email.com</span></p>
                        <p class="flex items-center justify-center gap-1 first max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"><AiOutlinePushpin /><span>123 street, ON, Canafa, L6Y 123</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1