import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  const [course, setCourse] = useState([]);

  const handleToSelectCourse = card =>{
    console.log(course.length);
    const selectedCourse = [...course, card];
    setCourse(selectedCourse);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-6xl mx-auto gap-5 mt-3'>
        <Cards
        handleToSelectCourse={handleToSelectCourse}
        ></Cards>
        <Cart
        course={course}
        ></Cart>
      </main>
    </>
  )
}

export default App
