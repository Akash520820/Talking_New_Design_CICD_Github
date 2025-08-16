import HeroSection from "./HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import FourthContent from "./FourthContent";
import FifthContent from "./FifthContent";
import SixthContent from "./SixthContent";
import SeventhContent from "./SeventhContent";
import EightComponent from "./EightComponent";
import NinethComponent from "./NinethComponent";
import TenthComponent from "./TenthComponent";

function Home(){
  return(
    <div className="container-fluid " style={{margin:"0px", padding:"0px"}}>
      <HeroSection/>
      <SecondContent/>
      <ThirdContent/>
      <FourthContent />
      <FifthContent />
      <SixthContent />
      <SeventhContent />
      <EightComponent />
      <NinethComponent />
      <TenthComponent />
    </div>
  )
}
export default Home;