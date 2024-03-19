



const Info = ({edu, handlBook}) => {

      const  {images, title, author} = edu

    return (
        <div>


           <div className="card w-[300px] bg-base-100 shadow-xl">
             <figure className="px-10 pt-10">
               <img src={images} alt="Shoes" className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title">Type: {title} </h2>
               <p className=" text-2xl font-bold text-slate-400"> Book owner: {author} </p>
               <div className="card-actions">
                 <button onClick={() =>  handlBook(edu) } className="btn btn-primary">Read</button>
               </div>
             </div>
           </div>
           



            
        </div>
    );
};

export default Info;