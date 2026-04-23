import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { Button } from '../components/Button';
import { useSetRecoilState } from 'recoil';
import { loggedInUserName } from '../atoms';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const setActiveUser = useSetRecoilState(loggedInUserName)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!username || !password) {
      toast.error("Username and password are required!");
      return;
    }
  
    setIsLoading(true);
    const loadId = toast.loading("Logging In..")

    try {
      const response = await axios.post("https://be1.piyushxz.online/api/v1/user/signin", {
        username,
        password,
      });
  
      toast.success("Login successful, redirecting...");
      setActiveUser(response.data.username);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // Server responded with a status code outside of 2xx
        if (axiosError.response.status === 404) {
          toast.error("User does not exist");
        } else if (axiosError.response.status === 500) {
          toast.error("Could not sign in, server error!");
        } else {
          toast.error((axiosError.response.data as any)?.message || "An unexpected error occurred");
        }
      } else if (axiosError.request) {
        toast.error("No response from server. Please check your connection.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
      toast.dismiss(loadId)
    }
  };
  

  return (
    <div className="h-screen w-full flex justify-center bg-gradient-to-b from-black to-blue-900">
      
      <div className="flex flex-col gap-2 justify-center w-96">

      <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
          
              ease: "easeInOut",

            }}
            onSubmit={handleSubmit}
            className=" w-full bg-black/40 p-8 rounded-2xl mr-4 shadow-lg"
          >
            <h3 className="text-white font-primary text-3xl font-extrabold mb-8">
              Login
            </h3>


            <div className="space-y-4">
              <div>
                <input
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 font-primary w-full text-sm text-white px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 font-primary w-full text-sm text-white px-4 py-3.5 rounded-md o focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="javascript:void(0);" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
                <Button isLoading={isLoading} variant='form' size='wide' text='Login' />
            </div>

          </motion.form>
          <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              className="text-sm text-gray-300 flex justify-center"
            >
              Don't have an account? <a href="javascript:void(0);" className="text-blue-400 font-semibold hover:underline " onClick={() => navigate('/signup')}>Register here</a>
            </motion.p>
      </div>
    </div>
  );
};

export default Login;