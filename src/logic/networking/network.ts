import { Config } from "../../config"
import { Tokens } from "../auth/auth"

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

type HttpRequestData = {
    url: string,
    methods: string,
    headers?: [string, string][],
    body: object
}

enum ApiResponseResult {
    Success,
    BadRequest,
    NotAuthenticated,
}

type ApiResponse = {
    result: ApiResponseResult,
    errorMessage?: string,
    data?: object,
}

async function fetchAccessToken(): Promise<string | undefined> {
    const refreshToken = localStorage.getItem(Tokens.Refresh) ?? ""

    const response = await doFetch(
        {
            url: Config.AuthUrl + "/refresh",
            methods: HttpMethod.POST,
            body: {
                refreshToken
            },
            headers: []
        }
    )

    if (response.status != 200) {
        return undefined
    }

    const body = await response.json()
    return body.accessToken
}

async function doFetch(requestData: HttpRequestData): Promise<Response> {
    let headers = requestData.headers

    const accessToken = localStorage.getItem(Tokens.Access) ?? ""
    headers = [
        ...(headers ?? []),
        ["Authorization", "Bearer " + accessToken],
        ["Content-Type", "application/json"]
    ]

    return await fetch(
        requestData.url,
        {
            method: requestData.methods,
            headers,
            body: JSON.stringify(requestData.body ?? {})
        }
    )
}

async function apiRequest(requestData: HttpRequestData): Promise<ApiResponse> {
    let response = await doFetch(requestData)

    if (response.status == 401 || response.status == 403) {
        const accessToken = fetchAccessToken()
        if (!accessToken) {
            return {
                result: ApiResponseResult.NotAuthenticated 
                
            }
        }

        response = await doFetch(requestData)
    } 

    return response.json()
}

export type { HttpRequestData, HttpMethod, apiRequest, ApiResponse }
