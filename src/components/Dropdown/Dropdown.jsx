const Dropdown = ({ items, direction }) => {
  const dropdownDirection =
    direction === "bottom"
      ? "absolute top-[calc(100%+30px)] left-[14px]"
      : "absolute top-0 left-[calc(100%-30px)]";
  const lv = items.every((item) => item.children === undefined) ? "/lv2" : "";
  return (
    <ul
      className={`${dropdownDirection} invisible rounded-md bg-white py-[10px] text-sm text-black shadow-[0px_0px_30px_rgba(127,137,161,0.25)] group-hover${lv}:block z-40 transition-all group-hover${lv}:top-full group-hover${lv}:left-full group-hover${lv}:opacity-100 group-hover${lv}:visible opacity-0 transition-all duration-300 [&_a]:!opacity-100`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={`min-w-[200px] hover:text-[#2d71a1] ${item.children ? "group/lv2 relative" : ""}`}
        >
          <a href="#" className="px-5 py-[10px]">
            {item.title}{" "}
            {item.children ? (
              <i className="fa-regular fa-angle-down text-black"></i>
            ) : (
              ""
            )}
          </a>
          {item.children && (
            <Dropdown items={item.children} direction="right" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
