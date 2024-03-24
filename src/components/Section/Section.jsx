import React from "react";
import "./Section.scss";

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
    <div className="section">
      <h2 className="title">Save your time to using SoftLand</h2>
      <div className="content">
        {sectionItems.map((sectionItem, index) => (
          <div className="item" key={index}>
            <div className="icon">
              <i className={sectionItem.iconClass}></i>
            </div>
            <h3 className="name">{sectionItem.title}</h3>
            <p className="desc">{sectionItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
