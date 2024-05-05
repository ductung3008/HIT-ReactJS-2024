import React from "react";
import "./Features.scss";
import Button from "../Button/Button";
import feature1 from "../../assets/images/feature-1.png";
import feature2 from "../../assets/images/feature-2.png";
import feature3 from "../../assets/images/feature-3.png";
import feature4 from "../../assets/images/feature-4.png";

const FeaturesRow = ({ featureItems }) => {
  return (
    <div className="row">
      {featureItems.map((featureItem) => (
        <div className="feature-item" key={featureItem.id}>
          <div className="bg">
            {featureItem.bg.map((svg, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: svg }}></div>
            ))}
          </div>
          <div className="img">
            <img src={featureItem.img} alt="" />
          </div>
          <div className="content">
            <h3 className="title">{featureItem.title}</h3>
            <p className="desc">{featureItem.desc}</p>
            <div className="btn-wrapper">
              <Button title={"Learn more"} width="85.678px" height="25.605px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  fill="none"
                >
                  <path
                    d="M15.1864 15.2013L21.0952 8.30771L15.1864 1.41409"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0952 8.30771H1.39917"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Features = () => {
  const featureItems1 = [
    {
      id: 1,
      title: "Search Data",
      desc: "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
      img: feature1,
      bg: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="427" height="353" viewBox="0 0 427 353" fill="none">
          <path opacity="0.1" d="M43.733 41.784C47.7703 17.6952 68.6204 0.048645 93.0453 0.048645H376.922C404.536 0.048645 426.922 22.4344 426.922 50.0486V302.608C426.922 330.222 404.536 352.608 376.922 352.608H50.7169C19.8016 352.608 -3.7054 324.833 1.40467 294.343L43.733 41.784Z" fill="#68C9BA"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="191" height="137" viewBox="0 0 191 137" fill="none">
          <path d="M180.141 78.649C205.475 107.383 175.562 135.129 122.913 135.878C18.242 128.98 -5.37799 36.2808 2.53259 15.4969C10.4432 -5.287 33.998 -5.85428 68.8983 36.4853C103.799 78.8249 148.474 42.7311 180.141 78.649Z" stroke="white" strokeWidth="1.5"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
          <ellipse cx="17.3478" cy="12.2998" rx="16.592" ry="9.80438" transform="rotate(20.7184 17.3478 12.2998)" stroke="white" strokeWidth="1.5"/>
        </svg>`,
      ],
    },
    {
      id: 2,
      title: "24 Hours Access",
      desc: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
      img: feature2,
      bg: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="427" height="353" viewBox="0 0 427 353" fill="none">
          <path opacity="0.1" d="M43.8113 41.784C47.8485 17.6951 68.6987 0.048584 93.1235 0.048584H377C404.615 0.048584 427 22.4343 427 50.0486V302.608C427 330.222 404.615 352.608 377 352.608H50.7952C19.8799 352.608 -3.62715 324.833 1.48291 294.343L43.8113 41.784Z" fill="#9C69E2"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="208" height="149" viewBox="0 0 208 149" fill="none">
          <path d="M11.5375 63.4477C-16.0821 32.1204 16.5303 1.87086 73.9297 1.05483C188.047 8.5749 213.798 109.639 205.174 132.299C196.549 154.958 170.869 155.577 132.819 109.416C94.7694 63.256 46.062 102.607 11.5375 63.4477Z" stroke="white" strokeWidth="1.5"/>
        </svg>`,
      ],
    },
  ];

  const featureItems2 = [
    {
      id: 3,
      title: "Print Out",
      desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      img: feature3,
      bg: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="427" height="354" viewBox="0 0 427 354" fill="none">
          <path opacity="0.1" d="M43.7328 42.5833C47.77 18.4944 68.6202 0.847893 93.045 0.847893H376.922C404.536 0.847893 426.922 23.2337 426.922 50.8479V303.407C426.922 331.021 404.536 353.407 376.922 353.407H50.7167C19.8014 353.407 -3.70564 325.633 1.40442 295.142L43.7328 42.5833Z" fill="#F063B8"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="51" viewBox="0 0 64 51" fill="none">
          <ellipse cx="32.3934" cy="25.4173" rx="33.5103" ry="19.8015" transform="rotate(150 32.3934 25.4173)" stroke="white" strokeWidth="1.5"/>
        </svg>`,
      ],
    },
    {
      id: 4,
      title: "Security Code",
      desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
      img: feature4,
      bg: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="427" height="354" viewBox="0 0 427 354" fill="none">
          <path opacity="0.1" d="M43.8102 42.5833C47.8474 18.4945 68.6976 0.847946 93.1224 0.847946H376.999C404.614 0.847946 426.999 23.2337 426.999 50.8479V303.407C426.999 331.021 404.614 353.407 376.999 353.407H50.7941C19.8788 353.407 -3.62825 325.633 1.48182 295.143L43.8102 42.5833Z" fill="#2D9CDB"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="295" height="226" viewBox="0 0 295 226" fill="none">
          <path d="M57.5101 222.794C-2.10404 234.815 -16.5061 171.666 24.2554 98.6882C116.823 -39.7434 263.019 1.36427 285.314 28.7376C307.61 56.111 289.693 88.9456 203.78 103.32C117.867 117.695 132.028 207.767 57.5101 222.794Z" stroke="white" strokeWidth="1.5"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="61" height="42" viewBox="0 0 61 42" fill="none">
          <ellipse cx="30.2955" cy="21.2277" rx="30.4548" ry="17.996" transform="rotate(20.7184 30.2955 21.2277)" stroke="white" strokeWidth="1.5"/>
        </svg>`,
      ],
    },
  ];

  return (
    <section className="features">
      <h2 className="title">Features</h2>
      <p className="desc">
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
      <div className="container">
        <FeaturesRow featureItems={featureItems1} />
        <FeaturesRow featureItems={featureItems2} />
      </div>
    </section>
  );
};

export default Features;
