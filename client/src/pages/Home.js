import Hero from "../components/Hero";
import VisionMission from "../components/VisionMission";
import BestSellers from "../components/BestSellers";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
    return ( 
        <div className="bg-grey-100">
           <Hero /> 
           <BestSellers />
           <GetInTouch />
           <VisionMission />
        </div>
     );
}
 
export default Home;