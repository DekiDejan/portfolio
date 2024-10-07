import Features from "./components/Features";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * 1000) + 2000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, randomNumber);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default App;
