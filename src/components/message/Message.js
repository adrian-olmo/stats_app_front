
import './Message.css'

export const Message = (props) => {
    return (
        <h4 className="message">
            {props.msg}
        </h4>
    )
}