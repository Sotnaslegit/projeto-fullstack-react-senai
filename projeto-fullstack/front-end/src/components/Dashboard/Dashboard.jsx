import React, { useState, useEffect } from 'react';
import style from './dashboard.module.css'

const Dashboard = () => {
    const [card, setCard] = useState([])
    const [user, setUser] = useState([])

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:3000/logs?pagina=1&quantidade=20`)
            const data = await res.json()
            setCard(data)
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchUser() {
        try {
            const res = await fetch(`http://localhost:3000/metricas-usuario/1`)
            const data = await res.json()
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchData()
        fetchUser()
    }, [])

    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <div className="container col-md-3">
                        {user.map((item, index) => (
                            <div className="card border rounded p-3" key={index}>
                                <h3 className='mb-5 text-center'>{item.nome}</h3>
                                <p>Qtd. Logs: {item.id}</p>
                                <p>Total de Bugs: {item.bugs_corrigidos}</p>
                                <p>Horas Trabalhadas: {item.horas_trabalhadas}</p>
                            </div>))}
                    </div>
                    <div className="container col-md-6">
                        <div className="container border rounded bg-white">
                            <button className='btn btn-primary mb-3 mt-3'>+ Criar Novo Log</button>
                            {card.map((item, index) => (
                                <div className="card mb-3 p-3" style={{ background: '#e6e6e6' }} key={index}>
                                    <div className="user d-flex justify-content-around">
                                        <p>{item.nome}</p>
                                        <p>{item.categoria}</p>
                                    </div>
                                    <div className="status d-flex justify-content-around">
                                        <p>Horas Trabalhadas: {item.horas_trabalhadas} </p>
                                        <p>Linhas Totais de Código: {item.linhas_codigo} </p>
                                        <p>Bugs Corrigidos: {item.bugs_corrigidos}</p>
                                    </div>
                                    <div className="likecomment d-flex justify-content-around">
                                        <p>b {item.likes}</p>
                                        <p>SZ {item.qnt_comments}</p>
                                    </div>
                                    <div className="comentarios w-100">
                                        <input type="text" placeholder='Escreva um comentário...' className='inp w-75' />
                                        <button className='btn'>Enviar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container col-md-3">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard