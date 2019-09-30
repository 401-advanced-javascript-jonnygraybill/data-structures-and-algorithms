# Challenge Summary
Find the first repeated word in a book.

## Challenge Description
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
I will refactor and change this when I have further time, but for now - I start with splitting the input string on spaces, so that each word can be an individual index position. I then iterate over each of these words, and compare to see if the word I am iterating has already been seen in the storage object.

## Solution
[!UML](../assets/repeated-word.jpg)
