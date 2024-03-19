import { useEffect } from "react";
import { useState } from "react";
import Info from "./Info";


const Edu = ({handlBook}) => {

     const [edu, setEdu] = useState([])


     useEffect(() => {

         fetch('edu.json')
         .then(res => res.json())
         .then(data => setEdu(data))

     } , [])




    return (
        <div className=" mt-16 grid grid-cols-2 gap-5">


           
             {

              edu.map( edu => <Info key={edu.id} edu={edu} handlBook={handlBook} >  </Info>  )

             }
             




            
        </div>
    );
};

export default Edu;