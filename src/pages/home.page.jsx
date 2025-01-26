import React from "react"
import Header from "../components/header.component"
import InventoryTable from "../components/inventory-table.component"

function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1.5rem" }}>
        <h2 style={{ textAlign: "center" }}>Welcome to the Inventory Management App</h2>
        <InventoryTable />
      </main>
    </div>
  )
}

export default Home
