var useArr = [
    { id: 1, name: "Dishant", age: 20, salary: 200000 },
    { id: 2, name: "Diwanshi", age: 16, salary: 100000 },
    { id: 3, name: "Satish", age: 45, salary: 500000 },
];
var sort = function (arr, k) {
    arr.sort(function (a, b) {
        return a.k - b.k;
    });
};
sort(useArr, "salary");
console.log(useArr);
