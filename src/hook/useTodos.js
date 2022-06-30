const { useState, useEffect } = require("react")

const useTodos = () =>{
     const [todos , setTodos] = useState([])
     useEffect(() => {
       fetch("https://blooming-retreat-57207.herokuapp.com/todos")
         .then((res) => res.json())
         .then((data) => setTodos(data));
     }, [todos]);
     
     return [todos , setTodos]
}

export default useTodos;