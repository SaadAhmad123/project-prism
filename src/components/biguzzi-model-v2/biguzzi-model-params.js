export default [
    {
        display : true,
        calendar : false,
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'age',
            name : 'Maternal age',
            info : "Please enter the age of the mother antepartum",
            displayName : 'Age',
            displayPoints : true,
            validConfig : {
                inputType : 'number',
                min : 15,
                max : 50,
                step : 0.01,
            },
            range_info : "The model age range is 15 to 50 years.",
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return 0.7857142857142857 * x - 11.785714285714285 
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return {condition : false, type : "max"};
                if (x < validConfig.min) return {condition : false, type : "min"};
                return {condition : true, type : null};
            }
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
            name : 'Maternal weight (kg)',
            info : "Please enter the weight of the mother antepartum",
            validConfig : {
                inputType : 'number',
                min : 40,
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
                if (x > validConfig.max) return {condition : false, type : "max"};
                if (x < validConfig.min) return {condition : false, type : "min"};
                return {condition : true, type : null};
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
            code : 'ethnicity',
            name : 'Maternal ethnicity',
            info : "Please enter the ethnicity of the mother antepartum",
            options : ['Caucasian', 'Non-Caucasian'],
            mapping : {
                "Caucasian": 0,
                "Non-Caucasian" : 15,
            },
            displayPoints : true,
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
            name : 'Maternal haemoglobin (g/L)',
            info : "Please enter the haemoglobin of the mother antepartum",
            validConfig : {
                inputType : 'number',
                min : 70,
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
                if (x > validConfig.max) return {condition : false, type : "max"};
                if (x < validConfig.min) return {condition : false, type : "min"};
                return {condition : true, type : null};
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
            name : 'Maternal platelets (x 10^9/L)',
            info : "Please enter the platelets of the mother antepartum",
            validConfig : {
                inputType : 'number',
                min : 60,
                max : 720,
                step : 0.01,
            },
            displayPoints : true,
            displayName : 'Quantity',
            range_info : "The model range is 60 to 720 (x 10^9/L)", 
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                x = x / 30;
                return -1.1363636363636365 * x + 27.272727272727273
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return {condition : false, type : "max"};
                if (x < validConfig.min) return {condition : false, type : "min"};
                return {condition : true, type : null};
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
            info : "Please enter the parity of the mother antepartum",
            options : ['1st delivery', '2nd delivery', '3rd or more delivery' ],
            mapping : {
                '1st delivery' : 0,              // model --> Nulliparous
                '2nd delivery' : 1,              // model --> Primiparous
                '3rd or more delivery' : 2,              // model --> Multiparous
            },
            displayPoints : false,
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
            name : 'Instrumental birth',
            info : "Is the instrument used in the birth",
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
            code : 'episiotomy',
            name : 'Episiotomy',
            info : "Was there episiotomy.",
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
            code : 'laceration',
            name : 'Laceration',
            info : "Is there laceration",
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
        range : true,
        select : false,
        variableConfig : {
            preset : null,
            code : 'neonatalWeight',
            name : 'Neonatal weight (grams) - Please select parity',
            info : "What is the neo natal weight",
            validConfig : {
                inputType : 'number',
                min : 1500,
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
                if (x > validConfig.max) return {condition : false, type : "max"};
                if (x < validConfig.min) return {condition : false, type : "min"};
                return {condition : true, type : null};
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
            name : 'Placental weight (grams)',
            info : "What is the weight of the placenta",
            validConfig : {
                inputType : 'number',
                min : 100,
                max : 1000,
                step : 0.1,
            },
            displayPoints : true,
            displayName : 'Grams',
            range_info : 'The model range is 100g to 1000g.',
            modelFunction : function(x, config){
                if(!config.code) return null // don't return anything if code not mentioned in config-- dumy use of the variable to stop the error from occuring
                return 0.06222222222222222 * x - 6.222222222222222;
            },
            validateInput : function(x, validConfig){
                if (x > validConfig.max) return {condition : false, type : "max"};
                if (x < validConfig.min) return {condition : false, type : "min"};
                return {condition : true, type : null};
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
            code : 'retainedPlacenta',
            name : 'Retained placenta',
            info : "Was the placenta restrained?",
            options : ['No', 'Yes'],
            mapping : {
                "No": 0,
                "Yes" : 66,
            },
            displayPoints : true,
        }
    },
]