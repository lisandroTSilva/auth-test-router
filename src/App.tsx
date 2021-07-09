import './styles.css'

import { useAuth } from './providers/AuthProvider'
import { Routes } from './Routes'

export default function App() {
    const { isLogged, login, logout, status } = useAuth()
    return (
        <>
            <button
                disabled={isLogged || status !== 'fetched'}
                onClick={() => {
                    login()
                }}
            >
                login
            </button>
            <button
                onClick={() => {
                    logout()
                }}
                disabled={!isLogged || status !== 'fetched'}
            >
                logout
            </button>
            <p>{status}</p>
            {isLogged ? <h1>Logado</h1> : <h1>Não logado</h1>}

            <Routes />
        </>
    )
}
