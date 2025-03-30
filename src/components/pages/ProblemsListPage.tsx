import { useContext, useEffect, useState } from "react"
import { Problem } from "../../data/problem"
import ProblemView from "../ProblemView"
import { getTasks } from "../../logic/pages/problems-list-page"
import { PageTypeContext } from "../../page-type-context"
import Navbar from "../Navbar"

function ProblemsListPage() {
  const [problems, setProblems] = useState<Problem[]>([])
  const [_, setPageType] = useContext(PageTypeContext)

  useEffect(() => {(async () => {
    const fetchedProblems = await getTasks(
      setPageType,
      (_) => {}
    )

    if (fetchedProblems === undefined) {
      return
    }

    console.log(fetchedProblems)
    setProblems(fetchedProblems.content)
  })()}, [])

  return (
    <>
      <Navbar />
      <div>
        {
          problems.map(problem => ProblemView({ problem: problem }))
        }
      </div>
    </>
  )
}
  
export default ProblemsListPage
