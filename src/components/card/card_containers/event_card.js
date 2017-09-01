import Card from '../card.jsx'
import { connect } from 'react-redux'

const mapStateToProps = () => {
  return {
    cardTitle: 'Events',
    cardText: 'Compete in events to earn points and prizes',
    buttonText: 'View All Events',
    indexUrl: '/events'
  }
}

export default connect(mapStateToProps)(Card)
