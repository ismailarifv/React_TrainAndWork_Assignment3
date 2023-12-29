import Banner from "../components/Banner/Banner"
import BannerFeature from "../components/BannerFeature/BannerFeature"
import BannerTwo from "../components/BannerTwo/BannerTwo"
import BlogArea from "../components/BlogArea/BlogArea"
import CategoryFeature from "../components/CategoryFeature/CategoryFeature"
import Products from "../components/Products/Products"
import Slider from "../components/Slider/Slider"


function HomePage() {
  return (
    <>
    
    <Slider/>
    <Banner/>
    <Products/>
    <BannerFeature/>
    <CategoryFeature/>
    <BannerTwo/>
    <BlogArea/>
    
    </>
  )
}

export default HomePage