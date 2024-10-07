import Navbar from "./layout/Navbar";
import Home from "./views/Home" ;
import Props from "./views/Props";
import Input from "./components/Input";
import ImageSearch from './components/ImgSearch';

function App() {
  return (
    <div className="p-4">
      <ImageSearch />

      {/* <Navbar />
      <Props />
      <div className="flex w-full">
        <Home />
        <Input />
      </div> */}
    </div>
  );
}
export default App;