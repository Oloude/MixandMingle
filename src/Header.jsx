import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const links = [
  { id: 1, to: "/", icon: FaFacebookSquare },
  { id: 2, to: "/", icon: FaXTwitter },
  {
    id: 3,
    to: "https://www.instagram.com/zigstudios?igsh=Ym1mOG55a2dxM2Z6&utm_source=qr",
    icon: AiFillInstagram,
  },
  { id: 4, to: "/", icon: FaYoutube },
];

function Header() {
  return (
    <header className="w-full h-25 sm:h-30 flex items-center px-5 sm:px-25">
      <div className="max-w-360 flex justify-between gap-2 w-full mx-auto">
        <div className=""></div>
        <Link
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/logo.png"
            alt=""
            className="w-40 sm:w-50 h-25 object-cover"
          />
        </Link>

        <nav className="flex items-center gap-5">
          {links.map(({ to, id, icon: Icon }) => (
            <a key={id} href={to} target="_blank" className="cursor-pointer">
              <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-red hover:text-red-900 transition-all" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
