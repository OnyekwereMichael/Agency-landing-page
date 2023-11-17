import React from 'react';
import img from '../ASSESETS/eGENCY.png'
import visa from '../ASSESETS/Group 672.png'
import kuda from '../ASSESETS/Group 673.png'
import paypal from '../ASSESETS/Group 674.png'
import master from '../ASSESETS/Group 675.png'
import strip from '../ASSESETS/Group 676.png'
import union from '../ASSESETS/Group 677.png'
import first from '../ASSESETS/Group 678.png'
import line from "../ASSESETS/line.png"
import through from "../ASSESETS/through.png"
import circle from "../ASSESETS/circle.png"
function Footer() {
  return (
    <footer className='backg relative mt-12'>
     
       
       <section className='w-16 m-0 absolute left-96 pl-3 line'>
    <img src={line} alt="" />
    </section>
   
   
        <section className='flex justify-between items-center p-10 mt-2 foo gap-3 '>
     <div className='elit'>
        <img src={img} alt="" />
        <p className='mt-5 why'>Lorem ipsum dolor sit amet consectetur <br/>adipisicing  elit. Fugiat voluptas animi<br/> reprehenderit,Lorem ipsum dolor sit <br/>amet consectetur adipisicing elit.</p>
    </div>


    <div className='mike'>
    <p className='font-bold'>Pages</p>
    <ul className='mt-3'>
        <li>Template</li>
        <li>Price</li>
        <li>Template</li>
        <li>Template</li>
    </ul>
    </div>

    <div className='-mt-5 hg'>
        <p className='font-bold'>Demos</p>
        <ul className='mt-3'>
        <li>Dark theme</li>
        <li>Light theme</li>
        <li>Classic theme</li>
      
    </ul>
    </div>

    <div className='-mt-12 hj'>
    <p className='font-bold'>Resources</p>
    <ul className='mt-3 '>
        <li>Documentatiion</li>
    </ul>
    </div>
    </section>
     
   
     <section className='flex justify-end items-center gap-6 pl-6 pr-6 font-bold'>
        <span>Newyork</span>
        <span>Dubia</span>
        <span>Dhaka</span>
        <span>Mumbai</span>
        <span>Sydney</span>
     </section>
     <hr className='border-black mt-3'/>

     <section className='flex justify-between'>
       <div className='w-12 m-0'>
    <img src={through} alt="" />
    </div>
     
       <div className='w-12 m-0'>
    <img src={circle} alt="" />
    </div>
     </section>

     <section className='flex justify-center gap-4 pay'>
        <div>
           <span><img src={visa} alt="" /></span>
        </div>
        <div>
        <span><img src={kuda} alt="" /></span>
        </div>
        <div>
        <span><img src={paypal} alt="" /></span>
        </div>
        <div>
        <span><img src={master} alt="" /></span>
        </div>
        <div>
        <span><img src={strip} alt="" /></span>
        </div>
        <div>
        <span><img src={union} alt="" /></span>
        </div>
        <div>
        <span><img src={first} alt="" /></span>
        </div>
     </section>

     <section className='flex justify-between items-center p-7'>
      <p className='font-semibold'>@ 2019-2020 All right reserved</p>
      <p className='font-semibold'>Terms of services</p>
     </section>

    
    </footer>
  )
}

export default Footer;

