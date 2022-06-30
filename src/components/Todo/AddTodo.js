import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTodo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const url = `https://blooming-retreat-57207.herokuapp.com/todo`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast('Todos Added')
      });
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Todo</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered  w-full max-w-xs"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                {...register("description")}
                className="input input-bordered input-lg w-full max-w-xs"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-wide mt-3">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
