const User = ({user}) => {
    const {name, email, age} = user

    console.log(user, 'user info')
    return (
        <div>
            <div><h2>Hello, {name}</h2></div>
            <div>contacts: {email}</div>
            <div>age: {age}</div>
            <hr/>
        </div>
    )
};

export {User};
