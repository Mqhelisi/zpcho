import './Button.css';
import {Link} from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--sm', 'btn--large'];
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    linkto
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    :STYLES[0];
    const links = linkto
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
<>

        <Link to={linkto} className='btn-mobile'>
            <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                variant="flat"
                // size="xxl"
            >
                {children}
            </button>
        </Link>

</>
    )
}