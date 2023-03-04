import { connect } from 'react-redux'
import Block from './components/Block'
import { startGame, setAnswer } from './redux/reducer'

const App = (props) => {
  return <Block {...props} />
}

export default connect(null, { startGame, setAnswer })(App)
