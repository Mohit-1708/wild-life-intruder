import React, { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
import LiveCamera from "./components/LiveCamera";
import SavedData from "./components/SavedData";
import AboutUs from "./components/AboutUs";

function App() {
  const [activeTab, setActiveTab] = useState(""); // Default to no active tab

  const renderTabContent = () => {
    switch (activeTab) {
      case "Weather":
        return <Weather />;
      case "Live Camera":
        return <LiveCamera />;
      case "Saved Data":
        return <SavedData />;
      case "About Us":
        return <AboutUs />;
      default:
        return <p>Please select a tab to view content.</p>; // Placeholder when no tab is selected
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1> NatureWatch </h1>
      </header>
      <nav className="tab-nav">
        {["Weather", "Live Camera", "Saved Data", "About Us"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <main className="tab-content">{renderTabContent()}</main>
    </div>
  );
}

export default App;
