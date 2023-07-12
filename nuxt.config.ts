// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [ 
    '@/assets/css/main.scss', 
    '@/assets/css/reset.scss',
  ],
  modules: [ 
    'nuxt-directus',    
    [
        '@pinia/nuxt',
        {
            autoImports: [ 
                // automatically imports `defineStore`  //  'autoStore',  'sucursalStore'
                'defineStore', 
                'storeToRefs',// import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
        },
    ],
],
 
build: {
  transpile: ['@pinia/nuxt' ]
},

  devtools: { enabled: true }
})
