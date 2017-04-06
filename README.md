# insult_generator

Can't ever think of an insult on the fly?? Well today you are tasked with creating a random insult application to "burn" your friends on the spot :)  **KEEP IT PG-13 PLEASE!!!!!!!**

### Objective

Use your knowledge of arrays, and functions to generate random insults instantly.

### Prerequesites

- Bascic knowledge of functions
- Basic knowledge of arrays
- Knowledge of Math.floor && Math.random
### Requirements

- Sublime Text
- A create mind
### Upon completing this project, students should understand:

- Functions
- Arrays 
- Calling functions within functions
- Using javascript Math methods


### Get started:

- Fork and Clone this repository
- Create the following files: **insult.js**
- Follow the directions below carefully. Remember to be committing.

#### Part 1: Create a random word function
- Create a function called **pickRandomWord** that takes one parameter **(word)**. This function should return a random word using Math.floor and Math.random.
- Test your function by invoking it and passing through an array of words. Run your file with node insult.js. Make sure to console.log() in your function. If written correctly your function should return a random word from the array passed in.


#### Step 2 - Create a generate insult function
- Create a function called **generateInsult** that takes no parameters.
- Create an array named **bodyParts**, assign it string values such as **hair, teeth, ears...**
- Create an array named **adjectives**, assign it string values such as **gross, huge... use your imagination or refer to links below**
- Create an array named **randomWord**, assign in string values such as **flying........ again use imagination or refer to links below**
- Create a variable named **string**,  call your **pickRandomWord function passing through your arrays** to generate a string with output
  similar to **"Your" + bodyParts + "is like a" + adjective + " " + randomWord + "!!!!!!"**
- Your function should return the variable **string**. Hint you should console.log(string) to see the output.

##### Test your insult function
- Invoke your generateInsult function
- Run node insult.js
- If programmed correctly you should see a random insult string.
  ```
  ex. output = Your face is like a lumpy test !!!!!
  ```
### Stretch Goals
- Think of more words to put inside your arrays to make the insults even better. **Remember PG-13!!!!!!!**
