import { useContext } from "react"
import { PageTypeContext } from "../page-type-context"
import { PageType } from "../page-type"

function Navbar() {
  const [pageType, setPageType] = useContext(PageTypeContext)

  return (
    <>
      <div onClick={() => setPageType(PageType.ProblemsList)}>
        Problems
      </div>
      <div onClick={() => setPageType(PageType.Profile)}>
        Profile
      </div>
    </>
  )
}
  
export default Navbar
