"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knightMoves = void 0;
var _Node = require("./Node.js");
const knightMoves = ([x, y], [a, b]) => {
  const q = [(0, _Node.Node)([x, y], [[x, y]])];
  const offsets = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
  let current = q.shift();
  while (current.position[0] != a || current.position[1] != b) {
    offsets.map(move => [move[0] + current.position[0], move[1] + current.position[1]]).forEach(move => {
      const node = (0, _Node.Node)(move, current.route.concat([move]));
      node ? q.push(node) : {};
    });
    current = q.shift();
  }
  console.log(`You made it in ${current.route.length - 1} moves! Here is your path: `);
  current.route.forEach(path => console.log(path));
};
exports.knightMoves = knightMoves;