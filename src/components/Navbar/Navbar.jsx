import Dropdown from "../Dropdown/Dropdown";

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
    <ul className="flex items-center text-white [&_a]:block [&_a]:opacity-65">
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
  );
};

export default Navbar;
