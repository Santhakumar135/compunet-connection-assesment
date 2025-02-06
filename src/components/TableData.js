import React from "react";

const TableData = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-4xl overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Data</th> 
            <th className="py-3 px-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="py-3 px-4">
                <ul>
                  {Object.entries(item.data).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="py-3 px-4">
                {item.description ? (
                  <ul>
                    <li>
                      <strong>Positive:</strong> {item.description.positive || "N/A"}
                    </li>
                    <li>
                      <strong>Negative:</strong> {item.description.negative || "N/A"}
                    </li>
                  </ul>
                ) : (
                  <span>No description available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
