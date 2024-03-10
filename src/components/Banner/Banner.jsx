import Button from "../Button/Button";
import phone_1 from "../../assets/images/phone-1.png";
import phone_2 from "../../assets/images/phone-2.png";

const Banner = () => {
  return (
    <div className="bg-banner font-poppins relative flex h-screen min-h-[880px] flex-col items-center text-white">
      <div className="absolute bottom-[-180px] z-[1] overflow-hidden lg:bottom-[-150px]">
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
      <div className="z-[2] m-auto mt-16 flex h-full w-full max-w-[1320px] lg:mt-0 lg:items-center">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex flex-col items-center px-3 pb-4 text-center font-bold lg:w-2/3 lg:items-start lg:text-left">
            <h1 className="my-[30px] text-[40px] font-bold leading-[48px] lg:mb-[30px] lg:mt-0 lg:text-[56px] lg:leading-[68px]">
              Promote Your App with SoftLand
            </h1>
            <p className="mb-12 text-base font-normal lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Button></Button>
          </div>
          <div className="relative mr-[15%] w-1/3 self-center px-3 *:absolute *:w-[250px] *:rounded-[30px] *:shadow-[0_15px_50px_0_rgba(0,0,0,0.3)] lg:mr-0 lg:self-auto">
            <img src={phone_1} alt="" className="-top-1/2 left-0" />
            <img
              src={phone_2}
              alt=""
              className="-left-[2px] -top-1/2 ml-[100px] mt-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
