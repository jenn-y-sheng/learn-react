export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

    const listItems = ingredients.map(i => (
        <li key={i}>{i}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        // console.log(newIngredient)
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {listItems}
            </ul>
        </main>
    )
}