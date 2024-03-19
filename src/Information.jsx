import In from "./In";




const Information = ({book}) => {
    return (
        <div>
            
             <div className=" mt-16">

               <h1 className=" text-2xl font-bold text-blue-500"> Book Information: {book.length} </h1>


             </div>

              
              <div className=" flex gap-40 items-center mt-10">

                <h1 className=" text-xl font-bold" > title:  </h1>
                <h1 className=" text-xl font-bold"  > author:  </h1>



              </div>





           {
              book.map( book => <In key={book.id} book={book} >  </In>  )


           }


            
        </div>
    );
};

export default Information;