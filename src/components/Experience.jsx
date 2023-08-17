import { FaCode, FaCss3Alt, FaReact } from 'react-icons/fa6'

function Experience() {
  return (
    <div className='p-3'>
        <div className='flex items-center gap-5 border p-2 rounded-md mb-5 md:justify-center'>
            <section className='w-20 h-20 rounded-lg overflow-hidden md:w-24 md:h-24 md:rounded-full'>
                <img src="images/dave.jpg" alt="" className='object-cover'/>
            </section>
            <h1 className='text-xl font-bold text-cyan-600 md:text-3xl lg:text-4xl'>Skills and Experience</h1>
        </div>

        <div className='text-md md:text-lg md:text-center md:max-w-3xl mx-auto'>
            <p>I'm a Computer Science graduate and also a Front-end developer with 3+ years of experience in coding,  building and developing interactive websites using JavaScript and its frameworks.  I've managed to develop a deep understanding on various concepts such as DOM manipulation, Routing, APIs, State Management (using Redux), JSON, RESTful APIs, version control using Git, Design just to mention few. I also understand on what is expected from me as a front-end developer and I’m always open to learning and gathering new ideas from others who are in the same industry as me.  </p>
        </div>

        <div>
            <h1 className='my-5 text-cyan-600 text-2xl font-semibold text-center'>skills</h1>

            {/* Skill Cards */}
            <div className='flex flex-wrap justify-center gap-5 font-semibold text-gray-600'>
                {/* card */}
                <section className='w-72 shadow-gray-300 shadow-md p-3 flex flex-col items-center'>
                    <FaCode className='text-5xl text-green-600 mb-2'/>
                    <ul className='list-disc'>
                        <li>HTMl 5</li>
                        <li>CSS 3</li>
                        <li>Javascript ES7</li>
                        <li>SASS</li>
                        <li>Version Control (Git)</li>
                        <li>GSAP</li>
                    </ul>
                </section>

                {/* card */}
                <section className='w-72 shadow-gray-300 shadow-md p-3 flex flex-col items-center'>
                    <FaReact className='text-5xl text-green-600 mb-2'/>
                    <ul className='list-disc'>
                        <li>React 18</li>
                        <li>APIs</li>
                        <li>State Management<br/> (React Redux)</li>
                        <li>JSON Servers</li>
                        <li>Error Handling</li>
                        <li>React Libraries</li>
                    </ul>
                </section>

                {/* card */}
                <section className='w-72 shadow-gray-300 shadow-md p-3 flex flex-col items-center'>
                    <FaCss3Alt className='text-5xl text-green-600 mb-2'/>
                    <ul className='list-disc'>
                        <li>CSS 3</li>
                        <li>Tailwind CSS</li>
                        <li>Media Query</li>
                        <li>Mobile Responsiveness</li>
                        <li>Styled Components</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Experience
