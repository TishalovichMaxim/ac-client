import { useEffect, useState } from "react"
import { Problem } from "../../data/problem"
import ProblemView from "../ProblemView"
import { getTasks } from "../../logic/pages/problems-list-page"
import Navbar from "../Navbar"

function ProblemsListPage() {
  const [problems, setProblems] = useState<Problem[]>([])

  useEffect(() => {(async () => {
    const fetchedProblems = await getTasks(
      () => {}
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
          problems.map(problem => <ProblemView problem={problem} key={problem.id} />)
        }
      </div>
    </>
  )
}
  
export default ProblemsListPage
