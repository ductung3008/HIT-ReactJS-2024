import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col col-left">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="35"
              viewBox="0 0 49 35"
              fill="none"
            >
              <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
              <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
            </svg>
            <div className="logo-name">DataWarehouse</div>
          </div>
          <div className="address">
            <p>Warehouse Society, 234</p>
            <p>Bahagia Ave Street PRBW 29281</p>
          </div>
          <div className="contact">
            <p>info@warehouse.project</p>
            <p>1-232-3434 (Main)</p>
          </div>
        </div>
        <div className="col col-right">
          <div className="col-3 about">
            <div className="title">About</div>
            <div>
              <a href="#">Profile</a>
              <a href="#">Features</a>
              <a href="#">Careers</a>
              <a href="#">DW News</a>
            </div>
          </div>
          <div className="col-3 help">
            <div className="title">Help</div>
            <div>
              <a href="#">Support</a>
              <a href="#">Sign up</a>
              <a href="#">Guide</a>
              <a href="#">Reports</a>
              <a href="#">Q&A</a>
            </div>
          </div>
          <div className="col-3 sm">
            <div className="title">Social Media</div>
            <div className="sm-wrapper">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <circle
                    opacity="0.1"
                    cx="25.5044"
                    cy="25.9612"
                    r="25.0671"
                    fill="#212353"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="17"
                  viewBox="0 0 11 17"
                  fill="none"
                >
                  <path
                    d="M6.87812 16.4285V8.61199H9.71976L10.0963 5.9184H6.87812L6.88295 4.57023C6.88295 3.8677 6.97085 3.49126 8.29974 3.49126H10.0762V0.797363H7.23418C3.82043 0.797363 2.61888 2.10405 2.61888 4.30148V5.9187H0.490967V8.6123H2.61888V16.4285H6.87812Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <circle
                    opacity="0.1"
                    cx="25.5044"
                    cy="25.9612"
                    r="25.0671"
                    fill="#212353"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.58558 3.8779L9.54584 3.38073C9.42672 2.09225 10.4723 0.91534 12.1266 0.458826C12.7354 0.296478 13.7677 0.276184 14.4427 0.418239C14.7074 0.479119 15.2103 0.681995 15.5676 0.864636L16.2161 1.19945L16.9308 1.02698C17.3279 0.935634 17.8573 0.783462 18.0955 0.681995C18.3205 0.590704 18.519 0.53994 18.519 0.57041C18.519 0.742875 18.0293 1.33133 17.6191 1.65596C17.0632 2.11254 17.222 2.15313 18.347 1.84872C19.022 1.67626 19.0351 1.67626 18.9028 1.86902C18.8234 1.97048 18.4131 2.32559 17.9763 2.65023C17.2352 3.20827 17.1955 3.26915 17.1955 3.73584C17.1955 4.45617 16.7455 5.95771 16.2955 6.77951C15.4618 8.32164 13.6751 9.91447 11.8884 10.716C9.37382 11.8422 6.02538 12.1262 3.20641 11.4668C2.26676 11.2435 0.6521 10.6754 0.6521 10.574C0.6521 10.5435 1.14176 10.5029 1.73737 10.4928C2.98141 10.4725 4.22546 10.2087 5.28424 9.74201L5.99897 9.41737L5.17836 9.20432C4.0137 8.89991 2.96817 8.19988 2.70351 7.54043C2.62405 7.32738 2.65054 7.3172 3.39168 7.3172L4.15931 7.30708L3.5108 7.07374C2.74317 6.77951 2.04176 6.28235 1.69763 5.77507C1.44614 5.40985 1.12859 4.48658 1.22122 4.41558C1.24763 4.38517 1.52561 4.44599 1.84325 4.52717C2.75641 4.78081 2.87554 4.71993 2.34615 4.29382C1.35351 3.52279 1.04912 2.37629 1.52561 1.29074L1.75061 0.803755L2.62405 1.46321C4.4108 2.79228 6.51512 3.58367 8.92382 3.81702L9.58558 3.8779Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <circle
                    opacity="0.1"
                    cx="25.5044"
                    cy="25.9612"
                    r="25.0671"
                    fill="#212353"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                >
                  <path
                    d="M8.84994 3.297C6.57368 3.297 4.73764 4.69433 4.73764 6.4267C4.73764 8.15907 6.57368 9.5564 8.84994 9.5564C11.1262 9.5564 12.9622 8.15907 12.9622 6.4267C12.9622 4.69433 11.1262 3.297 8.84994 3.297ZM8.84994 8.46141C7.37896 8.46141 6.1764 7.54893 6.1764 6.4267C6.1764 5.30448 7.37538 4.39199 8.84994 4.39199C10.3245 4.39199 11.5235 5.30448 11.5235 6.4267C11.5235 7.54893 10.3209 8.46141 8.84994 8.46141ZM14.0896 3.16898C14.0896 3.57483 13.6601 3.89897 13.1304 3.89897C12.5972 3.89897 12.1713 3.57211 12.1713 3.16898C12.1713 2.76585 12.6008 2.43899 13.1304 2.43899C13.6601 2.43899 14.0896 2.76585 14.0896 3.16898ZM16.8133 3.90987C16.7524 2.93201 16.4589 2.06582 15.5177 1.35218C14.58 0.638527 13.4418 0.415172 12.157 0.366143C10.8327 0.308942 6.86358 0.308942 5.53934 0.366143C4.25805 0.412448 3.11992 0.635804 2.17864 1.34945C1.23735 2.0631 0.947452 2.92928 0.88303 3.90714C0.80787 4.91497 0.80787 7.93571 0.88303 8.94353C0.943873 9.9214 1.23735 10.7876 2.17864 11.5012C3.11992 12.2149 4.25447 12.4382 5.53934 12.4873C6.86358 12.5445 10.8327 12.5445 12.157 12.4873C13.4418 12.441 14.58 12.2176 15.5177 11.5012C16.4554 10.7876 16.7488 9.9214 16.8133 8.94353C16.8884 7.93571 16.8884 4.91769 16.8133 3.90987ZM15.1025 10.0249C14.8233 10.5588 14.2829 10.9701 13.5778 11.1853C12.522 11.504 10.0167 11.4304 8.84994 11.4304C7.68317 11.4304 5.17428 11.5012 4.12205 11.1853C3.42056 10.9728 2.88013 10.5615 2.59738 10.0249C2.17864 9.22137 2.27527 7.31468 2.27527 6.4267C2.27527 5.53873 2.18222 3.62931 2.59738 2.8285C2.87655 2.29463 3.41698 1.88333 4.12205 1.66814C5.17786 1.34945 7.68317 1.423 8.84994 1.423C10.0167 1.423 12.5256 1.35218 13.5778 1.66814C14.2793 1.8806 14.8197 2.2919 15.1025 2.8285C15.5212 3.63204 15.4246 5.53873 15.4246 6.4267C15.4246 7.31468 15.5212 9.22409 15.1025 10.0249Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cc-container">
        <div className="copyright">
          <p>© Datawarehouse™, 2020. All rights reserved.</p>
          <p>Company Registration Number: 21479524.</p>
        </div>
        <div className="chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <circle
              opacity="0.2"
              cx="30.9194"
              cy="30.7212"
              r="30.0806"
              fill="#9C69E2"
            />
            <path
              d="M15.8792 26.6836C15.8792 21.1607 20.3563 16.6836 25.8792 16.6836H35.9597C41.4826 16.6836 45.9597 21.1607 45.9597 26.6836V30.7481C45.9597 36.2709 41.4826 40.7481 35.9597 40.7481H15.8792V26.6836Z"
              fill="#9C69E2"
            />
            <circle cx="24.9041" cy="28.7159" r="2.00537" fill="white" />
            <circle cx="30.9207" cy="28.7159" r="2.00537" fill="white" />
            <circle cx="36.9363" cy="28.7159" r="2.00537" fill="white" />
            <path
              d="M25.9063 39.7454H15.8794V42.2291C15.8794 43.7837 17.5753 44.7439 18.9084 43.9441L25.9063 39.7454Z"
              fill="#9C69E2"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
