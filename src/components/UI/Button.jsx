import style from '../../assets/css/index.module.scss'
import { useEffect } from 'react';


const Button = ({ startGame }) => {
    useEffect(() => {
        startGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>

            <input className={style.btn} type='button' value='New game' onClick={startGame} />
            <h1 className={style.title}>Двигайтесь по направлению стрелок </h1>
        </>
    )
}

export default Button;