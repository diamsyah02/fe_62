import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Login from './views/auth/Login'
import Category from './views/app/Category'
import Product from './views/app/Product'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/product" element={<Product />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router