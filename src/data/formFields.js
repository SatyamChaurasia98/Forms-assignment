export const sampleForm={
    name:{
        label:'Name',
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your Name'
        },
        value:'',
        validation:{
            required:true,
            valid:false,
            pattern:'^[a-zA-Z ]*$'
        }
    },
    email:{
        label:'Email',
        elementType:'input',
        elementConfig:{
            type:'email',
            placeholder:'Your Email'
        },
        value:'',
        validation:{
            required:true,
            valid:false,
            pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
        },
        touched:false
    },
    PhoneNumber:{
        label:'Phone Number',
        elementType:'input',
        elementConfig:{
            type:'number',
            placeholder:'Your Mobile Number'
        },
        value:'',
        validation:{
            required:true,
            valid:false
        },
        touched:false
    },
    country:{
        label:'Country',
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your Country'
        },
        value:'',
        validation:{
            required:true,
            valid:false
        },
        touched:false
    },
    gender:{
        label:'Gender',
        elementType:'radio',
        elementConfig:{
            name:'gender',
            options:[{value:'Male',displayValue:'Male'},
            {value:'Female',displayValue:'Female'},
            {value:'Other',displayValue:'Other'}]
        },
        value:'',
        validation:{
            required:true,
            valid:false
        }
    },
    card:{
        label:'Select your accounts',
        elementType:'checkbox',
        elementConfig:{
            type:'checkbox',
            options:[{value:'Credit card',displayValue:'Credit card'},
            {value:'Debit Card',displayValue:'Debit Card'},
            {value:'Net banking',displayValue:'Net banking'}]
        },
        value:'',
        validation:{
            required:true,
            valid:false
        }
    },
    city:{
        label:'Select City',
        elementType:'select',
        elementConfig:{
            options:[{value:"Select One",displayValue:"Select One",disabled:true},
            {value:'Panipat', displayValue:'Panipat'},
            {value:'Karnal', displayValue:'Karnal'},
            {value:'Sonipat', displayValue:'Sonipat'}]
        },
        value:'',
        validation:{
            required:true,
            valid:true
        }
    },
    addAddress:{
        elementType:'checkbox',
        isChecked:false,
        elementConfig:{
            show:['currentAddress','permanentAddress','ispermanentAddress'],
            options:[{value:'yes',displayValue:'Do you want to add address'}]
        },
        value:'',
        validation:{
            required:true,
            valid:true
        }
    },
    currentAddress:{
        label:"Current address",
        elementType:'textarea',
        display:true,
        elementConfig:{
            row:"4",
            column:"50",
            placeholder:"Enter address"
        },
        value:"",
        validation:{
            required:true,
            valid:true
        }
    },
    ispermanentAddress:{
        elementType:'checkbox',
        display:true,
        isChecked:true,
        elementConfig:{
            show:['permanentAddress'],
            options:[{value:'yes',displayValue:'Is your current address same as permanent address'}]
        },
        value:'',
        validation:{
            required:true,
            valid:true
        }
    },
    permanentAddress:{
        label:"permanent address",
        elementType:'textarea',
        display:true,
        elementConfig:{
            row:"4",
            column:"50",
            placeholder:"Enter address"
        },
        value:"",
        validation:{
            required:true,
            valid:true
        }
    }

}
