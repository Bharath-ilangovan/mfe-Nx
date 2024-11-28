import { useContext, createContext, useState, FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthProvider {
    children: ReactNode;
}
interface IAuthContext {
    token: string | undefined;
    user: string | undefined;
    loginAction: (data: { username: string, password: string }) => Promise<boolean>;
    logOut: () => void
}
const AuthContext = createContext(
    {} as IAuthContext
);
const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<string | undefined>();
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = async (data: { username: string, password: string }): Promise<boolean> => {
        try {
            // const response = await fetch("your-api-endpoint/auth/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // });
            // const res = await response.json();
            const res = { data: { user: 'admin' }, token: "bhjasdsadas78adbha", message: 'logged successfully' }
            if (res.data) {
                setUser(res.data.user);
                setToken(res.token);
                localStorage.setItem("site", res.token);
                navigate("/");
                return true;
            } else {
                throw new Error(res.message);
            }
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const logOut = () => {
        setUser(undefined);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};