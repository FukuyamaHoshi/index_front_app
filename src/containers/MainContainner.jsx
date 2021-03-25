
import Form from '../conponents/form';
import SelectForm from '../conponents/selectForm';
import SubmitButton from '../conponents/button';
import axios from 'axios';
import { useState } from 'react';
import SubContainer from './SubContainer';

function MainContainer() {

    const createUrl = 'http://localhost:3001/pont/create';
    const deleteUrl = 'http://localhost:3001/pont/delete';
    const editUrl = 'http://localhost:3001/pont/edit';

    const [nameValue, setNamevalue] = useState('');
    const [ageValue, setAgevalue] = useState('');
    const [sexValue, setSexvalue] = useState('');

    const [user, setUser] = useState([]);

    const [editFlg, setEditFlg] = useState(false);
    const [editTargetId, setEditTargetId] = useState('');

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
        e.preventDefault();

        if (editFlg == false) {
        const myUid = getUniqueStr()

        axios.post(createUrl, {
            name: nameValue,
            age: ageValue,
            sex: sexValue,
            uuid: myUid
        })
        .then((response) => {
            setUser([
                ...user,
                {
                    name: nameValue,
                    age: ageValue,
                    sex: sexValue,
                    uuid: myUid
                }
            ]);
        })
        .catch((error) => {
            console.log(error);
        })
       
    }else {
           axios.post(editUrl, {
               name: nameValue,
               age: ageValue,
               sex: sexValue,
               uuid: editTargetId
           })
           .then((response) => {
               var targetUserAr = user.map(function(i) {
                   if (i.uuid === editTargetId) {
                       i.name = nameValue;
                       i.age = ageValue;
                       i.sex = sexValue;
                       return i;
                   }else {
                       return i;
                   }
               });
               setEditFlg(false);
               setUser(targetUserAr);
           })
           .catch((error) => {
               console.log(error);
               console.log('失敗');
           })
       }

        setNamevalue('');
        setAgevalue('');
        setSexvalue('');
    }

    const deleteUser = (e) => {
        let targetUid = e.currentTarget.getAttribute('data-num');
        
        axios.post(deleteUrl,{
            uuid: targetUid
        })
        .then((response) => {
            var result = user.filter(function(i) {
                return i.uuid !== targetUid;
            });
            setUser(result);
        })
        .catch((error) => {
            console.log(error);
            console.log('失敗');
        })
    }

    const editUser = (e) => {
        let targetUid = e.currentTarget.getAttribute('data-num');
        var targetUserArray = user.filter(function(i) {
            return i.uuid === targetUid;
        });

        let targetUser = targetUserArray[0];
        setNamevalue(targetUser.name);
        setAgevalue(targetUser.age);
        setSexvalue(targetUser.sex);
        setEditFlg(true);
        setEditTargetId(targetUid);
    }

    function getUniqueStr() {
        var strong = 1000;
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
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
            {
                user.map((value, index) => (
                    <SubContainer nameValue={value.name} ageValue={value.age} sexValue={value.sex} uuidValue={value.uuid} deleteClick={deleteUser} editClick={editUser}/>
                ))
            }
        </div>
    )
}

export default MainContainer;