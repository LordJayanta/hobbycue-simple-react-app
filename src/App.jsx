import Header from "./components/Header"
import FeatureSection from "./screens/FeatureSection"
import ListingSection from "./screens/ListingSection"
import HeroSection from "./screens/HeroSection"
import TestimonialSection from "./screens/TestimonialSection"
import Footer from "./components/Footer"
import CommunitySection from "./screens/CommunitySection"


function App() {

  return (
    <>
      <Header />
      <HeroSection/>
      <FeatureSection/>
      <ListingSection/>
      <TestimonialSection/>
      <CommunitySection/>
      <Footer/>
    </>
  )
}

export default App
