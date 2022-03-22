let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach( function(animal, index){
    console.log(animal, index)
})

animals.forEach( (animal, index) =>
    console.log(animal, index))   // shorter version 


animals.forEach( function(animal){
    console.log(animal)
    })

animals.forEach( animal => console.log(animal))  //shorter 

//  #Terminal    node.callback.js
    