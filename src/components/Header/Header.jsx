import Navbar from "../Navbar/Navbar";

const handleScroll = () => {
  const header = document.querySelector("header");
  if (window.scrollY > 200) {
    header.style.height = "60px";
    header.style.backgroundColor = "rgba(39,70,133,0.8)";
  } else {
    header.style.height = "80px";
    header.style.backgroundColor = "transparent";
  }
};

window.addEventListener("scroll", handleScroll);

const Header = () => {
  return (
    <header className="font-poppins fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-center bg-transparent transition-all duration-500">
      <div className="flex w-full max-w-[1320px] items-center justify-between px-3">
        <div className="px-1 text-[28px] font-medium text-white">
          <h1>
            <a href="#">SoftLand</a>
          </h1>
        </div>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
