const cost = [
    [0, 10, 75, 94],
    [-1, 0, 35, 50],
    [-1, -1, 0, 80],
    [-1, -1, -1, 0],
];

const cost_table = Array.from({ length: cost.length + 1 }, () =>
    Array(cost.length + 1).fill(0)
);

cost_table[0] = cost[0][0];
cost_table[1] = cost[0][1];

function minCost(n) {
    for (let i = 2; i <= n; i++) {
        cost_table[i] = cost[0][i];
        for (let j = 1; j < i; j++) {
            cost_table[i] = Math.min(cost_table[j], cost[j][i]);
        }
    }

    return cost_table[n];
}

console.log(minCost(3));
