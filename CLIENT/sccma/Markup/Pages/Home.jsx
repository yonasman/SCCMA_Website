import MyCarousel from "../Components/Carousel/MyCarousel"
import Cause from "../Components/Cause/Cause"
import FoundationHistory from "../Components/FoundationHistory/FoundationHistory"
import Justification from "../Components/Justification/Justification"
import RotatingCards from "../Components/RotatingCards/RotatingCards"
import Services from "../Components/Services/Services"

function Home() {
  return (
    <>
      <MyCarousel/>
      <FoundationHistory/>
      <Services/>
      <Justification/>
      <Cause/>
      <RotatingCards/>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </>
  )
}

export default Home
