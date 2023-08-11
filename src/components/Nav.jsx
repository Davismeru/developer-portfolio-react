import { FaGithub, FaLinkedin } from 'react-icons/fa6'
function Nav() {
  return (
    <div className="border-b-[1px] p-3 flex justify-center items-center gap-5 font-semibold text-gray-700 text-sm md:gap-15">
            <section className='flex gap-5'>
                <p className='flex items-center gap-2'><FaGithub/> Github</p>
                <p className='flex items-center gap-2'><FaLinkedin /> LinkedIn</p>
            </section>
            <p className='bg-green-400 text-white p-1 text-center rounded-sm md:w-24'>Resume</p>
    </div>
  )
}

export default Nav