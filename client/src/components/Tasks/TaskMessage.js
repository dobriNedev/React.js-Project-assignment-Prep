// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useForm from "../../hooks/useForm";
// import { useService } from "../../hooks/useService";
// import { taskServiceFactory } from "../../services/taskService";

// const TaskMessage = ({
//     onTaskMessageSubmit
// }) => {
//     const { taskId } = useParams();
//     const taskService = useService(taskServiceFactory);
//     const [state, setState] = useState({})
//     const {values, onChangeHandler, onSubmit} = useForm({
//         message: ''
//     }, onTaskMessageSubmit)

//      useEffect(() => {
//         taskService.getOne(taskId)
//         .then(res => {
//             setState(res);
//         })
//     }, [taskId]);

//     return(
//         <article className="message">
//             <label>Add your message</label>
//             <form method="POST" onSubmit={onSubmit}>
//                 <textarea 
//                     name="message" 
//                     placeholder="Write your message here..." 
//                     value={values.message} 
//                     onChange={onChangeHandler}
//                     >
//                 </textarea>
//                 <button type="submit">Create Task</button>
//             </form>
//         </article>
//     );
// };

// export default TaskMessage;