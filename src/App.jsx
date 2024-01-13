import { Navbar, Footer, MiddleSection } from "./Components";
import robot from "./assets/robot.jpg";
import hand from './assets/hand.jpg'
function App() {
  return (
    <>
      <Navbar />
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${robot})` }}
      >
        <div className="h-[600px] bg-opacity-75 flex justify-center pt-[80px]"></div>
      </div>
      <div className="w-screen h-[400px] bg-blue-500">
        <MiddleSection />
      </div>
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${hand})` }}
      >
        <div className="h-[600px] bg-opacity-75 flex justify-center pt-[80px]"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;