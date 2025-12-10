import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BannerCarousal from '../components/layout/BannerCarousal' 
import TopDealCards from '../components/layout/TopDealCards'    
import CategoryBar from '../components/layout/CategoryBar'

function Homepage() {

    // // Carousal Sample Data
    // const sampleProducts = [
    //     {
    //       id: 1,
    //       name: "JBL Storm 3 Wireless Headphones",
    //       description: "Noise-cancelling with 20 hours of playtime.",
    //       price: 2499,
    //       image: "https://images.unsplash.com/photo-1723961617032-ef69c454cb31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    //     },
    //     {
    //       id: 2,
    //       name: "Casio Ediface SM-990 Smart Watch",
    //       description: "Track your fitness and stay connected.",
    //       price: 4999,
    //       image: "https://images.unsplash.com/photo-1750776100861-30c172651817?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=844",
    //     },
    //     {
    //       id: 3,
    //       name: "Logitech GM-476 Gaming Mouse",
    //       description: "RGB lighting, ergonomic design.",
    //       price: 8599,
    //       image: "https://images.unsplash.com/photo-1694175640153-00c83f4a36ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
    //     },
    //     {
    //       id: 4,
    //       name: "Apple iMac Pro 4k Retina Display Monitor",
    //       description: "Ultra HD display with vivid colors.",
    //       price: 79999,
    //       image: "https://images.unsplash.com/photo-1635183277995-47c65398921d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    //     },
    //   ];

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