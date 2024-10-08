import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
    context.beginPath();
  };
};

canvasSketch(sketch, settings);
