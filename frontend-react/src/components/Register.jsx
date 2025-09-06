import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading,setLoading] = useState(false);

    const handleRegistration = async (e) => {
        
        e.preventDefault();
        setLoading(true)
        //console.log('Registration details:', { username, email, password });
        // Here you can add your registration logic, such as sending data to a server
        const userData = {
            username: username,
            email: email,
            password: password
        }
         try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log('response.data ==>' , response.data);
                console.log('Registration successful:', response.data);
                setErrors({})
                setSuccess(true)
                // You can redirect the user or show a success message here
            
         } catch (error) {
            setErrors(error.response.data)
            console.error('There was an error registering!', error)
         }finally{
            setLoading(false)
         }
    }
  return (
   <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-5' >Create an Account</h3>
                <form onSubmit={handleRegistration}>
                    <div className='mb-3'>
                        <label className='form-label text-light'>Username</label>
                        <input type="text" className='form-control' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <small>{errors.username && <div className='text-danger'>{errors.username}</div> }</small>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label text-light'>Email</label>
                        <input type="email" className='form-control' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        
                    </div>
                    <div className='mb-3'>
                        <label className='form-label text-light'>Password</label>
                        <input type="password" className='form-control' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <small>{errors.password && <div className='text-danger'>{errors.password}</div> }</small>
                    </div>
                    {success && <div className='alert alert-success'>Registration successful! You can now log in.</div>}
                    {loading ? (
                      <button type="submit" className='btn btn-primary w-100' disabled> <FontAwesomeIcon icon={faSpinner} spin/> Please wait</button>):
                      (<button type="submit" className='btn btn-primary w-100'>Register</button> )
                    //    ( <button className='btn btn-primary w-100' type='button' disabled>
                    //         <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
                    //         &nbsp; Registering...  
                    // )
                    
                }
                   
                </form>
            </div>

        </div>
    </div>
   </>
      
  )
}

export default Register
