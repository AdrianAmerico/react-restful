import React from 'react'
import axios from 'axios'
import { useFetch } from './hooks/useFetch'
import { useQuery } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { Repos } from './pages/Repos'
import { Repo } from './pages/Repo'

interface Repository {
  full_name: string
  description: string
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repo/*" element={<Repo />} />
    </Routes>

  )
}

export default App
