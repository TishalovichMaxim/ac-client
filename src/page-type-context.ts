import { createContext } from "react"
import { PageType } from "./page-type"

export const PageTypeContext = createContext<[PageType, (pt: PageType) => void]>([PageType.SignIn, (_) => {}]);
