import { toPersianNumbers } from "@/utils/toPersionNumber";
import styles from "./TextInput.module.css";

function TextInput({ label, name, register,required,errors,type="text" }) {
  const placeHolderValue=toPersianNumbers("09123456789")
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label} {required && <span style={{color:"red"}}>*</span>}</label>
      <input {...register(name)} id={name} type={type}  placeholder={placeHolderValue} />
      {errors && errors[name] && (
        <span className={styles.error}>
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextInput;
