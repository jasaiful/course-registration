import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [course, setCourse] = useState([]);
  const [count, setCount] = useState(0)
  const handleToSelectCourse = card => {

    const existing = course.find(course => course.id === card.id)
    console.log(existing);

    if (existing) {
      toast.error('Duplicate Entry Found!', {
        position: 'top-center'
      });
    }
    else {
      const selectedCourse = [...course, card];
      setCourse(selectedCourse);
    }
  
  }
  return (
    <>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <main className='md:flex max-w-6xl mx-auto gap-5 mt-3'>
        <Cards
          handleToSelectCourse={handleToSelectCourse}
          setCount={setCount}
        ></Cards>
        <Cart
          course={course}
          count={count}
        ></Cart>
      </main>
    </>
  )
}

export default App
