import 'bootstrap/dist/css/bootstrap.min.css'
import User from './components/User/User'
import Menu from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CadLog from './components/cadLog/CadLog'
import CadUsuario from './components/cadUsuario/CadUsuario'
import UserParams from './components/UserParams/UserParams'

function App() {
  return (
    <>
      <Menu/>
      <UserParams/>
    </>
  )
}

export default App
