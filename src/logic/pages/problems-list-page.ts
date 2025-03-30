import { Problem } from "../../data/problem";
import { SetPageType } from "../../page-type";
import { SetErrorMessage } from "../../errors";
import { CONFIG } from "../../config";
import { PagedResponse } from "../../data/network";

async function getTasks(
    setPageType: SetPageType,
    setErrorMessage: SetErrorMessage
): Promise<PagedResponse<Problem> | undefined> {
    const response: Response = await fetch(
        `http://${CONFIG.PROBLEMS_SERVER_URL}/problems`,
        {
            method: 'GET',
            headers: {
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
