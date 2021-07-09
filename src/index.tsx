import { render } from 'react-dom'

import App from './App'
import { AuthProvider } from './providers/AuthProvider'

const rootElement = document.getElementById('root')
render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    rootElement
)
