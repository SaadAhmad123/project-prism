<template>
    <div id="risk-chart-component">
        <vue-c3 :handler="this.handler"/>
    </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
import 'c3/c3.min.css'

export default {
    name : "risk-chart-component",
    props : ['risk'],
    components : {
        'vue-c3' : VueC3,
    },
    data : function(){
        return {
            handler : new Vue(),
            options : null,
            test :  0,
        }; 
    },
    mounted(){
        this.options = {
            data : {
                columns : [
                    ['Normal Condition', 100 - this.risk],
                    ['Postpartum Haemorrhage Risk', this.risk],
                ],
                type: 'pie',
            },
            color : {
                pattern : ['#38A169','#E53E3E'],
            }
        };
        this.handler.$emit('init', this.options)
    },
    watch:{
        'risk' : function(){
            this.test++;
            this.updateChart();
        },
    },
    methods: {
        updateChart : function(){
            this.handler.$emit('dispatch', chart => {
                const options = {
                    columns : [
                        ['Normal Condition', 100 - this.risk],
                        ['Postpartum Haemorrhage Risk', this.risk],
                    ]
                }
                chart.load(options);
            });
        }
    }
    
}
</script>