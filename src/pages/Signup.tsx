import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      setIsLoading(true)
      const response = await axios.post('https://be1.piyushxz.online/api/v1/user/signup',{
        username,
        email,
        password
      })
      toast.success("Signed up successfully")
      navigate('/login')
      setIsLoading(false)
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        if (axiosError.response.status === 400) {
          toast.error("Invalid format");
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
    }
    setIsLoading(false)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900">
      <div className="flex items-center justify-center min-h-screen py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
          <div className='font-primary'>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
              className="lg:text-5xl text-3xl font-extrabold lg:leading-[55px] text-white"
            >
              Join Us for Exclusive Access
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
              className="text-sm mt-6 text-gray-300"
            >
              Create an account to enjoy our AI-powered Document Summarizer and other exclusive features.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              className="text-sm mt-6 text-gray-300"
            >
              Our AI-powered Document Summarizer helps you quickly and accurately summarize your documents.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              className="text-sm mt-12 text-gray-300"
            >
              Already have an account? <a href="/login" className="text-blue-400 font-semibold hover:underline ml-1">Login here</a>
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.2, ease: "easeInOut" }}
            onSubmit={handleSubmit}
            className="max-w-md md:ml-auto w-full bg-black bg-opacity-70 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-white font-primary text-3xl font-extrabold mb-8">
              Signup
            </h3>


            <div className="space-y-4">

              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 w-full text-sm font-primary text-white px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="signup-username" className="block text-white text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  id="signup-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  aria-required="true"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 w-full font-primary text-sm text-white px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  aria-required="true"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 w-full font-primary text-sm text-white px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mt-8">
                <Button isLoading={isLoading}variant='form' size='wide' text='SignUp'/>
            </div>

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Signup;