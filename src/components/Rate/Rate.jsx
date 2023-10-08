
import style from './rate.module.scss'
export default function Rate({name, price, speed, description,color,id,activeCard,setId}) {
const clActive = activeCard ? 'active' : null

function handleChange() {
  setId(id)
}
  return (
    <div className = {`${clActive}`} onClick={handleChange}>
      <div className={style[color]}> 
        <h4>{name}</h4>
        <div className={style.price}>
        <p>руб</p>
        <h2>{price}</h2> 
        <p className={style.bottom_alignment}>/мес</p>
        </div>
      </div>     
        <p className="color_speed">{speed}</p>
        <p className="color_description">{description}</p>
    </div>
  )
}
