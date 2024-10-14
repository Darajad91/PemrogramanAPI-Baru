import React from "react";
import hpData from "../../public/data/HPJason.json";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IHP {
  IdHP: number;
  Nama: string;
  Merek: string;
  Prosesor: string;
  RAM: number;
  Penyimpanan: number;
  KameraDepan: number;
  KameraBelakang: number;
  Baterai: number;
  Layar: string;
  Harga: number;
}

const HPList = () => {
  // Konversi tipe data dari JSON yang diimpor
  const hps: IHP[] = (hpData as { HP: IHP[] }).HP.map((hp) => ({
    IdHP: parseInt(hp.IdHP.toString()),
    Nama: hp.Nama,
    Merek: hp.Merek,
    Prosesor: hp.Prosesor,
    RAM: parseInt(hp.RAM.toString()),
    Penyimpanan: parseInt(hp.Penyimpanan.toString()),
    KameraDepan: parseInt(hp.KameraDepan.toString()),
    KameraBelakang: parseInt(hp.KameraBelakang.toString()),
    Baterai: parseInt(hp.Baterai.toString()),
    Layar: hp.Layar,
    Harga: parseFloat(hp.Harga.toString())
  }));

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">SPESIFIKASI HP</h1>
      {hps.map((hp) => (
        <CardList key={hp.IdHP}>
          <p>{hp.Nama}</p>
          <i>
            Merek dan Prosesor: {hp.Merek} & {hp.Prosesor}
          </i>
          <p>RAM: {hp.RAM} GB</p>
          <p>Penyimpanan: {hp.Penyimpanan} GB</p>
          <p>Kamera Depan: {hp.KameraDepan} MP</p>
          <p>Kamera Belakang: {hp.KameraBelakang} MP</p>
          <p>Baterai: {hp.Baterai} mAh</p>
          <p>Layar: {hp.Layar}</p>
          <p>Harga: ${hp.Harga}</p>
          <ViewUserButton userId={hp.IdHP} />
        </CardList>
      ))}
    </>
  );
};

export default HPList;
