import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const sumbit = (data) => {
    dispatch({
      type: "ADD_USER",
      value: {
        ...data,
        id: nanoid(),
      },
    });
    reset();
  };
  return (
    <div>
      <form
        className="flex flex-col gap-[15px]"
        onSubmit={handleSubmit(sumbit)}
      >
        <input
          className="shadow-md border-[2px] border-slate-900 p-[12px] rounded-[16px] w-[400px]"
          {...register("firstName")}
        />
        <input
          className="shadow-md border-[2px] border-slate-900 p-[12px] rounded-[16px] w-[400px]"
          {...register("lastName")}
        />
        <button
          className="w-[400px] shadow-lg bg-slate-900 text-white p-[12px] rounded-[16px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
