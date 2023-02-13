<template>
    <nav class="w-full fixed top-0 z-50" :class="scrollRead">
        <div class="flex items-center py-3 px-4 max-w-6xl m-auto justify-between">
            <NuxtLink class="flex items-center transition-all hover:delay-150" to="/"><img src="~/assets/images/logo.png" alt="Polar Logistics Logo" width="60">
                <h2 class="ml-3 tracking-[5px] text-3xl text-white h-animate">PolarLogistics</h2>
            </NuxtLink>
            <ul class="flex items-center links text-white">
                <li class="mx-6 text-xl"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="mx-6 text-xl"><NuxtLink to="/#about">About</NuxtLink></li>
                <li class="mx-6 text-xl"><NuxtLink to="/">Apply</NuxtLink></li>
                <li class="ml-6"><span class="bg-[#5865F2] p-3 px-5 rounded-lg">
                    <NuxtLink to="https://discord.gg/Vrm3kbExmn" target="_blank" rel="nofollow"><Icon class="w-[25px] h-[25px] mr-2" name="fa6-brands:discord" /> Discord</NuxtLink>
                </span></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                scrollRead: ""
            }
        },
        methods: {
            handleScroll () {
                if(window.scrollY > 200){
                    this.scrollRead = "bg-black bg-opacity-30 backdrop-blur-lg"
                }else{
                    this.scrollRead = ""
                }
            }
        },
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>