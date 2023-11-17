import React from 'react'
import img from '../ASSESETS/eGENCY.png'
import bike from '../ASSESETS/bike.png'
import { FaBars } from 'react-icons/fa';

function Home() {
    const x = "michael";
  return (
<header>
    <section className="flex justify-between items-center p-5">
       <img src={img} alt="" />

    <div className='flex gap-4 font-semibold pointer abu'>
        <a href="">About</a>
        <a href="">Product</a>
        <a href="">Contact</a>
        <a href="">Help</a>
    </div>
 

       <div className='flex gap-3 mr-4 jb'>
           <p className='p-0.5 sign font-semibold'>Sign in</p>
           <button className='text-white p-1 rounded-t rounded-b font-semibold'>Sign up</button>
        </div>

        <button className='bars block md:hidden sm:block' >
        <FaBars/>
    </button>
    </section>

   


    <section className='grid grid-cols-2 items-center jxx'>
        <img src={bike} alt="" />
        <div>
            <h1 className='text-5xl font-bold we '>We scratch, build<br/> and play together</h1>
            <div className='pt-4'>
            <p className=' lorem  font-semibold text-lg scra'>We want you to enjoy your travels.
                This is why</p>
            <p className=' lorem  font-semibold text-lg scra'>we don't change any
                fees on purchase while</p>
            <p className=' lorem  font-semibold text-lg scra'>you're
                abroad. We'll even show you...</p>
            </div>
            
        <button className='button border-2 butt mt-10 text-white p-2 font-bold rounded-t rounded-b'>Contact us</button>
        </div>
    </section>
</header> 
 )
}

export default Home;
