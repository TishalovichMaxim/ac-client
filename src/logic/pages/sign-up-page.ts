import { AuthResponse } from "../../data/data";
import { PageType, SetPageType } from "../../page-type";
import { SetErrorMessage } from "../../errors";

async function signUp(
    login: string,
    password: string,
    setPageType: SetPageType,
    setErrorMessage: SetErrorMessage
): Promise<AuthResponse | undefined> {
    const response: Response = await fetch(
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

export { signUp }
