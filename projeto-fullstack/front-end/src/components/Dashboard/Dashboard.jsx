import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [logs, setLogs] = useState([]);

    async function fetchData() {
        try {
            const res = await fetch('http://localhost:3000/logs?pagina=1&quantidade=20')
            const data = await res.json()
            setLogs(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="container">
                {logs.map((item, index) => (
                    <div className="card mb-3 p-3 text-center" key={index}>
                        <p>Categoria: {item.categoria}</p>
                        <p>Horas Trabalhadas: {item.horas_trabalhadas} </p>
                        <p>Linhas Totais de Código: {item.linhas_codigo} </p>
                        <p>Bugs Corrigidos: {item.bugs_corrigidos}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Dashboard