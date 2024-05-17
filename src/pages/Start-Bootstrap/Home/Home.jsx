import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Banner from "../../../components/Start-Bootstrap/Banner/Banner";
import Feedback from "../../../components/Start-Bootstrap/Feedback/Feedback";
import slide1 from "../../../assets/images/slide-1.jpg";
import slide2 from "../../../assets/images/slide-2.jpg";
import slide3 from "../../../assets/images/slide-3.jpg";
import Button from "../../../components/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <section className="features">
        <div className="container">
          <div className="feature-item">
            <i className="fa-regular fa-window-maximize"></i>
            <h2 className="title">Fully Responsive</h2>
            <p>This theme will look great on any device, no matter the size!</p>
          </div>
          <div className="feature-item">
            <i className="fa-regular fa-layer-group"></i>
            <h2 className="title">Bootstrap 5 Ready</h2>
            <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
          </div>
          <div className="feature-item">
            <i className="fa-regular fa-terminal"></i>
            <h2 className="title">Easy to Use</h2>
            <p>
              Ready to use with your own content, or customize the source files!
            </p>
          </div>
        </div>
      </section>
      <section className="slide">
        <div className="container">
          <div className="slide-item">
            <div className="slide-content">
              <h2 className="title">Fully Responsive Design</h2>
              <p>
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
            <div className="slide-img">
              <img src={slide1} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="slide-content">
              <h2 className="title">Updated For Bootstrap 5</h2>
              <p>
                Newly improved, and full of great utility classes, Bootstrap 5
                is leading the way in mobile responsive web development! All of
                the themes on Start Bootstrap are now using Bootstrap 5!
              </p>
            </div>
            <div className="slide-img">
              <img src={slide2} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="slide-content">
              <h2 className="title">Easy to Use & Customize</h2>
              <p>
                Landing Page is just HTML and CSS with a splash of SCSS for
                users who demand some deeper customization options. Out of the
                box, just add your content and images, and your new landing page
                will be ready to go!
              </p>
            </div>
            <div className="slide-img">
              <img src={slide3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Feedback />
      <Banner title="Ready to get started? Sign up now!">
        <Button title="Register" handleClick={() => navigate("/register")} />
      </Banner>
    </div>
  );
};

export default Home;
