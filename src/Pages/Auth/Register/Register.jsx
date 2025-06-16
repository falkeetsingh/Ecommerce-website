import { useState } from 'react';
import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../../config/axios';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);
            await api.post('/auth/register', formData);
            navigate('/auth/login');
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lg:container mx-auto p-[80px]">


            <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">

                <h3 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">Register </h3>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form action="#" onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
                <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name..." 
                        className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" 
                    />
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email..." 
                        className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" 
                    />
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Your Password..." 
                        className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" 
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5"
                    >
                        {loading ? 'Loading...' : 'Register'} <MoveRight />
                    </button>
                </form>

                <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4">
                    Don't have account <Link to={'/auth/login'} className="text-[#007580]">Login</Link>
                </p>
            </div>


        </div>
    );
};

export default Register;