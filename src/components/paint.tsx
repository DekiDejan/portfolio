import React, { useState, useEffect, useRef, MouseEvent } from "react";
import "tailwindcss/tailwind.css";

// Define types for drawing data
interface DrawnElement {
  x: number;
  y: number;
  size: number;
  color: string;
  eraser: boolean;
}

const PaintClone: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [currentSize, setCurrentSize] = useState<number>(10);
  const [bucketColor, setBucketColor] = useState<string>("#E5E8D3");
  const [currentColor, setCurrentColor] = useState<string>("#3A4231");
  const [isEraser, setIsEraser] = useState<boolean>(false);
  const [drawnArray, setDrawnArray] = useState<DrawnElement[]>([]);
  const [activeTool, setActiveTool] = useState<string>("Brush");

  useEffect(() => {
    createCanvas();
  }, [bucketColor]);

  const createCanvas = (): void => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 50;
        context.fillStyle = bucketColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        restoreCanvas();
      }
    }
  };

  const restoreCanvas = (): void => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        for (let i = 1; i < drawnArray.length; i++) {
          context.beginPath();
          context.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
          context.lineWidth = drawnArray[i].size;
          context.lineCap = "round";
          context.strokeStyle = drawnArray[i].eraser
            ? bucketColor
            : drawnArray[i].color;
          context.lineTo(drawnArray[i].x, drawnArray[i].y);
          context.stroke();
        }
      }
    }
  };

  const storeDrawn = (
    x: number,
    y: number,
    size: number,
    color: string,
    eraser: boolean
  ): void => {
    setDrawnArray((prevArray: DrawnElement[]) => [
      ...prevArray,
      { x, y, size, color, eraser },
    ]);
  };

  const getMousePosition = (
    event: MouseEvent<HTMLCanvasElement>
  ): { x: number; y: number } => {
    const canvas = canvasRef.current;
    if (canvas) {
      const boundaries = canvas.getBoundingClientRect();
      return {
        x: event.clientX - boundaries.left,
        y: event.clientY - boundaries.top,
      };
    }
    return { x: 0, y: 0 };
  };

  const handleMouseDown = (event: MouseEvent<HTMLCanvasElement>): void => {
    setIsMouseDown(true);
    const currentPosition = getMousePosition(event);
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.moveTo(currentPosition.x, currentPosition.y);
        context.beginPath();
        context.lineWidth = currentSize;
        context.lineCap = "round";
        context.strokeStyle = currentColor;
      }
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>): void => {
    if (isMouseDown) {
      const currentPosition = getMousePosition(event);
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          context.lineTo(currentPosition.x, currentPosition.y);
          context.stroke();
          storeDrawn(
            currentPosition.x,
            currentPosition.y,
            currentSize,
            currentColor,
            isEraser
          );
        }
      }
    }
  };

  const handleMouseUp = (): void => {
    setIsMouseDown(false);
  };

  const clearCanvas = (): void => {
    createCanvas();
    setDrawnArray([]);
    setActiveTool("Canvas Cleared");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  const saveToStorage = (): void => {
    localStorage.setItem("savedCanvas", JSON.stringify(drawnArray));
    setActiveTool("Canvas Saved");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  const loadFromStorage = (): void => {
    const savedCanvas = localStorage.getItem("savedCanvas");
    if (savedCanvas) {
      setDrawnArray(JSON.parse(savedCanvas));
      setActiveTool("Canvas Loaded");
    } else {
      setActiveTool("No Canvas Found");
    }
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  const clearStorage = (): void => {
    localStorage.removeItem("savedCanvas");
    setActiveTool("Local Storage Cleared");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  const downloadImage = (): void => {
    const canvas = canvasRef.current;
    if (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/jpeg", 1);
      downloadLink.download = "paint-drawing.jpeg";
      downloadLink.click();
      setActiveTool("Image File Saved");
      setTimeout(() => setActiveTool("Brush"), 1500);
    }
  };

  return (
    <div>
      {/* Tool Bar */}
      <div className="top-bar bg-[#628340] h-12 fixed w-full flex justify-center items-center pl-4">
        <div className="active-tool absolute left-2 top-2">
          <span className="bg-[#3A4231] text-white px-4 py-1 rounded text-lg select-none">
            {activeTool}
          </span>
        </div>
        <div className="brush bg-[#557238] h-11 w-[345px] flex items-center">
          <i
            className="fas fa-brush text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer"
            onClick={() => setActiveTool("Brush")}
          >
            Brush
          </i>
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
            className="jscolor ml-3 border rounded h-9 w-[120px] text-center cursor-pointer"
          />
          <span className="size bg-[#3A4231] text-white rounded px-2 py-1 ml-2">
            {currentSize < 10 ? `0${currentSize}` : currentSize}
          </span>
          <input
            type="range"
            min="1"
            max="50"
            value={currentSize}
            onChange={(e) => setCurrentSize(parseInt(e.target.value))}
            className="slider bg-[#7D8240] opacity-70 hover:opacity-100 ml-2"
          />
        </div>
        <div className="tool relative top-1">
          <i className="fas fa-eraser text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer">
            Bucket
          </i>
        </div>
        <div className="tool relative top-1 ml-2">
          <input
            type="color"
            value={bucketColor}
            onChange={(e) => setBucketColor(e.target.value)}
            className="jscolor ml-3 border rounded h-9 w-[120px] text-center cursor-pointer"
          />
        </div>
        <div className="tool relative top-1">
          <i
            className="fas fa-eraser text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer"
            onClick={() => setIsEraser(true)}
          >
            Eraser
          </i>
        </div>
        <div className="tool relative top-1 ml-2">
          <i
            className="fas fa-undo-alt text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer hover:text-red-600"
            onClick={clearCanvas}
          >
            Clear Canvas
          </i>
        </div>
        <div className="tool relative top-1 ml-2">
          <i
            className="fas fa-download text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer"
            onClick={saveToStorage}
          >
            Save Local
          </i>
        </div>
        <div className="tool relative top-1 ml-2">
          <i
            className="fas fa-upload text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer"
            onClick={loadFromStorage}
          >
            Load Local
          </i>
        </div>
        <div className="tool relative top-1 ml-2">
          <i
            className="fas fa-trash-alt text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer hover:text-red-600"
            onClick={clearStorage}
          >
            Clear Local
          </i>
        </div>
        <div className="tool relative top-1 ml-2">
          <i
            className="far fa-save text-white bg-[#3A4231] w-10 h-10 rounded text-center cursor-pointer"
            onClick={downloadImage}
          >
            Download
          </i>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-12 z-10 cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

      {/* Mobile Message */}
      <div className="h-screen flex lg:hidden justify-center items-center relative z-50 bg-[#628340]">
        <h2 className="text-2xl text-[#c1ff82] tracking-wide font-bold text-center">
          Please use the application on a larger screen
        </h2>
      </div>
    </div>
  );
};

export default PaintClone;
