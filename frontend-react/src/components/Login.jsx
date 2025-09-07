import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Register = () => {
    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');
    //const [errors, setErrors] = useState({});
   
    const [loading,setLoading] = useState(false);
    const navigte = useNavigate()
    const [error,setError]=useState('')
    const {isLoggedin, setIsLoggedIn}=useContext(AuthContext)

    const handleLogin = async (e) => {
        
        e.preventDefault();
        setLoading(true)
        //console.log('Registration details:', { username, email, password });
        // Here you can add your registration logic, such as sending data to a server
        const userData = {
            username: username,
            
            password: password
        }
         try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
            
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            console.log('Login successful')
            setIsLoggedIn(true)
            navigte('/')
                
                // You can redirect the user or show a success message here
            
         } catch (error) {
            
            console.error('Invalid Credential')
            setError('Invalid Credential')
            
         }finally{
            setLoading(false)
         }
    }
  return (
   <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-5' >Login</h3>
                <form onSubmit={handleLogin}>
                    <div className='mb-3'>
                        <label className='form-label text-light'>Username</label>
                        <input type="text" className='form-control' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        
                    </div>
                             
                    <div className='mb-3'>
                        <label className='form-label text-light'>Password</label>
                        <input type="password" className='form-control' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {error && <div className='text-danger'>{error}</div>}
                    </div>
                    
                    {loading ? (
                      <button type="submit" className='btn btn-primary w-100' disabled> <FontAwesomeIcon icon={faSpinner} spin/> Logged in....</button>):
                      (<button type="submit" className='btn btn-primary w-100'>Login</button> )
                    
                    
                }
                   
                </form>
            </div>

        </div>
    </div>
   </>
      
  )
}

export default Register
