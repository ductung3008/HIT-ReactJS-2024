const sectionItems = [
  {
    iconClass: "fa-light fa-user-group text-white",
    title: "Explore Your Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.",
  },
  {
    iconClass: "fa-light fa-sun-bright text-white",
    title: "Digital Whiteboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.",
  },
  {
    iconClass: "fa-light fa-chart-simple text-white",
    title: "Design To Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.",
  },
];

const Section = () => {
  return (
    <div className="font-poppins m-auto flex max-w-[1320px] flex-col items-center px-3 py-[112px] *:z-[2]">
      <h2 className="mb-14 w-5/12 bg-gradient-to-tl from-[#3db3c5] to-[#274685] bg-clip-text px-3 text-center text-5xl font-bold leading-[58px] text-transparent">
        Save your time to using SoftLand
      </h2>
      <div className="flex items-center">
        {sectionItems.map((sectionItem) => (
          <div className="flex flex-col items-center px-3 *:text-center">
            <div className="mb-[30px] flex size-[100px] items-center justify-center rounded-full bg-gradient-to-tl from-[#3db3c5] to-[#274685] text-4xl shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]">
              <i className={sectionItem.iconClass}></i>
            </div>
            <h3 className="mb-4 text-xl font-medium">{sectionItem.title}</h3>
            <p className="mb-4 text-sm font-normal text-[#b1b1b1]">
              {sectionItem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
