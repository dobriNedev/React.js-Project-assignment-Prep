import { useState} from "react";

const useForm = (initialFormValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialFormValues);

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
    };

    return {
        values,
        onChangeHandler,
        onSubmit
    }
};

export default useForm;