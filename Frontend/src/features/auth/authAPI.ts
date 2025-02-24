export const verifyUser = async () => {
    const response = await fetch('http://localhost:3000/api/auth/verify-user', {
        credentials: 'include',
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    throw new Error('Token verification failed');
};

export const signin = async (email: string, password: string) => {
    const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    throw new Error('Sign-in failed');
};

export const signup = async (username: string, email: string, password: string, confirmPassword: string) => {
    const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
        credentials: 'include',
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    throw new Error('Sign-up failed');
};

export const logout = async () => {
    const response = await fetch('http://localhost:3000/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
    });

    if (response.status === 204) {
        return true;
    }
    throw new Error('Logout failed');
};