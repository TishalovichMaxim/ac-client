import { useContext, useState } from "react"
import { PageTypeContext } from "../../page-type-context"
import { PageType } from "../../page-type"
import { signIn } from "../../logic/pages/sign-in-page"

function SignInPage() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [_, setPageType] = useContext(PageTypeContext)

  return (
    <>
      <h1>Sign in</h1>
      <div>
          <label htmlFor="login">Login: </label>
          <input name="login" value={login} onChange={e => setLogin(e.target.value)} />
      </div>
      <div>
          <label htmlFor="password">Password: </label>
          <input name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div style={{display: "block"}} onClick={() => setPageType(PageType.SignUp)}>
        Have no account?
      </div>
      <button onClick={() => signIn(login, password, setPageType, (_) => {})}>
          Sign in
      </button>
    </>
  )
}
  
export default SignInPage
