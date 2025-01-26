import React from "react";
import Header from "../components/header.component";
import ItemForm from "../components/item-form.components";

function UpsertProduct() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1.5rem" }}>
        <ItemForm />
      </main>
    </div>
  );
}

export default UpsertProduct;
