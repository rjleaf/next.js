import EmailInput from './login-form/email-input'
import PasswordInput from './login-form/password-input'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const LoginForm = () => {
  const [cookies, setCookie] = useCookies(['auth-username', 'auth-password'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    setCookie('auth-username', email, { path: '/' })
    setCookie('auth-password', password, { path: '/' })
  }

  return (
    <div>
      <form>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
