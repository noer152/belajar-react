import React from "react";
// import BelajarStyle from "./components/BelajarStyle";
// import BelajarCard from "./components/BelajarCard";
import Waktu from "./components/Waktu";
import TambahKurang from "./components/TambahKurang";
import TambahKurang2 from "./components/TambahKurang2";
import PengulanganKartuNama from "./components/PengulanganKartuNama";
import SideBar from "./components/SideBar";
import ConditionalRendering from "./components/ConditionalRendering";
import ComponentRenderList from "./components/ComponentRenderList";
import RenderList from "./components/RenderList";

function App() {
  return (
    <>
      <ConditionalRendering />
      <TambahKurang2 />
      <PengulanganKartuNama />
      <TambahKurang />
      <Waktu />
      <SideBar />
      <ComponentRenderList />
      <RenderList />
    </>
  );
}

export default App;
