import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleSignIn } from "../actions/signin"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { useAuth } from ".."
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"

const Signin = () => {

    const [selectedUser, setselectedUser] = useState('')
    const [password, setpassword] = useState('')
    const [isHidden, setisHidden] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser, login } = useAuth()
    const users = useSelector(store => store.users)

    useEffect(() => {
        if (currentUser && currentUser !== null) {
            navigate('/')
        } else return
    }, [currentUser])

    const handleSignin = (e, username) => {
        e.preventDefault()
        const user = {
            username,
            password,
        }

        dispatch(handleSignIn(user, login, users))
            .then(() => {
                navigate('/')
            })
            .catch((e) => {
                alert(e.message)
                return
            })
    }

    return (
        <Container fluid >
            <Row xs='auto' >
                <Col>
                    <Container fluid>
                        <Form className='dropdown flex container'>
                            <Form.Group>
                                <Form.Label className='fs-200 ff-sans-cond text-white'>Select Your User Name:
                                </Form.Label>
                                <Form.Control
                                    placeholder="Email"
                                    type='email'
                                    name='username'
                                    value={selectedUser}
                                    onChange={(e) => {
                                        setselectedUser(e.target.value)
                                    }}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type='password'
                                    name="password"
                                    value={password}
                                    onChange={(e) => {
                                        const test = /^[0-9\b]+$/
                                        if (test.test(e.target.value) || e.target.value === '') {
                                            setpassword(e.target.value)
                                        } else {
                                            setisHidden(true)
                                        }
                                        setTimeout(() => setisHidden(false), 5000)
                                    }}
                                    placeholder="Password"></Form.Control>
                                <Alert variant="danger" className={!isHidden ? 'hide' : ''}>
                                    Please enter numbers only!
                                </Alert>
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={(e) => {
                                    if (!selectedUser) {
                                        alert('Please Select Your User Name')
                                        return
                                    }
                                    handleSignin(e, selectedUser)
                                }}>Sign In</Button>
                        </Form>
                        <Container>
                            <Button
                                variant="link"
                                as={Link}
                                to={'/signup'}
                                className='fs-200 ff-serif text-accent m-auto'
                            >
                                New User? Sign Up here.
                            </Button>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin
