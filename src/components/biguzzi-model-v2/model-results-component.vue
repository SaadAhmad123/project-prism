<template>
    <div id="model-result-component">
        <p class="text-xl text-center lg:text-4xl text-blue-800 font-thin mb-4"><font-awesome-icon icon="chart-pie" class="inline-block mr-4"/>Prognosis <span class="font-bold">report</span></p>
        <div class="mb-4 flex justify-center">
            <model-alert-component 
                :warning="!this.allVarSubmited" 
                :success="this.allVarSubmited"
                :text="this.allVarSubmited ? 'All observations successfully submitted' : 'Please enter the required observations'"/>
        </div>
        <div class="mt-8">
            <div class="justify-stretch items-stretch lg:mb-4 p-2 rounded" :class="riskDisplayColor">
                <p class="font-thin text-xl text-center text-blue-900">Evaluated PPH Risk: <strong class="italic">{{parseFloat(risk_percent.risk).toFixed(2)}}%</strong></p>
            </div>
            <div class="flex justify-center">
                <div class="" style="max-width:224px">
                    <risk-chart-component :risk="this.risk_percent.risk"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import RiskChartComponent from '@/components/biguzzi-model-v2/risk-chart-component.vue'


export default {
    name : 'model-result-component',
    props : ['points'],
    components : {
        "model-alert-component" : ModelAlertComponent,
        //"model-display-component" : ModelDisplayComponent,
        "risk-chart-component" : RiskChartComponent,
    },
    data : function(){
        return {
        }
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
            // the risk equation
            var y = -5.57091575e-07 * Math.pow(_sum,3)   + 3.34292829e-04 * Math.pow(_sum,2) + -5.83362596e-02 * Math.pow(_sum,1) +  3.25449608e+00
            if(_sum < 130) return {risk : 0, sum : _sum, calculated_risk : y};
            return {risk : y * 100, sum : _sum, calculated_risk : y};
        },
        'riskDisplayColor' : function(){
            if(parseFloat(this.risk_percent.risk) < 33.33) return 'bg-green-200';
            if(parseFloat(this.risk_percent.risk) < 66.66) return 'bg-yellow-200';
            return 'bg-red-200'
        },
    }
}
</script>