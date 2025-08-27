# Emergency-Helpline
**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
****
**Answer:**

- **getElementById**  
  Returns a single element with the specified Id.  

- **getElementsByClassName**  
  Returns a HTMLCollection of all elements with the specified class name.  

- **querySelector**  
  Returns the first element that matches a CSS selector.  

- **querySelectorAll**  
  Returns a static NodeList of all elements that match a CSS selector.  

****
**2.How do you create and insert a new element into the DOM?**
****
**Answer:**

- Use `document.createElement()` to create a new element.
- Use `append()`to insert this new element into the DOM.

```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "Hello!";
document.body.append(newDiv);
```
****
**3.What is Event Bubbling and how does it work?**
****
**Answer:**

- Event bubbling is a process in the DOM where an event triggered on a child element first runs its handler, then propagates ("bubbles up") to its parent elements, running their handlers as well.
- Events move from the innermost element outward to ancestors unless stopped.

**Example:**
```javascript
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```
Clicking the child will trigger both alerts: first "Child clicked", then "Parent clicked".
****
**4.What is Event Delegation in JavaScript? Why is it useful?**
****
**Answer:**

- Event delegation is a technique where  attach a single event listener to a parent element instead of multiple listeners to individual child elements.
- The parent listens for events that bubble up from its children, and can use logic to determine which child triggered the event.

**Usefulness**
- Improves performance by reducing the number of event listeners.
- Makes it easier to manage events for dynamically added elements.

****
**5.What is the difference between preventDefault() and stopPropagation() methods?**
****
**Answer:**

- **preventDefault()**  
  Stops the default action of an event (like following a link / submitting a form).

- **stopPropagation()**  
  Prevents the event from bubbling up to parent elements (stops further propagation in the DOM).


```javascript
document.getElementById("myLink").addEventListener("click", function(e) {
  e.preventDefault();      // Stops the link from navigating
  e.stopPropagation();     // Stops the event from bubbling up
});
```




