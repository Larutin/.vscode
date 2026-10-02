import { useState } from "react";
import "./App.css";

function App() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleAddCategory() {
    if (!categoryName.trim() || !categoryDesc.trim()) {
      alert("Please complete both input fields.");
      return;
    }

    const duplicate = categories.some(
      (category) =>
        category.name.toLowerCase() === categoryName.trim().toLowerCase() &&
        category.id !== editingId
    );

    if (duplicate) {
      alert("A category with this name already exists.");
      return;
    }

    if (editingId !== null) {
      setCategories(
        categories.map((category) =>
          category.id === editingId
            ? {
                ...category,
                name: categoryName.trim(),
                description: categoryDesc.trim()
              }
            : category
        )
      );

      setEditingId(null);
    } else {
      setCategories([
        ...categories,
        {
          id: Date.now(),
          name: categoryName.trim(),
          description: categoryDesc.trim(),
          date: new Date().toLocaleDateString()
        }
      ]);
    }

    setCategoryName("");
    setCategoryDesc("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddCategory();
  }

  function handleEdit(category) {
    setCategoryName(category.name);
    setCategoryDesc(category.description);
    setEditingId(category.id);
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (confirmed) {
      setCategories(
        categories.filter((category) => category.id !== id)
      );
    }
  }

  function handleCancelEdit() {
    setCategoryName("");
    setCategoryDesc("");
    setEditingId(null);
  }

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      <header className="header">

        <div className="brand">
          <div className="brand-icon">₱</div>

          <div>
            <p className="subtitle">ENTERPRISE MANAGEMENT</p>
            <h1>Income Tracker</h1>
            <p>Manage your income categories with ease.</p>
          </div>
        </div>

        <div className="status">
          <span>●</span> System Active
        </div>

      </header>

      <div className="stats">

        <div className="stat">
          <div className="stat-icon">▦</div>

          <div>
            <small>Total Categories</small>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">✓</div>

          <div>
            <small>Active Records</small>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">＋</div>

          <div>
            <small>System Status</small>
            <h2>Active</h2>
          </div>
        </div>

      </div>

      <div className="content">

        <section className="form-card">

          <p className="label">
            {editingId !== null ? "UPDATE RECORD" : "REGISTRATION"}
          </p>

          <h2>
            {editingId !== null
              ? "Edit Income Category"
              : "Add Income Category"}
          </h2>

          <form onSubmit={handleSubmit}>

            <label>Category Name</label>

            <input
              type="text"
              placeholder="e.g. Consulting"
              value={categoryName}
              onChange={(event) =>
                setCategoryName(event.target.value)
              }
            />

            <label>Description</label>

            <input
              type="text"
              placeholder="e.g. Technical support contract"
              value={categoryDesc}
              onChange={(event) =>
                setCategoryDesc(event.target.value)
              }
            />

            <button type="submit" className="save-button">
              {editingId !== null
                ? "✓ Update Category"
                : "+ Save Category"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancelEdit}
              >
                Cancel Edit
              </button>
            )}

          </form>

          <div className="form-tip">
            <span>💡</span>
            <p>
              Category names must be unique. Press Enter to save.
            </p>
          </div>

        </section>

        <section className="categories-card">

          <div className="categories-header">

            <div>
              <p className="label">DATABASE</p>
              <h2>Registered Categories</h2>
            </div>

            <span>
              {categories.length}{" "}
              {categories.length === 1 ? "Record" : "Records"}
            </span>

          </div>

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>

          {categories.length === 0 ? (

            <div className="empty">

              <div className="empty-icon">＋</div>

              <h3>No categories yet</h3>

              <p>
                Add your first income category using the form.
              </p>

            </div>

          ) : filteredCategories.length === 0 ? (

            <div className="empty search-empty">

              <div className="empty-icon">⌕</div>

              <h3>No results found</h3>

              <p>
                Try searching for a different category or description.
              </p>

            </div>

          ) : (

            <div className="category-list">

              {filteredCategories.map((category) => (

                <div className="category" key={category.id}>

                  <div className="category-icon">
                    {category.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="category-info">

                    <h3>{category.name}</h3>

                    <p>{category.description}</p>

                    <small>
                      Added {category.date}
                    </small>

                  </div>

                  <div className="category-actions">

                    <button
                      className="edit"
                      onClick={() => handleEdit(category)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete"
                      onClick={() => handleDelete(category.id)}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>

      <footer>
        Enterprise Income Tracker
        <span>•</span>
        React Management System
      </footer>

    </div>
  );
}

export default App;