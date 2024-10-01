import React, { useState, useEffect, useRef } from "react";

const PaintComponent = () => {
  const canvasRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentSize, setCurrentSize] = useState(10);
  const [bucketColor, setBucketColor] = useState("#E5E8D3");
  const [currentColor, setCurrentColor] = useState("#3A4231");
  const [isEraser, setIsEraser] = useState(false);
  const [drawnArray, setDrawnArray] = useState([]);
  const [activeTool, setActiveTool] = useState("Brush");

  // Update brush size display
  const displayBrushSize = () => {
    return currentSize < 10 ? `0${currentSize}` : currentSize;
  };

  // Create canvas on initial load and on bucket color change
  useEffect(() => {
    createCanvas();
  }, [bucketColor]);

  const createCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = bucketColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    restoreCanvas();
  };

  const restoreCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
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
  };

  const storeDrawn = (x, y, size, color, erase) => {
    setDrawnArray((prevArray) => [...prevArray, { x, y, size, color, erase }]);
  };

  const getMousePosition = (event) => {
    const canvas = canvasRef.current;
    const boundaries = canvas.getBoundingClientRect();
    return {
      x: event.clientX - boundaries.left,
      y: event.clientY - boundaries.top,
    };
  };

  // Mouse Down
  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    const currentPosition = getMousePosition(event);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.moveTo(currentPosition.x, currentPosition.y);
    context.beginPath();
    context.lineWidth = currentSize;
    context.lineCap = "round";
    context.strokeStyle = currentColor;
  };

  // Mouse Move
  const handleMouseMove = (event) => {
    if (isMouseDown) {
      const currentPosition = getMousePosition(event);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
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
  };

  // Mouse Up
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Clear Canvas
  const clearCanvas = () => {
    createCanvas();
    setDrawnArray([]);
    setActiveTool("Canvas Cleared");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  // Save to Local Storage
  const saveToStorage = () => {
    localStorage.setItem("savedCanvas", JSON.stringify(drawnArray));
    setActiveTool("Canvas Saved");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  // Load from Local Storage
  const loadFromStorage = () => {
    const savedCanvas = localStorage.getItem("savedCanvas");
    if (savedCanvas) {
      setDrawnArray(JSON.parse(savedCanvas));
      setActiveTool("Canvas Loaded");
    } else {
      setActiveTool("No Canvas Found");
    }
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  // Clear Local Storage
  const clearStorage = () => {
    localStorage.removeItem("savedCanvas");
    setActiveTool("Local Storage Cleared");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  // Download Canvas as Image
  const downloadImage = () => {
    const canvas = canvasRef.current;
    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/jpeg", 1);
    downloadLink.download = "paint-drawing.jpeg";
    downloadLink.click();
    setActiveTool("Image File Saved");
    setTimeout(() => setActiveTool("Brush"), 1500);
  };

  return (
    <div>
      {/* Tool Bar */}
      <div className="top-bar">
        <div className="active-tool">
          <span>{activeTool}</span>
        </div>
        <div className="brush tool">
          <i className="fas fa-brush" onClick={() => setActiveTool("Brush")} />
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
          />
          <span>{displayBrushSize()}</span>
          <input
            type="range"
            min="1"
            max="50"
            value={currentSize}
            onChange={(e) => setCurrentSize(e.target.value)}
          />
        </div>
        <div className="bucket tool">
          <i className="fas fa-fill-drip" />
          <input
            type="color"
            value={bucketColor}
            onChange={(e) => setBucketColor(e.target.value)}
          />
        </div>
        <div className="tool">
          <i className="fas fa-eraser" onClick={() => setIsEraser(true)} />
        </div>
        <div className="tool" onClick={clearCanvas}>
          <i className="fas fa-undo-alt" />
        </div>
        <div className="tool" onClick={saveToStorage}>
          <i className="fas fa-download" />
        </div>
        <div className="tool" onClick={loadFromStorage}>
          <i className="fas fa-upload" />
        </div>
        <div className="tool" onClick={clearStorage}>
          <i className="fas fa-trash-alt" />
        </div>
        <div className="tool" onClick={downloadImage}>
          <i className="far fa-save" />
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

      {/* Mobile Message */}
      <div className="mobile-message">
        <h2>Please use the application on a larger screen</h2>
      </div>
    </div>
  );
};

export default PaintComponent;
