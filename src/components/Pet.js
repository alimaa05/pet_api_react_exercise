// creating a function that takes in the prop 'pet'
const Pet = ({pet}) => {

// returning the different elements for a single pet from the pet array in 'petList'
    return(

        <>
        <h3>{pet.name}</h3>
        <p>{`${pet.age} year old ${pet.type}`}</p>
        </>
        
    )
}

export default Pet;