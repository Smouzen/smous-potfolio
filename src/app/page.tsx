import Head from 'next/head';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/all';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import deved from '../app/smous.png';



export default function Home() {
  return (
    <main className='bg-white px-10'>
        <section className='min-h-screen'>
        <div>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl'>developed by </h1>
            <ul className='flex items-center'>

              <li><BsFillMoonStarsFill className='cursor-pointer'/></li>
              <li><a className="bg-gradient-to-r from-black px-4 py-2" href='#'>Resume</a></li>
            </ul>
          
        </nav>
        </div>

        <div className='text-center py-10'>


          <h2 className='text-5xl py-2 text-teal-950 font-medium'>Tlotlang Smous</h2>
          <h3 className='text-2xl py-2'>Software developer and Web developer</h3>

          <p className='text-md py-5 leading-8 text-gray-800'>Ra zama zama bafuto</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text'>

        <a href='#'><AiFillGithub/></a>
       
        <a href='#'> <AiFillLinkedin/></a>

        </div>
        <div className="relative mx-auto bg-gradient-to-b from-stone-800 rounded-full w-80 h-80 mt-40 overflow-hidden">
        <Image src={deved} layout="fill" objectFit="cover"/>
       
        </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'> Programming Languages I know  </h3>

              <p className='text-md py-2 leading-8 text-gray-800'>
              Java, Python, Visual Basic .Net, </p>

              <p>Web Development </p>
              <p>HTML, CSS, Javascript, React JS</p>
            
          </div>

          <div></div>

        </section>
     
    </main>
  )
}
