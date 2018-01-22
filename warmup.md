What data structure is used to implement DFS?

* stacks

What data structure is typically used to implement BFS?

* queues

Which one can be done recursively? (the clue should be the data structure)

* stacks

Which one would you use to print a list of all the nodes in a tree or graph, starting with depth 1, then depth 2, then depth 3 etc.?

* bfs (queues)

What is the difference between a tree and a graph?
graphs do not have a heirarchy

PART DEUX

1. Searching a simple tree of nodes where each Node has an array of child nodes (someNode.children) using DFS.

create a node tracking object with

* number property
* value property

search (n, stack = [rootNode]) {
if stack[0].data === n
return node
assign rootnode's value and depth in tracking object
iterate through rootNode's child nodes, checking for N

}

search (tree, node){
let stack = [populate(rootNoåde)]

while the stack is not empty

}

searching for 1

stack = [8, 3, 1, 6 ]

search (n) {

while stack is not empty
if (stack[-1] != N)

{push all of the last element's children onto the stack}
let counter = 0;
if (node.children[i] !visited) {

if node.children[i] === n 
counter +=1 
return match, counter
else if (node.children[i] !== n) {
	node.children(left or right)[i].visited = true
	counter +=1 
}

loop through stack 
if visited 
remove visited children from stack,

repopulate stack with 

return 
{ set value of the node to an object with property visited = true}
if VISITED = TRUE && stack[-1] != n? => pop off last element

evaluate if stack[-1] == n? return n : pop stack[-1]

}

Searching the same tree using BFS.
Searching a graph (represented however you feel most comfortable -- Edge List, Adjacency List or Adjacency Matrix) using DFS.
Searching the same graph using BFS.
