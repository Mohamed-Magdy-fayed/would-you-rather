import '../App.css';
import Signin from './Signin';
import Home from './Home';
import New from './New';
import Leaderboard from './Leaderboard';
import { Fragment, useEffect, useState } from 'react';
import { handleGetUsers } from '../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetQuestions } from '../actions/questions';
import { Loader } from 'semantic-ui-react';
import { useNavigate, Route, Routes } from 'react-router';
import PollView from './PollView';
import SignUp from './SignUp';

const App = () => {

  const [loading, setloading] = useState(true)

  const authedUser = useSelector(store => store.signIn)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(handleGetUsers())
      .then(() => dispatch(handleGetQuestions()))
      .then(() => setloading(false))
    if (!authedUser) {
      navigate('/signin')
    }
  }, [dispatch])

  return (
    <Fragment>
      <div>
        {loading === true
          ? (
            <div className='grid'>
              <div>
                <Loader active size='massive' />
              </div>
              <span className='fs-500 ff-serif text-dark loading'>Loading Data...</span>
            </div>
          )
          : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/new' element={<New />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
              <Route path='/poll/:id' element={<PollView />} />
            </Routes>
          )}
      </div>
    </Fragment>
  )
}

export default App;
