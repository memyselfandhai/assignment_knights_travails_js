"use strict";

let allMoves = { total: 0 };
let board = [[], [], [], [], [], [], [], []];

class MoveTree {
  constructor(coordinates, maxDepth) {
    this.coordinates = coordinates;
    this.maxDepth = maxDepth;
    this.children = [];
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
  constructor(x, y, depth = 1, children = [], parent = null) {
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
  console.log(filteredPositions);
  return filteredPositions;
}
getNextPositions({ x: 3, y: 3 }).map(position => {
  let pos = new Move(position.x, position.y, 1);
  tree.children.push(pos);
});

tree.children.map(child => {
  getNextPositions({ x: child.x, y: child.y }).map(coord => {
    let pos = new Move(coord.x, coord.y, 2);
    child.children.push(pos);
  });
});
console.log("tree => ", tree.children);
console.log(Object.values(tree));

class KnightSearch {
  constructor(tree) {
    this.tree = tree;
  }

  // queues -> add to the end
  // remove from beginning
  // all of the tree's children -> all of tree children's children -> etc

  // [ 1, 6, 14]

  bfsFor(targetCoords) {
    let queue = this.tree.children;
    let counter = 0;
    let moveHistory = [];
    let result = [];
    while (queue.length > 1) {
      queue.forEach(child => {
        if (targetCoords[0] !== child.x || targetCoords[1] !== child.y) {
          moveHistory.push([child.x, child.y]);
          child.children.forEach(el => queue.push(el));
          queue.shift();
        } else {
          result.push([child.x, child.y]);
        }
        // add each child's children to queue?
      });
    }
    if (result === []) {
      return "Coordinate not found.";
    } else {
      console.log("Move History => ", moveHistory);
      console.log("Coordinate found => ", result);
    }
  }
}

let knight = new KnightSearch(tree);
knight.bfsFor([7, 3]);

// 1. deposit
// 2. shift, evaluate, mark as VISITED
// 3. add children if any to stack
