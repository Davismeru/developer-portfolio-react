import {
  FaGithub,
  FaLinkedin,
  FaMobileRetro,
  FaWhatsapp,
} from "react-icons/fa6";
import { GoMail } from "react-icons/go";

function Contacts() {
  return (
    <>
      <div className="section-header">
        <section>
          <img src="images/nerd.jpg" alt="img" />
        </section>
        <h1>Get In Touch</h1>
      </div>
      <div className="contacts">
        {/* email form */}
        <form
          target="_blank"
          action="https://formsubmit.co/0b891472a1e1accef4306cd0d5ea54bf"
          method="POST"
        >
          <h1>Send me an Email</h1>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control outline-none"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-dark btn-block">
            Send Message
          </button>
        </form>

        {/* contact details */}

        <div className="contact-details">
          <h1>Contact Details</h1>
          <p>
            <FaMobileRetro /> +254717214046
          </p>
          <p>
            <FaWhatsapp /> +254717214046
          </p>
          <p>
            <GoMail /> davismeru911@gmail.com
          </p>
          <a
            href="https://github.com/Davismeru"
            target="_blank"
            className="text-blue-400"
          >
            <FaGithub /> Github page
          </a>
          <a
            href="https://www.linkedin.com/in/davis-meru-a5320324a"
            target="_blank"
            className="text-blue-400 decoration-transparent"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

export default Contacts;
