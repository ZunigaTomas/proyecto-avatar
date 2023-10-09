import { useContext } from 'react'
import './Hero.scss'
import { GlobalContext } from '../../provider/Provider'

export const Hero = () => {
    const { hero } = useContext(GlobalContext)
    const { buttons, claim } = hero
    return(
        <div className="Hero">
            <div className="Wrapper">
                <h2 className="Hero-h2">
                    <img className="Hero-logo" src="assets/brand/complete.webp" alt="" />
                </h2>
                <p className="Hero-p">{ claim }</p>
                <ul className="Hero-ul">
                    { buttons.map((button) =>
                        <li className="Hero-li" key={ button.id }>
                        <Boton {...button} />
                    </li>
                    ) }
                </ul>
            </div>
        </div>
    )
}

const Boton = ({ title, href = "#" }) => {
    return(
        <a className="Hero-btn" href={ href } title={ title }>
            { title }
        </a>
    )
}