import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerCarousal from '../components/layout/BannerCarousal' 
import TopDealCards from '../components/layout/TopDealCards'    
import CategoryBar from '../components/layout/CategoryBar'

function Homepage() {

    return(
        <>
            <Header />
            <CategoryBar/>
            <BannerCarousal/>
            <TopDealCards/>
            <Footer />
        </>
    )
}

export default Homepage