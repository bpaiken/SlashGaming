import Card from '../card.jsx'
import { connect } from 'react-redux'

const mapStateToProps = () => {
  return {
    cardTitle: 'Characters',
    cardText: 'Register your in game characters to compete in events',
    buttonText: 'View All Your Characters',
    indexUrl: '/user/characters'
  }
}

export default connect(mapStateToProps)(Card)
