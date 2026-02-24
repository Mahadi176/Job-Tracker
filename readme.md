1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :

*getElementById : It actually selects an element based on given Id and every Id is unique and every id needs 
                 a different selector .

*getElementsByClassname : It is a selector to select elements based on their class name . We can select
                         multiple elements based on their classname.

*querySelector : This selector is mainly use to select the element directly using css selector . It only first
                or the nearest element based on the selector .

*querySelectorAll : This selector is mainly use to select all elements matching css selector .    



2. How do you create and insert a new element into the DOM?
Ans :

Step 1 : Creating an element -> Example : const p = document.creatElement('p')

Step 2 : Setting the Inner text -> Example : p.innerText = 'Good Evening'

Step 3 : Adding Class -> Example : p.classList.add('p-2','bg-white')

Step 4 : Pushing item to parent -> Example : document.div.appendChild(p)



3. What is Event Bubbling? And how does it work?
Ans : 

Event Bubbling is a concept used in dom manipulation .

During event bubbling the targeted event moves upward by its parent nodes one after one .



4. What is Event Delegation in JavaScript? Why is it useful?
Ans: 

Event Delegation is a method where we add event listener function to the parent element and we use event bubbling inside the function to reach the targeted event .

Event Delegation is useful because we don't need to write excessive code and event listener for handling the targeted event .


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:

*preventDefault() : It is actually use for stopping the browser's default behavior . Its mainly works by  blocking the preset behavior of the browser to execute .

*stopPropagation() : It is used for stopping the event bubbling to the parent . By using it the child node don't get passed to the next parent node . 