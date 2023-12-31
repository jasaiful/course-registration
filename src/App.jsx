import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [course, setCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [totalCoursePrice, setTotalCoursePrice] = useState(0)
  const handleToSelectCourse = card => {

    let courseCredit = card.credit;
    let totalPrice = card.price;
    const isExisting = course.find(course => course.id === card.id)

    if (isExisting) {
      toast.error('already selected!', {
        position: 'top-center'
      });
    }
    else {

      course.forEach((card) => {
        courseCredit += card.credit;
        totalPrice += card.price;
      });
      const totalRemaining = 20 - courseCredit;
      if (courseCredit > 20) {
        return toast.error('Credit hour finished', {
          position: 'top-right'
        });
      } else {
        setTotalCredit(courseCredit);
        setRemaining(totalRemaining);
        setTotalCoursePrice(totalPrice);
        const selectedCourse = [...course, card];
        setCourse(selectedCourse);
      }
    }

  }
  return (
    <>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <main className='max-w-7xl md:flex w-full mx-auto gap-5 mt-3'>
        <Cards
          handleToSelectCourse={handleToSelectCourse}

        ></Cards>
        <Cart
          course={course}
          totalCredit={totalCredit}
          remaining={remaining}
          totalCoursePrice={totalCoursePrice}
        ></Cart>
      </main>
    </>
  )
}

export default App
