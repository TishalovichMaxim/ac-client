import { useEffect, useState } from "react";
import { PageTypeContext } from "./page-type-context"; 
import { PageType } from "./page-type";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import ProblemsListPage from "./components/pages/ProblemsListPage";
import { Problem } from "./data/problem";
import { ChosenProblemContext } from "./chosen-problem-context";
import ProblemPage from "./components/pages/ProblemPage";
import ProfilePage from "./components/pages/ProfilePage";
import { getAccessToken } from "./logic/auth/auth";

function App() {
    const [pageType, setPageType] = useState(PageType.SignIn)
    const [chosenProblem, setChosenProblem] = useState<Problem | undefined>(undefined)

    useEffect(() => {(async () => {
        const accessToken = getAccessToken()
        if (!accessToken) {
            return
        }

        setPageType(PageType.ProblemsList)
    })()}, [])

    let content = <></>
    if (pageType == PageType.SignIn) {
        content = <SignInPage />
    } else if (pageType == PageType.SignUp) {
        content = <SignUpPage />
    } else if (pageType == PageType.ProblemsList) {
        content = <ProblemsListPage />
    } else if (pageType == PageType.Problem) {
        content = <ProblemPage />
    } else if (pageType == PageType.Profile) {
        content = <ProfilePage />
    }

    return (
        <PageTypeContext.Provider value={[pageType, setPageType]}>
            <ChosenProblemContext.Provider value={[chosenProblem, setChosenProblem]}>
                { content }
            </ChosenProblemContext.Provider>
        </PageTypeContext.Provider>
    );
}

export { App }
