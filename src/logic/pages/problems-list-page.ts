import { Problem } from "../../data/problem";
import { SetErrorMessage } from "../../errors";
import { Config } from "../../config";
import { PagedResponse } from "../../data/network";
import { Tokens } from "../auth/auth";

async function getTasks(
    setErrorMessage: SetErrorMessage
): Promise<PagedResponse<Problem> | undefined> {
    const accessToken: string = localStorage.getItem(Tokens.Access) ?? ""

    const response: Response = await fetch(
        `http://${Config.ProblemsServerUrl}/problems`,
        {
            method: 'GET',
            headers: {
                'WWW-Authenticate': 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        }
    )

    const respBody = await response.json()
    if (!response.ok) {
        setErrorMessage(respBody.message)
        return
    }

    return respBody
}

export { getTasks }
