const LOCAL_STORAGE_KEY = "inventoryData";

// Function to load items from local storage or use the default items if not present
export const loadItems = () => {
  const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedItems) {
    return JSON.parse(savedItems);
  } else {
    return [
      { id: 1, name: "IPhone 16 Pro Max", category: "Smartphone", quantity: 5 },
      { id: 2, name: "Macbook M4 Pro", category: "Laptop", quantity: 20 },
      { id: 3, name: "Samsung S24", category: "Smartphone", quantity: 2 },
      { id: 4, name: "Lenovo Legion 5i", category: "Laptop", quantity: 8 },
    ];
  }
};

// Function to save the inventory to local storage
export const saveItems = (items) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

// Function to add a new item to the inventory
export const addItem = (newItem) => {
  const items = loadItems();
  newItem.id = items.length + 1; // Generate a simple ID based on current length
  items.push(newItem);
  saveItems(items);
  return items;
};

// Function to delete an item by its ID
export const deleteItem = (id) => {
  let items = loadItems();
  items = items.filter((item) => item.id !== id);
  saveItems(items);
  return items;
};

// Function to update an existing item
export const updateItem = (updatedItem) => {
  let items = loadItems();
  console.log(updatedItem);

  const index = items.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    items[index] = updatedItem;
    saveItems(items);
  }
  return items;
};
