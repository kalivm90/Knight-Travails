"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = void 0;
const Node = (position, route) => {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
    return null;
  }
  return {
    position,
    route
  };
};
exports.Node = Node;