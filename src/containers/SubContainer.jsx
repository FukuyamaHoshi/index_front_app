
export default function SubContainer(props) {

    return (
        <div>
            <div id="subbox">
                <div id="name-wrap">
                <label>名前 : </label><label id="name-value">{props.nameValue}</label>
                </div>
                <div id="age-wrap">
                <label>年齢 : </label><label id="age-value">{props.ageValue}</label>
                </div>
                <div id="sex-wrap">
                <label>性別 : </label><label id="sex-value">{props.sexValue}</label>
                </div>
                <div id="buttons-wrap">
                    <button id="edit-button" onClick={props.editClick}>編集</button>
                    <button id="delete-button" onClick={props.deleteClick} data-num={props.uuidValue}>削除</button>
                </div>
            </div>
        </div>
    )
}

