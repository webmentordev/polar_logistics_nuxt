<template>
    <nav class="w-full fixed top-0 z-50" :class="scrollRead">
        <div class="flex items-center py-3 px-4 max-w-6xl m-auto justify-between">
            <NuxtLink class="flex items-center transition-all hover:delay-150" to="/"><img src="~/assets/images/logo.png" alt="Polar Logistics Logo" width="60">
                <h2 class="ml-3 tracking-[5px] text-3xl text-white h-animate 420px:hidden">PolarLogistics</h2>
            </NuxtLink>
            <ul class="flex items-center links text-white 870px:hidden">
                <li class="mx-6 text-xl"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="mx-6 text-xl"><NuxtLink to="/#about">About</NuxtLink></li>
                <li class="mx-6 text-xl"><NuxtLink to="/">Apply</NuxtLink></li>
                <li class="ml-6"><span class="bg-[#5865F2] p-3 px-5 rounded-lg">
                    <NuxtLink to="https://discord.gg/Vrm3kbExmn" target="_blank" rel="nofollow"><Icon class="w-[25px] h-[25px] mr-2" name="fa6-brands:discord" /> Discord</NuxtLink>
                </span></li>
            </ul>

            <ul class="hidden 870px:block" @click="sideBar = true">
                <li class="h-[1px] bg-white mb-2 w-[60px]"></li>
                <li class="h-[1px] bg-white mb-2 w-[60px]"></li>
                <li class="h-[1px] bg-white mb-2 w-[60px]"></li>
            </ul>
            <div v-if="sideBar" @click.self="sideBar = false" class="fixed flex items-center justify-center w-full z-[60] h-screen top-0 left-0 bg-black bg-opacity-80 backdrop-blur-lg">
                <ul class="links text-white text-center">
                    <li class="mb-3 text-2xl"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="mb-3 text-2xl"><NuxtLink to="/#about">About</NuxtLink></li>
                    <li class="mb-3 text-2xl"><NuxtLink to="/">Apply</NuxtLink></li>
                    <li class="mb-3"><span class="bg-[#5865F2] p-3 px-5 rounded-lg inline-block">
                        <NuxtLink to="https://discord.gg/Vrm3kbExmn" target="_blank" rel="nofollow"><Icon class="w-[25px] h-[25px] mr-2" name="fa6-brands:discord" /> Discord</NuxtLink>
                    </span></li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                scrollRead: "",
                sideBar: false
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