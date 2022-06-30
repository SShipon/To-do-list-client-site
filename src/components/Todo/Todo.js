import { NavLink } from 'react-router-dom';
import useTodos from '../../hook/useTodos';
import ShowTodo from './ShowTodo';

const Todo = () => {
     const [todos , setTodos] = useTodos()
     return (
          <div>
            <h2 className='text-center text-2xl text-gray-600 font-bold'>Todos</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 mt-6 '>
                 {
                      todos.map(todo => <ShowTodo  todo={todo} key={todo._id}></ShowTodo>)
                 }

            </div>
            <div className='text-center mt-10'>

            <NavLink to="/addtodo">
            <button class="btn">Add Todo</button>

            </NavLink>
            </div>
          </div>

     );
};

export default Todo;