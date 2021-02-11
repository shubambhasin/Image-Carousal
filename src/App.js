import Slider from "./components/Slider";
import { ImageData } from "./data/ImageData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Slider slides={ImageData}/>
    </div>
  );
}
