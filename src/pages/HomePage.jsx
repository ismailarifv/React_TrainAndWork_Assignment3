import Banner from "../components/Banner/Banner"
import BannerFeature from "../components/BannerFeature/BannerFeature"
import BannerTwo from "../components/BannerTwo/BannerTwo"
import BlogArea from "../components/BlogArea/BlogArea"
import CategoryFeature from "../components/CategoryFeature/CategoryFeature"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Products from "../components/Products/Products"
import Slider from "../components/Slider/Slider"


function HomePage() {
  return (
    <>
    <Header/>
    <Slider/>
    <Banner/>
    <Products/>
    <BannerFeature/>
    <CategoryFeature/>
    <BannerTwo/>
    <BlogArea/>
    <Footer/>
    </>
  )
}

export default HomePage