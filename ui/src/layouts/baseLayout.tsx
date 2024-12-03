import { NavLink, Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div className="flex flex-row D w-full">
      <div className="select-none fixed h-full bg-blue-400 w-[250px] border-r-[1px] border-blue-500 flex flex-col text-center py-[20px]">
        <div className=" text-[40px]">Project B</div>
        <div className="mt-[20px] flex flex-col">
          <NavLink to="/">
            {({ isActive }) => {
              return (
                <div
                  className={`${
                    isActive
                      ? "bg-blue-600 border-blue-700 text-white"
                      : "hover:bg-blue-300"
                  } h-[40px] mx-2 rounded-[20px] flex justify-center items-center text-[18px]`}
                >
                  <span>Home</span>
                </div>
              );
            }}
          </NavLink>
          <NavLink to="/products">
            {({ isActive }) => {
              return (
                <div
                  className={`${
                    isActive
                      ? "bg-blue-600 border-blue-700 text-white"
                      : "hover:bg-blue-300"
                  } h-[40px] m-2 rounded-[20px] flex justify-center items-center text-[18px]`}
                >
                  <span>Products</span>
                </div>
              );
            }}
          </NavLink>
        </div>
      </div>
      <div className="w-[calc(100%-250px)] ml-[250px]">
        <Outlet />
      </div>
    </div>
  );
};
