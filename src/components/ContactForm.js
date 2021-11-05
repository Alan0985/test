import React, { useState, useEffect } from 'react';
import validator from 'validator';

export const ContactForm = () =>
{
    const initialValues = { email: '', password: '' }
    const [values, setValues] = useState( initialValues )
    const [errors, setErrors] = useState( {} )
    const [isSubmit, setSubmit] = useState( false )
    const [checked, setChecked] = useState( false )

    const onChange = ( e ) =>
    {
        const { name, value } = e.target;
        setValues( { ...values, [name]: value } )
    }

    useEffect( () =>
    {
        console.log( errors )
        if ( Object.keys( errors ).length === 0 )
        {
            console.log( values )
        }
    }, [errors] )

    const validate = ( values ) =>
    {
        let errors = {}

        if ( !validator.isEmail( values.email ) )
        {
            errors.email = "Please input a valid Email";
        }

        if ( validator.isEmpty( values.email ) )
        {
            errors.email = "Email is required";
        }

        if ( !validator.isLength( values.password, { min: 8 } ) )
        {
            errors.password = "Password must be at least 8 characters";
        }

        if ( validator.isEmpty( values.password ) )
        {
            errors.password = "Password is required";
        }
        return errors;
    }

    const onCheck = () =>
    {
        setChecked( !checked )
    }

    const onSubmit = ( e ) =>
    {
        e.preventDefault();
        setErrors( validate( values ) )
        setSubmit( true )
    }

    return (
        <div>
            <form noValidate onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder="Please enter your email"
                        value={values.email}
                        onChange={onChange} />

                    <p>{errors.email}</p>

                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder="Please enter your password"
                        value={values.password}
                        onChange={onChange} />
                    <p>{errors.password}</p>

                </div>

                <div>
                    <label htmlFor="color">Color:</label>

                    <input type='radio' name='color' id='blue' value='blue' />
                    <label htmlFor="blue">Blue</label>


                    <input type='radio' name='color' id='green' value='green' />
                    <label htmlFor="green">Green</label>

                    <input type='radio' name='color' id='red' value='red' />
                    <label htmlFor="red">Red</label>

                    <input type='radio' name='color' id='black' value='black' />
                    <label htmlFor="black">Black</label>

                    <input type='radio' name='color' id='brown' value='brown' />
                    <label htmlFor="brown">Brown</label>
                </div>

                <div>
                    <label htmlFor="animals">Animals:</label>

                    <input type='checkbox' name='animals' id='bear' value='bear' />
                    <label htmlFor="bear">Bear</label>

                    <input type='checkbox' name='animals' id='tiger' value='tiger' onClick={onCheck} />
                    <label htmlFor="tiger">Tiger</label>

                    <input type='checkbox' name='animals' id='snake' value='snake' />
                    <label htmlFor="snake">Snake</label>

                    <input type='checkbox' name='animals' id='donkey' value='donkey' />
                    <label htmlFor="donkey">Donkey</label>


                    {checked && (
                        <div>
                            <label htmlFor="typeOfAnimal">Type Of Tiger:</label>
                            <textarea id="typeOfAnimal" name="typeOfAnimal"></textarea>
                        </div>
                    )}
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}
