import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CategoryBar from '../components/layout/CategoryBar'
import CategoryTopDealCards from '../components/layout/CategoryTopDealCards'

function CategoryPage() {
    return(
        <>
            <Header />
            <CategoryBar />
            <CategoryTopDealCards />
            <Footer />
        </>
    )
}

export default CategoryPage