import { useAuthentication } from '../hooks/apiHooks.js';
import useForm from '../hooks/formHooks.js';
import { useNavigate } from "react-router";
import { useUserContext } from '../hooks/contextHooks.js';

const LoginForm = () => {
    const { postLogin } = useAuthentication();
    const navigate = useNavigate();
    const { handleLogin } = useUserContext();

    const initValues = {
        username: '',
        password: '',
    };

    const doLogin = async () => {
        // await postLogin(inputs);
        // navigate('/');
        try {
            handleLogin(inputs);
        } catch (e) {
            alert(e.message);
        }
    };
    
    const { inputs, handleInputChange, handleSubmit } = useForm(doLogin, initValues);

    return (
        <>
            <h1 className="my-4 text-3xl font-bold">Login</h1>
            <form className="p-2.5 bg-[#111738] w-fit" onSubmit={handleSubmit}>
                 <div className="flex flex-col gap-2.5">
                     <label htmlFor="loginuser">Username</label>
                    <input
                        className="p-1.5 mb-2.5 rounded-sm border border-[#263277]"
                        name="username"
                        type="text"
                        id="loginuser"
                        onChange={handleInputChange}
                        autoComplete="username"
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="loginpassword">Password</label>
                     <input
                        className="p-1.5 mb-2.5 rounded-sm border border-[#263277]"
                        name="password"
                        type="password"
                        id="loginpassword"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <button className="w-full px-2.5 py-1.5 rounded-sm bg-[#101345] cursor-pointer border border-white text-white transition duration-250 hover:bg-[#1a1e60] font-bold" type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginForm;