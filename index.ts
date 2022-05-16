type User = {
  id: number;
  name: string;
  age: number;
  salary: number;
};
const useArr: User[] = [
  { id: 1, name: "Dishant", age: 20, salary: 200000 },
  { id: 2, name: "Diwanshi", age: 16, salary: 100000 },
  { id: 3, name: "Satish", age: 45, salary: 500000 },
];
const mysort = (arr, k) => {
  arr.sort((a, b) => {
    return a.k - b.k;
  });
  console.log(arr);
};
mysort(useArr, "age");
console.log(useArr);
