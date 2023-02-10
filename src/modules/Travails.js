import { Node } from "./Node.js";

export const knightMoves = ([x, y], [a, b]) => {
    const q = [Node([x, y], [[x, y]])];
    const offsets = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]
    let current = q.shift()

    while(current.position[0] != a || current.position[1] != b) {
        offsets.map(move => [move[0] + current.position[0], move[1] + current.position[1]])
                .forEach(move => {
                    const node = Node(move, current.route.concat([move]));
                    node ? q.push(node) : {};
                });
        current = q.shift();
    }
    console.log(`You made it in ${current.route.length - 1} moves! Here is your path: `);
    current.route.forEach(path => console.log(path));
}   

