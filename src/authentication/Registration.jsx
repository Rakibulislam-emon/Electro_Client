import { useState } from 'react';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const axios = useAxios()
  const [userType, setUserType] = useState('customer');
  // navigate 
  const navigate = useNavigate()
  // handle registration

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Common fields
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    // Vendor-specific fields (optional)
    const firstName = userType === 'vendor' ? form.firstName.value : null;
    const lastName = userType === 'vendor' ? form.lastName.value : null;
    const shopName = userType === 'vendor' ? form.shopName.value : null;
    const shopUrl = userType === 'vendor' ? form.shopUrl.value : null;
    const phoneNumber = userType === 'vendor' ? form.phoneNumber.value : null;

    // Send data to server or handle further validations
    console.table();

    const registerInfos = {
      userType,
      username,
      email,
      password,
      ...(userType === 'vendor' && { firstName, lastName, shopName, shopUrl, phoneNumber }),
    }

    try {

      const res = await axios.post('/api/registration', {
        registerInfos
      });
      console.log('Registration successful:', res.data);
      if (res.status === 201) {
        // store jwt token 
        localStorage.setItem('token', res.data.token);
        toast.success('Registration successful')
        navigate('/')
      }
    } catch (error) {
      toast.error('error:', error)

    }
  };

  return (
    <div className="p-8  mx-auto max-w-lg lg:max-w-xl">
      <h1 className="border-b pb-4 text-center text-3xl font-semibold lg:text-left">
        <span className="border-b-4 border-yellow-400 pb-3">Register</span>
      </h1>
      <p className="pt-6 text-center text-gray-600 lg:text-left">
        Create an account to get started with your e-commerce journey!
      </p>

      {/* Toggle between customer and vendor */}
      <div className="flex justify-center lg:justify-start space-x-4 mt-8">
        <button
          className={`py-2 px-4 rounded-full transition-all duration-300 ${userType === 'customer' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setUserType('customer')}
        >
          Customer
        </button>
        <button
          className={`py-2 px-4 rounded-full transition-all duration-300 ${userType === 'vendor' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setUserType('vendor')}
        >
          Vendor
        </button>
      </div>

      {/* Common fields for both customer and vendor */}
      <div className="py-8">
        <form
          onSubmit={handleRegister}
          className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Vendor-specific fields */}
          {userType === 'vendor' && (
            <>
              <div className="space-y-1">
                <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="shopName" className="block text-gray-700 font-medium">Shop Name *</label>
                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  placeholder="Enter your shop name"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="shopUrl" className="block text-gray-700 font-medium">Shop URL *</label>
                <input
                  type="url"
                  id="shopUrl"
                  name="shopUrl"
                  className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  placeholder="https://yourshopurl.com"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </>
          )}
          <div className="mt-4">
            <p className="text-gray-600">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-black hover:text-white text-black font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
          >
            Register as {userType === 'customer' ? 'Customer' : 'Vendor'}
          </button>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Sign up today and you will be able to:</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Speed your way through checkout</li>
              <li>Track your orders easily</li>
              <li>Keep a record of all your purchases</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
