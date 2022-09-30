type Props = {
  email: string
  setEmail: (text: string) => {}
}
const EmailInput = ({ email, setEmail }: Props) => {
  return (
    <div>
      <label>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type={'text'}
        placeholder={'e.g. you@gmail.com'}
      />
    </div>
  )
}

export default EmailInput
