const { useState } = require("react")

function SelectForm(props) {

    return (
        <form onSubmit={props.doSubmit}>
            <label>性別
                <select value={props.displayValue} onChange={props.doChange}>
                    <option value="noSelect">選択しない</option>
                    <option value="men">男</option>
                    <option value="women">女</option>
                </select>
            </label>
        </form>
    )
}

export default SelectForm;