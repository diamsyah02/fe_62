import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const NavTop = () => {
    const navigate = useNavigate()

    function onLogout() {
        if(window.confirm('Are you sure?')) {
            localStorage.clear()
            navigate('/login', { replace: true })
        }
    }
    return (
        <Fragment>
            <div className="fixed top-0 w-full text-white z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 md:bg-transparent bg-blue-600 pt-3 px-2 md:pt-0 md:px-0">
                    <div className="md:bg-blue-600 md:py-5 bg-transparent p-3" align="left">
                        <span className="cursor-pointer" onClick={() => navigate('/')}>
                            <div className='text-3xl font-bold'>FE 62</div>
                        </span>
                    </div>
                    <div className="md:bg-blue-600 md:py-5 bg-transparent p-3" align="right">
                        <button className='bg-white text-blue-500 rounded py-2 px-4' onClick={() => onLogout()}>Logout</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavTop