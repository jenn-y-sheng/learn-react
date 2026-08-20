1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

In the element that was passed in when creating root

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
An object

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
There's no parent element surrounding everything

4. What does it mean for something to be "declarative" instead of "imperative"?
The system doesn't need step by step instructions

5. What does it mean for something to be "composable"?
Small pieces that can be made into something big