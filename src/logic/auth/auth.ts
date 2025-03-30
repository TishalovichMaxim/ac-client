import { AuthResponse, ErrorResponse } from "../../data/data";

async function signUp(
    login: string,
    password: string,
    onError: (error: ErrorResponse) => void,
): Promise<AuthResponse | undefined> {
    const response: Response = await fetch(
        'http://localhost:18080/auth/sign-up', {
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
    console.log(data)
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

export { signIn, signUp }
