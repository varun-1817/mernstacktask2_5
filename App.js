import React,{useState} from 'react'; 

import DatePicker from 'react-datepicker'; 

import 'react-datepicker/dist/react-datepicker.css'; 

import './App.css'; 

 

const AgeCalculator = () => { 

    const [birthDate,setBirthDate]=useState(null); 

    const [age,setAge]=useState(''); 

 

    const agev=()=>{ 

        if(birthDate){ 

        const today=new Date(); 

        const dob=new Date(birthDate); 

        let years=today.getFullYear()-dob.getFullYear(); 

        let months=today.getMonth() - dob.getMonth(); 

        const Days = today.getDate() - dob.getDate(); 

        if (months < 0 || (months === 0 && Days < 0)) { 

            years--; 

          } 

        setAge(years); 

        } 

    }; 

  return ( 

    <div> 

        <center> 

         <h1>Age Calculator</h1> 

         <h4>Enter your date of birth</h4> 

         <input type="date" id="birthDate" value={birthDate}  

               onChange={(e) => setBirthDate(e.target.value)}/> 

        <br/> 

        <br/> 

         <button id='btn' onClick={agev}>Calculate Age</button> 

         <h2 id="age">You are {age} years old</h2> 

       </center> 

    </div> 

  ); 

}; 

export default AgeCalculator; 