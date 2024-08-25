import { useState } from 'react'

// Create Random User ID
const randomId = () => {
    return Math.floor( Math.random() * 1000);
}

// Initial Object 
const initState = {
    id: randomId(),
    name: "Ashiq",
    email: "ashiq@gmail.com",
    image: "localhost:3000/create?name",
    mobile: "9876543210",
    address: "#123, Kerala",
};

const MiddleWare = () => {
    const [contact, setContact] = useState(initState);
    console.log("Contact", contact);

    // Read Value from Create Component
    const readValue = (e) => {
        /* console.log("Parameter Value = ", e);
        console.log("Parameter Target = ", e.target + "-" + e.target);
        console.log("Input Value = ", e.target.name + "-" + e.target.value); */
        const {name, value} = e.target;
    }

  return {contact, setContact, readValue}
}

export default MiddleWare