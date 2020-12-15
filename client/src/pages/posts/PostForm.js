import React, { useState, useContext } from "react";
import Axios from "axios";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthConsumer, AuthContext } from "../../providers/AuthProvider";

const PostForm = (props) => {
  const [ post, setPost ]= useState('');
  const { user } = useContext(AuthContext);
  const [ image, setImage ] = useState('');
  const [ sold, setSold ] = useState(false);
  const [ price, setPrice ] = useState(0);
  const [ title, setTitle ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ size, setSize ] = useState('');

  const formik = useFormik({
      initialValues:{ 
        title: '',
        image: '',
        price: '',
        location: '',
        size: ''},
  })

  const addPost = (post) => {
      debugger
          Axios
            .post(`/api/posts/`, post)
            .then((res) => {
              setPost(res.data);
            })
            .catch((error) => {
              alert("error in submitting post");  
            });
        
          }

  
  
  return(
    <>
     <Formik
      initialValues={{ title: "", image: "", price: "", location: "", size: "", }}
      onSubmit={async values => {
        try {
        let res = await Axios.post(`/api/posts`, values);
          setPost(res.data);
        } catch (err) {
          alert(JSON.stringify(values, null, 2));
        }
      }}
      // validationSchema={Yup.object().shape({
      //   title: Yup.string()
      //     .title()
      //     .required("Required"),
      //   price: Yup.string()
      //     .price()
      //     .required("Required"),
      //   location: Yup.string()
      //     .location()
      //     .required("Where are you?"),
      //   size: Yup.string()
      //     .size()
      //     .required("What size is it?")
      // })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block" }}>
              Title
            </label>
            <input
              id="title"
              placeholder="What are you posting?"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.title && touched.title
                  ? "text-input error"
                  : "text-input"
              }
            />
                        {errors.title && touched.title && (
              <div className="input-feedback">{errors.title}</div>
            )}
            <input
              id="image"
              placeholder="Enter your image URL (will be changed)"
              type="text"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.image && touched.image
                  ? "text-input error"
                  : "text-input"
              }
            />
                        {errors.image && touched.image && (
              <div className="input-feedback">{errors.image}</div>
            )}
            <input
              id="price"
              placeholder="Enter your price"
              type="integer"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.price && touched.price
                  ? "text-input error"
                  : "text-input"
              }
            />
                        {errors.price && touched.price && (
              <div className="input-feedback">{errors.price}</div>
            )}
            <input
              id="location"
              placeholder="Enter your location"
              type="text"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.location && touched.location
                  ? "text-input error"
                  : "text-input"
              }
            />
                        {errors.location && touched.location && (
              <div className="input-feedback">{errors.location}</div>
            )}
            <input
              id="size"
              placeholder="Enter your size"
              type="text"
              value={values.size}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.size && touched.size
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.size && touched.size && (
              <div className="input-feedback">{errors.size}</div>
            )}

            {/* <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button> */}
            <button type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>
              Submit
            </button>

            {/* <DisplayFormikState {...props} /> */}
          </form>
        );
      }}
    </Formik>
    {/* <form onSubmit={formik.handleSubmit}>
      <label>Post Details</label>
            <input 
        id="title"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label>Post Details</label>
      <input 
        id="image"
        name="image"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      <input 
        id="price"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <input 
        id="location"
        name="location"
        onChange={formik.handleChange}
        value={formik.values.location}
      />
      <input 
        id="size"
        name="size"
        onChange={formik.handleChange}
        value={formik.values.size}
      />
      <button type="submit">Submit</button>
    
    </form> */}


    </>
  )
  //Add Post fields here to create state
};

export default PostForm;