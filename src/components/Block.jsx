import React from 'react';
import style from '../assets/css/index.module.scss'
import Arrow from './Arrow';
import start from '../assets/images/start.svg';
import win from '../assets/images/win.svg';
import error from '../assets/images/error.svg';
import rightAnswer from '../assets/images/right-answer.svg';
import { useSelector } from 'react-redux';



const Block = ({ setAnswer, startGame }) => {

   const state = useSelector((state) => state.indexData)

   return (
      <div className={style.container}>
         {state.field.map(function (oRow, iRow) {
            return (
               <div className={style.row} key={iRow}>
                  {
                     oRow.map(function (oCol, iCol) {
                        return (
                           <div className={style.row__col} key={iCol} onClick={() => setAnswer({ x: iCol, y: iRow })}>
                              {state.posAnswer.x === -1 &&
                                 state.posAnswer.y === -1 &&
                                 state.posStart.x === iCol &&
                                 state.posStart.y === iRow ? <img src={start} alt='Старт' /> : ''}
                              {state.posAnswer.x === iCol &&
                                 state.posAnswer.y === iRow &&
                                 state.isWin ? <img src={win} alt='Вы ответили правильно!' /> : ''}
                              {state.posAnswer.x === iCol &&
                                 state.posAnswer.y === iRow &&
                                 !state.isWin ? <img src={error} alt='Вы ответили не правильно!' /> : ""}
                              {state.posAnswer.x !== -1 &&
                                 state.posAnswer.y !== -1 &&
                                 !state.isWin &&
                                 state.posEnd.x === iCol &&
                                 state.posEnd.y === iRow ? <img src={rightAnswer} alt='Правильный ответ!' /> : ''}
                           </div>
                        )
                     })
                  }
               </div>
            )
         })
         }
         <Arrow startGame={startGame} />
      </div>

   )
}

export default Block;