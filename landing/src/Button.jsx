function Button (){

    const styles = {
            backgroundcolor: "hsl(210, 2%, 42%)",
            color: "aliceblue",
            padding: "0%",
            borderradius: "0%",
            border: "0cap",
            cursor: "pointer",
        } 

    const handleClick = () => console.log("ouch");
    const handleClick2 = (name) => console.log(`${name} ouch`);
    
    return(<button onClick={handleClick} style={styles}>Click me</button>)
    }
    
    export default Button