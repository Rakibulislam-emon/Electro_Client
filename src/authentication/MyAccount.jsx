import Login from "./Login";
import Registration from "./Registration";

export default function MyAccount() {
  return (
    <div className="flex flex-col lg:flex-row  max-w-screen-2xl mx-auto">
      {/* Login Section */}
      <div className="w-full lg:w-1/2 p-8">
        <Login />
      </div>

      {/* Divider with Text in the Middle */}
      <div className="hidden lg:flex items-center justify-center mx-4">
        <div className="flex-1 h-[2px] bg-gray-300"></div>
        <span className="text-gray-500 font-bold text-3xl border h-full mx-2"></span>
        <div className="flex-1 h-[2px] bg-gray-300"></div>
      </div>

      {/* Registration Section */}
      <div className="w-full lg:w-1/2 p-8">
        <Registration />
      </div>

      
    </div>
  );
}

