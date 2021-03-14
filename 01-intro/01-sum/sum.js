function sum(a, b) {
  if ((typeof a === 'number') && (typeof b === 'number')) {
    return a + b;
  } else {
    throw new TypeError('В качестве аргументов функции используются значения отличные от чисел');
  }
}

module.exports = sum;
