const apiUrl = 'http://localhost:3030';

//важен въпрос, който да си задаваме при създаването на hooks: кога се извиква - при mount или при възникване на събитие - onMount or onEvent

//use Login - on Event
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