// BigInt

const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;

console.log(c); // 18014398509481982n
console.log(typeof(c)); // bigint