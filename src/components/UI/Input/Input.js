import React,{Fragment} from 'react'
import './Input.css'
import Select from 'react-select'


const Input = (props)=>{
    let inputElement = null
    const inputClasses = ['InputElement']
    if(props.inValid && props.touched ){
        inputClasses.push('Invalid')
    }
    switch (props.elementtype) {
        case ('input'):
            inputElement = <input className={inputClasses.join(" ")} 
            {...props.elementconfig} 
            value={props.value}
            onChange={props.changed}
            onBlur = {props.blur}/>
            break
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(" ")} 
            {...props.elementconfig} 
            value={props.value}
            onChange={props.changed}
            onBlur = {props.blur}/>
            break
        case ('select'):
            inputElement = (<select 
            className={inputClasses.join(" ")} value={props.value} onChange={props.changed} multiple={props.multiple} onBlur = {props.blur}>
                {props.elementconfig.options.map((optionElement,index)=>{
                    return(
                    <option key= {index} value={optionElement.value}>
                        {optionElement.displayValue}
                    </option>
                    )
                })}
            </select>)
            break
        case('radio'):
            inputElement = (
                <Fragment>
                {props.elementconfig.options.map((radioButton,index)=>{
                    return(
                    <Fragment key={index}>
                    <input type="radio" value={radioButton.value} name={props.elementconfig.name} onBlur = {props.blur} onChange={props.changed}/>
                    <label>{radioButton.displayValue}</label>
                    </Fragment>
                    )
                })}
                </Fragment>
            )
            break
        case('checkbox'):
            inputElement = (
                <Fragment>
                {props.elementconfig.options.map((checkboxButton,index)=>{
                    return(
                    <Fragment key={index}>
                    <input type="checkbox" value={checkboxButton.value} onBlur = {props.blur} onChange={props.changed}/>
                    <label>{checkboxButton.displayValue}</label>
                    </Fragment>
                    )
                })}
                </Fragment>
            )
            break
        case('SearchableSelect'):
                inputElement=(
                <Select 
                options={props.elementconfig.options} 
                onBlur = {props.blur} 
                onChange={props.changed} 
                className={props.elementconfig.className}/>)
            break
        default:
            inputElement = <input className={inputClasses.join(" ")} {...props.elementconfig} value={props.value}/>
    }

    return(
        <div className='Input'style={{display:(props.display?"none":"block")}}>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input