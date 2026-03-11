
import styles from "./TextInput.module.css";

function TextInput({ label, name, register,required,errors,type="text",placeholder }) {
  
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label} {required && <span style={{color:"red"}}>*</span>}</label>
      <input {...register(name)} id={name} type={type}  placeholder={placeholder} autoComplete="off" />
      {errors && errors[name] && (
        <span className={styles.error}>
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextInput;
