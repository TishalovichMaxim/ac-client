import { useContext } from "react"
import { Problem } from "../data/problem"
import { PageTypeContext } from "../page-type-context"
import { PageType } from "../page-type"
import { ChosenProblemContext } from "../chosen-problem-context"

function ProblemView(
  props: { problem: Problem, key: number }
) {
  const [, setPageType] = useContext(PageTypeContext)
  const [, setChosenProblem] = useContext(ChosenProblemContext)

  const onClick = () => {
    setChosenProblem(props.problem)
    setPageType(PageType.Problem)
  }

  return (
    <>
      <div onClick={onClick}>
        <h1>
          {props.problem.name}
        </h1>
        <div>
          {props.problem.description}
        </div>
      </div>
    </>
  )
}
  
export default ProblemView
