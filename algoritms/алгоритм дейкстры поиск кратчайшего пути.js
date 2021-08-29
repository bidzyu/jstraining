const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {}; //минимальные стоимости всех ребер
    const processed = []; //обработанные обьекты
    let neighbors = {}; //соседние вершины рассматриваемого узла

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]; 
            costs[node] = value || Infinity; //добавляем доступные вершины со старта (инфинити если недоступны)
        }
    });

    let node = findNodeLowestCost(costs, processed); //находим узел с минимальной стоимостью
    while (node) { //перебираем узлы с мин стоимостями обновляя значение в таблице
        const cost = costs[node]; //на каждой итерации получаем стоимость текущей вершины
        neighbors = graph[node]; //в те узлы в которые мы можем попасть из этой вершины присваем в обьект для соседних вершин
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]; //высчитываем новую стоимость
            if (newCost < costs[neighbor]) { //если новая стоимость меньше перезаписываем ее
                costs[neighbor] = newCost;
            }
        });
        processed.push(node); //вершину рассматриваемую на данной итерации добавляем в массив уже обработанных вершин
        node = findNodeLowestCost(costs, processed); //ищем новую вершину
    }

    return costs //возвращаем обьект хранящий самые кратчайшие пути
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity;
    let lowestNode;

    Object.keys(costs).forEach(node => { //пройдемся по ключам обьекта со стоймостью путей
        let cost = costs[node]; //получаем стоимость текущего ключа
        
        if (cost < lowestCost && !processed.includes(node)) { //если стоймость меньше минимальной и узел еще не обработан обновляем переменные
            lowestCost = cost;
            lowestNode = node;
        }
    });
    return lowestNode //возвращаем вершину с минимальной стоимостью
}

shortPath(graph, 'a', 'g');