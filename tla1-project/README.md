# Enterprise Income Tracker

A React-based web application for managing and displaying income categories.

## Project Description

The Enterprise Income Tracker was originally created using HTML, CSS, JavaScript, and Bootstrap. The project was converted into a React application and redesigned with a modern purple-themed interface.

The application allows the user to:

- Add an income category
- Enter a category description
- Display registered categories
- Delete categories
- View the total number of categories
- View the number of active records
- Display an empty state when no categories exist
- Use the application on smaller screen sizes

---

# AI Assistance and Development

AI was used as a development assistant during the conversion, redesign, and explanation of this project.

AI assistance was used for:

### 1. Converting the Original JavaScript to React

The original application used direct DOM manipulation to get input values and create table rows.

The React version was changed to use:

- React components
- `useState`
- Event handlers
- JSX
- Conditional rendering
- Array methods such as `map()` and `filter()`

Instead of manually changing the HTML using JavaScript, React now manages the interface based on the application's state.

### 2. Creating React State

AI helped explain and implement state variables for:

- Category name
- Category description
- The list of categories

The project uses:

```jsx
const [categoryName, setCategoryName] = useState("");
const [categoryDesc, setCategoryDesc] = useState("");
const [categories, setCategories] = useState([]);