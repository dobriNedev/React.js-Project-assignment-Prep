import styles from "./AddComment.module.css";
import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <form method="POST" onSubmit={onSubmit} className={styles["comment-form"]}>
      <label>Add a comment:</label>
      <textarea
        name="comment"
        placeholder="Comment......"
        value={values.comment}
        onChange={changeHandler}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};
