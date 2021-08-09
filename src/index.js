
exports.min = function min(array) {
    if (arguments.length == 0) { return '0'; }
    let len = array.length;
    if (len == 0) { return '0'; }
    let min = array[0];
    for (let i = 1; i < len; i++) {
        if (array[i] < min) { min = array[i]; }
    }
    return min;
}

exports.max = function max(array) {
    if (arguments.length === 0) { return 0 }
    let len = array.length;
    if (len === 0) { return 0 }
    let maxc = array[0];
    for (let i = 1; i < len; i++) {
        if (array[i] > maxc) { maxc = array[i]; }
    }
    return maxc;
}

exports.avg = function avg(array) {
    if (arguments.length == 0) { return '0'; }
    let len = array.length;
    if (len == 0) { return '0'; }
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += array[i];
    }
    return sum / len;
}
