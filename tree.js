"use strict";

let allMoves = { total: 0 };
let board = [[], [], [], [], [], [], [], []];

class MoveTree {
  constructor(coordinates, maxDepth) {
    this.coordinates = coordinates;
    this.maxDepth = maxDepth;
  }

  inspect() {
    console.log(
      `Your tree has ${allMoves.total} Move nodes and a maximum depth of ${
        this.maxDepth
      }.`
    );
  }
}

let tree = new MoveTree([3, 3], 1);
tree.inspect();
let otherInstance = new MoveTree([1, 2], 1);

class Move {
  constructor(x, y, depth, children, parent) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
  }
}

function getNextPositions(start) {
  var moves = [
    { x: -2, y: -1 },
    { x: -2, y: +1 },
    { x: -1, y: -2 },
    { x: -1, y: +2 },
    { x: +1, y: -2 },
    { x: +1, y: +2 },
    { x: +2, y: -1 },
    { x: +2, y: +1 }
  ];

  var positions = [];

  for (var i = 0; i < moves.length; i++) {
    var move = moves[i];
    var position = {};
    position.x = start.x + move.x;
    position.y = start.y + move.y;
    positions.push(position);
  }

  let filteredPositions = [];

  positions.forEach(move => {
    if (move.x <= 7 && move.x >= 0 && (move.y <= 7 && move.y >= 0)) {
      filteredPositions.push(move);
    }
  });

  return filteredPositions;
}

console.log("tree => ", tree);
console.log(otherInstance);
