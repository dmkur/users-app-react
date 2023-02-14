const User = ({user}) => {
    const {name, email, age} = user


    return (
        <div>
            <div><h2>{name}</h2></div>
            <div>contacts: {email}</div>
            <div>age: {age}</div>
            <hr/>
        </div>
    )
};

export {User};
