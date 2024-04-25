import * as Yup from "yup";

export const registerValidate = () =>
  Yup.object({
    email: Yup.string().required("Email is not empty").email("Must be email"),
    password: Yup.string().required("Password is not empty"),
  });

// Register v1
// export const registerValidate = () =>
//   Yup.object({
//     fullname: Yup.string()
//       .required("Fullname không được bỏ trống")
//       .min(5, "Fullname phải có tối thiểu 5 ký tự"),
//     password: Yup.string()
//       .required("Password không được bỏ trống")
//       .min(8, "Password phải có ít nhất 8 ký tự")
//       .oneOf([Yup.ref("fullname")], "Password không giống fullname"),
//     email: Yup.string()
//       .required("Email không được bỏ trống")
//       .email("Sai định dạng email"),
//   });
