import { SetErrorMessage } from "../../errors";
import { PageType, SetPageType } from "../../page-type";

async function signIn(
    login: string,
    password: string,
    setPageType: SetPageType,
    setErrorMessage: SetErrorMessage
) {
    const response = await fetch(
        'http://localhost:18080/auth/sign-up',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
        }
    );

    const respBody = await response.json()
    if (!response.ok) {
        setErrorMessage(respBody.message)
        return
    }

    setPageType(PageType.ProblemsList)
}

export { signIn }
