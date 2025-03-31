import { createContext } from "react";

export const UserContext = createContext({ //write default values
_id: '',
email: '',
username: '',
accessToken: '',
userLoginHandler: () => null,
userLogoutHandler: () => null,
});


