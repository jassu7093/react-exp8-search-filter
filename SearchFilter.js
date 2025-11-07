import React, { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data (list of names)
  const students = [
    "Riya",
    "John",
    "Sara",
    "Amit",
    "Meena",
    "Rahul",
    "Priya",
    "David",
  ];

  // Filter logic: matches partial or full name (case-insensitive)
  const filteredStudents = students.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🔍 Search Filter Example</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: "200px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredStudents.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {filteredStudents.map((name, index) => (
              <li
                key={index}
                style={{
                  padding: "6px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                  margin: "5px auto",
                  width: "180px",
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching names found ❌</p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
