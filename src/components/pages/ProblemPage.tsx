import { useContext, useEffect, useState } from "react"
import { ChosenProblemContext } from "../../chosen-problem-context"
import Navbar from "../Navbar"
import { onAppear, onCodeSubmit } from "../../logic/pages/problem-page"

function ProblemPage() {
  const [chosenProblem, _] = useContext(ChosenProblemContext)
  const [code, setCode] = useState("aboba")
  useEffect(onAppear, [])

  return (
    <>
      <Navbar />
      <div>
        <h1>
          {chosenProblem?.name}
        </h1>
        <div>
          {chosenProblem?.description}
        </div>
      </div>
      <div>
        <div>
          <select name="prog-lang" id="prog-lang">
            <option value="">Choose programming language</option>
            <option value="python-3">Python 3</option>
            <option value="c++">C++</option>
            <option value="java-17">Java 17</option>
          </select>
        </div>
        <input type="file" id="source-file" name="source-file" />
        <div>
          <label style={{display: "block"}} htmlFor="code-field">Code:</label>
          <textarea id="code-field" name="code-field" rows={20} cols={15} value={code} onChange={e => setCode(e.currentTarget.value)}>
          </textarea>
        </div>
        <button onClick={() => onCodeSubmit(code)}>
          Submit
        </button>
      </div>
    </>
  )
}

export default ProblemPage
