import React, { useState } from 'react';

const AddStudentForm = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    Roll: '',
    Class: '',
    Section: ''
  });

  // State for storing form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.age) errors.age = "Age is required.";
    if (!formData.Roll) errors.Roll = "Roll is required.";
    if (!formData.Class) errors.Class = "Class is required.";
    if (!formData.Section) errors.Section = "Section is required.";

    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data or perform other actions
      console.log(formData);
      // Reset form fields
      setFormData({
        name: '',
        age: '',
        Roll: '',
        Class: '',
        Section: ''
      });
      setFormErrors({});
    } else {
      // Form has errors, display them
      setFormErrors(errors);
    }
  };

  return (
    <div id="AddStudentForm">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
          {formErrors.age && <span className="error">{formErrors.age}</span>}
        </div>
        <div>
          <label>Roll:</label>
          <input type="number" name="Roll" value={formData.Roll} onChange={handleInputChange} />
          {formErrors.Roll && <span className="error">{formErrors.Roll}</span>}
        </div>
        <div>
          <label>Class:</label>
          <input type="number" name="Class" value={formData.Class} onChange={handleInputChange} />
          {formErrors.Class && <span className="error">{formErrors.Class}</span>}
        </div>
        <div>
          <label>Section:</label>
          <input type="text" name="Section" value={formData.Section} onChange={handleInputChange} />
          {formErrors.Section && <span className="error">{formErrors.Section}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
