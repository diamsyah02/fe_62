import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/api.service'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('test@62teknologi.com')
    const [password, setPassword] = useState('Pass1234')
    const [isLoading, setIsLoading] = useState(false)

    function onLogin(e) {
        e.preventDefault()
        setIsLoading(true)
        let data = new URLSearchParams()
        data.append('email', email)
        data.append('password', password)
        auth('login', data).then(res => {
            setIsLoading(false)
            localStorage.setItem('auth', JSON.stringify(res.results.token))
            navigate('/', { replace: true })
        }).catch(e => {
            setIsLoading(false)
            alert(e.response.data.message)
        })
    }
    return (
        <Fragment>
            <div className='flex justify-center h-screen'>
                <div className='w-3/4 h-3/4 flex justify-center items-center bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto p-10'
                >
                    <div className='border border-black rounded p-10'>
                        <div className='text-4xl mb-5'>Login <strong>FE62</strong></div>
                        <form onSubmit={onLogin}>
                            <div className='mb-4'>
                                <label htmlFor='email' className='text-xl'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    value={email}
                                    onChange={(text) => setEmail(text.target.value)}
                                    className='w-full rounded p-3 border border-black'
                                    placeholder='Masukkan Email...'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='password' className='text-xl'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    value={password}
                                    onChange={(text) => setPassword(text.target.value)}
                                    className='w-full rounded p-3 border border-black'
                                    placeholder='Masukkan Password...'
                                    required
                                />
                            </div>
                            <div className='flex justify-center mt-6'>
                                {!isLoading ?
                                    <button
                                        type='submit'
                                        className='w-full pt-2 pb-2 rounded text-white border border-blue-700 hover:bg-white bg-blue-700 hover:text-blue-700'
                                    >
                                        Login
                                    </button>
                                    :
                                    <div
                                        className='animate-spin rounded-full h-10 w-10 border-b-4 border-blue-700'
                                    ></div>
                                }
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </Fragment>
    )
}

export default Login