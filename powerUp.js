var powerUp = function(exponent) {
    return function(number) {
        return Math.pow(number, exponent);
    };
};

module.exports = powerUp;
