
import Form from '../conponents/form';
import SelectForm from '../conponents/selectForm';
import SubmitButton from '../conponents/button';
import axios from 'axios';
import { useState } from 'react';
import SubContainer from './SubContainer';

function MainContainer() {

    const postUrl = 'http://localhost:3001/pont/create';
    const getAllurl = 'http://localhost:3001/pont/post';

    const [nameValue, setNamevalue] = useState('');
    const [ageValue, setAgevalue] = useState(0);
    const [sexValue, setSexvalue] = useState('');

    const handleNameChange = (e) => {
        setNamevalue(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAgevalue(e.target.value);
    }

    const handleSexChange = (e) => {
        setSexvalue(e.target.value);
    }

    const handleButtonSubmit = (e) => {

        axios.post(postUrl, {
            name: nameValue,
            age: ageValue,
            sex: sexValue
        })
        .then((response) => {
            console.log(response.data);
            const data = response.data;

            const name = data.name;
            const age = data.age;
            const sex = data.sex;


        })
        .catch((error) => {
            console.log(error);
        })
    }

    const fetch = () => {
        axios.get(getAllurl)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <div id="box">
                <div id="form_wrap">
                <Form name="名前" doChange={handleNameChange} displayValue={nameValue}/>
                <Form name="年齢" doChange={handleAgeChange} displayValue={ageValue}/>
                <SelectForm doChange={handleSexChange} displayValue={sexValue}/>
                <SubmitButton doClick={handleButtonSubmit}/>
                </div>
            </div>
            <SubContainer/>

        </div>
    )
}

export default MainContainer;