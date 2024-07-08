// import Footer from './components/Footer'
import Link from './components/Link'
import SmoothScrollbar from './components/SmoothScroll'
import Button from './components/Button'
import './App.css'
import React, { useEffect, useState } from 'react';

const App = () => {

  const [isActive, setIsActive] = useState(false);

  const handleNav = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    document.querySelectorAll(".elem").forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;

      elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector(".elem img"), {
          opacity: 0,
          // ease: "power4",
        });
      });

      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector(".elem img"), {
          opacity: 1,
          ease: "power4",
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
    });
  }, []);



  return (

    <SmoothScrollbar>

      {/* Navbar */}
      < header id='Nav' className={`max-w-[1700px] m-auto px-4 top-0 pt-6 flex items-center justify-between z-10 text-white w-full py-2 ${isActive ? 'active' : ''}`} >
        <div className="logo cursor-pointer">
          <a className='text-3xl'>Ali Shakeel</a>
        </div>
        <div className="navButtons text-2xl flex gap-6 cursor-pointer">
          <Link val="Resume" href="./Ali Shakeel CV.pdf" />
          <Link val="About" href='#about' />
          <Link val="Work" />
        </div>
      </ header>

      <i id='burgerIcon' className='bx bx-down-arrow-alt' onClick={handleNav}></i>

      {/* Hero */}
      <div id='heroContent' className="max-w-[1700px] max-[1000px]:flex pb-[3em] m-auto px-4 h-[90vh] w-full" >
        <div>
          <h1 data-cursor-text="I'm Ali" className='leading-[.9] relative text-[15vw]'>Web-App <br /> Developer</h1>
        </div>
        <div className='top-[-1.7em] max-[1550px]:top-[-0.9em] text-2xl relative leading-normal'>
          <p >specialized in web development, seo, i build impressive & funtional web applications.</p>
        </div>
      </ div>

      {/* About */}
      <div id="about" className='max-w-[1700px] px-4 m-auto w-full h-fit flex' >
        <div className="aboutContent w-[85%] py-[6em] max-[1000px]:w-full "  >
          <h2 className='text-4xl leading-normal mb-[2rem] max-w-[75rem] max-[650px]:text-2xl'>
            This is Ali, An enthusiastic developer transitioning from seo to web development, currently learing mern stack and building innovative web applications. I continuously enhance my skills by building projects and taking courses to stay ahead.
          </h2>
          <Button href="mailto:muhammadalishakeel66@gmail.com" btnVal='Drop me a line' />
        </div>
        <div className='w-[15%] max-[1000px]:hidden h-full flex flex-col items-start justify-start text-2xl gap-4 pt-[6rem]'>
          <div className='opacity-20'>
            <p>Let's get connected</p>
          </div>
          <hr className='border-gray-800 w-full' />
          <div className='flex flex-col gap-4'>
            <Link val="Github" target="_blank" href="https://github.com/ali-shakeel-dev" />
            <Link val="Linkedin" target="_blank" href="https://www.linkedin.com/in/muhammad-ali-shakeel/" />
            <Link val="Twitter" target="_blank" href="https://twitter.com/alishakeel_____" />
          </div>
        </div>
      </ div>

      {/* What I do */}
      <div div class="max-w-[1700px] py-[6em] px-4 m-auto flex flex-col" >
        <h2 className="text-7xl mb-10 max-[800px]:text-5xl">I can help you with...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-4 pt-4 md:px-0 max-[800px]:px-2 max-[800px]:gap-6">
          <div class="flex flex-col justify-center px-10 max-[800px]:px-5 border-l border-gray-800">
            <div className="text-6xl opacity-20 mb-10">01</div>
            <h2 className="text-4xl mb-2">Development</h2>
            <p className='text-2xl'>I make impressive & functional web applications that create the user experience you want.</p>
          </div>
          <div class="flex flex-col justify-center px-10 max-[800px]:px-5  border-l border-gray-800">
            <div class="text-6xl opacity-20 mb-10">02</div>
            <h2 class="text-4xl mb-2">SEO</h2>
            <p className='text-2xl'>I do search engine optimization to bring your business to its full potential through organic traffic sources.</p>
          </div>
          <div class="flex flex-col justify-center px-10 max-[800px]:px-5 border-l border-gray-800">
            <div class="text-6xl opacity-20 mb-10">03</div>
            <h2 class="text-4xl mb-2">The Full Package</h2>
            <p className='text-2xl'>Get the best of both worlds for your website, capture your brand identity and get fully functional features.</p>
          </div>
        </div>
      </div >

      {/* Portfolio */}
      <div id="second" className='max-w-[1700px] px-4 m-auto py-[6em]'>
        <h2 className='text-7xl max-[800px]:text-5xl py-10'>Latest Projects...</h2>
        <div className="elem border-t border-gray-800 py-20">
          <img src="./Mind Map.png" alt="" />
          <h2 className='text-4xl'>Mind Map</h2>
          <h5>2024</h5>
        </div>
        <div className="elem border-t border-gray-800 py-20">
          <img src="./Hyphan.png" alt="" />
          <h2 className='text-4xl'>Hyphan</h2>
          <h5>2024</h5>
        </div>
        <div className="elem elemlast border-t border-gray-800 py-20">
          <img src="./saas.png" alt="" />
          <h2 className='text-4xl'>Page Clone</h2>
          <h5>2024</h5>
        </div>
        <div className="elem elemlast border-t border-gray-800 py-20">
          <img src="./Extension.png" alt="" />
          <h2 className='text-4xl'>Extension</h2>
          <h5>2024</h5>
        </div>
        {/* <h1 className='text-4xl py-10'>Wanna see more?</h1>
        <div className='text-2xl'>
          <Link val="React out to me" />
        </div> */}

      </div>

      {/* CTA */}
      <div className="aboutContent max-w-[1700px] px-4 py-[6em] m-auto flex items-center justify-between max-[1420px]:items-start max-[1420px]:flex-col" >

        <div className="ctaContent flex relative">
          <img src="./favicon.png" alt="Ali Shakeel | Web Developer" className='w-[5rem] object-cover absolute ' />
          <h2 className='text-7xl max-[800px]:text-5xl max-[800px]:w-full max-[800px]:flex max-[800px]:flex-col leading-normal w-[65rem] indent-24'>
            Let’s talk about a project, collaboration or an idea you may have.
          </h2>
        </div>
        <div className="ctaButton flex items-end w-[20%] h-full">
          <Button href="mailto:muhammadalishakeel66@gmail.com" btnVal='Drop me a line' />
        </div>
      </div>

      {/* Footer */}
      <hr className='border-gray-800 max-w-[1700px] m-auto' />
      <div className='max-w-[1700px] max-[1000px]:flex-col max-[1000px]:gap-4 max-[1700px]:text-center px-4 m-auto py-10 flex items-center justify-between text-2xl '>
        <div>
          <p>© 2024 - All Rights Reserved. Design & Coded with ❤️️</p>
        </div>
        <div className='socialItems flex gap-5'>
          <Link val="Github" target="_blank" href="https://github.com/ali-shakeel-dev" />
          <Link val="Linkedin" target="_blank" href="https://www.linkedin.com/in/muhammad-ali-shakeel/" />
          <Link val="Twitter" target="_blank" href="https://twitter.com/alishakeel_____" />
        </div>
      </div>

      {/* <Footer /> */}
    </SmoothScrollbar >
  )
}

export default App