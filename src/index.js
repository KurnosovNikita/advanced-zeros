module.exports = function getZerosCount(number, base) {
    var maxPower = 1;
    var maxPower1 = 1;
    var copeOfBase = base;
    var result = 0;
    var i = 2,
        j = 0;
    var decomposition = [];
    do {
        if (copeOfBase % i == 0) {
            decomposition.push(i);
            j++;
            copeOfBase = copeOfBase / i;
        } else {
            i++;
        }
    }
    while (i <= copeOfBase);
    decomposition.sort(compareNumbers);
    var firstCal = calculate(decomposition, maxPower);
    maxPower1 = firstCal[1];

    var multiDecomposition1 = decomposition[0];
    decomposition.sort(compareNumbers2);
    var secondCal = calculate(decomposition, maxPower);
    maxPower2 = secondCal[1];
    var multiDecomposition2 = decomposition[0];
    var multiDecomposition;

    if (maxPower1 >= 5 && multiDecomposition2 <= 5) {
        maxPower = maxPower1
        multiDecomposition = multiDecomposition1;
    } else {

        maxPower = maxPower2;
        multiDecomposition = multiDecomposition2;

    }
    while (number >= multiDecomposition) {

        number = ~~(number / multiDecomposition);

        result = result + number;;
    }
    result = ~~(result / maxPower);
    return result;
    // your implementation
}

function compareNumbers(a, b) {
    return a - b;
}

function compareNumbers2(a, b) {
    return b - a;
}

function calculate(decomposition, maxPower) {
    var power = 1;
    maxPower = 1;
    for (let i = 0; i < decomposition.length - 1; i++) {
        if (decomposition[i] == decomposition[i + 1]) {
            power++;
            if (power > maxPower)
                maxPower = power;
        }

        if (decomposition[i] !== decomposition[i + 1]) {
            maxPower = power;
            i = decomposition.length;
        }
    }
    return [decomposition, power, maxPower];
}