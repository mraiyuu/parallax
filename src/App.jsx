import { Navbar, Footer, MiddleSection } from "./Components";
import robot from "./assets/robot.jpg";
import hand from './assets/hand.jpg'
import city from './assets/city.webp'
function App() {
  return (
    <div className="overflow-hidden">
    <img src={city} className="absolute top-[370px]"/>
      <Navbar />
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${robot})` }}
      >
        <div className="h-[600px] bg-opacity-75 flex justify-center pt-[80px]"></div>
      </div>
      <div className="w-screen h-[400px] bg-[#59749B]">
        <MiddleSection />
      </div>
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${hand})` }}
      >
        <div className="h-[600px] bg-opacity-75 flex justify-center pt-[80px]"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
