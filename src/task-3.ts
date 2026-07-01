export { }; // для ізоляції модулів у TypeScript-проєкті (особливо коли інтерфейс Product зустрічається вже в другому файлі поспіль, це запобігає конфліктам імен між файлами завдань).

const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
    id: number;
    title: string
}

const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

