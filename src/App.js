import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import Button from '@mui/material/Button';
import Home from './Section/Home/Home';
import Sections from './Section/Sections';
import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import Ainme from "../src/assets/images/animation_llpjzx1a.json"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);
  return (
    <>
 {isLoading ? (
        <div className="container mx-auto bg-black h-screen flex place-items-center items-center justify-center flex-col" style={{background:'#0D0630'}}>
        <Lottie animationData={Ainme} className="w-80  items-center justify-center  sm:mt-0 sm:w-96"
     />
          <p className="" style={{
              textAlign: 'center',
              fontFamily: "AsgardTrial",
              color: '#fff',
              fontWeight: "bold",
              fontSize:44,

            }}>Buffering...</p>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
