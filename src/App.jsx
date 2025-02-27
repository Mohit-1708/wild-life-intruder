import React, { useState } from "react";
import Weather from "./components/Weather";
import LiveCamera from "./components/LiveCamera";
import SavedData from "./components/SavedData";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
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
      {/* Show Login page if not authenticated */}
      {!isAuthenticated ? (
        <Login setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <>
          <header>
            <h1> Self-Power WildLife Intruder </h1>
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
        </>
      )}
    </div>
  );
}

export default App;
