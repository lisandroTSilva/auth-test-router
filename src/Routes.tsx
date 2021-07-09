import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import { useAuth } from './providers/AuthProvider'

const Logout = () => {
    const { status, logout } = useAuth()
    const [logoutConcluido, setLogoutConcluido] = useState(false)
    useEffect(() => {
        if (status === 'fetched' && logoutConcluido) {
            logout()
            setLogoutConcluido(true)
        }
    }, [logout, status, logoutConcluido])

    return logoutConcluido && status === 'fetched' ? <Redirect to='/' /> : <></>
}

export const Routes = () => {
    const { isLogged, status } = useAuth()

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/logout'>Logout</Link>
                    </li>
                    <li>
                        {isLogged ? (
                            <Link to='/privada'>Privada</Link>
                        ) : (
                            <Link to='/publica'>Publica</Link>
                        )}
                    </li>
                </ul>
            </nav>

            {/* {status === 'logout' && <Redirect to='/' />}
            {status !== 'init' && (
                <Route path='/logout' exact>
                    <Logout />
                </Route>
            )} */}

            {status !== 'fetched' ? (
                <>Loading</>
            ) : (
                <>
                    <Route path='/'>
                        <h2>Home</h2>
                    </Route>

                    {isLogged ? (
                        <>
                            <Route path='/logout' exact>
                                <Logout />
                            </Route>
                            <Route path='/privada'>
                                <h2>Rota privada</h2>
                            </Route>
                        </>
                    ) : (
                        <>
                            <Route path='/logout' exact>
                                <Redirect to='/' />
                            </Route>
                            <Route path='/publica'>
                                <h2>Rota pública</h2>
                            </Route>
                        </>
                    )}
                </>
            )}
        </BrowserRouter>
    )
}
