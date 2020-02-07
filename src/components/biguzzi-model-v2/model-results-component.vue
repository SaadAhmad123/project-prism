<template>
    <div id="model-result-component">
        <p class="text-xl text-center lg:text-4xl text-blue-800 font-thin mb-4"><font-awesome-icon icon="chart-pie" class="inline-block mr-4"/>Prognosis <span class="font-bold">report</span></p>
        
        <div class="mt-8">
            <div class="justify-stretch items-stretch lg:mb-4 p-2 rounded" :class="riskDisplayColor">
                <p class="font-thin text-xl text-center text-blue-900">Evaluated PPH Risk: <strong class="italic">{{parseFloat(risk_percent.risk).toFixed(2)}}%</strong></p>
            </div>
            <div class="flex justify-center">
                <div class="" style="max-width:224px">
                    <risk-chart-component :risk="this.risk_percent.risk"/>
                </div>
            </div>
            <div>
                <div class="mt-4 flex justify-center">
                    <model-alert-component 
                        :warning="!this.allVarSubmited" 
                        :success="this.allVarSubmited"
                        :text="this.allVarSubmited ? 'All observations successfully submitted' : 'Please enter the required observations'"/>
                </div>
                <div v-if="!this.allVarSubmited" class="flex justify-center mt-4">
                    <button v-scroll-to="unfilledVarId" class="bg-blue-700 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded" style="transition:all 200ms"><font-awesome-icon icon="external-link-alt"/>&nbsp;Goto Remaining ({{this.unfilledVariables}})</button>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import RiskChartComponent from '@/components/biguzzi-model-v2/risk-chart-component.vue'
import BigizziModelParam from '@/components/biguzzi-model-v2/biguzzi-model-params.js'


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
        'unfilledVarId' : function(){
            var ret = '';
            for(var item in BigizziModelParam){
                var i = BigizziModelParam[item].variableConfig.code;
                if(this.points[i]==null||this.points[i].points==null){
                    ret = i;
                    break;
                }
            }
            return "#var-" + ret;
        },
        'unfilledVariables' : function(){
            var sum = 0;
            for(var i in this.points) {
                if(this.points[i]==null||this.points[i].points==null) {
                    sum++;
                }
            } 
            return sum;
        },
        'risk_percent': function(){
            var _sum = 0.0;
            for(var i in this.points){
                if(this.points[i]==null||this.points[i].points==null) continue;
                _sum += parseFloat(this.points[i].points)
            }
            var x = _sum / 10000
            var a = 0.9747528913295155
            var b = 0.017496487546306543
            var c = 363.24938964379163
            var d = 0.020035565316849947
            var y = (a / (1 + Math.exp(-c * (x - d)))) + b
            return {risk : y * 100, sum : _sum};
        },
        'riskDisplayColor' : function(){
            if(parseFloat(this.risk_percent.risk) < 33.33) return 'bg-green-200';
            if(parseFloat(this.risk_percent.risk) < 66.66) return 'bg-yellow-200';
            return 'bg-red-200'
        },
    }
}
</script>