import "./App.css";
import Ribbon from "./component/Ribbon";
import Navbar from "./component/Navbar";
import { ChakraProvider , Divider } from '@chakra-ui/react';
import Frame1 from "./component/frame1";
import StickyNavbar from "./component/StickyNavbar";
import Frame2 from "./component/frame2";
import Frame3 from "./component/frame3";
import Frame4 from "./component/frame4";
import Frame5 from "./component/Frame5/Frame5";
import Frame6 from "./component/frame6";
import Frame7 from "./component/frame7";
import Frame8 from "./component/frame8/frame8";
import Frame9 from "./component/frame9";
import Frame10 from "./component/frame10";
import Frame11 from "./component/frame11";
import Frame12 from "./component/frame12";
import Frame13 from "./component/frame13";
import Frame14 from "./component/frame14";
const App = () => {
  return (
    <ChakraProvider>
      <Ribbon />
      <Navbar />
      <Frame1 />
      <StickyNavbar />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </ChakraProvider>
  );
};

export default App;
