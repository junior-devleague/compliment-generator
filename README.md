# Compliment Generator

Can't ever think of a compliment on the fly?? Well today you are tasked with creating a random compliment application to compliment your friends on the spot :) 

### Objective

Use your knowledge of arrays, and functions to generate random compliment instantly.

### Prerequesites

- Basic knowledge of functions
- Basic knowledge of arrays
- Knowledge of Math.floor && Math.random
### Requirements

- Sublime Text
- A creative mind
### Upon completing this project, students should understand:

- Functions
- Arrays 
- Calling functions within functions
- Using Javascript Math methods

### Get started:

- Fork and Clone this repository
- Create the following files: **compliment.js**
- Follow the directions below carefully. Remember to be committing.

#### Part 1: Create a random word function
- Create a function called **pickRandomWord** that takes one parameter **(word)**. This function should return a random word using Math.floor and Math.random.
- Test your function by invoking it and passing through an array of words. Run your file with node compliment.js. Make sure to console.log() in your function. If written correctly your function should return a random word from the array passed in.

#### Step 2 - Create a generate compliment function
- Create a function called **generateCompliment** that takes no parameters.
- Create an array named **bodyParts**, assign it string values such as **hair, teeth, ears...**
- Create an array named **adjectives**, assign it string values such as **beautiful, wonderful... use your imagination or refer to links below**
- Create an array named **randomWord**, assign in string values such as **flying........ again use imagination or refer to links below**
- Create a variable named **string**,  call your **pickRandomWord function passing through your arrays** to generate a string with output
  similar to **"Your" + bodyParts + "are like a" + adjective + " " + randomWord + "!!!!!!"** **Make it your own**
- Your function should return the variable **string**. Hint you should console.log(string) to see the output.

##### Test your compliment function
- Invoke your generateCompliment function
- Run node compliment.js
- If programmed correctly you should see a random compliment string.
  ```
  ex. output = Your face is like a beautiful test !!!!!
  ```
### Resources
- Adjectives https://www.keepandshare.com/doc/12894/adjective-list
- Random words http://members.optusnet.com.au/charles57/Creative/Techniques/random_words.htm
- Random bodyparts https://www.randomlists.com/random-body-parts
### Stretch Goals
- Think of more words to put inside your arrays to make the compliment even better.
