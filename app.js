"use strict"
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.fillstyle="red";
function drawCar(){
   // Draw the trunk
   ctx.fillstyle="RED"
  ctx.fillRect(0, 15, 30, 30);
  // Draw the car body
  ctx.fillRect(15, 20, 25, 25);
  //Draw the window
  ctx.fillStyle = 'white';
  ctx.fillRect(28, 23, 7, 7);
  ctx.fillStyle = 'black';
  // Draw the hood
  ctx.fillRect(40, 30, 15, 15);
  // Draw the wheels
  ctx.fillRect(7, 43, 10, 10);
  ctx.fillRect(37, 43, 10, 10);
  ctx.restore();
};

drawCar()

