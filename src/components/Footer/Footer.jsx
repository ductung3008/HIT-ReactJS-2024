const footerItems = [
  {
    title: "Navigation",
    items: ["Pricing", "Features", "Blog", "Contact"],
  },
  {
    title: "Services",
    items: ["Team", "Collaboration", "Todos", "Events"],
  },
  {
    title: "Downloads",
    items: ["Get from the App Store", "Get from the Play Store"],
  },
];

const socials = [
  "fa-brands fa-twitter",
  "fa-brands fa-facebook",
  "fa-brands fa-instagram",
  "fa-brands fa-linkedin",
];

const Footer = () => {
  return (
    <footer className="font-poppins pb-10 pt-20">
      <div className="m-auto max-w-[1320px] px-3">
        <div className="flex flex-col lg:flex-row">
          <div className="px-3 lg:w-1/3">
            <h3 className="mb-[30px] text-lg font-medium">About SoftLand</h3>
            <p className="mb-4 text-sm text-[#9fa1a4]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea
              delectus pariatur, numquam aperiam dolore nam optio dolorem
              facilis itaque voluptatum recusandae deleniti minus animi.
            </p>
            <div className="mb-4 flex">
              {socials.map((s) => (
                <a
                  href="#"
                  className="group mr-1 flex size-[50px] items-center justify-center rounded-full bg-[#f8f9fa] transition-all hover:bg-[#2d71a1]"
                >
                  <i className={`${s} group-hover:text-white`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="px-3 lg:ml-[110px] lg:w-7/12">
            <div className="flex flex-col lg:flex-row">
              {footerItems.map((fi) => (
                <div className="lg:w-1/3">
                  <h3 className="mb-[30px] text-lg font-medium">{fi.title}</h3>
                  <ul className="mb-4">
                    {fi.items.map((i) => (
                      <li className="mb-[10px]">
                        <a href="#">{i}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center text-sm text-[#9fa1a4]">
            <p>© Copyright SoftLand. All Rights Reserved</p>
            <p>
              Designed by{" "}
              <a href="#" className="text-black">
                Someone
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
