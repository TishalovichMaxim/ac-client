import { Link, useNavigate } from "react-router"
import { signUp } from "../../logic/auth/auth"
import { useContext, useState } from "react"
import { PageTypeContext } from "../../page-type-context"
import { PageType } from "../../page-type"

function SignUpPage() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("")
  const [pageType, setPageType] = useContext(PageTypeContext)

  return (
    <>
      <h1>Sign up</h1>
      <div>
          <label htmlFor="login">Login: </label>
          <input name="login" value={login} onChange={e => setLogin(e.target.value)} />
      </div>
      <div>
          <label htmlFor="password">Password: </label>
          <input name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
          <label htmlFor="repeatedPassword">Repeat password: </label>
          <input name="repeatedPassword" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)} />
      </div>
      <div style={{display: "block"}} onClick={() => setPageType(PageType.SignIn)}>
        Already have an account?
      </div>
      <button onClick={() => signUp(login, password, () => {})}>
          Sign up
      </button>
    </>
  )
}

export default SignUpPage
