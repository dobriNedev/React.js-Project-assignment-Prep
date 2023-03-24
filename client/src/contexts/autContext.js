import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
//import { authServiceFactory } from "../services/authService";

export const authContext = createContext();

// export const AuthProvider = ({
//     children
// }) => {
//     const [auth, setAuth] = useState({});
//     const navigate = useNavigate();

//     const authService = authServiceFactory(auth.accessToken);

//     const onLoginSubmit = async(data) => {
//         try {
//             const result = await authService.login(data);
//             setAuth(result);
//             navigate('/');
//         } catch (error) {
//             console.log('Error on login:' + error);
//         }
//     };


//     const onRegisterSubmit = async(data) => {
//         const {rePass, ...restData} = data;

//         if (rePass !== restData.password) {
//             //TODO:add proper error handling
//             return
//         }

//         try {
//             const result = await authService.register(restData);
//             setAuth(result);
//             navigate('/');
//         } catch (error) {
//             console.log('Error on register:' + error);
//         }
//     }

//     const onLogout = async() => { 
//         try {
//             await authService.logout();
//             setAuth({});
//         } catch (error) {
//             console.log('Error on logout:' + error);
//         }
//     };
        
//     const contextValues = {
//         onLoginSubmit,
//         onRegisterSubmit,
//         onLogout,
//         userId: auth._id,
//         token: auth.accessToken,
//         userEmail: auth.email,
//         name: auth.firstName,
//         isAuthenticated: !!auth.accessToken
//     };

//     return(
//         <authContext.Provider value={contextValues}>
//             {children}
//         </authContext.Provider>
//     );
// };