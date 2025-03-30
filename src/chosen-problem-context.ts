import { createContext } from "react"
import { Problem } from "./data/problem"

export const ChosenProblemContext = createContext<[Problem | undefined, (p: Problem) => void]>([undefined, (_) => {}])
