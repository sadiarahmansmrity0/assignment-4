# assignment-4
# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# Ans:getElementById: Finds one specific item by its unique ID. It is the fastest way.
# getElementsByClassName: Finds all items with a certain class and gives you a list (HTMLCollection).
# queryySelector: Uses CSS style (like #id or .class) to find the first match.
# querySelectorAlle to find all matches and gives you a list (NodeList).

# 2. How do you create and insert a new element into the DOM?
# Ans: It’s a 3-step process:
# Create: Use document.createElement('div') to make the element.
# Fill: Add text or content using innerText or innerHTML.
# Place: Use appendChild() to stick it inside a parent element on your page.

# 3. What is Event Bubbling? And how does it work?
# Ans: Imagine a bubble in a glass of soda. When an event(like a click) happens on a child element, it bubbles up to its parent, then the grandparent, all the way to the top.

# 4. What is Event Delegation in JavaScript? Why is it useful?
# Ans:stead of putting a listener on every single button (which wastes memory), you put one listener on the parent. When a button is clicked, the parent "catches" the event and handles it. It’s useful because it’s faster and works for new buttons added later
# 5. What is the difference between preventDefault() and stopPropagation() methods?
# ans: Ans: preventDefault(): Stops the browser from doing its default job(like stopping a link from opening or a form from refreshing).
# stopPropagation(): Stops the event from bubbling up. It tells the event: "Stop here! Don't tell my parent elements that I was clicked."

