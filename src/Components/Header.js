import PropTypes from 'prop-types'
import Button from './Button'

import Components from './Button'

const Header = ( {title} ) => {

    
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello' onClick={onClick} />
        </header>

    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


// Header.propTypes = {
//     title: propTypes.string,
// }

export default Header
