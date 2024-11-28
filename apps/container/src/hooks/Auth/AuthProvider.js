var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const response = await fetch("your-api-endpoint/auth/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // });
            // const res = await response.json();
            const res = { data: { user: 'admin' }, token: "bhjasdsadas78adbha", message: 'logged successfully' };
            if (res.data) {
                setUser(res.data.user);
                setToken(res.token);
                localStorage.setItem("site", res.token);
                navigate("/");
                return true;
            }
            else {
                throw new Error(res.message);
            }
        }
        catch (err) {
            console.error(err);
            return false;
        }
    });
    const logOut = () => {
        setUser(undefined);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };
    return (_jsx(AuthContext.Provider, { value: { token, user, loginAction, logOut }, children: children }));
};
export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};
