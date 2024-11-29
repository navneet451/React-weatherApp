import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null);
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Search setWeatherDetails={setWeatherDetails} />
        {weatherDetails && <WeatherCard weatherDetails={weatherDetails} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
