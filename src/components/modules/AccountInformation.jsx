import { useAuth } from "@/providers/AuthContext";
import styles from "./AccountInformation.module.css";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/ui/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { sentOtpSchema } from "@/utils/validationSchema";

function AccountInformation() {
  const [isEdit, setIsEdit] = useState(false);
  const { user, editUser } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(sentOtpSchema) });

  

  const editHandler = async (data) => {
if(!isEdit){
  reset({
    mobile:user.mobile,
    email:user.email
  })
  setIsEdit(true);
      return;
}





   
      try {
        await editUser(data);
        reset(data)
        setIsEdit(false)
      } catch (error) {
        console.log(error);
      }
    
  };

 

  return (
    <form className={styles.container} onSubmit={handleSubmit(editHandler)}>
      <h2>اطلاعات حساب کاربری</h2>
      <div>
        <div className={styles.inputContainer}>
          <span>شماره موبایل</span>
          {isEdit ? (
            <TextInput
              name="mobile"
              register={register}
              errors={errors}
              placeholder="شماره موبایل"
            />
          ) : (
            <p>{toPersianNumbers(user.mobile)}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <span>ایمیل</span>
          {isEdit ? (
            <TextInput
              name="email"
              register={register}
              errors={errors}
              placeholder="ایمیل"
            />
          ) : (
            <p>{user.email || "-"}</p>
          )}
        </div>
        <button type="submit">{isEdit ? "ویرایش" : "افزودن"}</button>
      </div>
    
    </form>
  );
}

export default AccountInformation;
