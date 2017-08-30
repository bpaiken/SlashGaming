// notes on BrowserRouter (react-router v4) from:
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

// npm: npm install --save react-router-dom

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))


// this component will be rendered by our <___Router>
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

// Route Tester: https://pshrmn.github.io/route-tester/#/
<Route path='/roster' component={Roster} />
// Route can render:
  // component: usually a react class component
  // render: a react element
  // children: a function that returns a react element - Note - this always be rendered...regardless of whether or not path matches the current location

  // EXAMPLE: 
<Route path='/page' component={Page} />

const extraProps = { color: 'red' }
<Route path='/page' render={(props) => (
  <Page {...props} data={extraProps}/>
)}/>
<Route path='/page' children={(props) => (
  props.match
    ? <Page {...props}/>
    : <EmptyPage {...props}/>
)}/>


// Props that come with Route:
  // match, location, history


  <Route path='/page/:number' component={Page} />

  // :number will be available in props.match.params