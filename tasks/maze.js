const maze = [
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
];

function checkPath(start, end) {
    function canIgo(x, y) {
        return x < 6 && x >= 0 && y < 6 && y >= 0 && maze[y][x] === 0 
        // определяем есть ли эта позиция и можно ли идти сюда
    }
    function step(x, y) {
        if (x === end.x && y === end.y) return true; // если добрались возвращаем true

        const roads = []; // создаем массив возможных путей

        if (canIgo(x + 1, y)) { //проверяем возможно ли перейти на все возможные позиции
            roads.push([x + 1, y]);
        }
        if (canIgo(x - 1, y)) {
            roads.push([x - 1, y]);
        }
        if (canIgo(x, y + 1)) {
            roads.push([x, y + 1]);
        }
        if (canIgo(x, y - 1)) {
            roads.push([x, y - 1]);
        }

        maze[y][x] = 9; // отмечаем пройденый путь 9-ками
        if (roads.length === 0) return false; // если зашли в тупик возвращаем False
 
        // в зависимости от кол-ва доступных дорог проходим по ним всем
        if (roads.length === 1) return step(roads[0][0], roads[0][1]); 
        if (roads.length === 2) return step(roads[0][0], roads[0][1]) ||
                                       step(roads[1][0], roads[1][1]);
        if (roads.length === 3) return step(roads[0][0], roads[0][1]) ||
                                       step(roads[1][0], roads[1][1]) ||
                                       step(roads[2][0], roads[2][1]);
    }

    return step(start.x, start.y);
}

console.log(checkPath({x : 3, y: 0},{x: 5, y: 5}));

console.log(maze);