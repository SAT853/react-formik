import { useFormik } from "formik";
import React from "react";

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "test",
      email: "test@gmail.com",
      channel: "test",
    },
    onSubmit: (values) => {
      console.log("formData", values);
    },
  });

  return (
    <div className="row">
      <div className="col-12">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Channel</label>
            <input
              type="text"
              name="channel"
              id="channel"
              className="form-control"
              value={formik.values.channel}
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default YoutubeForm;
