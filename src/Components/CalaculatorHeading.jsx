import styles from "./CalaculatorHeading.module.css";
const CalaculatorHeading = ({inputvalue }) => {
  return (
    <div className="row justify-content-center">
      <input
        className={styles["heading"]}
        value={inputvalue}
        type="text"
        placeholder="Type Here!!!"
       readOnly
      />
    </div>
  );
};
export default CalaculatorHeading;
