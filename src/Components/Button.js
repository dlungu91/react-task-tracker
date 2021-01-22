const Button = ({ color, text, onClick}) => {

    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} text={text} className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

// Button.propTypes = {
//     text: PropTypes.string,
//     color: propTypes.string
//     onClick.func
// }

export default Button
