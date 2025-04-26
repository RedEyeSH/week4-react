import { useUser } from '../hooks/apiHooks.js';
import useForm from '../hooks/formHooks.js';

const RegisterForm = () => {
  const { postUser } = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    const userResult = await postUser(inputs);
    console.log("User result:", userResult);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h1 className="my-4 text-3xl font-bold">Register</h1>
      <form className="p-2.5 bg-[#111738] w-fit" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="registeruser">Username</label>
          <input
            className="p-1.5 mb-2.5 rounded-sm border border-[#263277]"
            onChange={handleInputChange}
            autoComplete="username"
            type="text"
            id="registeruser"
            name="username"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="registeremail">Email</label>
          <input
            className="p-1.5 mb-2.5 rounded-sm border border-[#263277]"
            onChange={handleInputChange}
            autoComplete="email"
            type="email"
            id="registeremail"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="registerpassword">Password</label>
          <input
            className="p-1.5 mb-2.5 rounded-sm border border-[#263277]"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button className="w-full px-2.5 py-1.5 rounded-sm bg-[#101345] cursor-pointer border border-white text-white transition duration-250 hover:bg-[#1a1e60] font-bold" type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;