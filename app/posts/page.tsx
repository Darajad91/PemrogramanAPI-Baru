import gpuData from "../../public/data/Kartu Grafis Jason.json";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IGPU {
  IdGPU: number;
  Nama: string;
  Chipset: string;
  Core: number;
  TMU: number;
  ROFS: number;
  VRAM: number;
  MemoryType: string;
  BusWidth: number;
  Vendor: string;
  GPU: string;
  Foundry: string;
  TDP: number;
}

const GPUList = () => {
  const gpus: IGPU[] = gpuData["Kartu Grafis"];

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {gpus.map((gpu) => (
        <CardList key={gpu.IdGPU}>
          <p>{gpu.Nama}</p>
          <i>Chipset dan Foundry : {gpu.Chipset} & {gpu.Foundry}</i>
          <p>Vendor : {gpu.Vendor}</p>
          <p></p>
          <p>VRAM: {gpu.VRAM === "0" ? "System Shared" : `${(parseInt(gpu.VRAM) / 1024)} GB`} {gpu.MemoryType}</p>
          <p>Bus Width: {gpu.BusWidth === "0" ? "Tergantung Channel RAM" : `${gpu.BusWidth} bit`} </p>
          <p>TDP : {gpu.TDP} W</p>
          <ViewUserButton userId={gpu.TDP} />
        </CardList>
      ))}
    </>
  );
};

export default GPUList;
