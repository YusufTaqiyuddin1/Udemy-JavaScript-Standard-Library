// Parsing Date

const parseTimestamp = Date.parse("2022-07-13T22:38:20.123+07:00");
console.log(parseTimestamp); // 1657726700123

const parseDate = new Date(parseTimestamp);
console.log(parseDate); // 2022-07-13T15:38:20.123Z