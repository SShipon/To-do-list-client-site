import React from "react";
import { toast } from "react-toastify";
import useTodos from "../../hook/useTodos";

const ShowTodo = ({ todo}) => {
  const { name, description, _id } = todo;
  const [todos , setTodos] = useTodos()
  const handleDelet = (id) => {
     const proceed = window.confirm("Are you sure you want to delet");
     if (proceed) {
       const url = `https://blooming-retreat-57207.herokuapp.com/todos/${id}`;
       fetch(url, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount > 0) {
             const remaining = todos.filter((todo) => todo._id !== id);
             setTodos(remaining);
             toast("Todos Deleted please refresh this page");
           }
         });
     }
   };
  
  return (
    <div>
      <div class="card  bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button onClick={()=>handleDelet(_id)} class="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTodo;
