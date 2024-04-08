function task1(arr) {
    return sortNumberArray(arr)
}

function sortNumberArray(arr){
    return arr.sort(compareNumeric)
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
