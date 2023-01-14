import Input from "./Input";

const FormController = (props) => {
    switch (props.controll) {
        case 'input':
            return <Input {...props} />;
        default:
            return null;
    }
}

export default FormController;