import React, { useState, useEffect } from "react";

const UserParams = () => {
    const [card, setCard] = useState([])
    const [i, setI] = useState(1)

    function voltar() {
        if (i > 1)
            setI(i - 1)
    }
    function avancar() {
        setI(i + 1)
    }

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:3000/metricas-usuario/${i}`)
            const data = await res.json()
            setCard(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [i])
    console.log(card)

    return (
        <>
            <div className="container">
                <div className="pagination d-flex justify-content-around mt-3 mb-3">
                    <button type='button' className='btn btn-danger' id='voltar' onClick={voltar}>←</button>
                    <button type='button' className='btn btn-danger' id='avancar' onClick={avancar}>→</button>
                </div>
                {card?.map((item, index) => (
                    <div className="card mb-3 p-3 text-center" key={index}>
                        <p>Nome do usuario: {item.nome}</p>
                        <p>Total de Horas Trabalhadas: {item.horas_trabalhadas}</p>
                        <p>Total de Bugs Corrigidos: {item.bugs_corrigidos} </p>
                        <p>Total de Linhas de Código: {item.linhas_codigo} </p>
                        <p>Total de Logs: {item.id}</p>
                    </div>
                ))}
            </div>
        </>
    )
}


export default UserParams