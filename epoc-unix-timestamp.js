// Unix Timestamp

const timestamp = Date.now();
console.log(timestamp); // 1657726396356

const dateUnix = new Date(timestamp);
console.log(dateUnix); // 2022-07-13T15:33:16.356Z

console.log(dateUnix.getTime()); // 1657726396356