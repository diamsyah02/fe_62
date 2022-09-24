import { Fragment, useState } from 'react'

const Edit = (props) => {
    const [id, setId] = useState(props.data.id)
    const [title, setTitle] = useState(props.data.title)
    const [description, setDescription] = useState(props.data.description)
    
    function onEdit(e){
        e.preventDefault()
        props.submit({id, title, description})
    }
    return (
        <Fragment>
            <div className='text-3xl font-bold mb-3'>Edit {props.title}</div>
            <form onSubmit={onEdit}>
                <div className='mb-3'>
                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text' 
                        className='w-full p-2 rounded border' 
                        value={title} 
                        onChange={(text) => setTitle(text.target.value)}
                        placeholder='Title' 
                        required 
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='description'>Description</label>
                    <textarea 
                        className='w-full p-2 rounded border' 
                        placeholder='Description'
                        value={description}
                        onChange={(text) => setDescription(text.target.value)}></textarea>
                </div>
                <button type='submit' className='bg-blue-500 rounded py-2 px-4 text-white'>Save</button> &nbsp;
                <button type='button' className='bg-gray-500 rounded py-2 px-4 text-white' onClick={() => props.cancel()}>Cancel</button>
            </form>
        </Fragment>
    )
}

export default Edit