import React, { useState, useEffect } from 'react';
import style from './dashboard.module.css';
import Img from 'react-image';
import heart from '../../assets/heart.svg';
import comment from '../../assets/comment.svg';

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

    async function curtida(id, id_user) {
        try {
            await fetch('http://localhost:3000/likes', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({ id_log: id, id_user: id_user })
            });
    
            setCard(prevCards => prevCards.map(item => 
                item.id === id ? { ...item, likes: item.likes + 1 } : item
            ));
        } catch (error) {
            console.log(error);
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
                                    <div className="user d-flex justify-content-between">
                                        <h5 className='mb-0 align-self-center'>{item.nome}</h5>
                                        <h6 className='mb-0 align-self-center p-2 rounded'>{item.categoria}</h6>
                                    </div>
                                    <div className="status d-flex justify-content-around mt-4 mb-4 text-center">
                                        <div className="status p-2 rounded" style={{ background: '#C0C2C9' }}>
                                            <p><span>{item.horas_trabalhadas}</span><br />Horas Trabalhadas</p>
                                        </div>
                                        <div className="status p-2 rounded" style={{ background: '#C0C2C9' }}>
                                            <p><span>{item.linhas_codigo}</span><br />Linhas Totais de Código</p>
                                        </div>
                                        <div className="status p-2 rounded" style={{ background: '#C0C2C9' }}>
                                            <p><span>{item.bugs_corrigidos}</span><br />Bugs Corrigidos</p>
                                        </div>
                                    </div>
                                    <div className="likecomment d-flex justify-content-around">
                                        <p><button className='btn' onClick={() => curtida(item.id, item.id_user)}><img src={heart} alt="" width={'20px'} /></button> {item.likes}</p>
                                        <p><img src={comment} alt="" width={'20px'} /> {item.qnt_comments}</p>
                                    </div>
                                    <div className="comentarios d-flex w-100 justify-content-around">
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