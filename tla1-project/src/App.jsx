import { useState } from "react";
import "./App.css";

function App() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [categories, setCategories] = useState([]);

  function handleAddCategory() {
    if (!categoryName.trim() || !categoryDesc.trim()) {
      alert("Please complete both input fields.");
      return;
    }

    setCategories([
      ...categories,
      {
        id: Date.now(),
        name: categoryName,
        description: categoryDesc
      }
    ]);

    setCategoryName("");
    setCategoryDesc("");
  }

  function handleDelete(id) {
    setCategories(
      categories.filter((category) => category.id !== id)
    );
  }

  return (
    <div className="app">

      <header className="header">
        <div>
          <p className="subtitle">ENTERPRISE MANAGEMENT</p>
          <h1>Income Tracker</h1>
          <p>Manage your income categories with ease.</p>
        </div>

        <div className="status">
          ● System Active
        </div>
      </header>

      <div className="stats">

        <div className="stat">
          <span>📁</span>
          <div>
            <small>Total Categories</small>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="stat">
          <span>✓</span>
          <div>
            <small>Active Records</small>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="stat">
          <span>＋</span>
          <div>
            <small>System Status</small>
            <h2>Active</h2>
          </div>
        </div>

      </div>

      <div className="content">

        <section className="form-card">

          <p className="label">REGISTRATION</p>
          <h2>Add Income Category</h2>

          <label>Category Name</label>

          <input
            type="text"
            placeholder="e.g. Consulting"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <label>Description</label>

          <input
            type="text"
            placeholder="e.g. Technical support contract"
            value={categoryDesc}
            onChange={(e) => setCategoryDesc(e.target.value)}
          />

          <button onClick={handleAddCategory}>
            + Save Category
          </button>

        </section>

        <section className="categories-card">

          <div className="categories-header">
            <div>
              <p className="label">DATABASE</p>
              <h2>Registered Categories</h2>
            </div>

            <span>{categories.length} Records</span>
          </div>

          {categories.length === 0 ? (

            <div className="empty">

              <div className="empty-icon">+</div>

              <h3>No categories yet</h3>

              <p>
                Add your first income category using the form.
              </p>

            </div>

          ) : (

            <div className="category-list">

              {categories.map((category) => (

                <div className="category" key={category.id}>

                  <div className="category-icon">
                    {category.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>

                  <button
                    className="delete"
                    onClick={() => handleDelete(category.id)}
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>

      <footer>
        Enterprise Income Tracker
      </footer>

    </div>
  );
}

export default App;
