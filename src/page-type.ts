enum PageType {
    SignIn,
    SignUp,
    ProblemsList,
    Profile,
    Problem,
}

type SetPageType = (pt: PageType) => void

export type { SetPageType }
export { PageType }
