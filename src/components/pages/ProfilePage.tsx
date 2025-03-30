import { useContext } from "react"
import { PageTypeContext } from "../../page-type-context"
import { PageType } from "../../page-type"
import Navbar from "../Navbar"

function ProfilePage() {
  const [_, setPageType] = useContext(PageTypeContext)

  return (
    <>
      <Navbar />
      <h1>
        Profile
      </h1>
      <button onClick={() => setPageType(PageType.SignIn)}>
        Log out
      </button>
    </>
  )
}
  
export default ProfilePage
