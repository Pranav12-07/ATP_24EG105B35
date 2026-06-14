import './App.css'
import UsersList from '../Components/UsersList' 
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer' 

function App(){
  return(
    <div>
      <NavBar />
      <div className='m-10 min-h-screen'>
      <UsersList /></div>
      <Footer />
    </div>
  )
}


export default App
