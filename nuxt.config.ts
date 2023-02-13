// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image-edge'
    ],
    app:{
        head: {
            title: "You Caul, We Haul. You Bitch We Unhitch — PolarLogistics",
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.discordapp.com/attachments/1056300434018533407/1074784350459133972/logo.png' }
            ]
        },
    }
})