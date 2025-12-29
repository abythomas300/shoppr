function CategoryBanner({imageLink}) {
    console.log(imageLink)
    return(
        <>
            <div className="flex w-full h-90 bg-base-100 my-0">
                <div className="w-full carousel">
                    <img 
                    src={imageLink}
                    alt="category-name-banner-image" 
                    className="w-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default CategoryBanner