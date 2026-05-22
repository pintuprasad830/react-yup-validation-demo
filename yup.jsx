import { useFormik } from "formik"

import * as yup from "yup";

export function FormikDemo(){


    const formik = useFormik({

         initialValues: {

            Name: '',

            Age: '',

            Mobile:'',

            City:'-1',

            Gender:''

         },

         validationSchema: yup.object({

              Name: yup.string().required('Name required').min(4, "Name too short"),

              Age: yup.number().min(15, "Age min 15").max(30,"Age max 30").required("Age Required"),

              Mobile: yup.string().matches(/^\+91\d{10}$/, "Invalid Mobile").required("Mobile Required")

         }) ,

         onSubmit: (user)=>{

            console.log(user);

         }

    })



    return(

        <div className="container-fluid">

            <form className="mt-3" onSubmit={formik.handleSubmit} noValidate>

                <dl>

                    <dt>Name</dt>

                    <dd><input type="text" name="Name" onChange={formik.handleChange} /></dd>

                    <dd className="text-danger">{formik.errors.Name}</dd>

                    <dt>Age</dt>

                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>

                    <dd className="text-danger">{formik.errors.Age}</dd>

                    <dt>Mobile</dt>

                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>

                    <dd className="text-danger">{formik.errors.Mobile}</dd>

                    <dt>Your City</dt>

                    <dd>

                        <select name="City" onChange={formik.handleChange}>

                            <option value="-1">Select City</option>

                            <option>Delhi</option>

                            <option>Hyd</option>

                        </select>

                    </dd>

                    <dd className="text-danger">{formik.errors.City}</dd>

                    <dt>Gender</dt>

                    <dd>

                        <input type="radio" onChange={formik.handleChange} name="Gender" value="Male" /> <label>Male</label>

                        <input type="radio" onChange={formik.handleChange} name="Gender" value="Female" /> <label>Female</label>

                    </dd>

                    <dd className="text-danger">{formik.errors.Gender}</dd>

                </dl>

                <button className="mx-2" type="submit" disabled={(formik.isValid)?false:true} >Submit</button>

                <button className={(formik.dirty)?'d-inline':'d-none'}>Save</button>

                <div className={`text-danger ${(formik.isValid)?'d-none':'d-block'}`}>

                    <h3>Please check the following errors </h3>

                    <ul>

                        {

                            Object.values(formik.errors).map(error=>

                                <li key={error}>{error}</li>

                            )

                        }

                    </ul>

                </div>

            </form>

        </div>

    )

}


