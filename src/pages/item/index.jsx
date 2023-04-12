import React from 'react'
import './index.css'
import TopBar from '../../components/topbar'

import { schools } from '../../data/data'

import { deleteItem } from '../../helpers/utils'

const Item = () => {
    return (
        <div className='item-main'>
            <TopBar />
            <div className="item-data">
                <p id='item-name'><span></span>{schools[0].name}</p>
                <div className='item-subitens'>
                    <p><span>Email: </span>{schools[0].email}</p>
                    <p><span>Telefone: </span>{schools[0].phone}</p>
                    <p><span>Função: </span>{schools[0].role}</p>
                    <p style={schools[0].role === 'Admin' ? { display: 'none' } : { display: 'initial' }}> <span>Escola: </span>{schools[0].role === 'School' ? schools[0].name : schools[0].escola}</p>
                </div>
                <div className='item-buttons'>
                    <button id='update'>Editar</button>
                    <button id='delete' onClick={() => deleteItem('i')}>Apagar</button>
                </div>
            </div>
        </div>
    )
}

export default Item