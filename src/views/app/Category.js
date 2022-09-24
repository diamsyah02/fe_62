import { Fragment, useState, useEffect } from 'react'
import { getData, postData } from '../../services/api.service'
import Add from '../../components/Add'
import Edit from '../../components/Edit'
import Content from '../../components/Content'
import NavBottom from '../../components/NavBottom'
import NavTop from '../../components/NavTop'

const Category = () => {
    const [data, setData] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [dataEdit, setDataEdit] = useState([])

    useEffect(() => {
        getCategory()
        return() => {}
    }, [])

    function getCategory() {
        const token = localStorage.getItem('auth')
        getData('category', token).then(data => {
            setData(data.results)
        }).catch(e => {
            alert(e.response.data.message)
        })
    }

    function AddCategory(i) {
        const token = localStorage.getItem('auth')
        let body = new URLSearchParams()
        body.append('title', i.title)
        body.append('description', i.description)
        postData('category', body, token).then(res => {
            if(res.statusCode == 201) {
                setShowAdd(false)
                getCategory()
            }
        }).catch(e => {
            console.log(e)
        })
    }

    function EditCategory(i) {
        const token = localStorage.getItem('auth')
        let body = new URLSearchParams()
        body.append('title', i.title)
        body.append('description', i.description)
        postData('category/'+i.id, body, token).then(res => {
            if(res.statusCode == 200) {
                setShowEdit(false)
                getCategory()
            }
        }).catch(e => {
            console.log(e)
        })
    }

    function DeleteCategory(id) {
        if(window.confirm('Are you sure delete this data?'+id)) {
            const token = localStorage.getItem('auth')
            getData('category-delete/'+id, token).then(res => {
                if(res.statusCode == 200) getCategory()
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
                                        <div className='text-3xl font-bold'>Data Category</div>
                                    </div>
                                    <div className='w-1/2' align='right'>
                                        <button className='bg-blue-500 rounded py-1 px-3 text-white' onClick={() => setShowAdd(true)}>+</button>
                                    </div>
                                </div>
                                <Content 
                                    data={data}
                                    edit={(i) => toEdit(i)} 
                                    delete={(id) => DeleteCategory(id)}
                                />
                            </>
                        }
                        {showAdd &&
                            <Add
                                title='Category'
                                submit={(res) => AddCategory(res)}
                                cancel={() => setShowAdd(false)}
                            />
                        }
                        {showEdit &&
                            <Edit
                                title='Category'
                                data={dataEdit}
                                submit={(res) => EditCategory(res)}
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

export default Category