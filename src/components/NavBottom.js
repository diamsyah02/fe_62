import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBottom = () => {
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className="fixed bottom-0 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 md:bg-transparent bg-blue-600 pt-3 px-2 md:pt-0 md:px-0">
                    <div className="md:bg-blue-600 md:py-5 bg-transparent py-3" align="center">
                        <span className="cursor-pointer p-2 bg-white rounded" onClick={() => navigate('/')}>
                            <small>Category</small>
                        </span>
                    </div>
                    <div className="md:bg-blue-600 md:py-5 bg-transparent py-3" align="center">
                        <span className="cursor-pointer p-2 bg-white rounded" onClick={() => navigate('/product')}>
                            <small>Product</small>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBottom