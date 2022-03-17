import { useState } from "react";


// calling on the prop 'onPetSubmission' so we can use the function 'addPetToDatabase'
const PetForm = ({onPetSubmission}) => {

// for things we want the form to take care of
// presetting the values as empty string and 0 for age
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");


// we want event handles to handle the form
// event.target handles the event
// our text fields will have a value thats why we add .value at the end - so we can connect it to specific value of that input target
// then it can update that form

// the event is whatever the user enters 
//.target - is focusing on where the user clicks - returns the element that triggers the event 
// whatever we are changing we get the value of that and then update the setName and change the value of the state 
    const handleNameChange = (event => {
        setName(event.target.value);
    })

    const handleAgeChange = (event => {
        setAge(event.target.value);
    })

    const handleTypeChange = (event => {
        setType(event.target.value);
    })
    
    
    const handleBreedChange = (event => {
        setBreed(event.target.value);
    
    })


// creating a function that deals with the submission of the form

// first we want to stop the page from refreshing completely - so once you post it keeps the info 
    const handleFormSubmit = (event) => {
        event.preventDefault();

 // data validation 
 // if any of the form boxes are empty it will give an alert to add the data 
        if(!name || !age || !type || !breed){
            alert("missing information");
            return;
        }

    // we want to create a new variable that takes all of these properties that are entered in our form
        const newPetObject = {
            name: name,
            age: age,
            type: type,
            breed: breed

        }
    // calling the prop and passing the object created above
        onPetSubmission(newPetObject);

    // at the end when the form is submitted we want to reset the form values     
        setName("");
        setAge("");
        setType("");
        setBreed("");


    }


    return(

        // on submission of the form we want the 'handleFormSubmit' function it run 
        // in the {} of value={name} etc. is the value of our state 
        // when a change it made a function will be fired 
        // when the form is submitted it will run the function that is passed in {} for the onChange={handleNameChange}
        <form onSubmit={handleFormSubmit}> 
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={handleNameChange}/>

            <label htmlFor="age">Age: </label>
            <input type="number" id="age" value={age} onChange={handleAgeChange}/>

            <label htmlFor="type">Type: </label>
            <input type="text" id="type" value={type} onChange={handleTypeChange}/>


            <label htmlFor="breed">Breed: </label>
            <input type="text" id="breed" value={breed} onChange={handleBreedChange}/>     

            <input type="submit" value="Add New Pet"/>

        </form>
    )

}


export default PetForm;