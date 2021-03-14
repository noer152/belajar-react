import React from 'react'

function MyInfo() {
    return (
        <div className="component-myinfo">
            <h1>Ini di panggil dari function Js MyInfo</h1>
            <p>mari kita coba reload</p>
            <p>ho ho ... ternyata masih tetap responsife</p>
            <p>tapi entah mengapa css nya ndak kepanggil ya....</p>
            <ul>
                <li>Satu</li>
                <li>Dua</li>
                <li>tiga</li>
            </ul>
        </div>
    )
}

export default MyInfo
