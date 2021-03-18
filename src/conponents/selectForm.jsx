const { useState } = require("react")

function SelectForm(props) {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={props.doSubmit}>
            <label>性別
                <select value={value} onChange={handleChange}>
                    <option value="noSelect">選択しない</option>
                    <option value="men">男</option>
                    <option value="women">女</option>
                </select>
            </label>
        </form>
    )
}

export default SelectForm;