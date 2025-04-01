import { useContext, useEffect, useState } from "react";
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

    
    if(!response.ok) {
        const result = await response.json();
        throw result;
    }


    const result = await response.json();
    return result;
    }

    return {
        login,
    }

}

// useRegister - on Event
export const useRegister = () => {

    async function register(email, username, password) {
        const response = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, username, password}) //превръща данните в JSON обект
        });


        if(!response.ok) {
            const result = await response.json();
            throw result;
        }

        const result = await response.json();
        return result;
    }

    return {
        register,
    }
}


// useUserProfile - onMount
export const useUserProfile = () => {
    const [userProfile, setUserProfile] = useState({});
    const { accessToken } = useContext(UserContext);

    useEffect(() => {
      fetch(`${apiUrl}/users/me`, {
            method: 'GET',
            headers: {
            'X-Authorization': accessToken,
            }
        })
        .then(response => response.json())
        .then(result => {
            setUserProfile(result)
        })
    }, [accessToken]);

    return { userProfile };
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
        }).finally(userLogoutHandler) //при успешно logout-ване извикай userLogoutHandler
    }, [accessToken, userLogoutHandler]);

 return {
    isLoggedOut: !!accessToken,
 };
}






