<template>
    <footer class="py-6 px-4 bg-black">
        <p class="text-center py-3 text-white">Owned and Operated by <strong>PolarLogistics</strong> &copy; {{ year }}</p>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    const year = ref("");
    year.value = new Date().getFullYear();
    
</script>