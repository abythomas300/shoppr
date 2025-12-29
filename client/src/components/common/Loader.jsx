import Header from "../layout/Header"
function Loader() {
    return(
        <>
            <Header />
            <div class="fixed inset-0 z-50 flex items-center justify-center">
                <span className="loading loading-spinner loading-xl bg-primary"></span>
            </div>

        </>
    )
}

export default Loader