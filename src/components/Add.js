import { Fragment, useState } from 'react'

const Add = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function onAdd(e) {
        e.preventDefault()
        props.submit({title, description})
    }
    return (
        <Fragment>
            <div className='text-3xl font-bold mb-3'>Add {props.title}</div>
            <form onSubmit={onAdd}>
                <div className='mb-3'>
                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text' 
                        className='w-full p-2 rounded border' 
                        onChange={(text) => setTitle(text.target.value)}
                        placeholder='Title' 
                        required />
                </div>
                <div className='mb-3'>
                    <label htmlFor='description'>Description</label>
                    <textarea 
                        className='w-full p-2 rounded border' 
                        onChange={(text) => setDescription(text.target.value)}
                        placeholder='Description'
                        required
                    ></textarea>
                </div>
                <button type='submit' className='bg-blue-500 rounded py-2 px-4 text-white'>Save</button> &nbsp;
                <button type='button' className='bg-gray-500 rounded py-2 px-4 text-white' onClick={() => props.cancel()}>Cancel</button>
            </form>
        </Fragment>
    )
}

export default Add