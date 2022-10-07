const cost = [
    [0, 10, 75, 94],
    [-1, 0, 35, 50],
    [-1, -1, 0, 80],
    [-1, -1, -1, 0],
];

const memo = Array.from({ length: cost.length }, () =>
    Array(cost.length).fill(0)
);

function minCost(s, d) {
    if (s === d || s === d - 1) {
        return cost[s][d];
    }

    if (memo[s][d] === 0) {
        let minValue = cost[s][d];

        for (let i = s + 1; i < d; i++) {
            const temp = minCost(s, i) + minCost(i, d);
            minValue = Math.min(minValue, temp);
        }

        memo[s][d] = minValue;
    }

    return memo[s][d];
}

console.log(minCost(0, 3));
