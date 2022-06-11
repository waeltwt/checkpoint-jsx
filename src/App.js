import logo from './logo.svg';
import './App.css';
import img1 from "./pexels-photo-12052041.jpeg"
import "./style.css"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">touati wael</h1>
        <br />

        <img src={img1} width="500px" height="500px"/>
        <br />

        <img src="imageInPublic .jpg" width="500px" height="500px"/>
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
