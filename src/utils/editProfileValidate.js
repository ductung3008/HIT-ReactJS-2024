import * as Yup from "yup";

export const editProfileValidate = () =>
  Yup.object({
    username: Yup.string().required("Username không được bỏ trống"),
    email: Yup.string().required("Email không được bỏ trống"),
    currentPassword: Yup.string()
      .required("Mật khẩu hiện tại không được bỏ trống")
      .min(8, "Mật khẩu hiện tại phải có ít nhất 8 ký tự")
      .max(32, "Mật khẩu hiện tại không được phép vượt quá 32 ký tự")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d).*$/,
        "Mật khẩu phải bao gồm ít nhất 1 chữ cái và 1 số",
      ),
    newPassword: Yup.string()
      .required("Mật khẩu mới không được bỏ trống")
      .min(8, "Mật khẩu mới phải có ít nhất 8 ký tự")
      .max(32, "Mật khẩu mới không được phép vượt quá 32 ký tự")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d).*$/,
        "Mật khẩu phải bao gồm ít nhất 1 chữ cái và 1 số",
      )
      .notOneOf(
        [Yup.ref("currentPassword")],
        "Mật khẩu mới không được trùng với mật khẩu hiện tại",
      ),
    confirmPassword: Yup.string()
      .required("Xác nhận mật khẩu mới không được bỏ trống")
      .oneOf(
        [Yup.ref("newPassword")],
        "Xác nhận mật khẩu mới không trùng nhau",
      ),
  });
