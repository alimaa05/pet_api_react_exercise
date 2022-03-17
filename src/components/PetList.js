import Pet from "./Pet"
// need to destructure our prop i.e. pets so pass it into the function
// pets prop here is all the pets from our state 
const PetList = ({pets}) => {

    // need to map our pets array (state)
    // taking the array and creates a new array due to performing a function etc. on that array
    // each element is a 'pet'

    const petNode = pets.map(pet => {

    // want to pass 'pet' as a prop in Pet component and it will take in a 'pet' i.e. a single pet from the pet array  
    // call our 'Pet' component create a 'pet' prop  pass in our 'pet' and give this a unique id 
        return <Pet pet={pet} key={pet.id}/>

    })
        return (
            <>
                {petNode}
            
            </>
        )


}

export default PetList;