import React,{Component} from 'react'
import Button from '../../components/UI/Button/Button'
import './ContactData.css'
import Input from '../../components/UI/Input/Input'
import {sampleForm} from '../../data/formFields'
import checkValidity from '../../validity/checkvalidity'

class ContactData extends Component {
    state = {
        sampleForm:{...sampleForm}
    }


    inputChangedHandler = (event,inputIdentifier)=>{
        const updatedForm = {...this.state.sampleForm}
        const updatedElement = {...updatedForm[inputIdentifier]}
        if (inputIdentifier==="addAddress" || inputIdentifier==='ispermanentAddress'){
            for (const elements of updatedElement.elementConfig.show) {
                const tempForm = {...this.state.sampleForm}
                const updateData = {...tempForm[elements]}
                updateData.display = updatedElement.isChecked
                tempForm[elements] = updateData
                updatedForm[elements] = updateData
            }
            updatedElement.isChecked = !updatedElement.isChecked
        }
        updatedElement.value = event.target.value
        updatedElement.validation.valid = checkValidity(event.target.value,updatedElement.validation)
        updatedElement.touched = true
        updatedForm[inputIdentifier] = updatedElement
        this.setState({sampleForm:updatedForm})
    }

    inputBlurHandler = (event)=>{
        console.log(event.target.value)
    }

    render (){
        const formElementsArray = []
        for (const key in this.state.sampleForm) {
            formElementsArray.push({
                id:key,
                config:this.state.sampleForm[key]
            })
        }
        let form = (
                <form>
                    {formElementsArray.map(formElement=>{
                        return(
                            <Input key={formElement.id} elementtype={formElement.config.elementType} 
                            label ={formElement.config.label}
                            elementconfig={formElement.config.elementConfig} 
                            value={formElement.config.value}
                            inValid = {!formElement.config.validation.valid}
                            touched = {formElement.config.touched}
                            changed = {(event)=>this.inputChangedHandler(event,formElement.id)} 
                            blur = {(event)=>this.inputBlurHandler(event)}
                            display={formElement.config.display}
                            />
                        )
                    })}
                    <Button btnType={'Success'} >SUBMIT</Button>
                </form>
        )
        return(
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData
