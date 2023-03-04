import style from '../assets/css/index.module.scss'
const COUNT_MOVE = 10

export const enumDirections = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3,
}

//Создание пути и конечный результат 
export function createPointsWay(state) {
  const posNow = { ...state.posStart }
  const way = []

  for (let i = 0; i < COUNT_MOVE; i++) {
    const allowedDirections = []

    if (posNow.x !== 0) allowedDirections.push(enumDirections.LEFT)
    if (posNow.y !== 0) allowedDirections.push(enumDirections.UP)
    if (posNow.x !== state.field[0].length - 1) allowedDirections.push(enumDirections.RIGHT)
    if (posNow.y !== state.field.length - 1) allowedDirections.push(enumDirections.DOWN)

    let id = Math.floor(Math.random() * allowedDirections.length)

    way.push(allowedDirections[id])

    switch (allowedDirections[id]) {
      case enumDirections.LEFT:
        posNow.x--
        break
      case enumDirections.UP:
        posNow.y--
        break
      case enumDirections.RIGHT:
        posNow.x++
        break
      case enumDirections.DOWN:
        posNow.y++
        break
      default:
        break
    }
  }

  state.way = way
  state.posEnd = posNow
}

export function equalPositions(o1, o2) {
  return o1.x === o2.x && o1.y === o2.y
}

// 
export const getDirection = (pointer) => {
  switch (pointer) {
    case enumDirections.LEFT:
      return style.left
    case enumDirections.UP:
      return style.up
    case enumDirections.DOWN:
      return style.down
    default:
      return ''
  }
}
