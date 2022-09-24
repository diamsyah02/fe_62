import { Fragment } from 'react';
import DataTable from 'react-data-table-component';

const Content = (props) => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
        },
        {
            button: true,
            cell: (i) => (
                <div align='right'>
                    <button className='bg-green-500 rounded py-2 px-4 text-white' onClick={() => props.edit(i)}>Edit</button>
                </div>
            )
        },
        {
            button: true,
            cell: (i) => (
                <div align='right'>
                    <button className='bg-red-500 rounded py-2 px-4 text-white' onClick={() => props.delete(i.id)}>Hapus</button>
                </div>
            )
        }
    ];
    return (
        <Fragment>
            <DataTable
                columns={columns}
                data={props.data}
                pagination
            />
        </Fragment>
    );
};

export default Content