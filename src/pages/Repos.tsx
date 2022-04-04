import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Repository } from '../types'

export function Repos() {
    const { data: repositories, isFetching } = useQuery<Repository[]>("repos", async () =>
        await axios.get<Repository[]>('https://api.github.com/users/adrianamerico/repos').then(({ data }) => data), {
        staleTime: 1000 * 60 // 1 minute
    })

    return (
        <div className="App">
            {isFetching && (<p>Carregando...</p>)}
            {repositories?.map(repository => (
                <li key={repository.full_name}>
                    <Link to={`repo/${repository.full_name}`}>{repository.full_name}</Link>
                    <p>{repository.description}</p>
                </li>
            ))}
        </div>
    )
}
