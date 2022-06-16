import PropTypes from 'prop-types'

function Header(props) {
  return (
        <div className="container">
            <h2>{props.text}</h2>
        </div>
  )
}


Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propsTypes = {
    text: PropTypes.string
}
export default Header