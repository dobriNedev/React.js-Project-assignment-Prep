

const AssignTaskOption = ({
    _id,
    firstName,
    lastName,
    role
}) => {
    return(
        <option 
        value={_id}>{firstName} {lastName} - ({role})
        </option>
    )
};

export default AssignTaskOption;