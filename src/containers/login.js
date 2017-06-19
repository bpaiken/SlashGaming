import { connect } from 'react-redux'
import { performAuthentication } from '../actions'
import Login from '../components/login'

const mapStateToProps = (state, props) => ({
    authenticated: state.authenticated
})

const mapDispatchToProps = (dispatch, props) => ({
    authenticate: (username, password) => {dispatch(performAuthentication(username, password))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);