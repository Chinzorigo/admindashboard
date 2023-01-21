import React from 'react';
import { useState, useEffect } from 'react';
import '../src/register/register.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [countSum, setCountSum] = useState(0);
  const [countSum1, setCountSum1] = useState(0);
  const [nameData, setNameData] = useState('TestUser1');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
 
  const schema = Yup.object({
    firstName: Yup.string().required("Овог оруулна уу").test(value => value.length > 6),
    //next
    lastName: Yup.string().required('11 оруулна уу?'),
    //Next
    email: Yup.string().required('Имэйл оруулна уу?'),
    phone: Yup.string().matches(phone, 'Овог оруулна уу').required('Утас оруулна уу?'),
    password: Yup.string().required('Нууц үгээ оруулна уу?'),
    confirmPassword: Yup.string().required('Нууц үгээ оруулна уу?'),
  });

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    // 1
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },

    //2
    validationSchema: schema,

    //3
    onSubmit: (values) => {
      try {
          axios.post('https://firstreactproject-80e51-default-rtdb.asia-southeast1.firebasedatabase.app/Employee.json',{
            firstName : values.firstName,
            lastName : values.lastName,
            email : values.email,
            phone : values.phone,
            password : values.password,
            confirmPassword : values.confirmPassword
          }).then(reponse => {
          console.log(reponse);
        })
      } catch (error) {
        console.log(error);
      }
    },});


    // post -> Database unshih 
    const RegisterDataGet = async () => {
      try {
        await axios.get('https://firstreactproject-80e51-default-rtdb.asia-southeast1.firebasedatabase.app/Employee.json').then(reponse => {
          console.log(reponse);
          {Object.values(reponse.data).map(
            (value) => ( console.log(value), 
              setFirstName(value.firstName), 
              setLastName(value.lastName) )
          )}
        })
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect (() => {
      RegisterDataGet();
    });

  return (
    <div className='container'>
      <div className='title'>Бүртгүүлэх</div>
      <form action='#' onSubmit={handleSubmit}>
        <div className='userDetails'>
          {/* div 1 */}
          <div className='inputBox'>
            <span className='details'>Нэр</span>
            <input
              name='firstName'
              type='text'
              placeholder='Батбаатар'
              value={values.firstName}
              onChange={handleChange}
              className={errors.firstName && touched.firstName ? 'text-input error' : 'text-input'}
            />
            <div className='input-feedback'>{errors.firstName}</div>
          </div>

          {/* div 2 */}
          <div className='inputBox'>
            <span className='details'>Нэр</span>
            <input
              name='lastName'
              type='text'
              placeholder='Нанзаа'
              value={values.lastName}
              onChange={handleChange}
              className={errors.lastName && touched.lastName ? 'text-input error' : 'text-input'}
            />
            <div className='input-feedback'>{errors.lastName}</div>
          </div>

          {/* div 3 */}
          <div className='inputBox'>
            <span className='details'>И-мэйл</span>
            <input
              name='email'
              type='email'
              placeholder='nanzaa@gmail.com'
              onChange={handleChange}
              value={values.email}
              className={errors.email && touched.email ? 'text-input error' : 'text-input'}
            />
            <div className='input-feedback'>{errors.email}</div>
          </div>

          {/* div 4 */}
          <div className='inputBox'>
            <span className='details'>Утасны дугаар</span>
            <input
              name='phone'
              type='tel'
              placeholder='99111199'
              value={values.phone}
              onChange={handleChange}
              className={errors.phone && touched.phone ? 'text-input error' : 'text-input'}
            />
            <div className='input-feedback'>{errors.phone}</div>
          </div>

          {/* div 5 */}
          <div className='inputBox'>
            <span className='details'>Нууц үг</span>
            <input
              name='password'
              value={values.password}
              onChange={handleChange}
              type={passwordShown === true ? 'text' : 'password'}
              placeholder='**'
              className={errors.password && touched.password ? 'text-input error' : 'text-input'}
            />
            <div className='input-feedback'>{errors.password}</div>
          </div>

          {/* div 6 */}
          <div className='inputBox'>
            <span className='details'>Нууц үг давтах</span>
            <input
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              type={passwordShown === true ? 'text' : 'password'}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? 'text-input error'
                  : 'text-input'
              }
              placeholder='**'
            />
            <div className='input-feedback'>{errors.confirmPassword}</div>
          </div>
        </div>

        <div className='button'>
          <input type='submit' value='Бүртгүүлэх' />
        </div>
      </form>

      {/* <h3>{countSum}</h3>
        <input type="submit" value="Eye" onClick={handleClick} />
        <input type="submit" value="Sum" onClick={count} /> */}
        {firstName} : {lastName}
    </div>
  );
}

export default Register;