module.exports = function longestConsecutiveLength(array) {
    // your solution here

    let maxLength = 0;
    if(array.length === 0){
        return maxLength;
    }

    const hashMapArr = {};
    array.forEach(function(el){
        hashMapArr[el] = el;
    });

    let count;
    let keyNum;
    for (let i in hashMapArr) {
        count = 1;
        keyNum = Number(i);
        count += findSequence(hashMapArr, keyNum - 1, v => v - 1);
        count += findSequence(hashMapArr, keyNum + 1, v => v + 1);
        maxLength = maxLength < count
            ? count
            : maxLength
    }
    return maxLength;
};

function findSequence(hashMap, key, nextValue){
    if(hashMap[key]){
        delete hashMap[key];
        return 1 + findSequence(hashMap, nextValue(key), nextValue);
    }
    return 0;

}
