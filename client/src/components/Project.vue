
<template>
    <div class = "border-black border-4 w-1/3 h-2/6 my-8 px-8 py-8 rounded-lg inline-block" id = "all"  :class = "{'noadmin' : !this.$adminProps.admin}">
        <input ref="name" type = "text" id = "name" :value = "json.name" class = "font-bold text-lg w-8/12 h-50" :readonly = "!this.$adminProps.admin"><br>
        <input ref="tags" type = "text" :value = "json.tags" class = "w-8/12 h-50 italic" :readonly = "!this.$adminProps.admin">
        
        <textarea ref="about" :value = "json.about" class = "w-8/12 h-32" :readonly = "!this.$adminProps.admin"></textarea><br>

        <div class = "pair" @click = "clickEvent('link')"> 
            <label for = "link">Link: </label> 
            <input ref="link" type = "text" :id="json.link && json.link !== '' ? json.link : '/'"  :value = "json.link" name = "link" class = "w-8/12 h-5/12
            hover:text-green-200 hover:cursor-pointer transition-all duration-300" :readonly = "!this.$adminProps.admin"><br>
        </div>

        <div class = "pair" @click = "clickEvent('src')">
            <label for = "src">Source: </label>
            <input ref="src" type = "text" :id="json.src && json.src !== '' ? json.src : '/'" :value = "json.src" name = "src" class = "w-8/12 h-30
            hover:text-green-200 hover:cursor-pointer transition-all duration-300" :readonly = "!this.$adminProps.admin"><br>
        </div>
  
        <div v-if = "this.$adminProps.admin" class = "content-center py-4 pair">
            <button @click = "change" class = "transition-all bg-green-200 bg-opacity-25 px-4 mx-2 hover:bg-opacity-75">Submit Changes</button>
            <button @click = "del" class = "transition-all bg-red-200 bg-opacity-25 px-4 mx-2 hover:bg-opacity-75">Delete</button>
        </div>

        <p v-if = "this.$adminProps.admin" ref = "submitted_conf" class = "text-green-400 conf text-center">Submitted Changes!</p>
    </div>

</template>

<style scoped>
#all {
    transform: scale(0.9);
}

.conf {opacity: 0;}

.confTriggered {
    animation: textfade 1s linear forwards
}

@keyframes textfade {
    0% {
        opacity: 100%;
    }
    50% {
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}

.noadmin input, .noadmin textarea {
    outline: none;
}

#all {background-color: rgb(12, 11, 27);;}
input {
    color: white;
    width: 100%;
    margin: auto;
    background-color: rgb(12, 11, 27);
    text-align: center; 
    opacity: 75%;
    border: none;
}

label {
    color: lightgreen;
    margin: auto;
    background-color: rgb(12, 11, 27);
    opacity: 100%;
}

textarea {
    color: white;
    width: 100%;
    margin: auto;
    background-color: rgb(12, 11, 27);
    text-align:center;
    overflow: hidden;
    height: 80px;
    margin-top: 10px;
    resize: none; 
}

#name {
    color: lightgreen;
    display: flex;
    opacity: 100%;
    text-align: center;
    margin: auto;
    white-space: nowrap;
}

.pair {
    display: flex;
    justify-content: center;
    align-items: center;
}



#name {
    color: lightgreen;
}


</style>

<script>
export default {
    props: ["json"],
    mounted(){
        console.log(this.json.src, this.json.link)
    },
    methods : {
        change(){
            const new_json = {
                "name" : this.$refs.name.value,
                "tags" : this.$refs.tags.value,
                "about" : this.$refs.about.value,
                "link" : this.$refs.link.value,
                "src" : this.$refs.src.value,
                "id" : this.json.id
            }
            
            this.$emit("update", new_json)

            this.$refs.src.href = new_json.src
            this.$refs.link.href = new_json.link

            this.$refs.submitted_conf.classList.remove(".conf")
            this.$refs.submitted_conf.classList.add("confTriggered")
            this.$refs.submitted_conf.addEventListener("animationend", () => {
                this.$refs.submitted_conf.classList.remove("confTriggered")
                this.$refs.submitted_conf.classList.add("conf")
            })
            
        },
        del(){
            this.$emit("del", this.json.id)
        },

        clickEvent(ref){
            if(!this.$adminProps.admin){
                let link = this.$refs[ref].id
                window.location.href = link
            }
        }
    }

}
</script>


