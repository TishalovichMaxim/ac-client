import { useContext } from "react"
import { PageTypeContext } from "../../page-type-context"
import Navbar from "../Navbar"
import { logout } from "../../logic/pages/profile-page"

function ProfilePage() {
  const [_, setPageType] = useContext(PageTypeContext)

  return (
    <>
      <Navbar />
      <h1>
        Profile
      </h1>
      <button onClick={() => logout(setPageType)}>
        Log out
      </button>
    </>
  )
}
  
export default ProfilePage
