function CarousalComponent() {
    return(
                   <div className="flex w-full h-75 bg-base-100">
                   <div className="carousel w-full">

                       <div id="slide1" className="carousel-item relative w-full ">
                           <img
                           src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889"
                           className="w-full object-cover" />
                           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                               <a href="#slide2" className="btn btn-ghost">❮</a>
                               <a href="#slide5" className="btn btn-ghost">❯</a>
                           </div>
                       </div>

                       <div id="slide2" className="carousel-item relative w-full">
                           <img
                           src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889"
                           className="w-full object-cover" />
                           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                               <a href="#slide3" className="btn btn-ghost">❮</a>
                               <a href="#slide1" className="btn btn-ghost">❯</a>
                           </div>
                       </div>

                       <div id="slide3" className="carousel-item relative w-full">
                           <img
                           src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889"
                           className="w-full object-cover" />
                           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                               <a href="#slide4" className="btn btn-ghost">❮</a>
                               <a href="#slide2" className="btn btn-ghost">❯</a>
                           </div>
                       </div>

                       <div id="slide4" className="carousel-item relative w-full">
                           <img
                           src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889"
                           className="w-full object-cover" />
                           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                               <a href="#slide5" className="btn btn-ghost">❮</a>
                               <a href="#slide3" className="btn btn-ghost">❯</a>
                           </div>
                       </div>

                       <div id="slide5" className="carousel-item relative w-full">
                           <img
                           src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889"
                           className="w-full object-cover" />
                           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                               <a href="#slide1" className="btn btn-ghost">❮</a>
                               <a href="#slide4" className="btn btn-ghost">❯</a>
                           </div>
                       </div> 

                   </div>
               </div>

    )
}

export default CarousalComponent