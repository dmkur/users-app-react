import "./header.style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/slices/auth.slice";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log(isAuth);

  const isLogin = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      dispatch(authActions.logout());
      navigate("/login");
    }
  };

  return (
    <div className="headerWrapper">
      <div>Header</div>
      <div className="headerBTN">
        <button onClick={() => navigate("cars")}>Cars</button>
        <button onClick={() => isLogin()}>
          {!isAuth ? "Sign in" : "Sign out"}
        </button>
      </div>
    </div>
  );
};

export { Header };
