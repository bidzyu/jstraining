const maze = [
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
];

function checkPath(start, end) {
    maze[start.y][start.x] = 5;
    
    const siblings = getValidSib(start);
    
    if (siblings.length > 0) {
        for (let i = 0; i < siblings.length; i++) {
            const current = siblings[i];

            const isSolved = current.x === end.x && current.y === end.y; //финиш;
            const notVisited = maze[current.y][current.x] !== 5;

            if (isSolved || (notVisited && checkPath(current, end)) ) {
                return true;
            }
        }
        
    }
    return false;
}

function getValidSib(step) {
    const {x, y} = step;
    
    const steps = [];

    if (maze[y - 1] !== undefined) {
        steps.push({x: x, y: y - 1, val: maze[y - 1][x]});
    }
    if (maze[y + 1] !== undefined) {
        steps.push({x: x, y: y + 1, val: maze[y + 1][x]});
    }
    if (maze[y][x + 1] !== undefined) {
        steps.push({x: x + 1, y: y, val: maze[y][x + 1]});
    }
    if (maze[y][x - 1] !== undefined) {
        steps.push({x: x - 1, y: y, val: maze[y][x - 1]});
    }

    return steps.filter(item => item.val === 0);
}

console.log(checkPath({x : 3, y: 0},{x: 5, y: 5}));

console.log(maze);