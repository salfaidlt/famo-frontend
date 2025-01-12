interface User {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export const setToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const setUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user))
}

export const getUser = (): User | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isLoggedIn = (): boolean => {
    return !!localStorage.getItem("user");
};

export const logout = () => {
    removeToken()
}