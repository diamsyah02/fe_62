import { Fragment, useState, useEffect } from 'react'
import { getData, postData } from '../../services/api.service'
import Add from '../../components/Add'
import Edit from '../../components/Edit'
import Content from '../../components/Content'
import NavBottom from '../../components/NavBottom'
import NavTop from '../../components/NavTop'

const Product = () => {
    const [data, setData] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [dataEdit, setDataEdit] = useState([])

    useEffect(() => {
        getProduct()
        return() => {}
    }, [])

    function getProduct() {
        const token = localStorage.getItem('auth')
        getData('product', token).then(data => {
            setData(data.results)
        }).catch(e => {
            alert(e.response.data.message)
        })
    }

    function AddProduct(i) {
        const token = localStorage.getItem('auth')
        let body = new URLSearchParams()
        body.append('title', i.title)
        body.append('description', i.description)
        postData('product', body, token).then(res => {
            if(res.statusCode == 201) {
                setShowAdd(false)
                getProduct()
            }
        }).catch(e => {
            console.log(e)
        })
    }

    function EditProduct(i) {
        const token = localStorage.getItem('auth')
        let body = new URLSearchParams()
        body.append('title', i.title)
        body.append('description', i.description)
        postData('product/'+i.id, body, token).then(res => {
            if(res.statusCode == 200) {
                setShowEdit(false)
                getProduct()
            }
        }).catch(e => {
            console.log(e)
        })
    }

    function DeleteProduct(id) {
        if(window.confirm('Are you sure delete this data?')) {
            const token = localStorage.getItem('auth')
            getData('product-delete/'+id, token).then(res => {
                if(res.statusCode == 200) getProduct()
            }).catch(e => {
                console.log(e)
            })
        }
    }

    function toEdit(i) {
        setShowEdit(true)
        setDataEdit(i)
    }
    return (
        <Fragment>
            <div className='flex flex-1 justify-center'>
                <div className="md:w-1/6"></div>
                <div className="md:w-4/6">
                    <NavTop />
                    <div className='p-5 mt-20'>
                        {!showAdd && !showEdit &&
                            <>
                                <div className='flex'>
                                    <div className='w-1/2'>
                                        <div className='text-3xl font-bold'>Data Product</div>
                                    </div>
                                    <div className='w-1/2' align='right'>
                                        <button className='bg-blue-500 rounded py-1 px-3 text-white' onClick={() => setShowAdd(true)}>+</button>
                                    </div>
                                </div>
                                <Content 
                                    data={data}
                                    edit={(i) => toEdit(i)} 
                                    delete={(i) => DeleteProduct(i)}
                                />
                            </>
                        }
                        {showAdd &&
                            <Add
                                title='Product'
                                submit={(res) => AddProduct(res)}
                                cancel={() => setShowAdd(false)}
                            />
                        }
                        {showEdit &&
                            <Edit
                                title='Product'
                                data={dataEdit}
                                submit={(res) => EditProduct(res)}
                                cancel={() => setShowEdit(false)}
                            />
                        }
                    </div>
                    <NavBottom />
                </div>
                <div className="md:w-1/6"></div>
            </div>
        </Fragment>
    )
}

export default Product