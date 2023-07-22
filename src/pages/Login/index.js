import React from 'react'
import { LoginBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'

//untuk pindaha halaman
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


function Login() {
  const history = useHistory();
  return (
    // style main-page bisa digunakan dimana saja ini kelbihan scss
    <div className='main-page'> 
        <div className='left'>
          <img src={LoginBg} className='bg-image' alt="img-LG" />
        </div>
        <div className='right'>
          <p className='title'>Login</p>
          <Input label="Email" placeholder="Email" />
          <Gap height={18} />
          <Input label="Password" placeholder="Password" />
          <Gap height={40} />
          <Button title='Login' onClick={() => history.push('/')} />
          <Gap height={50} />
          <Link title="Belum Punya akun, Silahkan daftar" onClick={() => history.push('/register')} />

        </div>
    </div>
  )
}

export default Login
