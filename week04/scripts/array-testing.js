let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana',
    'Bob']

// array.filter(name => name > 5) .. within the (), you create a new variable for each item in the array, separated by the =>, and then you enter the test on that variable to determine if it remains in the new array/list being created.

let namesB = names.filter(a => a.charAt(0) === 'B');

// array.map(name ==> name * 5); .. same format as the filter array, but with a different objective. The filter array method simply filters down the items in the array to a new array with only those items. The map method is designed to modify those elements without doing any filtering. A mathematical or string expression could be represented in the second half of the () after the => separator, but you could also reasonably have created a function outside of the array method and call it within the array method

let namesC = names.map(name => name.length)


let namesD = names.reduce((total, name) => total + name.length, 0) / names.length

// In this last one, it's a bit more complicated, so let's work through it.  When using the array method, you need to put in a second set of brackets () first a variable name that will act as an accumulator, and then a second variable that, like the other variables, represents each item in the array that this method is looping through. Separated by the => symbol, you then have the test or function that acts on each item in the array. The last value, again separated by a comma, is where the value of the accumulator variable starts. 

let displayB = document.querySelector("#testB");
displayB.innerHTML = namesB

let displayC = document.querySelector("#testC");
displayC.innerHTML = namesC

let displayD = document.querySelector("#testD");
displayD.innerHTML = namesD

// Looks like when building out a phrase to print to the screen in Python, you use the following:

// print(f"How are you doing today {personalName}?")

// In Javascript, however, you can either concatenate the variable names, such as the following:

// "Welcome to the " + nameOfGroup + " " + nameOfPerson + "!"

// Or use string literals, which is a modification to the variable so it is contained in something and does not need to be concatenated. Python does this already by putting the variable in brackets {}, and Javascript does the same, but puts a $ sign in front of those brackets.

// `Welcome to the ${courseName} ${stuFirstName}!`

// This is simpler and more like Python, and thus is recommended

// The one caveat is the use of the ` symbol instead of "" or ', which I guess is required for the string literals to be processed in the phrase