import HeroSection from "./HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import FourthContent from "./FourthContent";


function Home(){
  return(
    <div className="container-fluid " style={{margin:"0px", padding:"0px"}}>
      <HeroSection/>
      <SecondContent/>
      <ThirdContent/>
      <FourthContent />
    </div>
  )
}
export default Home;