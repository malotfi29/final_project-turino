import { useState } from "react";
import styles from "./PersonalInformation.module.css";
import { useAuth } from "@/providers/AuthContext";
import { useForm, Controller } from "react-hook-form";
import TextInput from "@/ui/TextInput";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import { DatePicker } from "zaman";

function PersonalInformation() {
  const [isEdit, setIsEdit] = useState(false);
  const { user, editUser } = useAuth();

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formatToYMD = (date) => {
    if (!date) return;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const editHandler = async (data) => {
 
    try {
      const [firstName, lastName] = data.name.split(" ");
      const birthDate = formatToYMD(data.birthDate?.value);
      const editedData = {
        ...data,
        firstName,
        lastName,
        birthDate,
      };
      delete editedData.name;
      await editUser(editedData);
      reset(data);
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(editHandler)}>
      <div className={styles.title}>
        <h2>Personal Information</h2>
        {!isEdit && <button  onClick={()=>setIsEdit(true)}>Edit</button>}
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.inputContainer}>
          {!isEdit && <span>Full Name</span>}

          {isEdit ? (
            <TextInput
              name="name"
              register={register}
              errors={errors}
              placeholder="Full Name"
            />
          ) : (
            <p>
              {user.firstName && user.lastName
                ? user.firstName + " " + user.lastName
                : "-"}
            </p>
          )}
        </div>
        <div className={styles.inputContainer}>
          {!isEdit && <span>National ID</span>}

          {isEdit ? (
            <TextInput
              name="nationalCode"
              register={register}
              errors={errors}
              placeholder="National ID"
            />
          ) : (
            <p>{user.nationalCode || "-"}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          {!isEdit && <span>Gender</span>}

          {isEdit ? (
            <select
              className={styles.selectGender}
              id="gender"
              {...register("gender")}
            >
              <option value="">Gender</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          ) : (
            <p>
              {user.gender === "female"
                ? "female"
                : user.gender === "male"
                  ? "male"
                  : "other" || "-"}
            </p>
          )}
        </div>
        <div
          className={`${styles.inputContainer } ${isEdit&&styles.birthDate}`}
        >
          <span>Date of Birth</span>

          {isEdit ? (
            
            <Controller
              control={control}
              name="birthDate"
              id="birthDate"
              render={({ field }) => (
                <DatePicker
                  locale="en"
                  round="x4"
                  accentColor="#6374ae"
                  direction="rtl"
                  position="center"
                  maxDate={new Date()}
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                />
              )}
            />
            
          ) : (
            <p>
              {user.birthDate
                ? new Date(user.birthDate).toLocaleDateString("en-US")
                : "-"}
            </p>
          )}
        </div>
      </div>
      {isEdit && (
        <div className={styles.control}>
          <button className="button-primary" type="submit">
            Add
          </button>
          <button className="button-secondary" onClick={()=>setIsEdit(false)}>Cancel</button>
        </div>
      )}
    </form>
  );
}

export default PersonalInformation;
