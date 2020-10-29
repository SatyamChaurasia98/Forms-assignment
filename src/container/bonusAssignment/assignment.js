import React,{Component} from 'react'
import Button from '../../components/UI/Button/Button'
import './assignment.css'
import Input from '../../components/UI/Input/Input'
import {bonusForm} from '../../data/bonusAssignmentdata'
import checkValidity from '../../validity/checkvalidity'
class BonusAssignment extends Component {
    state = {
        sampleForm:{...bonusForm}
    }

    getCountriesHandler = (value)=>{
        fetch(`https://restcountries.eu/rest/v2/region/${value}`,{
            method:"GET",
        }).then(res=>res.json())
        .then(data=>{
            const countries = []
            for (const iterator of data) {
                const name = iterator.name
                countries.push({value:name,label:name})
            }
            const updatedForm = {...this.state.sampleForm}
            const updateCountries = {...updatedForm.countries}
            const newOptions = [...countries]
            updateCountries.elementConfig.options = newOptions
            updatedForm.countries = updateCountries
            this.setState({sampleForm:updatedForm})
        })

    }


    inputChangedHandler = (event,inputIdentifier)=>{
        console.log(event)
        const updatedForm = {...this.state.sampleForm}
        const updatedElement = {...updatedForm[inputIdentifier]}
        if (inputIdentifier==="worldRegions"){
            this.getCountriesHandler(event.target.value)
        }
        updatedElement.value = inputIdentifier==="countries"?event.value:event.target.value
        updatedElement.validation.valid = checkValidity(inputIdentifier==="countries"?event.value:event.target.value,updatedElement.validation)
        updatedElement.touched = true
        updatedForm[inputIdentifier] = updatedElement
        this.setState({sampleForm:updatedForm})
    }

    inputBlurHandler = (event)=>{
        console.log(event)
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
                            blur = {(event)=>this.inputBlurHandler(event,formElement.id)}
                            display={formElement.config.display}
                            />
                        )
                    })}
                    <Button btnType={'Success'} >SUBMIT</Button>
                </form>
        )
        return(
            <div className="BonusAssignment">
                <h4>Enter Data</h4>
                {form}
            </div>
        )
    }

}

export default BonusAssignment
