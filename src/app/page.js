"use client";
import cn from "clsx";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { Londrina_Solid} from "next/font/google";

const background = ["bg1.svg", "bg2.svg"];
const body = ["body1.svg", "body2.svg", "body3.svg", "body4.svg" ];
const glasses = ["glasses1.svg", "glasses2.svg", "glasses3.svg", "glasses4.svg" ];
const lvl = ["lvl1.svg", "lvl2.svg", "lvl3.svg", "lvl4.svg"];

export default function Mint() {
  const [selectedBackground, setBackground] = useState("");
  const [selectedBody, setBody] = useState("");
  const [selectedGlasses, setGlasses] = useState("");
  const [selectedLvl, setLvl] = useState("");
  const [isNFTminting, setNFTminting] = useState(false);

  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (
      selectedBackground &&
      selectedBody &&
      selectedGlasses &&
      selectedLvl &&
      ctx
    ) {
      const backgroundImage = new globalThis.Image();
      backgroundImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        const bodyImage = new globalThis.Image();
        bodyImage.onload = () => {
          ctx.drawImage(bodyImage, 0, 0, canvas.width, canvas.height);
        };
        bodyImage.src = selectedBody;
     
        const lvlImage = new globalThis.Image();
        lvlImage.onload = () => {
          ctx.drawImage(lvlImage, 0, 0, canvas.width, canvas.height);
        };
        lvlImage.src = selectedLvl;
		const glassesImage = new globalThis.Image();
        glassesImage.onload = () => {
          ctx.drawImage(glassesImage, 0, 0, canvas.width, canvas.height);
        };
        glassesImage.src = selectedGlasses;
      };
      backgroundImage.src = selectedBackground;
    }
  }, [selectedBackground, selectedBody, selectedGlasses, selectedLvl]);
  return (
    <>
      <div className="flex flex-col items-center pt-24 mx-auto   rounded-lg sm:mx-[200px] sm:px-16 w-fill bg-nouns-pastel">
        <div className="flex flex-col py-8">
          <h1 className="font-sans text-4xl text-[#594440] border-4 border-dashed font-bold text-center border-b-[#C0ABA7]">
            Create your PG ID Avatar
          </h1>
    
		  
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="w-full gap-8 p-2 rounded-lg bg-white/50">
		  <div className="flex flex-col p-1 mx-4 ">
              <h3 className="w-[100px] font-thin text-[#594440]">Background</h3>
              <div className="flex flex-row">
                {background.map((bg) => (
                  <img
                    src={bg}
                    key={bg}
                    onClick={() => setBackground(bg)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      bg === selectedBackground ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
		  <div className="relative flex flex-col p-1 mx-4">
			
              <h3 className="w-[100px] font-thin text-[#594440]">Lvl</h3>
              <div className="flex flex-row">
                {lvl.map((mt) => (
                  <img
                    src={mt}
                    key={mt}
                    onClick={() => setLvl(mt)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      mt === selectedLvl ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
            
			<div className="flex flex-col p-1 mx-4">
              <h3 className="w-[100px] font-thin text-[#594440]">glasses</h3>
              <div className="flex flex-row">
                {glasses.map((eye) => (
                  <img
                    src={eye}
                    key={eye}
                    onClick={() => setGlasses(eye)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      eye === selectedGlasses ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col p-1 mx-4">
              <h3 className="w-[100px] font-thin text-[#594440]">Body</h3>
              <div className="flex flex-row">
                {body.map((bd) => (
                  <img
                    src={bd}
                    key={bd}
                    onClick={() => setBody(bd)}
                    className={`w-20 h-20 cursor-pointer rounded-lg ${
                      bd === selectedBody ? "border-2 border-white" : ""
                    } mr-4`}
                  />
                ))}
              </div>
            </div>
            <button
              disabled={isNFTminting}
              className={cn(
                "w-full py-2 mt-2 bg-black cursor-pointer rounded-xl p1 border-1",
                selectedBackground &&
                  selectedBody &&
                  selectedGlasses &&
                  selectedLvl
                  ? ""
                  : "opacity-0 pointer-events-none"
              )}
            >
              {isNFTminting ? "Minting..." : "Mint NFT"}
            </button>
          </div>
          <div
            className={`w-full p-8 rounded-lg bg-white/50 ${
              selectedBackground &&
              selectedBody &&
              selectedGlasses &&
              selectedLvl &&
              "bg-white/50"
            }`}
          >
            <canvas ref={canvasRef} width={400} height={400} />
          </div>
        </div>
      </div>
    </>
  );
}