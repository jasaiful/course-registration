import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-6xl mx-auto gap-5 mt-3'>
        <Cards></Cards>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
