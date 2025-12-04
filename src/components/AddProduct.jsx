import React, { useState } from "react";

export default function AddProduct({ setProducts }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    desc: "",
    price: "",
    img: null,
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setNewProduct((prev) => ({ ...prev, img: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const addProduct = () => {
    if (
      !newProduct.title ||
      !newProduct.desc ||
      !newProduct.price ||
      !newProduct.img
    ) {
      alert("Please fill all fields and upload an image");
      return;
    }

    setProducts((prev) => [...prev, { ...newProduct, id: prev.length + 1 }]);

    // Reset form
    setNewProduct({ title: "", desc: "", price: "", img: null });
  };

  return (
    <section className="bg-dark text-pink-500 py-24 px-6 md:px-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-accent">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
          className="mb-3 px-4 py-2 rounded-lg w-full md:w-1/2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.desc}
          onChange={(e) =>
            setNewProduct({ ...newProduct, desc: e.target.value })
          }
          className="mb-3 px-4 py-2 rounded-lg w-full md:w-1/2"
        />
        <input
          type="text"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="mb-3 px-4 py-2 rounded-lg w-full md:w-1/2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-3"
        />
        {newProduct.img && (
          <img
            src={newProduct.img}
            alt="Preview"
            className="mb-3 w-32 h-32 object-cover mx-auto rounded-xl"
          />
        )}
        <button
          onClick={addProduct}
          className="px-6 py-3 bg-accent text-dark font-bold rounded-full hover:bg-primary transition"
        >
          Add Product
        </button>
      </div>
    </section>
  );
}
