import { Config } from "../../config";
import { SetErrorMessage } from "../../errors";
import { PageType, SetPageType } from "../../page-type";
import { Tokens } from "../auth/auth";

async function signIn(
    login: string,
    password: string,
    setPageType: SetPageType,
    setErrorMessage: SetErrorMessage
) {
    const response = await fetch(
        'http://' + Config.AuthUrl + '/auth/sign-in',
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

    const accessToken = respBody.accessToken
    const refreshToken = respBody.accessToken

    localStorage.setItem(Tokens.Access, accessToken)
    localStorage.setItem(Tokens.Refresh, refreshToken)

    setPageType(PageType.ProblemsList)
}

export { signIn }
