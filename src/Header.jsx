



const Header = () => {
    return (
        <div className=" ">



                    <div className=" mt-5">      
                 
                              <div className="navbar bg-base-100">
                   <div className="flex-1">
                     <a className="btn btn-ghost text-2xl">World Education </a>
                   </div>
                   <div className="flex-none gap-2">
                     <div className="form-control">
                       <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                     </div>
                     <div className="dropdown dropdown-end">
                       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                         <div className="w-10 rounded-full">
                           <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/R0N37XF/training.png" />
                         </div>
                       </div>
                       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                         <li>
                           <a className="justify-between">
                             Profile
                             <span className="badge">New</span>
                           </a>
                         </li>
                         <li><a>Settings</a></li>
                         <li><a>Logout</a></li>
                       </ul>
                     </div>
                     </div>
                    </div>


             </div>


              {/* banner */}


           <div className=" ml-10 mr-10 mt-10">




                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/8MhgG0W/banner.jpg)'}}>
           <div className="hero-overlay bg-opacity-60"></div>
           <div className="hero-content text-center text-neutral-content">
             <div className="">
               <h1 className="mb-5 text-5xl font-bold">Education is the most powerful weapon which you can use to change the world.</h1>
               <p className="mb-5">The foundation of every state is the education of its youth.
               </p>
               <button className="btn btn-primary">Read more</button>
             </div>
           </div>
          </div>


           </div>



           <div className=" mt-16">


             <div className=" text-center">
               <h1 className=" text-4xl font-bold text-blue-500">Our Books Info</h1>
               <p className=" text-xl font-bold text-slate-400 mt-2"> The foundation of every state is the education of its youth. </p>


             </div>



           </div>




            
        </div>
    );
};

export default Header;