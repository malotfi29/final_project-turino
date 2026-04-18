import { useState } from "react";
import styles from "./PersonalInformation.module.css";
import { useAuth } from "@/providers/AuthContext";
import { useForm } from "react-hook-form";
import TextInput from "@/ui/TextInput";
import { toPersianNumbers } from "@/utils/toPersionNumber";

function BankInformation() {
  const [isEdit, setIsEdit] = useState(false);
  const { user, editUser } = useAuth();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editHandler = async (data) => {
    // if (!isEdit) {
    //   reset({
    //     shaba_code:user.payment?.shaba_code || null,
    //     debitCard_code:user.payment?.debitCard_code || null,
    //     accountIdentifier:user.payment?.accountIdentifier || null
    //   });
    //   setIsEdit(true);
    //   return;
    // }
    try {
      await editUser({ payment: { ...data } });
      reset(data);
      setIsEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(editHandler)}>
      <div className={styles.title}>
        <h2>اطلاعات حساب بانکی</h2>
        {!isEdit && <button onClick={() => setIsEdit(true)}>ویرایش</button>}
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.inputContainer}>
          {!isEdit && <span>شماره شبا</span>}

          {isEdit ? (
            <TextInput
              name="shaba_code"
              register={register}
              errors={errors}
              placeholder="شماره شبا"
            />
          ) : (
            <p>{user.payment?.shaba_code ? toPersianNumbers(user.payment.shaba_code) : "-"}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          {!isEdit && <span>شماره حساب</span>}

          {isEdit ? (
            <TextInput
              name="debitCard_code"
              register={register}
              errors={errors}
              placeholder="شماره حساب"
            />
          ) : (
            <p>
              {user.payment?.debitCard_code ? toPersianNumbers(user.payment.debitCard_code) : "-"}
            </p>
          )}
        </div>
        <div className={styles.inputContainer}>
          {!isEdit && <span>شماره کارت</span>}

          {isEdit ? (
            <TextInput
              name="accountIdentifier"
              register={register}
              errors={errors}
              placeholder="شماره کارت"
            />
          ) : (
            <p>
              {user.payment?.accountIdentifier
                ?toPersianNumbers( user.payment.accountIdentifier)
                : "-"}
            </p>
          )}
        </div>
      </div>
      {isEdit && (
        <div className={styles.control}>
          <button className="button-primary" type="submit">
            افزودن
          </button>
          <button className="button-secondary" onClick={() => setIsEdit(false)}>
            انصراف
          </button>
        </div>
      )}
    </form>
  );
}

export default BankInformation;
