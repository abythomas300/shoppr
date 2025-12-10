function CarousalComponent() {
    
    const bannerImages = [
        "https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889",
        "https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889",
        "https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889",
        "https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889",
    ]
    
    
    return(
                   <div className="flex w-full h-90 bg-base-100 my-0">
                   <div className="carousel w-full">

                        {
                            bannerImages.map((bannerImageLink, index)=>{
                                return(
                                    <div id={`slide${index+1}`} className="carousel-item relative w-full ">
                                    <img
                                    src = {bannerImageLink}
                                    className="w-full object-cover" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href={index+1===1? `#slide4`: `#slide${index}`} className="btn btn-ghost">❮</a>
                                        <a href={index+1===4? `#slide1`: `#slide${index+2}`} className="btn btn-ghost">❯</a>
                                    </div>
                                </div> 
                                )
                            })
                        }

                   </div>
               </div>

    )
}

export default CarousalComponent