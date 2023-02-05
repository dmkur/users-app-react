import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "./redux";

const App = () => {
    const {users} = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    console.log(users, '1_1')

    useEffect(() => {
        dispatch(userActions.getAllUsers())

    }, [])

    return (
        <div>
            App component
        </div>
    )
};

export {App};
