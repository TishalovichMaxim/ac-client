import { Config } from "../../config";
import { AuthResponse, ErrorResponse } from "../../data/data";

enum Tokens {
    Access = "access-token",
    Refresh = "refresh-token",
}

function getAccessToken(): string | null {
    return localStorage.getItem(Tokens.Access)
}

function removeAccessToken() {
    localStorage.removeItem(Tokens.Access)
}

function getRefreshToken(): string | null {
    return localStorage.getItem(Tokens.Refresh)
}

function removeRefreshToken() {
    localStorage.removeItem(Tokens.Refresh)
}

async function signUp(
    login: string,
    password: string,
    onError: (error: ErrorResponse) => void,
): Promise<AuthResponse | undefined> {
    const response: Response = await fetch(
        Config.AuthUrl + "/auth/sign-up", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
    });

    if (!response.ok) {
        const error: ErrorResponse = await response.json();
        onError(error)
        return
    }

    const data: AuthResponse = await response.json();
}

async function signIn(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error: ErrorResponse = await response.json();
        throw new Error(error.message || 'Sign-in failed');
    }

    const data: AuthResponse = await response.json();
    return data;
}

export { signIn, signUp, Tokens, getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken }
