import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database"; 
import { db } from "../firebase"; 

const SavedData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reference to the "animaldetection" node in your Realtime Database
    const dataRef = ref(db, "animaldetection");

    // Listen for changes in the Realtime Database
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val(); // Get the data from the snapshot

      if (value) {
        // If data exists, convert the object to an array using Object.values
        const dataArray = Object.values(value);
        setData(dataArray); // Set the data to state
      } else {
        console.log("No data available.");
        setData([]); // If no data, set an empty array
      }

      setLoading(false); // Stop loading once the data is fetched
    });

    // Clean up the listener when the component unmounts
    return () => {
      setData([]);
      setLoading(true);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  if (loading) {
    return <p>Loading saved data...</p>;
  }

  return (
    <div className="saved-data">
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>Animal:</strong> {item.animal} <br />
              <strong>Detected at:</strong> {item.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default SavedData;
