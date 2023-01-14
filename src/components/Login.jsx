import { FastField, Form, Formik } from "formik";
import FormController from "../formikComponents/FormController";

const initialValues = {
    email: '',
    password: ''
};

const onSubmit = (values) => {
    console.log(values);
}

const Login = () => {
    return (
        <section className="login-section container-lg">
            <article className="login-form">
                <section className="rigth-section">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                    >
                        {
                            (formik) => {
                                return (
                                    <Form>
                                        <FormController
                                            controll='input'
                                            type='text'
                                            name='email'
                                            id='email'
                                            placeholder='ایمیل'
                                        />

                                        <FormController
                                            controll='input'
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='رمز عبور'
                                        />

                                        <section>
                                            <button type="submit">
                                                ورود
                                            </button>
                                        </section>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </section>

                <section className="left-section">
                </section>
            </article>
        </section>
    )
}

export default Login;