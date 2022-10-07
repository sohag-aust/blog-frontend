// isLoggedIn
export const isLoggedIn = () => {
    const data = localStorage.getItem("data");

    if(!data) {
        return false;
    }

    return true;
}

// doLogin => data => set data to localStorage
export const doLogin = (loginData, next) => {
    localStorage.setItem("data", JSON.stringify(loginData));
    next(); // this one is callBack function
}


// doLogout => remove data from localStorage
export const doLogout = (next) => {
    localStorage.removeItem("data");
    next(); // this one is callBack function
}


// get currentUser
export const getCurrentUserDetail = () => {
    if(isLoggedIn()) {
        return JSON.parse(localStorage.getItem("data"))?.user;
    } else {
        return false;
    }
}