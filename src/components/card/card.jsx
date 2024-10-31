import React from "react";
import { useDispatch } from "react-redux";
const Card = ({ firstName, lastName, id }) => {
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      id,
    });
  };
  const editUser = (id) => {
    const firstName = prompt("Enter new name");
    const lastName = prompt("Enter new last name");
    dispatch({
      type: "EDIT_USER",
      id,
      value: {
        firstName: firstName,
        lastName: lastName,
      },
    });
  };
  return (
    <div className="w-[400px] border-[2px] border-slate-900 p-[12px] rounded-[8px]">
      <div className="mb-[10px] text-center">
        <p className="text-slate-900 text-[20px]">{firstName}</p>
        <p className="text-slate-900 text-[20px]">{lastName}</p>
      </div>
      <button
        className="bg-slate-900 text-white p-[10px] rounded-[10px] mb-[10px] w-full block"
        onClick={() => deleteUser(id)}
      >
        Delete
      </button>
      <button
        className="bg-slate-900 text-white p-[10px] rounded-[10px] mb-[10px] w-full  block"
        onClick={() => editUser(id)}
      >
        Edit
      </button>
    </div>
  );
};

export default Card;
