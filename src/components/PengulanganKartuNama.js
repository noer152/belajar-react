import React, { Component } from "react";
import BelajarCard from "./BelajarCard";
import BelajarCard2 from "./BelajarCard2";

export default class PengulanganKartuNama extends Component {
  constructor() {
    super();
    this.state = {
      siswa: [
        { id: 1, nama: "Suryo Hastomo", status: "Programer" },
        { id: 2, nama: "Soerjo Hastomo", status: "Mahasiswa" },
        { id: 3, nama: "Ryo Moto", status: "Pelajar" },
      ],
      pegawai: [
        { id: 1, nama: "Suryo Hastomo", status: "Manager" },
        { id: 2, nama: "Soerjo Hastomo", status: "SPV" },
        { id: 3, nama: "Ryo Moto", status: "Developer" },
        { id: 4, nama: "Bujank Soerjo", status: "Freelancer" },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.siswa.map(orang => (
          <BelajarCard key={orang.id} nama={orang.nama} status={orang.status} />
        ))}
        <hr />
        {this.state.pegawai.map(pekerja => (
          <BelajarCard2
            key={pekerja.id}
            nama={pekerja.nama}
            status={pekerja.status}
          />
        ))}
      </div>
    );
  }
}
