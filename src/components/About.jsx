import React from 'react'

function About() {
  return (
    <div className='p-3 flex flex-col items-center text-center'>
        <p className='text-cyan-600 text-2xl font-bold md:text-4xl lg:text-6xl'>React Web Developer</p>
        <p className='text-lg font-semibold text-gray-700 text-center leading-3 md:text-2xl md:leading-5 xl:text-4xl xl:leading-5'><br/>DAVIS MERU<br/> <span className='text-[12px]'>(Bsc Computer Science)</span><br/> </p>
        
        <div className='flex flex-col items-center md:flex-row md:gap-5'>
          {/* Profile picture */}
          <section className='w-full my-10 rounded-md overflow-hidden md:w-[550px]'>
              <img src="images/dev.jpg" alt="profile image" className='w-full h-full object-cover'/>
          </section>
          
          {/* about details */}
          <section className='flex flex-col items-center md:items-start md:text-left'>
            <p className='text-lg leading-8 font-semibold text-gray-500 md:max-w-md md:text-2xl md:leading-10'>I build <span className='text-cyan-600 font-bold'>modern and interactive </span>front-end web applications using <span className='text-cyan-600 font-bold'>React Js</span> and other front-end libraries like <span className='text-cyan-600 font-bold'>TailWInd CSS</span>  </p>
            
            <input type="button" value="Portfolio" className='bg-green-400 text-white p-1 w-24 text-center rounded-sm mt-5 md:text-xl md:p-2 md:w-28'/>
          </section>
        </div>
    </div>
  )
}

export default About