import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addItem, updateItem, loadItems } from "../services/inventory.service";

function ItemForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const items = loadItems();
      const itemToEdit = items.find((item) => item.id === parseInt(id));
      if (itemToEdit) {
        setName(itemToEdit.name);
        setCategory(itemToEdit.category);
        setQuantity(itemToEdit.quantity);
        setIsEditing(true);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      category,
      quantity: parseInt(quantity),
      id: parseInt(id) ?? null,
    };

    if (newItem.id) {
      updateItem(newItem);
    } else {
      addItem(newItem);
    }
    navigate("/");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">
          {isEditing ? "Update Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
