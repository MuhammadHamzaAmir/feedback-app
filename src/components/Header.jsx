import PropTypes from 'prop-types'

function Header(props) {

    const headerStyles = {
        backgroundColor: props.bgColor,
        color: props.textColor,
    }
    return (
        <div style={headerStyles}>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}


Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propsTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}
export default Header