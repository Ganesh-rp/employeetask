
export const setItem = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export const getItem = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const clearItem = () => {
    localStorage.clear();
}

export const isLoggedIn = () => {
    const user = getItem('user');
    return user;
}
