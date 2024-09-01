<template>
    <div class = "text-center">
        <div style = "background-color: rgb(20, 30, 45)">
            <p id = "welcome" ref = "welcome_text" class = "italic text-grey-200 transition-colors duration-500 mb-4 ml-4">Hi, I'm</p>
            <Title />
        </div>
        <div style = "background-color: rgb(20, 30, 45); height: 40px; border-bottom: 10px solid rgb(15, 15, 15); border-radius: 10px;"></div>
        <p id = "descr">, a student at the University of Maryland studing computer science on a machine learning track. Outside of school, I've been focusing on machine learning, largely researching and playing around with new, powerful models meant for modern tasks, as well as building web apps that I find useful or interesting to build out. I'm hoping to find new problems to achieve and more people to learn from the future, figure out broader applications for my skills that can translate into what I'm interested to, and learn to apply my skills to the industry and how to better develop greater work with others. </p>
        <RouterLink to = "/projects" class = "my-8"><button class = "py-4 transition-all text-gray-100 hover:text-green-200
            duration-300 bg-gray-700 bg-opacity-25 hover:bg-opacity-65 hover:bg-gray-600 px-4">View my work</button></RouterLink>
    </div>
</template>

<style>
#welcome{
    animation: flicker 2s linear forwards;
}

@keyframes flicker {
    0%{
        opacity: 0%;
        color: rgb(49, 49, 49);
    }
    20% {opacity: 0%;} 21% {opacity: 100%;} 25% {opacity: 0%; color: rgb(110, 110, 110);}
    100% {
        opacity: 100%;
        color: white;
    }
}

#descr {
    width: 50%;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    animation: to_white 2s linear forwards;
}

@keyframes to_white {
    0%{
        opacity: 0%;
        color: rgb(49, 49, 49);
    }
    100% {
        opacity: 75%;
        color: white;
    }
}

</style>

