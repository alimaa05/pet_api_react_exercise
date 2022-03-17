// ALL THE LOGIC - LOCIAL AND STATE AT THE SAME LEVEL 


import { useState, useEffect } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

// by importing useState so we can initialise pet state 
// useEffect is a hook that takes a callback and list of things that will trigger that callback firing
// one thing it can do it load data from api 

// PRESETTING OUT STATE TO THE DATABASE USING FETCH

const PetContainer = () => {
    const [pets, setPets] = useState([]);
        

    // use fetch to load data from external source i.e. api 
    // fetch takes a http link and returns a promise 
    // .then is taking a callback - doing an implicit return i.e. using => and doing it in one line
    // then when the promise resolves it doing whats in the brackets 
    // then whatever data we get from the json body we want to pass it into setPets 

    // useEffect is doing something when one of the values changes 
    useEffect(() => {
        fetch("http://localhost:8080/pets")
        .then(response => response.json())
        .then(data => setPets(data))
        .catch(error => console.error(error))
    }, []);
    // want to include the array so only all the things in the array can trigger callback and nothing else 
    // everytime we modify what we put in the array it will fire once
    // once the app is mounted i.e. its finished rendering and will fire useEffect the first time
    // then if we update something it re-renders and additional useEffect may be called
   
    

    // Creating a post request to add new pet to the database 
    // Sending a POST request 
    // state the method
    const addPetToDatabase = (newPet) => {
        fetch("http://localhost:8080/pets",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            //.stringify converts the body format 
            //convert JSON formate to readable string
            // passing in () what we want to convert to a string to add it to the database 
            body: JSON.stringify(newPet)
        })
        // when we post something we get a response back 
        // .then ensures that our app reflects the changes of any new pet
        // get the data and extract it using  the json function 
        // want to add this data to our existing state using setPets
        .then(response => response.json())
        // get the json data - everything is pets and the new data, put it in new array and updating 'setPets
        .then(data => setPets([...pets, data]))
    }

    // PetContainer is returning PetForm and PetList

    // PetForm passing a prop 'onPetSubmission' and this takes the 'addPetToDatabase' function

    
    // petList - calling the component - passing it a prop called 'pets' - the value in pets prop is the pets value from the state we created above
    // the prop 'pets' will need to be passed into the function we create in PetList.js 
    // anything in {} is javascript experession 

    // passing the function 'addPetToDatabase as a prop - create the prop 'onPetSubmission' 
    return (
        <>
            <PetForm onPetSubmission={addPetToDatabase}/>
            <hr/>
            <PetList pets={pets}/>
        </>
        
    )

}

export default PetContainer;