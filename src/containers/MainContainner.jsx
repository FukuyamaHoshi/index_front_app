
import Form from '../conponents/form';
import SelectForm from '../conponents/selectForm';
import SubmitButton from '../conponents/button';

function MainContainer() {
    return (
        <div>
            <div id="box">
                <div id="form_wrap">
                <Form name="名前"/>
                <Form name="年齢"/>
                <SelectForm/>
                <SubmitButton/>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;