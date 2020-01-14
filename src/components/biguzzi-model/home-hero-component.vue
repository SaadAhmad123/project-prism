<template>
  <div>
    <div class="home py-16 sm:py-24 px-8 sm:px-16 md:px-20 lg:px-24 bg-blue-700">
      <p class="text-lg sm:text-xl md:text-3xl xl:text-4xl font-hairline text-left text-white">
        This evidence tool is designed to help the midwives and doctors predict a woman's
        risk of <span class="italic font-bold">Postpartum Haemorrhage</span> <sup><a href="https://en.wikipedia.org/wiki/Postpartum_bleeding" class="text-sm text-white hover:text-blue-300" title="What is Postpartum Haemorrhage?" target="_blank">[1]</a></sup>. This tool is informed by 
        a prognostic model publish by <span class="italic">Biguzzi et al</span> <sup><a href="https://www.ncbi.nlm.nih.gov/pubmed/22018996" class="text-sm text-white hover:text-blue-300" title="Go to relevant publication" target="_blank">[2]</a></sup>. 
      </p>
    </div>
    <div class="flex items-center flex-wrap px-8 sm:px-16 md:px-20 lg:px-24 py-4 lg:py-6 pb-2 sm:pb-4 bg-blue-800">
      <p class="hidden w-full sm:w-2/3 pr-6 sm:block text-sm sm:text-base text-left text-blue-100 font-thin">
        {{article}}
      </p>
      <div class="pt-0 w-full sm:w-1/3 sm:pt-2 flex flex-wrap sm:justify-end">
        <a v-for="(link, index) in articleLinks"  :title="article" :key="index" target="_blank" :href="link.link" class="mr-2 mb-2 text-sm px-2 py-1 bg-blue-100 text-blue-900 rounded hover:bg-blue-900 hover:text-white" style="transition: all 200ms"><font-awesome-icon icon="external-link-alt"/>&nbsp;{{link.text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home-hero-component',
    data: function(){
      return {
        article : "[2] E. Biguzzi, F. Franchi, F. Ambrogi et al., “Risk factors for postpartum hemorrhage in a cohort of 6011 Italian women,” Thrombosis Research, vol. 129, no. 4, pp. e1–e7, 2012.",
        articleLinks : [
          {text: 'Article', link: 'https://www.ncbi.nlm.nih.gov/pubmed/22018996'},
          {text: 'Publisher', link: 'https://linkinghub.elsevier.com/retrieve/pii/S004938481100497X'},
          {text: 'Google', link: 'https://scholar.google.com/scholar_lookup?title=Risk+factors+for+postpartum+hemorrhage+in+a+cohort+of+6011+Italian+women&author=E.+Biguzzi&author=F.+Franchi&author=F.+Ambrogi+et+al.&publication_year=2012'}
        ]
      }
    }
}
</script>