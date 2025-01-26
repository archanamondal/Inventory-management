import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadItems, deleteItem } from "../services/inventory.service";

function InventoryTable() {
  const [items, setItems] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const items = loadItems();
    setItems(items);
  }, []);

  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  // Filter items based on category
  const filteredItems = items?.filter(
    (item) => categoryFilter === "" || item.category === categoryFilter
  );

  // Sort items by quantity
  const sortedItems = filteredItems?.sort((a, b) =>
    sortAscending ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  // Delete item
  const handleDelete = (id) => {
    const updatedItems = deleteItem(id);
    setItems(updatedItems);
  };

  // Edit item
  const handleEdit = (id) => {
    navigate(`/add/${id}`); // Navigate to the edit item form
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>Inventory</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "flex-start",
          }}
        >
          <div>
            <div>
              <label>Filter by Category:</label>
              <select
                onChange={(e) => setCategoryFilter(e.target.value)}
                value={categoryFilter}
                style={{ marginLeft: "0.5rem" }}
              >
                <option value="">All</option>
                {[...new Set(items.map((item) => item.category))].map(
                  (item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <button onClick={handleSort}>
              Sort by Quantity {sortAscending ? "Ascending" : "Descending"}
            </button>
          </div>
          <div>
            <Link
              to="/add"
              style={{
                background: "green",
                textDecoration: "none",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Add Item
            </Link>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: item.quantity < 10 ? "#f8d7da" : "white",
                }}
              >
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;
