import { useState} from "react";


const useForm = (initialFormValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialFormValues);

    const onChangeHandler = (e) => {
        if (e.target.name === 'role') {
            setValues(state => ({...state, role: e.target.value}))
        } else if (e.target.name === 'assignee') {
            const selectedOption = e.target.options[e.target.selectedIndex];
            setValues((state) => ({
            ...state,
            assignee: selectedOption.value
        }));
        } else {
            setValues(state => ({...state, [e.target.name]: e.target.value}));
        }
        
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
    };

    const onValuesChange = async(newValues) => {
        
        setValues(newValues);
    };

    return {
        values,
        onChangeHandler,
        onSubmit,
        onValuesChange
    }
};

export default useForm;