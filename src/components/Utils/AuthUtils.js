export function signIn() {
    localStorage.setItem('isAuthenticated', true);
}

export function signOut() {
    localStorage.setItem('isAuthenticated', false);
}

export function isAuthenticated() {
    return localStorage.getItem('isAuthenticated');
}

