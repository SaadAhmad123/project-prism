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
            modelFunction : function(x){ return 0.7857 * x - 11.786},
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
            modelFunction : function(x){return 0.2364 * x - 9.4545;},
            validateInput : function(x, validConfig){
                validConfig.x = null;return x;
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
            modelFunction : function(x){return -5.1 * (x/10) - 86.7;},
            validateInput : function(x, validConfig){
                validConfig.x = null;return x;
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
            modelFunction : function(x){return -5.1 * (x/10) - 86.7;},
            validateInput : function(x, validConfig){
                validConfig.x = null;return x;
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
            modelFunction : function(x){return 0.0622 * x - 6.222;},
            validateInput : function(x, validConfig){
                validConfig.x = null;return x;
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
            name : 'Woman birth history',
            options : ['First pregnancy', 'First baby', 'Multiple babies'],
            mapping : {
                'First pregnancy' : 0,     // model --> Nulliparous
                'First baby' : 1,               // model --> Primiparous
                'Multiple babies' : 2,          // model --> Multiparous
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
                max : 5000,
                step : 0.1,
            },
            displayPoints : true,
            displayName : 'Grams',
            modelFunction : function(x){return x;},
            validateInput : function(x, validConfig){
                validConfig.x = null;return x;
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
                "Median" : 12.5,
                "Paramedian" : 12.5,
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