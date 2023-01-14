import { FastField } from "formik";

const Input = ({type, name, id, placeholder}) => {
    return (
        <section>
            <label htmlFor="email">ایمیل</label>
            <FastField type={type} id={id} name={name} placeholder={placeholder} />
        </section>
    )
}

export default Input;