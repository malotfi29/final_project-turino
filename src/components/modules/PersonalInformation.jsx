import { useState } from "react";
import styles from "./AccountInformation.module.css";
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
    if (!isEdit) {
      reset({
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        nationalCode: user.nationalCode,
        gender: user.gender,
        birthDate: user.birthDate ? new Date(user.birthDate) : null,
      });
      setIsEdit(true);
      return;
    }
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
      <div>
        <h2>اطلاعات شخصی</h2>
        <button type="submit">{isEdit ? "ویرایش" : "افزودن"}</button>
      </div>
      <div>
        <div className={styles.inputContainer}>
          <span>نام و نام خانوادگی</span>
          {isEdit ? (
            <TextInput
              name="name"
              register={register}
              errors={errors}
              placeholder="نام و نام خانوادگی"
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
          <span>کدملی</span>
          {isEdit ? (
            <TextInput
              name="nationalCode"
              register={register}
              errors={errors}
              placeholder="کدملی"
            />
          ) : (
            <p>{toPersianNumbers(user.nationalCode) || "-"}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <span>جنسیت</span>
          {isEdit ? (
            <select
              className={styles.selectGender}
              id="gender"
              {...register("gender")}
            >
              <option value="">جنسیت</option>
              <option value="female">زن</option>
              <option value="male">مرد</option>
              <option value="other">سایر</option>
            </select>
          ) : (
            <p>
              {user.gender === "female"
                ? "زن"
                : user.gender === "male"
                  ? "مرد"
                  : "سایر" || "-"}
            </p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <span>تاریخ تولد</span>
          {isEdit ? (
            <Controller
              control={control}
              name="birthDate"
              id="birthDate"
              render={({ field }) => (
                <DatePicker
                  locale="fa"
                  round="x4"
                  accentColor="#6374ae"
                  direction="bottom"
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
                ? new Date(user.birthDate).toLocaleDateString("fa-Ir")
                : "-"}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default PersonalInformation;
