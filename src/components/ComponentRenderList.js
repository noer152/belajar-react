import React from "react";

function ComponentRenderList() {
  const produks = [
    {
      id: 1,
      makanan: "Ayam",
      harga: 20000,
    },
    {
      id: 2,
      makanan: "pecel",
      harga: 22000,
    },
    {
      id: 3,
      makanan: "nasi goreng",
      harga: 16000,
    },
  ];
  return (
    <div>
      {produks.map(produk => (
        <div key={produk.id}>
          <h3>{produk.makanan}</h3>
          <p>{produk.harga}</p>
        </div>
      ))}
    </div>
  );
}

export default ComponentRenderList;
