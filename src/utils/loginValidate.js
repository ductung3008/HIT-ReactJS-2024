import * as Yup from "yup";

export const loginValidate = () =>
  Yup.object({
    username: Yup.string()
      .required("Username không được bỏ trống")
      .min(5, "Username phải có tối thiểu 5 ký tự")
      .test(
        "is-capitalize",
        "Username phải bắt đầu bằng những ký tự in hoa sau khoảng trắng",
        (str) => {
          const words = str.split(/\s+/);
          return words.every(
            (word) => word.charAt(0) === word.charAt(0).toUpperCase(),
          );
        },
      ),
    password: Yup.string()
      .required("Password không được bỏ trống")
      .min(8, "Password phải có tối thiểu 8 ký tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
        "Password phải bao gồm ít nhất một ký tự in hoa, hai ký tự thường, một ký tự chữ số, một ký tự đặc biệt",
      ),
  });
