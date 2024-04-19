import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import "./EditProfile.scss";
import { editProfileValidate } from "../../utils/editProfileValidate";
import userAvatar from "../../assets/images/user-avt.png";
import languages from "../../data/languages.json";
import countries from "../../data/countries.json";
import date from "../../data/date.json";

const EditProfile = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="edit-profile">
      <div className="app-container">
        <div className="edit-header">
          <div className="breadcrumb">
            <span>Settings</span> <i className="fa-solid fa-chevron-right"></i>
            <span>User Profile</span>
          </div>
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-right">
            <div className="noti">
              <i className="fa-light fa-bell"></i>
            </div>
            <div className="user">
              <img src={userAvatar} alt="" />
            </div>
          </div>
        </div>
        <div className="edit-container">
          <div className="nav-mb" onClick={() => setIsOpenNav(!isOpenNav)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={`side-bar ${isOpenNav ? "nav-open" : ""}`}>
            <div className="user">
              <img src={userAvatar} alt="" />
              <i className="fa-light fa-pen"></i>
            </div>
            <li className="tab-active">
              <a href="#">
                <i className="fa-regular fa-user"></i>
                <p>User Info</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-regular fa-file-invoice"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-regular fa-heart"></i>
                <p>Favourites</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-regular fa-gear"></i>
                <p>Settings</p>
              </a>
            </li>
          </div>
          <div className="edit-content">
            <h1>User Profile</h1>
            <Formik
              initialValues={{
                username: "Ben Sherman",
                email: "ben.sherman@gmail.com",
                gender: "Male",
                birthday: {
                  month: "7",
                  day: "30",
                  year: "1999",
                },
                language: "en",
                country: "US",
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
                emailNotification: true,
                privateAccount: false,
              }}
              validationSchema={editProfileValidate}
              onSubmit={(data) => console.log(data)}
            >
              {({ errors, touched }) => (
                <Form className="edit-form">
                  <div className="edit-col">
                    <div
                      className={`input-wrapper ${errors.username && touched.username && "error-input"}`}
                    >
                      <label htmlFor="username">Username</label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                      />
                      {errors.username && touched.username && (
                        <>
                          <span className="error-icon">
                            <i className="fa-regular fa-exclamation"></i>
                          </span>
                          <span className="error-msg">{errors.username}</span>
                        </>
                      )}
                    </div>
                    <div
                      className={`input-wrapper ${errors.email && touched.email && "error-input"}`}
                    >
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                      />
                      {errors.email && touched.email && (
                        <>
                          <span className="error-icon">
                            <i className="fa-regular fa-exclamation"></i>
                          </span>
                          <span className="error-msg">{errors.email}</span>
                        </>
                      )}
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="gender">Gender</label>
                      <Field as="select" name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="birthday">Birthday</label>
                      <div className="birthday-input">
                        <div className="birthday-select">
                          <Field
                            as="select"
                            name="birthday.month"
                            id="birthday-month"
                          >
                            {date.months.map((month) => (
                              <option key={month.number} value={month.number}>
                                {month.name}
                              </option>
                            ))}
                          </Field>
                        </div>
                        <div className="birthday-select">
                          <Field
                            as="select"
                            name="birthday.day"
                            id="birthday-day"
                          >
                            {date.days.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </Field>
                        </div>
                        <div className="birthday-select">
                          <Field
                            as="select"
                            name="birthday.year"
                            id="birthday-year"
                          >
                            {date.years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </Field>
                        </div>
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="language">Language</label>
                      <Field as="select" name="language" id="language">
                        {languages.map((language) => (
                          <option key={language.code} value={language.code}>
                            {language.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="country">Country</label>
                      <Field as="select" name="country" id="country">
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div className="edit-col">
                    <div
                      className={`input-wrapper ${errors.currentPassword && touched.currentPassword && "error-input"}`}
                    >
                      <label htmlFor="currentPassword">Current Password</label>
                      <Field
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        autoComplete="off"
                      ></Field>
                      {errors.currentPassword && touched.currentPassword && (
                        <>
                          <span className="error-icon">
                            <i className="fa-regular fa-exclamation"></i>
                          </span>
                          <span className="error-msg">
                            {errors.currentPassword}
                          </span>
                        </>
                      )}
                    </div>
                    <div
                      className={`input-wrapper new-pass-input ${errors.newPassword && touched.newPassword && "error-input"}`}
                    >
                      <label htmlFor="newPassword">New Password</label>
                      <Field
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        autoComplete="off"
                      ></Field>
                      {errors.newPassword && touched.newPassword && (
                        <>
                          <span className="error-icon">
                            <i className="fa-regular fa-exclamation"></i>
                          </span>
                          <span className="error-msg">
                            {errors.newPassword}
                          </span>
                        </>
                      )}
                      <p>(4-32 alphabets or numerics)</p>
                    </div>
                    <div
                      className={`input-wrapper ${errors.confirmPassword && touched.confirmPassword && "error-input"}`}
                    >
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="off"
                      ></Field>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <>
                          <span className="error-icon">
                            <i className="fa-regular fa-exclamation"></i>
                          </span>
                          <span className="error-msg">
                            {errors.confirmPassword}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="input-wrapper input-switch">
                      <label htmlFor="emailNotification">
                        Email Notification
                      </label>
                      <div className="switch-wrapper">
                        <Field
                          type="checkbox"
                          name="emailNotification"
                          id="emailNotification"
                        ></Field>
                        <span className="slider"></span>
                      </div>
                    </div>
                    <div className="input-wrapper input-switch">
                      <label htmlFor="privateAccount">Private Account</label>
                      <div className="switch-wrapper">
                        <Field
                          type="checkbox"
                          name="privateAccount"
                          id="privateAccount"
                        ></Field>
                        <span className="slider"></span>
                      </div>
                    </div>
                    <div className="btn">
                      <button type="submit">Save Changes</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
