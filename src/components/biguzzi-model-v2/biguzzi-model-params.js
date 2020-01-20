export default [
    {
        display : true,
        calendar : true,
        range : false,
        select : false,
        variableConfig : {
            preset : null,
            code : 'age',
            name : 'Date of birth',
            minAge : 10,
            maxAge : 50,
            displayName : 'Age',
            displayPoints : true,
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return 0.7857142857142857 * x - 11.785714285714285 
            },
            range_info : "The model age range is 15 to 50 years."
        },
    },
    {
        display : true,
        calendar : false,
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'weight',
            name : 'Mother weight (kg)',
            validConfig : {
                inputType : 'number',
                min : 0,
                max : 140,
                step : 0.01,
            },
            displayPoints : true,
            displayName : 'Kilograms',
            range_info : "The model weight range is 40kg to 140kg.",
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return 0.23636363636363636 * x - 9.454545454545455
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return validConfig.max;
                if (x < validConfig.min) return validConfig.min;
                return x;
            }
        }
    },
    {
        display : true,
        calendar : false,
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'haemoglobin',
            name : 'Haemoglobin (g/L)',
            validConfig : {
                inputType : 'number',
                min : 0,
                max : 170,
                step : 0.01,
            },
            displayPoints : true,
            displayName : 'Quantity',
            range_info : "The model range is 70g/L to 170g/L.",
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return -0.51 * x + 86.7
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return validConfig.max;
                if (x < validConfig.min) return validConfig.min;
                return x;
            }
        }
    },
    {
        display : true,
        calendar : false,
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'platelets',
            name : 'Platelets (x 30,000/uL)',
            validConfig : {
                inputType : 'number',
                min : 0,
                max : 24,
                step : 0.01,
            },
            displayPoints : true,
            displayName : 'Quantity',
            range_info : "The model range is 2 to 24 (x 30,000/uL)", 
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return -1.1363636363636365 * x + 27.272727272727273
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return validConfig.max;
                if (x < validConfig.min) return validConfig.min;
                return x;
            }
        }
    },
    {
        display : true,
        calendar : false,
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'placentaWeight',
            name : 'Placenta weight (grams)',
            validConfig : {
                inputType : 'number',
                min : 0,
                max : 1000,
                step : 0.1,
            },
            displayPoints : true,
            displayName : 'Grams',
            range_info : 'The model range is 0g to 1000g.',
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return 0.06222222222222222 * x - 6.222222222222222;
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return validConfig.max;
                if (x < validConfig.min) return validConfig.min;
                return x;
            }
        }
    },
    {
        display : true,
        calendar : false,
        range : false,
        select : true,
        variableConfig : {
            preset : null,
            code : 'womenBirthHistory',
            name : 'Parity',
            options : ['Nulliparous', 'Primiparous', 'Multiparous'],
            mapping : {
                'Nulliparous' : 0,              // model --> Nulliparous
                'Primiparous' : 1,              // model --> Primiparous
                'Multiparous' : 2,              // model --> Multiparous
            },
            displayPoints : false,
        }
    },
    {
        display : true,
        calendar : false,
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'neonatalWeight',
            name : 'Neonatal weight (grams)',
            validConfig : {
                inputType : 'number',
                min : 0,
                max : 5500,
                step : 0.1,
            },
            displayPoints : true,
            displayName : 'Grams',
            womenBirthHistory : null,
            range_info : 'The model range is 1500g to 5500g.',
            modelFunction : function(x, config){
                var wbh = config.womenBirthHistory;
                if (wbh == 0) return 0.02125 * x - 16.875000000000004   // Nulliparous
                if (wbh == 1) return 0.00625 * x + 16.625               // Primiparous
                if (wbh == 2) return 0.01025 * x - 15.375               // Multiparous
                return null
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return validConfig.max;
                if (x < validConfig.min) return validConfig.min;
                return x;
            }
        }
    },
    {
        display : true,
        calendar : false,
        range : false,
        select : true,
        variableConfig : {
            preset : null,
            code : 'vacuum',
            name : 'Is vacuum used?',
            options : ['No', 'Yes'],
            mapping : {
                "No": 0,
                "Yes" : 11,
            },
            displayPoints : true,
        }
    },
    {
        display : true,
        calendar : false,
        range : false,
        select : true,
        variableConfig : {
            preset : null,
            code : 'laceration',
            name : 'Laceration',
            options : ['No', 'Yes'],
            mapping : {
                "No": 0,
                "Yes" : 12.5,
            },
            displayPoints : true,
        }
    },
    {
        display : true,
        calendar : false,
        range : false,
        select : true,
        variableConfig : {
            preset : null,
            code : 'episiotomy',
            name : 'Episiotomy',
            options : ['No', 'Median', 'Paramedian'],
            mapping : {
                "No": 0,
                "Median" : 9,
                "Paramedian" : 27.5,
            },
            displayPoints : true,
        }
    },
    {
        display : true,
        calendar : false,
        range : false,
        select : true,
        variableConfig : {
            preset : null,
            code : 'retainedPlacenta',
            name : 'Retained placenta',
            options : ['No', 'Yes'],
            mapping : {
                "No": 0,
                "Yes" : 66,
            },
            displayPoints : true,
        }
    },
    {
        display : true,
        calendar : false,
        range : false,
        select : true,
        variableConfig : {
            preset : null,
            code : 'ethnicity',
            name : 'Ethnicity',
            options : ['Caucasian', 'Non-Caucasian'],
            mapping : {
                "Caucasian": 0,
                "Non-Caucasian" : 15,
            },
            displayPoints : true,
        }
    },
    
]