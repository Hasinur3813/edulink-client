import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 dark:text-white text-base-content">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About EduLink</h3>
          <p className="text-sm">
            EduLink is your one-stop solution for collaborative learning and
            group studies. Create, submit, and evaluate assignments seamlessly
            while connecting with peers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/"} className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/assignments"} className="hover:underline">
                Assignments
              </Link>
            </li>
            <li>
              <Link to={"/pending-assignments"} className="hover:underline">
                Pending Assignments
              </Link>
            </li>
            <li>
              <Link to={"/create-assignment"} className="hover:underline">
                Create Assignment
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 mt-8 py-4">
        <p className="text-center text-sm">
          © 2024 EduLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
