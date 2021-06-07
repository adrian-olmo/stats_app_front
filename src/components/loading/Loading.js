import './Loading.scss'
import loading from "../../utils/glow.gif";

export const Loading = () => {


    return (
        <div className='loading '>
            <img src={loading} />
        </div>
    )
}