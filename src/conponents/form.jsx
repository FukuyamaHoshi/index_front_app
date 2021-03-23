
function Form(props) {

    return (
        <form onSubmit={props.doSubmit}>
            <label>{props.name}  
                <input type="text" value={props.displayValue} onChange={props.doChange}/>
            </label>
        </form>
    )
}

export default Form;