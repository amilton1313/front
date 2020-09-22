import React from 'react'

import Logo from '../../img/logo-grande.jpg'

const EmBreve = () => {
    return (
        <div style={{ height: '100vh' }}
            className="d-flex flex-column justify-content-center align-items-center"
        >
            <img src={Logo} alt="" className="w-50 h-50"/>

            <h1>Sistema COTA</h1>
            <h3>(Em breve)</h3>

        </div>
    )
}

export default EmBreve