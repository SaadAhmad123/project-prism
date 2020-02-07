<template>
    <div id="model-calendar-component" class="px-4 pb-2 lg:px-16">
        <model-variable-heading :text="config.name" :info="config.info"/>
        <div class="flex flex-wrap justify-between">
            <div class="pr-4 sm:pr-8 pb-4 w-full md:w-1/2">
                <v-date-picker 
                    :input-props='{
                        class: "w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 hover:border-blue-5",
                        placeholder: "DD/MM/YYYY",
                        readonly: false
                    }'
                    :masks="{
                        input : ['DD/MM/YYYY']
                    }"
                    v-model="date"
                    :max-date="new Date()"
                />
                <p class="mt-4 text-gray-500 text-sm"><font-awesome-icon icon="info-circle" class="mr-2"/>{{config.range_info}}</p>
            </div>
            <div class="w-full md:w-1/2">
                <div>
                    <div class="flex flex-wrap items-start justify-end">
                        <model-alert-component
                            class="my-4 sm:my-0"
                            :warning="this.age==null && !this.ageInvalid"
                            :danger="this.age!=null && this.ageInvalid"
                            :text='alertText'
                            />
                        <model-display-component v-if="config.displayPoints && (this.age!=null && !this.ageInvalid)" :title="config.displayName" :text='this.age!=null && !this.ageInvalid ? age : "??"'/>
                        <model-display-component v-if="config.displayPoints && (this.points!=null)" title="Points" :text='points.toFixed(1)'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import ModelVariableHeading from '@/components/biguzzi-model-v2/model-variable-heading.vue'
import ModelAlertComponent from '@/components/biguzzi-model-v2/model-alert-component.vue'
import ModelDisplayComponent from "@/components/biguzzi-model-v2/model-display-component.vue"

export default {
    name: 'model-calendar-component',
    components : {
        'v-date-picker' : DatePicker,
        'model-variable-heading' : ModelVariableHeading,
        'model-alert-component' : ModelAlertComponent,
        'model-display-component' : ModelDisplayComponent,
    },
    props: {
        'config' : Object,
    },
    data : function(){
        return {
            'date' : null,
        }
    },
    computed : {
        'age' : function(){
            if(!this.date) return null
            var today = new Date();
            var birthDate = new Date(this.date);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }
            return age;
        },
        'ageInvalid' : function(){
            if(this.age != null && (this.age < this.config.minAge || this.age > this.config.maxAge)) {return true}
            return false;
        },
        'alertText' : function(){
            if(this.age==null&&!this.ageInvalid){return "Select a date of birth"}
            else if(this.age!=null&&this.ageInvalid){return "Please select a valid date of birth"}
            else {return ""}
        },
        'points' : function(){
            if(this.date==null || this.ageInvalid) return null;
            var _points =  this.config.modelFunction(this.age, this.config);
            return _points;
        },
        'result' : function(){
            var _result =  {
                code : this.config.code,
                value : this.date,
                points : this.points
            };
            return _result
        }
    },
    watch : {
        'result' : function(){
            this.$emit('update:result', this.result);
        }
    }
}
</script>