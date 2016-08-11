var powerUp = require('./powerUp');

var randomList = [4, 19, 56.3, 390, 8375, 33, 15, 0.003];
var pow10 = powerUp(10);

var transformed = randomList.map(pow10);

console.log(transformed);
