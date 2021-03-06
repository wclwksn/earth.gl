/**
 * @function
 * @param {*} value 
 * @param {*} min 
 * @param {*} max 
 */
const clamp = function(value, min, max){
    return value < min ? min : value > max ? max : value;
};

module.exports = clamp;