<template>
    <div>
        <home-hero-component />
        <div id="biguzzi-model-container" class="container mx-auto my-12 px-6 font-normal">
            <p class="text-sm font-thin text-gray-700 mb-4">
                Please, enter the appropriate values so that the model may be
                able to calulate the risk of <span class="italic">Postpartum Heamorrhage</span>.
            </p>
            
            <age-param-component :ageRiskFactor.sync = "ageRiskFactor" :preset="null"/>
            <weight-param-component :weightRiskFactor.sync = "weightRiskFactor" :preset="null" />
            <hemoglobin-param-component :hemoglobinRiskFactor.sync = "hemoglobinRiskFactor" :preset="null" />
            <neo-weight-np-param-component :neoWeightNPRiskFactor.sync = "neoWeightNPRiskFactor" :preset="null"/>
            <neo-weight-pp-param-component :neoWeightPPRiskFactor.sync = "neoWeightPPRiskFactor" :preset="null"/>
            <neo-weight-mp-param-component :neoWeightMPRiskFactor.sync = "neoWeightMPRiskFactor" :preset="null"/>
            <placenta-weight-param-component :placentaWeightRiskFactor.sync= "placentaWeightRiskFactor" :preset="null"/>
            <vacuum-param-component :vacuumRiskFactor.sync = "vacuumRiskFactor" :preset="null"/>
            <kristeller-param-component :kristellerRiskFactor.sync= "kristellerRiskFactor" :preset="null"/>
            <laceration-param-component :lacerationRiskFactor.sync= "lacerationRiskFactor"  :preset="null"/>
            <episiotomy-param-component :episiotomyRiskFactor.sync = "episiotomyRiskFactor" :preset="null"/>
            <restrained-placenta-param-component :restrainedPlacentaRiskFactor.sync = "restrainedPlacentaRiskFactor" :preset="null" />
            <ethnicity-param-component :ethnicityRiskFactor.sync = "ethnicityRiskFactor" :preset="null" />
            
            <div class="fixed bottom-0 right-0">
                <h1 class="text-3xl">Sum {{sum.toFixed(3)}}</h1>
            </div>

        </div>
    </div>
</template>

<script>
import HomeHeroComponent from '@/components/biguzzi-model/home-hero-component.vue';
import AgeParamComponent from '@/components/biguzzi-model/age-param-component.vue';
import WeightParamComponent from '@/components/biguzzi-model/weight-param-component.vue';
import HemoglobinParamComponent from '@/components/biguzzi-model/hemoglobin-param-component.vue';
import EthnicityParamComponent from '@/components/biguzzi-model/ethnicity-param-component.vue';
import NeoWeightNPParamComponent from '@/components/biguzzi-model/neo-weight-np-param-component.vue';
import NeoWeightPPParamComponent from '@/components/biguzzi-model/neo-weight-pp-param-component.vue';
import NeoWeightMPParamComponent from '@/components/biguzzi-model/neo-weight-mp-param-component.vue';
import PlacentaWeightParamComponent from '@/components/biguzzi-model/placenta-weight-param-component.vue';
import VacuumParamComponent from '@/components/biguzzi-model/vacuum-param-component.vue';
import KristellerParamComponent from '@/components/biguzzi-model/kristeller-param-component.vue';
import LacerationParamComponent from '@/components/biguzzi-model/laceration-param-component.vue';
import EpisiotomyParamComponent from '@/components/biguzzi-model/episiotomy-param-component.vue';
import RestrainedPlacentaParamComponent from "@/components/biguzzi-model/restrained-placenta-param-component.vue";



export default {
    name:'biguzzi-model-component',
    components : {
        'age-param-component' : AgeParamComponent,
        'ethnicity-param-component' : EthnicityParamComponent, 
        'weight-param-component' : WeightParamComponent,
        'hemoglobin-param-component' : HemoglobinParamComponent,
        'neo-weight-np-param-component' : NeoWeightNPParamComponent,
        'neo-weight-pp-param-component' : NeoWeightPPParamComponent,
        'neo-weight-mp-param-component' : NeoWeightMPParamComponent,
        'placenta-weight-param-component' : PlacentaWeightParamComponent,
        'vacuum-param-component' : VacuumParamComponent,
        'kristeller-param-component' : KristellerParamComponent,
        'laceration-param-component' : LacerationParamComponent,
        'episiotomy-param-component' : EpisiotomyParamComponent,
        'restrained-placenta-param-component' : RestrainedPlacentaParamComponent,
        'home-hero-component' : HomeHeroComponent,
    },
    data : function(){
        return {
            ageRiskFactor : 0.0,
            ethnicityRiskFactor : 0.0,
            weightRiskFactor : 0.0,
            hemoglobinRiskFactor : 0.0,
            neoWeightNPRiskFactor : 0.0,
            neoWeightPPRiskFactor : 0.0,
            neoWeightMPRiskFactor : 0.0,
            placentaWeightRiskFactor : 0.0,
            vacuumRiskFactor : 0.0,
            kristellerRiskFactor : 0.0,
            lacerationRiskFactor : 0.0,
            episiotomyRiskFactor : 0.0,
            restrainedPlacentaRiskFactor : 0.0,
        };
    },
    computed : {
        sum : function(){
            return (this.ageRiskFactor +
            this.ethnicityRiskFactor +
            this.weightRiskFactor +
            this.hemoglobinRiskFactor +
            this.neoWeightNPRiskFactor +
            this.neoWeightPPRiskFactor +
            this.neoWeightMPRiskFactor +
            this.placentaWeightRiskFactor +
            this.vacuumRiskFactor +
            this.kristellerRiskFactor +
            this.lacerationRiskFactor +
            this.episiotomyRiskFactor +
            this.restrainedPlacentaRiskFactor);
        }
    }
}
</script>