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






