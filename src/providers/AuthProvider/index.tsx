import {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react'

type Status = 'init' | 'fetching' | 'error' | 'fetched' | 'logout' | 'out'

interface IContext {
    isLogged: boolean
    login(): void
    logout(): void
    status: Status
}

const AuthContext = createContext<IContext>({
    isLogged: false,
    login: () => {},
    logout: () => {},
    status: 'init'
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: FC = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [status, setStatus] = useState<Status>('init')

    useEffect(() => {
        setTimeout(() => {
            setStatus('fetched')
            setIsLogged(false)
        }, 2000)
    }, [])

    const login = useCallback(() => {
        setStatus('fetching')
        setTimeout(() => {
            setStatus('fetched')
            setIsLogged(true)
        }, 2000)
    }, [])

    const logout = useCallback(() => {
        console.count()
        setStatus('fetching')
        setTimeout(() => {
            setStatus('fetched')
            setIsLogged(false)
        }, 2000)
    }, [])

    return (
        <AuthContext.Provider value={{ isLogged, login, logout, status }}>
            {children}
        </AuthContext.Provider>
    )
}
