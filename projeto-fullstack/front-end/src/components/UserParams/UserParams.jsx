import React, { useState, useEffect } from "react";

const UserParams = () => {
    const [i, setI] = useState(1)

    function voltar() {
        if (i > 1)
            setI(i - 1)
        fetchData()

    }
    function avancar() {
        setI(i + 1)
        fetchData()
    }

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:3000/metricas-usuario/${i}`)
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="pagination d-flex justify-content-around mt-3 mb-3">
                    <button type='button' className='btn btn-danger' id='voltar' onClick={voltar}>←</button>
                    <button type='button' className='btn btn-danger' id='avancar' onClick={avancar}>→</button>
                </div>
            </div>
        </>
    )
}


export default UserParams