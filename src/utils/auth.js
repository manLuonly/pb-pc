import Cookies from "js-cookie";

const TokenKey = "token";
const Name = "name";

export function getToken(TokenKey) {
    return Cookies.get(TokenKey);
}

export function setToken(TokenKey, token) {
    return Cookies.set(TokenKey, token, {
        expires: 7200000, //3年有效期。交由后台管理
    });
}

export function getName(Name) {
    return Cookies.get(Name);
}

export function setRole(Name, role) {
    return Cookies.set(Name, role);
}

export function getRole(Name, role) {
    return Cookies.get(Name, role);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

export function removeName(Name) {
    return Cookies.remove(Name);
}
