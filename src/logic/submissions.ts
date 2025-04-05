import { Config } from "../config"
import { SetErrorMessage } from "../errors"
import { getAccessToken } from "./auth/auth"

type Estimation = {
    submissionId: number,
    estimationResId: number,
    message: string,
    creationTime: Date,
}

type Submission = {
    id: number,
    userId: number,
    problemId: number,
    sendingTime: Date,
    code: string,
    progLangId: number,
    estimation: Estimation,
}

async function getSubmissions(
    problemId: number,
    setErrorMessage: SetErrorMessage
): Promise<Submission[] | undefined> {
    const accessToken: string | null = getAccessToken()
    if (!accessToken) {
        return
    }

    const response: Response = await fetch(
        `http://${Config.EstimationsUrl}/submissions?problem-id=${problemId}`,
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

export type { Estimation, Submission, }
export { getSubmissions }
