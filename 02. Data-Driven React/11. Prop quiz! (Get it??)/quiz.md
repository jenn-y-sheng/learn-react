1. What do props help us accomplish?
Customize component with data


2. How do you pass a prop into a component?
Like how you add props in HTML but in jsx, then receive it in the component function


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
Add props like a function argument

5. What data type is `props` when the component receives it?
Object