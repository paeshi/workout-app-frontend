


const Heading = () => {
    const name= "Steve"
    const date = new Date();
    const currentTime = date.getHours();
    let greeting;
    const customStyle = {
        color: ""
    };

    if (currentTime < 12) {
        greeting = "Good Morning";
        customStyle.color = "gold";
    }
    else if (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "blue";
    }
    else if (currentTime < 24) {
        greeting = "Good Evening";
        customStyle.color = "red";
    }
    return (
        <div>
        <h1> <span className='heading' style={customStyle}>{greeting}, {name}</span></h1> 
        
        </div>
    )


}

export default Heading