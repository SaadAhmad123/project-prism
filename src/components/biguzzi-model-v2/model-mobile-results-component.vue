<template>
    <div id="model-mobile-result-component">
        <div class="bg-white shadow p-4 border-l-8" :class="riskDisplayColor" style="transition: all 200ms">
            <div class="flex flex-wrap items-center justify-left">
                <p class="font-normal text-blue-800 text-lg">
                    Risk Points:&nbsp;
                    <span class="italic font-extrabold">{{parseFloat(risk_percent.risk).toFixed(2)}}&nbsp;%</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'model-mobile-result-component',
    props: [
        'points',
    ], 
    data: function(){
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
            //var y = -5.57091575e-07 * Math.pow(_sum,3)   + 3.34292829e-04 * Math.pow(_sum,2) + -5.83362596e-02 * Math.pow(_sum,1) +  3.25449608e+00
            //if(_sum < 130) return {risk : 0, sum : _sum, calculated_risk : y};
            var x = _sum / 10000
            var a = 0.9747528913295155
            var b = 0.017496487546306543
            var c = 363.24938964379163
            var d = 0.020035565316849947
            var y = (a / (1 + Math.exp(-c * (x - d)))) + b
            return {risk : y * 100, sum : _sum};
        },
        'riskDisplayColor' : function(){
            if(parseFloat(this.risk_percent.risk) < 33.33) return 'border-green-600';
            if(parseFloat(this.risk_percent.risk) < 66.66) return 'border-yellow-600 bg-yellow-200';
            return 'border-red-600 bg-red-200'
        },
    }
}
</script>