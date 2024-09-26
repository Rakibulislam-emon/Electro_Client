export default function Login() {
  return (
    <div className="p-8  mx-auto max-w-lg lg:max-w-xl">
      <h1 className="border-b pb-4 text-center text-3xl font-semibold lg:text-left">
        <span className="border-b-4 pb-3 border-yellow-400">Login</span>
      </h1>
      <p className="pt-6 text-center text-gray-600 lg:text-left">
        Welcome back! Sign in to your account.
      </p>

      {/* form */}
      <div className="py-8">
        <form action="" className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-700 font-medium">Username or email address *</label>
            <input 
              type="email" 
              id="loginEmail" 
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
              id="loginPassword" 
              name="password" 
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your password"
              required 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-yellow-400 hover:underline">Forgot your password?</a>
          </div>

          <button 
            type="submit" 
            className="bg-yellow-400 hover:bg-black hover:text-white text-black font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}
