<template>
    <div id="footer">
        <div class="bg-blue-800 p-6 sm:p-8 text-white flex justify-center">
            <p class="text-2xl sm:text-4xl font-hairline text-blue-100">
                <font-awesome-icon icon="info-circle" class="mr-4"/>Know more about <a href="https://www.bettersafercare.vic.gov.au/resources/clinical-guidance/maternity-ehandbook/postpartum-haemorrhage-pph-prevention-assessment-and-management" class="font-bold hover:underline hover:text-white" style="transition: all 200ms">Postpartum Heamorhage</a>
            </p>
        </div>
        <div class="bg-blue-100">
            <div class="container mx-auto py-8 flex flex-wrap px-8">
                <div class="w-full md:w-1/4 mb-8">
                    <p class="mb-6 text-2xl text-blue-900 pl-4 border-l-8 border-blue-800">Navigate to</p>
                    <div class="flex flex-wrap">
                        <div class="text-blue-900 bg-blue-200 hover:bg-blue-800 hover:text-blue-100 px-4 py-2 mr-2 mb-2 rounded" style="transition: all 200ms"><router-link to="/">Home</router-link></div>
                        <div class="text-blue-900 bg-blue-200 hover:bg-blue-800 hover:text-blue-100 px-4 py-2 mr-2 mb-2 rounded" style="transition: all 200ms"><router-link to="/about">About</router-link></div>
                    </div>
                </div>
                <div class="w-full md:w-3/4">
                    <p class="mb-6 text-2xl text-blue-900 pl-4 border-l-8 border-blue-800">Our Sponsers &amp; Partners</p>
                    <div class="flex flex-wrap justify-start">
                        <a href="https://mymi.org.au/" target="_blank"><img :src="require('@/assets/MYMI_logo_sheild_lightBG.png')" class="mr-4 mb-4" style="height:80px"/></a>
                        <a href="https://www.monash.edu/mime" target="_blank"><img :src="require('@/assets/MIME_logo.png')" class="mr-4 mb-4" style="height:80px"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'footer-component',
}
</script>