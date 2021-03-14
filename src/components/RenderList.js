import React, { Component } from "react";
import ListMinuman from "./ListMinuman";
import "./renderList.css";

export class RenderList extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: "Soerjo",
      menuMakanan: [
        {
          nama: "Ayam Bakar",
          harga: "25000",
          stock: 10,
        },
        {
          nama: "Nasi Goreng",
          harga: "22000",
          stock: 0,
        },
      ],
      menuMinuman: [
        {
          nama: "Juice Melon",
          harga: 15000,
          stock: 15,
        },
        {
          nama: "Milkshake Strawberry",
          harga: 20000,
          stock: 10,
        },
        {
          nama: "Juice Tomat",
          harga: 15000,
          stock: 18,
        },
        {
          nama: "juice Mangga",
          harga: 18000,
          stock: 15,
        },
        {
          nama: "juice Alpukat",
          harga: 13000,
          stock: 10,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Componen RenderList</h1>
        <div className="isiComponentMinuman">
          <br />
          {this.state.menuMinuman.map((minuman, index) => (
            <ListMinuman
              key={index}
              nama={minuman.nama}
              harga={minuman.harga}
              stock={minuman.stock}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default RenderList;
