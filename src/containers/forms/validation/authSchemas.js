import * as Yup from 'yup';

const registerSchema =  Yup.object().shape({
    name:               Yup.string()
                            .max(255, 'Name should be 255 characters max')
                            .required('Name is required'),

    email:              Yup.string()
                            .max(255, 'Email should be 255 characters max')
                            .email('Invalid email')
                            .required('Email is required'),

    password:           Yup.string()
                            .min(6, 'Password should be 6 characters min')
                            .required('Password is required'),

    confirmPassword:    Yup.string()
                            .when('password', {
                                is: val => (val && val.length),
                                then: Yup.string().oneOf(
                                    [Yup.ref("password")],
                                    "Passwords do not match"
                                )
                            })
                            .required('You have to confirm password')
});

export { registerSchema }