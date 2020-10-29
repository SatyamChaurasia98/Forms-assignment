export const bonusForm={
    worldRegions:{
        label:'World Regions',
        elementType:'select',
        elementConfig:{
            placeholder:"data",
            options:[{value:"Select One",displayValue:"Select One",disabled:"disabled"},
            {value:'asia', displayValue:'Asia'},
            {value:'africa', displayValue:'Africa'},
            {value:'americas', displayValue:'Americas'},
            {value:'europe', displayValue:'Europe'},
            {value:'oceania', displayValue:'Oceania'}]
        },
        value:'',
        validation:{
            required:true,
            valid:true
        }
    },
    countries:{
        label:'countries   ',
        elementType:'SearchableSelect',
        elementConfig:{
            options:[{value:"",label:"Select One"}
            ]
        },
        value:'',
        validation:{
            required:true,
            valid:true
        }
    }

}
