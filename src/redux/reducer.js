import { createPointsWay, equalPositions } from '../utils/utils'

const START = 'START'
const SET = 'SET'

const posAnswerDefault = { x: -1, y: -1 }

const initialState = {
  posStart: { x: 0, y: 0 },
  posEnd: { x: 0, y: 0 },
  way: [],
  field: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  posAnswer: { ...posAnswerDefault },
  isWin: false,
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      const newState = { ...state }
      newState.posStart = {
        x: Math.floor(Math.random() * state.field[0].length),
        y: Math.floor(Math.random() * state.field.length),
      }
      newState.posAnswer = { ...posAnswerDefault }
      newState.isWin = false
      createPointsWay(newState)
      return newState
    case SET:
      if (equalPositions(state.posAnswer, posAnswerDefault)) {
        const newState = { ...state }
        newState.posAnswer = { ...action.payload.choosePos }
        newState.isWin = equalPositions(action.payload.choosePos, state.posEnd)
        return newState
      } else {
        return { ...state }
      }
    default:
      return state
  }
}

export const startGame = () => {
  return { type: START }
}

export const setAnswer = (choosePos) => {
  return { type: SET, payload: { choosePos } }
}

export default Reducer
