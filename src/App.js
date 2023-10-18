import React from "react";
import "./App.css";
import { Controller, useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    // Handle form submission here
    alert(`Form Data:\n${JSON.stringify(data, null, 2)}`);
  };

 
  const handleCancel = () => {
  
   reset({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: ""
    });
    
    
  };

  const handleConfirmSubmit = () => {
    if (Object.keys(errors).length === 0) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="App">
      <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="header">New Product</h3>
        <div className="form-group">
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="text" />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="text" />
                {errors.description && (
                  <span className="error-message">{errors.description.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="text" />
                {errors.category && (
                  <span className="error-message">{errors.category.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <Controller
            name="quantity"
            control={control}
            rules={{ required: "Quantity is required", min: 1 }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="number" />
                {errors.quantity && (
                  <span className="error-message">{errors.quantity.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required", min: 0.01 }}
            render={({ field }) => (
              <>
                <input {...field} className="form-input" type="number" step="0.01" />
                {errors.price && (
                  <span className="error-message">{errors.price.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="button-group">
          <button
            type="button"
            onClick={handleConfirmSubmit}
            className="submit-button"
          >
            Submit
          </button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;