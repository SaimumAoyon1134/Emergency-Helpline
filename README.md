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

