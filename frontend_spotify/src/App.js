// import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './output.css';
import LoginComponent from './routes/Login';
import SignupComponent from "./routes/Signup";


function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      
      <BrowserRouter>
        <Routes>
          {/* Adding routes */}
          {/* <Route path="/" element={ <HelloComponent/>}/> */}

          <Route path="/" element={ <LoginComponent/>}/>

          <Route path="/signup" element={ <SignupComponent/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const HelloComponent=()=>{
//   return <div>This is hello from component</div>;
// }
export default App;
