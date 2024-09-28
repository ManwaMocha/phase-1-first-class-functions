 function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

    //But that's pretty tedious. And we already know that functions are supposed to help us reduce this kind of repetition.

   //What if we pull all of our five-mile runs into their own function?

   function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  // Let's do the same thing for lifting weights and swimming:
  function liftWeight (){
    console.log("Pump Iron")
  }
  function swimFortyLaps(){
    console.log("swim 40 laps")
  }

 // Monday() could now look like: 

 function Monday(){
    runFiveMiles()
    liftWeight()
 }
 /*We know that every day, our routine includes two activities. We also know that the first activity is always a run. That means that the second activity can be variable. What if we created a function that took the second activity as a parameter? */

 function exerciseRoutine(postRunActivity){
    runFiveMiles()
    postRunActivity()//this the callback function as it has been passed through the exerciseEoutine()

 }
 //Now let's try to use this new function we created in our Monday() function:
 function Monday(){
    exerciseRoutine(liftWeight)
 }
 function Tuesday(){
    exerciseRoutine(swimFortyLaps)
 }
 function Wednesday(){
    exerciseRoutine(runFiveMiles)
 }

 function receivesAFunction (callback){
      console.log (callback())
 }
 receivesAFunction(()=>  3*3)
function returnsANamedFunction (){
    return function namedFunction (){
        return 1*1
    }
}
function returnsAnAnonymousFunction(){
    return ()=> 7+7
}
