import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {userActions} from "../../redux";

const Users = () => {
    const {users} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {users && users.map(user => <User user={user} key={user._id}/>)}
        </div>
    )
};

export {Users};
