# Challenge Summary
Code Challenge 13, Multi-bracket Validation.

## Challenge Description
Create a function that should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets: (), [], {}.

## Approach & Efficiency
For the approach of this challenge, I ended up creating a class that got exported for testing. In this class, I created the balancedBrackets function that takes in a string. I first ensure that the input is a string, and then loop over the string with the push, pop, and peek methods. Iterations of the loop of the string are then pushed or popped depending on the matching result of what should be a bracket's pair.

## Solution
![Code Challenge 13 Image]('../../assets/balanced-brackets-uml.jpg')
