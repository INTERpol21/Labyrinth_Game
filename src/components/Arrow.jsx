import style from '../assets/css/index.module.scss'
import arrow from '../assets/images/arrow.svg';
import Button from './UI/Button';
import { getDirection } from '../utils/utils';
import { useSelector } from 'react-redux';



const Arrow = ({ startGame }) => {
    const way = useSelector((state) => state.indexData.way)

    return (
        <div className={style.container_arrow}>
            <Button startGame={startGame} />
            <div className={style.way_section}>
                {way.map((pointer, i) =>
                    <div key={i} className={style.way_section__item}>
                        <img src={arrow} className={getDirection(pointer)} alt='Pointer' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Arrow;