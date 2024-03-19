
import { useState } from 'react'
import './App.css'
import Edu from './Edu'
import Header from './Header'
import Information from './Information'

function App() {

    const [book, setBook] = useState([])

    const handlBook = edu =>  {

      const newBook = [...book, edu]

       setBook(newBook)

    }



  return (
    <>
     
      <Header></Header>

      <div className=' flex gap-10 justify-center'>


      <Edu handlBook={handlBook} ></Edu>
      <Information book={book}  ></Information>

      </div>

     
    </>
  )
}

export default App

