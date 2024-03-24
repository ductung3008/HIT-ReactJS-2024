import homeBanner from "./Banner.module.scss";
import phone_1 from "../../assets/images/phone-1.png";
import phone_2 from "../../assets/images/phone-2.png";

const Banner = () => {
  return (
    <div className={homeBanner["banner"]}>
      <div className={homeBanner["wave"]}>
        <div>
          <svg
            width="100%"
            height="355px"
            viewBox="0 0 1920 355"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Apple-TV"
                transform="translate(0.000000, -402.000000)"
                fill="#FFFFFF"
              >
                <path
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className={homeBanner["container"]}>
        <div className={homeBanner["content"]}>
          <div className={homeBanner["content-left"]}>
            <h1>Promote Your App with SoftLand</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>Get started</button>
          </div>
          <div className={homeBanner["content-right"]}>
            <img src={phone_1} alt="" />
            <img src={phone_2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
