import '../App.css';
import Signin from './Signin';
import Home from './Home';
import New from './New';
import Leaderboard from './Leaderboard';
import { Fragment, useEffect, useState } from 'react';
import { handleGetUsers } from '../actions/users';
import { useDispatch } from 'react-redux';
import { handleGetQuestions } from '../actions/questions';
import { Loader } from 'semantic-ui-react';
import { Route, Routes } from 'react-router';
import PollView from './PollView';
import SignUp from './SignUp';
import { useAuth } from '..';
import { signIn } from '../actions/signin'
import { getAuthedUser } from '../firebase/firestore';
const App = () => {

  const dispatch = useDispatch()
  const { currentUser } = useAuth()

  const [loading, setloading] = useState(true)

  currentUser && getAuthedUser(currentUser.uid)
    .then((user) => {
      const id = {
        id: currentUser.uid,
        ...user,
      }
      dispatch(signIn(id))
    })
  useEffect(() => {
    dispatch(handleGetUsers())
      .then(() => dispatch(handleGetQuestions()))
      .then(() => setloading(false))
  }, [])

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
