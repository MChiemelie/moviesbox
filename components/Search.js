import { useState, useEffect } from "react";
// import Modal from "./Featured";

export default function Featured() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [launchSuccess, setLaunchSuccess] = useState("");
  const [landSuccess, setLandSuccess] = useState("");

  useEffect(() => {
    const offset = (currentPage - 1) * 12;
    const apiUrl = `https://api.spacexdata.com/v3/launches?limit=12&offset=${offset}&launch_success=${launchSuccess}&land_success=${landSuccess}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error("Error fetching data:", error));
  }, [currentPage, launchSuccess, landSuccess]);

  const handleCurrentPage = page => {
    setCurrentPage(page);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Featured Movies</h2>
        <span className="text-pink-600 flex items-center">See more
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">

      </div>
    </div>
  );
}