import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-[#0a1f23] via-[#071E22] to-[#153f43] text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand & Social */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-32 h-24 drop-shadow-xl">
              <Image
                src="/images/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                className="filter brightness-110"
              />
            </div>
          </div>

          <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base max-w-xs">
            Explore the world with curated experiences, local tips, and
            unbeatable destinations. Start your journey with us today.
          </p>

          <div className="flex space-x-6 text-gray-300">
            {[FaFacebook, FaLinkedin, FaInstagram, FaTwitter].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={`Visit our ${Icon.displayName || "social"} page`}
                  className="p-3 rounded-full bg-gradient-to-tr from-orange-400 via-red-500 to-pink-500 hover:scale-110 hover:shadow-lg transition-transform duration-300 shadow-md"
                >
                  <Icon size={22} className="text-white" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#FF6B6B] tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-300 text-base font-medium cursor-pointer">
            {["Home", "Destinations", "Experiences", "Blog", "Contact"].map(
              (link) => (
                <li
                  key={link}
                  className="relative group before:absolute before:-left-6 before:top-1/2 before:w-4 before:h-1 before:bg-gradient-to-r before:from-orange-400 before:to-red-500 before:rounded-full before:opacity-0 before:translate-x-4 before:-translate-y-1/2 before:transition-all before:duration-300"
                >
                  <a
                    href="#"
                    className="hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    {link}
                  </a>
                  <span className="absolute left-0 top-1/2 w-3 h-1 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 -translate-x-4 -translate-y-1/2 transition-all duration-300"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Travel Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#4ECDC4] tracking-wide uppercase">
            Popular Categories
          </h3>
          <ul className="space-y-4 text-gray-300 text-base font-medium cursor-pointer">
            {[
              "Beach Destinations",
              "Adventure Trips",
              "City Tours",
              "Romantic Getaways",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-[#4ECDC4] transition-colors duration-300"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[#FFD93D] tracking-wide uppercase">
            Contact Us
          </h3>
          <address className="not-italic space-y-5 text-gray-300 text-sm sm:text-base">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#FFD93D]" />
              Assam
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#FFD93D]" />
              +91-XXXXXXXXXX
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#FFD93D]" />
              info@travysys.com
            </p>
          </address>
        </div>
      </div>

      <hr className="my-10 border-gray-700 opacity-30" />

      <div className="text-center text-gray-400 text-sm tracking-wide select-none">
        © {new Date().getFullYear()} Travysys. Crafted with ❤️ by You.
      </div>
    </footer>
  );
}
