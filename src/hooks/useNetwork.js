import { useState, useEffect } from "react";

// Custom hook to detect network information
const useNetworkInfo = () => {
  const [networkInfo, setNetworkInfo] = useState({
    online: navigator.onLine,
    rtt: null,
    type: null,
    downlink: null,
    saveData: null,
  });

  useEffect(() => {
    const updateNetworkInfo = () => {
      if (navigator.connection) {
        setNetworkInfo({
          online: navigator.onLine,
          rtt: navigator.connection.rtt,
          type: navigator.connection.type,
          downlink: navigator.connection.downlink,
          saveData: navigator.connection.saveData,
        });
      }
    };

    // Add event listeners for online and offline events
    window.addEventListener("online", updateNetworkInfo);
    window.addEventListener("offline", updateNetworkInfo);

    // Call the function to update the state initially
    updateNetworkInfo();

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("online", updateNetworkInfo);
      window.removeEventListener("offline", updateNetworkInfo);
    };
  }, []);

  return networkInfo;
};

export default useNetworkInfo;
