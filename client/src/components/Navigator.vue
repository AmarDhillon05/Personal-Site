<script>
import {RouterLink} from 'vue-router'

</script>

<template>
    <div class = "ml-20">
        <RouterLink to = "/" class = "text-lg px-2  mx-2 hover:px-4 text-gray-700 hover:text-green-200 transition-all
        hover:border-b-4 hover:rounded duration-300 w-2 hover:w-8">Home</RouterLink>

        <RouterLink to = '/projects' class = "text-lg px-2 mx-2 hover:px-4 text-gray-700 hover:text-green-200 transition-all 
        hover:border-b-4 hover:rounded duration-300">Projects</RouterLink>
    </div>
    
    <RouterLink to = '/admin'>
        <button class = "float-right pr-20">


        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        class = "size-6 stroke-gray-700 transition-all duration-300 w-8 h-8 hover:stroke-green-200 hover:stroke-2">

        <path stroke-linecap="round" stroke-linejoin="round" 
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 
        0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        
    </svg>

        </button>
    </RouterLink>
</template>

<style>

.router-link-active {
    color: lightgreen;
    font-weight: bold;
}

.router-link-active svg {
    stroke: lightgreen;
    stroke-width: 2;
}
</style>