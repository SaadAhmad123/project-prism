/*
    This is the file that contains all the schema/ setting of each input component of the 
    application.

    This list contains setting for 3 types of inputs components:
        - Calendar
        - Range
        - Select

    Each component setting expects meta data and the specific variable configurations called "variableConfig".
        * Meta-data:
            - display           [BOOLEAN]:  Set it to "true" to display the component and the "false" to hide the component.
            - calendar          [BOOLEAN]:  Set it to "true" if the required component should be a CALENDAR otherwise "false".
            - range             [BOOLEAN]:  Set it to "true" if the required component should be a NUMBER input otherwise "false".
            - select            [BOOLEAN]:  Set it to "true" if the required component should be a select input otherwise "false". 
                                            In this case, if the number of items to select is <= 3 then 3 buttons will be displayed
                                            and if the number is >3 then a select dropdown will be displayed.
        
        * Variable Configuration:
            => variableConfig    [OBJECT]:   This is a dict with all the component specific configurations.
            
            For a RANGE component. The variableConfig expects the following arguments. There are some unique arguments in some component and for them please refer to the code and local commenting.

            - preset        [OBJECT]:   By default it is "null". It the value with which the respective component will be initialized.
            
            - code          [STRING]:   This is a very important argument of the component. It is  actually the name of the variable that will hold the 
                                        relvent input at the root level of the application. In short, if you want to add a new input component in the application
                                        you will have to link the value to the component to the root level. Please, go to the Vue component called 
                                        "biguzzi-model-v2-component.vue" and in the data see the dictionary with key "points". The "code" argument of each component
                                        is the same as the keys in the "points" dictionary.

            - name          [STRING]:   This is the name of the input component which will be displayed.

            - info          [STRING]:   This is the information which will elborate more about the relevent variable. It is the string that pops up when you hover the
                                        info icon.

            - displayName   [STRING]:   This is the name that will be displayed in the feedback of the component i.e. the two boxes with one saying points and the other
                                        saying the revent name.

            - displayPoints [BOOLEAN]:  Set it to "true" to display the calculated points.
            
            - validConfig   [OBJECT]:   This is a dictionary which contains the validation configurations of the number input.
                                        This includes:
                                            - inputType     [STRING]: Specify the input type of the text element. It can be "number", "text" etc.
                                            - min           [NUMBER]: The min value
                                            - max           [NUMBER]: The max value
                                            - step          [NUMBER]: The step value
            
            - range_info    [STRING]:       The information about the range of the variable.
            
            - modelFunction  [FUNCTION]:    This is the function that will convert the input to the relevent point for the model.
                                            [INPUT] - x (NUMBER):         The value of the input
                                                    - config (OBJECT):    The configuration of the component

                                            [OUTPUT] (NUMBER):          This final calculated value relevent to the implemented model.

            - validateInput [FUNCTION]:     This is the function that will validate the input.
                                            [INPUT] - x (NUMBER):           The value of the input
                                                    - validConfig (OBJECT): The validation configuration of the component
                                            
                                            [OUTPUT] (OBJECT)   - condition   [BOOLEAN]:  Set to true if the input is valid
                                                                - type        [STRING]:   The type of the validation error. In range it is either "min" or "max"

            For the SELECT component. The configuration has same meta-data. The variableConfig is as follows.
            
                - preset        [OBJECT]:   By default it is "null". It the value with which the respective component will be initialized.

                - code          [STRING]:   This is a very important argument of the component. It is  actually the name of the variable that will hold the 
                                            relvent input at the root level of the application. In short, if you want to add a new input component in the application
                                            you will have to link the value to the component to the root level. Please, go to the Vue component called 
                                            "biguzzi-model-v2-component.vue" and in the data see the dictionary with key "points". The "code" argument of each component
                                            is the same as the keys in the "points" dictionary.
                
                - name          [STRING]:   This is the name of the input component which will be displayed.

                - info          [STRING]:   This is the information which will elborate more about the relevent variable. It is the string that pops up when you hover the
                                            info icon.

                - displayPoints [BOOLEAN]:  Set it to "true" to display the calculated points.

                - options       [ARRAY]:    The list of the all the options that will be displayed

                - mapping       [OBJECT]:   This is the dictionary that will map the options to their respective values or points.


*/

export default [
    {
        display : true,    // Meta-data
        calendar : false,
        range : true,
        select : false,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : true,
        select : false,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : false,
        select : true,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : true,
        select : false,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : true,
        select : false,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : false,
        select : true,
        variableConfig : {    // Variable Configuration
            preset : null,
            code : 'womenBirthHistory',
            name : 'Parity',
            info : "Please enter the parity of the mother antepartum",
            options : ['1st delivery', '2nd delivery', '3rd or more delivery' ],
            mapping : {
                '1st delivery' : 0,                         // model --> Nulliparous
                '2nd delivery' : 1,                         // model --> Primiparous
                '3rd or more delivery' : 2,                 // model --> Multiparous
            },
            displayPoints : false,
        }
    },
    {
        display : true,    // Meta-data
        calendar : false,
        range : false,
        select : true,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : false,
        select : true,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : false,
        select : true,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : true,
        select : false,
        variableConfig : {    // Variable Configuration
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
            womenBirthHistory : null,       // This is unique to this variable only. This value is mutated at the root in relvence to the variable named as "Parity" and code "womanBirthHistory"
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
        display : true,    // Meta-data
        calendar : false,
        range : true,
        select : false,
        variableConfig : {    // Variable Configuration
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
        display : true,    // Meta-data
        calendar : false,
        range : false,
        select : true,
        variableConfig : {    // Variable Configuration
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