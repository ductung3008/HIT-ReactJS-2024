import Dropdown from "../Dropdown/Dropdown";

const showNav = () => {
  alert("Upcoming...");
};

const dropdownItems = [
  { title: "Drop Down 1" },
  {
    title: "Deep Drop Down",
    children: [
      { title: "Deep Drop Down 1" },
      { title: "Deep Drop Down 2" },
      { title: "Deep Drop Down 3" },
      { title: "Deep Drop Down 4" },
      { title: "Deep Drop Down 5" },
    ],
  },
  { title: "Drop Down 2" },
  { title: "Drop Down 3" },
  { title: "Drop Down 4" },
];

const Navbar = () => {
  return (
    <div>
      <ul className="hidden items-center text-white lg:flex [&_a]:block [&_a]:opacity-65">
        <li>
          <a
            href="#"
            className="navbar--active py-[10px] pl-[30px] transition-all duration-300 hover:!opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="py-[10px] pl-[30px] transition-all duration-300 hover:!opacity-100"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="py-[10px] pl-[30px] transition-all duration-300 hover:!opacity-100"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="py-[10px] pl-[30px] transition-all duration-300 hover:!opacity-100"
          >
            Blog
          </a>
        </li>
        <li className="group relative">
          <a
            href="#"
            className="py-[10px] pl-[30px] transition-all duration-300 hover:!opacity-100"
          >
            Drop Down <i className="fa-regular fa-angle-down text-white"></i>
          </a>
          <Dropdown items={dropdownItems} direction="bottom" />
        </li>
        <li>
          <a
            href="#"
            className="py-[10px] pl-[30px] transition-all duration-300 hover:!opacity-100"
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div onClick={showNav} className="lg:hidden">
        <i className="fa-solid fa-bars text-2xl text-white"></i>
      </div>
    </div>
  );
};

export default Navbar;
