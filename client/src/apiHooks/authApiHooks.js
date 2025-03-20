import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";

const apiUrl = 'http://localhost:3030';

//важен въпрос, който да си задаваме при създаването на hooks: кога се извиква - при mount или при възникване на събитие - onMount or onEvent

//useLogin - on Event
export const useLogin = () => {

    async function login(email, password) {
    const response = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}),

    });
    const result = await response.json();
    return result;
    }

    return {
        login,
    }

}

// useRegister - on Event
export const useRegister = () => {

    async function register(email, password) {
        const response = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}) //превръща данните в JSON обект
        });
        const result = await response.json();
        return result;
    }

    return {
        register,
    }
}

//useLogout - on Mount
export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if(!accessToken) {
            return;
        }

        const response = fetch(`${apiUrl}/users/logout`, {
            method: 'GET',
            headers: {
            'X-Authorization': accessToken,
            }
        }).then(userLogoutHandler) //при успешно logout-ване извикай userLogoutHandler
    }, [accessToken, userLogoutHandler]);

 return {
    isLoggedOut: !!accessToken,
 };
}
