import React from 'react';
import Footer from '../Shared/Footer/Footer.jsx';
import Todo from '../Todo/Todo';
import './Home.css'
const Home = () => {
     return (
       <section className='bg-background'>
         <div className="lg:p-10">
           <Todo />
        
         </div>
       </section>
     );
};

export default Home;