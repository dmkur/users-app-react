import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/slices/auth.slice";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const isLogin = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      dispatch(authActions.logout());
      navigate("/login");
    }
  };

  return (
    <div>
      <div>Header</div>
      <div>
        <button onClick={() => navigate("cars")}>Cars</button>
        <button onClick={() => isLogin()}>
          {!isAuth ? "Sign in" : "Sign out"}
        </button>
      </div>
    </div>
  );
};

export { Header };
