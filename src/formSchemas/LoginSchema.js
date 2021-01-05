import * as yup from 'yup'


export default yup.object().shape({
    email: yup
        .string()
        .email("must be a valid email")
        .required("a valid email address is required"),
    password: yup
        .string()
        .required("a password is required")
        .min(3, "password must be at least 3 characters long"),
})







// export default yup.object().shape({
//     username: yup
//       .string()
//       .required("username is required")
//       .min(3, "username must be 3 chars long"),
//     email: yup.string().email("must be an email").required("email is required"),
//     role: yup
//       .string()
//       .oneOf(["tl", "instructor", "student", "alumni"], "role is required"),
//     civil: yup
//       .string()
//       .oneOf(["single", "married"], "please select your civil status"),
//     // we're done with checkboxes
//     hiking: yup.boolean(),
//     reading: yup.boolean(),
//     coding: yup.boolean(),
//   });