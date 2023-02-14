const Car = ({car}) => {
    const {model, year, price} = car

    return (
        <div>
            <h4>Model: {model}</h4>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </div>
    )
};

export {Car};
