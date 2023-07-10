import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { error } = useSelector((state) => state.authReducer);

  return (
    <div>
      <Header />
      {error && <div>{error.message}</div>}
      <Outlet />
    </div>
  );
};

export { MainLayout };
