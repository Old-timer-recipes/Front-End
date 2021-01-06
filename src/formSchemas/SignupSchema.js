import * as yup from 'yup'


export default yup.object().shape({
    name: yup
        .string()
        .required("please input your name")
        .min(2, "name must be at least 2 characters long"),
    email: yup
        .string()
        .email("must be a valid email")
        .required("a valid email address is required"),
    password: yup
        .string()
        .required("a password is required")
        .min(3, "password must be at least 3 characters long"),
    passwordConfirm: yup   
        .string()
        .required("confirm your password"),
})