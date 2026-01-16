import Header from "../layout/Header"
function ResourceNotFound() {
    return(
        <>
            <Header />
            <div class="fixed inset-0 z-50 flex items-center justify-center">
                <span className="text-primary-content">
                    Something went wrong. Try again later.
                </span>
            </div>

        </>
    )
}

export default ResourceNotFound