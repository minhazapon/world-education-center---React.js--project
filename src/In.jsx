



const In = ({book}) => {

    const {title, author} = book;

    return (
        <div className=" flex gap-10 items-center">

                <h1 className=" text-xl font-bold text-slate-400" > {title}  </h1>
                <h1 className=" text-xl font-bold text-slate-400"  > {author} </h1>
            
        </div>
    );
};

export default In;