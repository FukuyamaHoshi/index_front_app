import { useState } from "react";

function Form(props) {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={props.doSubmit}>
            <label>{props.name}  
                <input type="text" value={value} onChange={handleChange}/>
            </label>
        </form>
    )
}

export default Form;