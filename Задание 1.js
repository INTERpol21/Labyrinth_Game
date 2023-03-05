// Используем стек, для прохода, по строке.
// Выбираем первый символ строки, если это левая(открытая) скобка, то помещаем ее в стек
// Если это закрывающая скобка, извлекаем последнее значение из стека и проверяем скобки на соответствие. Если стек пуст или закрывающая(правая) скобка не соответствует открывающей(левой) - прерываем выполнение и возвращаем false
// Если по окончании выполнения алгоритма стек не пуст (Если левых скобок больше, чем правых в стеке) - возвращаем false.
const brackets = function (str) {
  let symbol = str.split(''),
    stack = [],
    left = ['{', '(', '['],
    right = ['}', ')', ']'],
    rightIndex,
    leftIndex

  for (let i = 0, len = symbol.length; i < len; i++) {
    leftIndex = left.indexOf(symbol[i])
    if (leftIndex !== -1) {
      stack.push(leftIndex)
      continue
    }
    rightIndex = right.indexOf(symbol[i])
    if (rightIndex !== -1) {
      leftIndex = stack.pop()
      if (rightIndex !== leftIndex) {
        return false
      }
    }
  }

  if (stack.length !== 0) {
    return false
  }
  return true
}

console.log(brackets('()()((()))'))
console.log(brackets('(-----[----(12341)---(123)--]-----())'))
console.log(brackets('()----((---)'))
console.log(brackets('{{{---}---}----([{--}])}'))
console.log(brackets('{8809890}--()--}-{--089'))
console.log(brackets('---)'))
console.log(brackets('--34534-'))
