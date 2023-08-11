import { FaGithub, FaLinkedin, FaMailchimp, FaMobileRetro, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'

function Contacts() {
  return (
    <div className='flex flex-col items-center px-3'>
        <div className='flex items-center gap-5 border p-2 rounded-md mb-5 justify-center w-full'>
            <section className='w-16 h-16 rounded-full overflow-hidden flex items-center justify-center border-[1px] text-4xl text-green-800'>
                <FaPhone/>
            </section>
            <h1 className='text-xl font-bold text-cyan-600 md:text-3xl lg:text-4xl'>Contact me</h1>
        </div>

        <section className=' md:flex'>
            {/* email form */}
            <div className="container mb-5">
                <form target="_blank" action="https://formsubmit.co/0b891472a1e1accef4306cd0d5ea54bf" method="POST">
                    <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                        <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="col">
                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <textarea placeholder="Your Message" className="form-control outline-none" name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-dark btn-block text-gray-700">Send Message</button>
                </form>
            </div>

            <div className='text-lg text-gray-600 flex flex-col gap-3 bg-green-100 p-3 rounded-md w-full h-full md:ml-5s'>
                <p className='flex items-center gap-3'><FaMobileRetro/> +254717214046</p>
                <p className='flex items-center gap-3'><FaWhatsapp/> +254717214046</p>
                <p className='flex items-center gap-3'><GoMail/> davismeru911@gmail.com</p>
                <a className='flex items-center gap-3 cursor-pointer text-blue-600'><FaGithub/> github link</a>
                <a className='flex items-center gap-3 cursor-pointer text-blue-600'><FaLinkedin/>LinkedIn</a>
            </div>
        </section>
    </div>
  )
}

export default Contacts