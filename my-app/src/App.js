import logo from './logo.svg';
import './App.css';
import Flipkart from "./Flipkart";
import Image from "./Image";
import Para from "./Para";
import FlipkartClass from "./FlipkartClass";
import ImageClass from "./ImageClass";
import ParaClass from "./ParaClass";
import ClassProp from './ClassProp';
import State from './State';
import Increment from "./Increment";
import Event from './Event';
import Hooks from "./Hooks"
function App() {
  return (
    <div className="App">
      <Hooks />
      <Event />
      <Increment />
      <State />
      <ClassProp brand ="audi" model ="s1" color="red" />
      <ClassProp brand ="ford" model ="mustang" color="yellow" />
      <ClassProp brand ="bmw" model ="sclass" color="white" />
      <Flipkart />
      <FlipkartClass />
      <Image />
      <Para />
      <ImageClass />
      <ParaClass />
    </div>
  );
}

export default App;
