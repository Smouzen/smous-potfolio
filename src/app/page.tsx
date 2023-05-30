import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/all";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMessage,
} from "react-icons/ai";
import pict from "./smous.png";
import java from "./java.png";
import vb from "./VB.jpg";
import pytho from "./python.png";
import andriod from "./andrpid.png";
import htmlcss from "./htmlcss.png";
import javasc from "./js.png";
import php from "./php.png";
import phone from "./arduino.png";
import reactpic from "./react.jpg";
/*import { useState} from "react"*/

export default function Home() {
  /*const formRef = useRef()
 const handleSubmit = (e) => {
  e.preventDefault();
 }*/
  /*const [darkMode, setDarkMode] = useState("")*/
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <div>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="px-4 py-2"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  /*onClick={() => setDarkMode(!darkMode) }*/ className="cursor-pointer"
                />
              </li>
              <li>
                <a className="bg-gradient-to-r from-teal px-4 py-2" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center py-10">
          <h2 className="text-5xl py-2 px-10 mt-20  text-teal-600 font-medium md:text-6xl">
            Tlotlang Smous
          </h2>
          <div className="text">
            <div className="text__item">
              <div className="text__item_list">Software developer</div>
              <div className="text__item_list">Web developer</div>
            </div>
          </div>
        </div>

        <section>
          <div>
            <div className="text-5xl flex justify-center gap-16 py-3 text">
              <a href="https://github.com/Smouzen">
                   {" "}
                <AiFillGithub />
              </a>

              <a href="https://www.linkedin.com/in/tlotlang-smous-424564201/">
                {" "}
                <AiFillLinkedin />
              </a>
              <a href="tel:0620070256">
              {" "}

                <AiFillPhone />
              </a>
              <a href="mailto:tlsmous09@yahoo.com">
              {" "}
                <AiFillMessage />
              </a>
            </div>
          </div>
        </section>

        <div className="relative mx-auto bg-gradient-to-b from-stone-800 rounded-full w-80 h-80 mt-40 overflow-hidden md:h-96 md:w-96">
          <Image src={pict} layout="fill" objectFit="cover" alt="" />
        </div>
      </section>
      <section>
        <div className="text-center py-20">
          <h3 className="text-3xl py-1 text-teal-600"> About Me </h3>

          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            I am an ICT graduate from Sol Plaatje University, with fundamental
            knowledge and discipline in{" "}
            <span className="text-teal-500">software </span> and{" "}
            <span className="text-teal-500">
              web design, development, and testing.
            </span>
            I am a diligent and ambition Software and Web developer with 3 years
            of experience in{" "}
            <span className="text-teal-500">Software Development </span> and{" "}
            <span className="text-teal-500">Project Management. </span>I am
            patient and good at time management. I am currently learning{" "}
            <span className="text-teal-500"> Angular </span> and{" "}
            <span className="text-teal-500">Java SpringBoot</span> to enhance my
            software Development Skill. I regard myself as a self-motivated,
            hardworking, and goal-driven individual.
            <br />{" "}
            <span className="text-teal-500">
              I am familiar with the Programming below:{" "}
            </span>
          </p>

          <p></p>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-center text-3xl py-10 text-teal-800 font-medium pt-8 pb-2">
            Software Development
          </h1>
        </div>
        <div className="lg:flex gap-10 ">
          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={java}
              width={"100"}
              height={"100"}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />
            <h3 className="py-4 text-teal-600"> Java</h3>
            <p>Skills</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={pytho}
              width={"100"}
              height={"100"}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />
            <h3 className="py-2 text-teal-600"> Python</h3>
            <p className="text-gray-800 py-1">Skills</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={vb}
              width={"100"}
              height={"100"}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />

            <h3 className="py-4 text-teal-600"> Visual Basic .Net</h3>
            <p>Skills</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={andriod}
              width={100}
              height={100}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />
            <h3 className="py-4 text-teal-600"> Andriod Studio</h3>
            <p>Skills</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl py-2 text-center text-teal-800 font-medium pt-8 pb-2">
            Web Development
          </h1>
        </div>
        <div className="lg:flex gap-10 mt-50">
          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={htmlcss}
              width={100}
              height={100}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />
            <h3 className="py-4 text-teal-600"> HTML & CSS</h3>
            <p>Skills</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={javasc}
              width={100}
              height={100}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />
            <h3 className="py-2 text-teal-600"> JavaScript</h3>
            <p className="text-gray-800 py-1">Skills</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={php}
              width={100}
              height={100}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />

            <h3 className="py-4 text-teal-600"> PhP</h3>
            <p>Skills</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-5 mx-auto">
            <Image
              src={reactpic}
              width={100}
              height={100}
              className="md:h-36 md:w-36 mx-auto"
              alt=""
            />
            <h3 className="py-4 text-teal-600"> React JS</h3>
            <p>Skills</p>
          </div>
        </div>
      </section>
      {/*
          <section>
            <div className='c-bg'>
              <div className='c-wrapper px-50 md:flex'>
                <div className='c-left'>
                  <h1 className='title'> Let's talk about your project</h1>
                  <div className='c-info'>
                  <div className='c-info-item text-center  py-5 rounded-xl my-5 px-0'>
                  <Image className='c-icon px-0' src={phone} width={'30'} height={'30'} alt=""/>
                  062 007 0256 
                  </div>
                  <div className='c-info-item1 text-center  p-10 rounded-xl my-5 px-0'>
                  <Image className='c-icon1 px-0' src={phone} width={'30'} height={'30'} alt=""/>
                  062 007 0256 

                  </div>
                  </div>
                </div>

                <div className='c-right flex:1'>
                  <h1 className='discription__title'> send email daar</h1>
                 <form ref = {formRef} onSubmit={handleSubmit}>

                  <input type='text w:50 h-50 b-none px0 text:1xl text-center' placeholder='Name' name='user_name'/>
                  <input type='text' placeholder='Subject' name='subject'/>
                  <input type='text' placeholder='Email' name='user_email'/>
                  <textarea rows={5} placeholder='Message' name='message'/>
                  <button>Submit</button>
                 </form>

                  </div>
                  </div>
                </div>



            
            

          </section>

        */}
    </main>
  );
}
