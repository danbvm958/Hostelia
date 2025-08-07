export async function check(){
    const response = await fetch('http://localhost:5000/auth/check', {
        method: 'GET',
        credentials: 'include'
    });
    return response.json();
}

export async function logout() {
    const response = await fetch('http://localhost:5000/auth/logout', {
        method: 'POST',
        credentials: 'include'
    });
    return response.json();
}