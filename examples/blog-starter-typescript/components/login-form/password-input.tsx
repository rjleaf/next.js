type Props = {
  password: string
  setPassword: (text: string) => {}
}

const PasswordInput = ({ password, setPassword }: Props) => {
  return (
    <div>
      <label>Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={'password'}
      />
    </div>
  )
}

export default PasswordInput
