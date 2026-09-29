import { useState } from "react";
import "./App.css";

function App() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [categories, setCategories] = useState([]);

  function handleAddCategory() {
    const catName = categoryName.trim();
    const catDesc = categoryDesc.trim();

    if (!catName || !catDesc) {
      alert("Please complete both input fields.");
      return;
    }

    const newCategory = {
      name: catName,
      description: catDesc
    };

    setCategories([...categories, newCategory]);

    setCategoryName("");
    setCategoryDesc("");
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow-sm border-0 mb-4">
            <div className="card-header bg-primary text-white py-3">
              <h1 className="h5 mb-0 fw-bold">
                Income Category Registration
              </h1>
            </div>

            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="txtCatName"
                    className="form-label fw-semibold"
                  >
                    Category Name
                  </label>

                  <input
                    type="text"
                    id="txtCatName"
                    className="form-control"
                    placeholder="e.g., Consulting"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="txtCatDesc"
                    className="form-label fw-semibold"
                  >
                    Description
                  </label>

                  <input
                    type="text"
                    id="txtCatDesc"
                    className="form-control"
                    placeholder="e.g., Enterprise technical support contract"
                    value={categoryDesc}
                    onChange={(e) => setCategoryDesc(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary px-4 fw-semibold"
                  onClick={handleAddCategory}
                >
                  Save Category
                </button>
              </form>
            </div>
          </div>

          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3">
              <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
                Registered Categories
              </h2>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="w-35">Category Name</th>
                    <th>Description</th>
                  </tr>
                </thead>

                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index}>
                      <td className="fw-semibold text-dark">
                        {category.name}
                      </td>

                      <td className="text-secondary">
                        {category.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;