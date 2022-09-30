import { useCookies } from 'react-cookie'
import { cloneElement } from 'react'

type Props = {
  children: React.ReactNode
}

const PaywallHOC = ({ children }: Props) => {
  const USERNAME = 'hello'
  const PASSWORD = 'world'

  const [cookies, setCookie, removeCookie] = useCookies([
    'auth-username',
    'auth-password',
  ])
  const isLoggedIn =
    cookies['auth-username'] === USERNAME &&
    cookies['auth-password'] === PASSWORD

  return cloneElement(children, { isLoggedIn })
}

export default PaywallHOC
