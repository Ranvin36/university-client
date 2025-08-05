import { Squircle } from 'ldrs/react'
import 'ldrs/react/Squircle.css'
const Spinner = ({color}) => {
    return(
        <Squircle
        size="20"
        stroke="5"
        strokeLength="0.15"
        bgOpacity="0.1"
        speed="0.9"
        color={color}
        />
    )
}

export default Spinner;