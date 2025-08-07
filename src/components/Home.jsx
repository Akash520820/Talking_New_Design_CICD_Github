import HeroSection from "./HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import FourthContent from "./FourthContent";
import FifthContent from "./FifthContent";
import SixthContent from "./SixthContent";


function Home(){
  return(
    <div className="container-fluid " style={{margin:"0px", padding:"0px"}}>
      <HeroSection/>
      <SecondContent/>
      <ThirdContent/>
      <FourthContent />
      <FifthContent />
      <SixthContent />
    </div>
  )
}
export default Home;