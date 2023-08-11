import { FaGolang, FaGraduationCap, FaMandalorian, FaPersonArrowUpFromLine } from 'react-icons/fa6'

function Education() {
  return (
    <div className='p-3'>
        <div className='flex items-center gap-5 border p-2 rounded-md mb-5 justify-center'>
              <section className='w-20 h-20 rounded-full overflow-hidden flex items-center justify-center border-[1px] text-4xl text-green-800'>
                  <img src="images/nerd.jpg" alt="" className='w-full h-full object-cover'/>
              </section>
              <h1 className='text-xl font-bold text-cyan-600 md:text-3xl lg:text-4xl'>Know the dev</h1>
        </div>

        <div className='md:w-[70%] md:mx-auto'>
          {/* about */}
          <div className='text-lg mb-5'>
            <p className='flex items-center gap-3 font-semibold text-green-600'><FaPersonArrowUpFromLine/> About Davis</p>
            <p>Davis is just your average IT nerd who loves everything to do with computing, learning new stuff, mostly thing related to web development, learning new tech trends and ensuring that I enhance my skills everyday</p>
          </div>

          <div className='text-lg mb-5'>
            <p className='flex items-center gap-3 font-semibold text-green-600'><FaMandalorian/> Goals</p>
            <p>My Goal is to be the best in what I do. To achieve this, I ensure that no day passes without learning something new. Web development is very broad and evolving and I have to ensure that I keep up with the trends so that I can deliver the best</p>
          </div>
          
          {/* blogging */}
          <div className='text-lg mb-5'>
            <p className='flex items-center gap-3 font-semibold text-green-600'><FaGolang/> Blog</p>
            <p>I'm also a blogger where I write articles on different topics related to technology, Artificial Intelligence, Programming and other tech stuff</p>
            <a href="/">View Blog</a>
          </div>

          {/* blogging */}
          <div className='text-lg mb-5'>
            <p className='flex items-center gap-3 font-semibold text-green-600'><FaGraduationCap/> Education</p>
            <p>My intrests and passion in technology and computing led me to pursuing a  Bachelor's Degree in Computer Science course from 2018 and graduated in 2023 at Garissa University, Kenya. Here are my certfications</p>
          </div>
        </div>
    </div>
  )
}

export default Education