<template>
    <div id="model-result-component">
        <p class="text-xl lg:text-4xl text-blue-800 font-thin mb-4"><font-awesome-icon icon="chart-pie" class="inline-block mr-4"/>Prognosis <span class="font-bold">report</span></p>
        <div class="mb-4">
            <model-alert-component 
                :warning="!this.allVarSubmited" 
                :success="this.allVarSubmited"
                :text="this.allVarSubmited ? 'All observations successfully submitted' : 'Please enter the required observations'"/>
        </div>
        <div class="flex flex-wrap items-start justify-between mt-8">
            <div></div>
            <div>
                <model-display-component title="% Risk" :text="parseFloat(risk_percent).toFixed(1)" :color="riskDisplayColor"/>
            </div>
        </div>
    </div>
</template>

<script>
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import ModelDisplayComponent from '@/components/biguzzi-model-v2/model-display-component.vue'


export default {
    name : 'model-result-component',
    props : ['points'],
    components : {
        "model-alert-component" : ModelAlertComponent,
        "model-display-component" : ModelDisplayComponent,
    },
    data : function(){
        return {}
    },
    computed : {
        'allVarSubmited' : function(){
            for(var i in this.points) if(this.points[i]==null||this.points[i].points==null) return false
            return true
        },
        'risk_percent': function(){
            var _sum = 0.0;
            for(var i in this.points){
                if(this.points[i]==null||this.points[i].points==null) continue;
                _sum += parseFloat(this.points[i].points)
            }
            return _sum;
        },
        'riskDisplayColor' : function(){
            if(parseFloat(this.risk_percent) < 33.33) return 'bg-green-700';
            if(parseFloat(this.risk_percent) < 66.66) return 'bg-yellow-600';
            return 'bg-red-700'
        },
    }
}
</script>