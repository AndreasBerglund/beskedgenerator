import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";

class Flake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale = 1;
    this.radius = 2 + Math.random() * 5;
    this.spacing = Math.random() * 0.3;
    this.distance = Math.random();
    this.motion = 1;
  }
  update = () => {
    this.x += Math.cos(this.distance) * this.spacing;
    this.y += this.motion;
  };
}
const initFlakes = (num) => {
  const initFlakesArray = [];
  for (let i = 0; i < num; i++) {
    const flake = new Flake(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight
    );
    initFlakesArray.push(flake);
  }
  return initFlakesArray;
};

const Snow = () => {
  const container = useRef();

  const [frameCounter, setFrameCounter] = useState(0);
  const [flakes] = useState(initFlakes(100));

  useLayoutEffect(() => {
    let timerId;
    const animate = () => {
      setFrameCounter((c) => c + 1);
      timerId = requestAnimationFrame(animate);
    };
    timerId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timerId);
  }, []);

  useEffect(() => {
    //canvas
    const canvas = container.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //draw one flake
    flakes.forEach((flake) => {
      flake.update();
      context.shadowColor = "#efefef";
      context.shadowBlur = 5;
      context.beginPath();
      context.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI, false);
      context.fillStyle = "#FFFFFF";
      context.fill();
      if (flake.y > canvas.height) {
        flake.y = -flake.radius;
      }
    });
    // eslint-disable-next-line 
  }, [frameCounter]); 

  return (
    <SSnowContainer>
      <canvas ref={container}></canvas>
    </SSnowContainer>
  );
};

export default Snow;

const SSnowContainer = styled.div`
  width: 100%;
  height: 100vh;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  canvas {
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0%;
    z-index: 1;
  }
`;
