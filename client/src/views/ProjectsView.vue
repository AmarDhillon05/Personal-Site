<script>
import {getAll} from '@vercel/edge-config'

export default {
    data(){
        return {"projects" : [], "root_url" :  this.$api_info.link }
    },
    async created(){
    
        const url = this.root_url + "/read"
        fetch(url).then((res) => {
            if(!res.ok){
                console.log("Error")
            }
            else{return res.json()}
        }).then(data => {
            Object.keys(data).forEach(id => {
                let json = data[id]
                json["id"] = id
                this.projects.push(json)
            })
        })
        

    },
    methods : {
        addEmpty(){
            try{
                this.projects.push({
                    name: "Add project",
                    tags: "add your tags",
                    about: "add your description", 
                    links: "",
                    src: "",
                    id : Math.round((Math.random() * (999999 - 111111) + 111111)).toString()
                })
            }catch (err){
                this.projects = []
                this.projects.push({
                    name: "Add project",
                    tags: "add your tags",
                    about: "add your description", 
                    links: "",
                    src: "",
                    id : Math.round((Math.random() * (999999 - 111111) + 111111)).toString()
                })
            }
        
        },
        update(new_json){
            let target = this.projects.filter(proj => proj.id == new_json.id)
            let idx = this.projects.indexOf(target)
            this.projects[idx] = new_json
            this.projects.forEach(console.log)
            fetch(this.root_url + "/edit", {method: "POST", body: JSON.stringify(new_json), headers: {
                "Content-Type" : "application/json"
            }})
        },

        del(id){
            this.projects = this.projects.filter(proj => proj.id != id)
            fetch(this.root_url + "/delete", {method: "POST", body: JSON.stringify({"id" : id}), headers: {
                "Content-Type" : "application/json"
            }})
        }
    }

}
</script>

<template>
    
    <div id = "title">
            
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
    "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt" height="45.000000pt" viewBox="0 0 300.000000 45.000000"
    preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.10, written by Peter Selinger 2001-2011
    </metadata>
    <g transform="translate(0.000000,45.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M2790 378 c-34 -18 -55 -58 -46 -91 3 -14 34 -53 69 -86 52 -51 60
    -63 51 -78 -18 -30 -52 -28 -82 5 -28 30 -28 30 -53 12 l-24 -19 30 -31 c16
    -17 46 -35 66 -41 71 -22 141 40 124 108 -3 16 -33 53 -66 83 -61 57 -70 74
    -43 84 27 10 43 7 64 -14 24 -24 40 -18 40 15 0 44 -82 77 -130 53z"/>
    <path d="M58 369 c-16 -9 -18 -28 -18 -164 l0 -155 31 0 31 0 -4 100 c-2 55
    -1 100 2 100 3 0 15 -32 25 -71 27 -98 47 -129 84 -129 23 0 28 4 25 17 -2 10
    9 58 25 108 l30 90 0 -107 1 -108 30 0 30 0 0 166 0 165 -42 -3 -42 -3 -37
    -115 c-20 -63 -39 -108 -42 -100 -3 8 -20 61 -38 118 -35 107 -46 118 -91 91z"/>
    <path d="M392 279 c3 -91 6 -103 27 -120 28 -23 79 -25 109 -3 20 14 22 14 22
    0 0 -9 -10 -26 -21 -37 -17 -17 -29 -20 -61 -16 -22 3 -48 13 -59 23 -18 16
    -19 16 -19 -5 0 -12 11 -33 25 -46 31 -31 95 -34 142 -5 42 25 53 67 53 203
    l0 107 -30 0 -30 0 0 -86 c0 -47 -4 -83 -9 -80 -5 3 -11 -1 -15 -9 -8 -22 -53
    -19 -66 4 -5 11 -10 54 -10 95 l0 76 -31 0 -31 0 4 -101z"/>
    <path d="M786 364 c-13 -13 -16 -42 -16 -165 l0 -149 31 0 31 0 -3 78 c-1 42
    -2 103 -1 135 2 55 3 57 30 57 40 0 72 -26 72 -59 0 -36 -17 -51 -56 -51 -39
    0 -49 -12 -34 -40 12 -22 67 -28 101 -10 45 25 65 126 33 175 -8 13 -29 28
    -46 34 -47 16 -124 14 -142 -5z"/>
    <path d="M1046 359 c-13 -19 -16 -50 -16 -167 l0 -143 31 3 31 3 -1 133 -2
    132 36 0 c36 0 75 -28 75 -53 0 -7 -7 -23 -16 -36 -13 -18 -24 -22 -50 -19
    -49 6 -45 -21 14 -98 43 -59 50 -64 86 -64 43 0 44 -3 -17 69 l-29 34 25 19
    c53 39 59 134 11 179 -20 19 -38 24 -93 27 -62 4 -70 2 -85 -19z"/>
    <path d="M1405 366 c-17 -7 -37 -21 -45 -31 -8 -11 -10 -16 -3 -12 6 4 44 4
    83 1 85 -8 126 -35 136 -90 13 -71 -33 -124 -106 -124 -77 0 -130 90 -84 141
    13 14 21 16 35 8 15 -8 19 -6 19 9 0 27 -20 42 -57 42 -50 0 -73 -29 -73 -91
    0 -160 179 -235 283 -120 121 134 -23 339 -188 267z"/>
    <path d="M1787 362 c-14 -15 -17 -41 -17 -135 0 -117 0 -117 -24 -117 -13 0
    -29 7 -36 15 -19 23 -30 18 -30 -14 0 -57 88 -84 130 -39 18 20 20 35 20 165
    0 151 -6 167 -43 125z"/>
    <path d="M1900 360 c-18 -18 -20 -33 -20 -165 l0 -145 95 0 95 0 0 36 0 36
    -62 -4 -63 -3 0 35 c0 35 0 35 42 32 44 -4 83 21 83 54 0 13 -11 15 -62 13
    l-63 -3 -3 37 -3 38 65 -7 66 -7 0 37 0 36 -75 0 c-62 0 -79 -4 -95 -20z"/>
    <path d="M2205 366 c-155 -67 -105 -316 64 -316 45 0 83 12 116 38 22 18 22
    18 4 41 l-19 23 -26 -21 c-41 -33 -108 -29 -145 8 -24 24 -29 38 -29 76 0 38
    5 52 29 76 25 24 37 29 81 29 41 0 56 -5 75 -24 24 -24 25 -25 35 -5 35 65
    -91 116 -185 75z"/>
    <path d="M2450 344 c0 -36 0 -36 35 -30 l35 7 0 -136 0 -135 33 0 32 0 -4 136
    -3 137 24 -6 c30 -8 68 17 68 44 0 18 -8 19 -110 19 l-110 0 0 -36z"/>
    </g>
    </svg>

    </div>
    <div id = "projects">
        <span v-for = "project in projects" class = "inline content-center">
            <Project :json = "project" @update = "(new_json) => update(new_json)" @del = "(id) => del(id)"/>
        </span>
        <button v-if = "this.$adminProps.admin" @click = "addEmpty" class = "py-4 transition-all text-gray-100 hover:text-green-200
            duration-300 bg-gray-700 bg-opacity-25 hover:bg-opacity-65 hover:bg-gray-600 mx-4 px-4">+</button>
    </div>

</template>

<style scoped>
#title {
    background-color: rgb(20, 30, 45);
    margin: auto;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 10px solid rgb(15, 15, 15); 
    border-radius: 10px;

}
svg {
    margin: auto;
    width: 100%;
}
path {
    animation: draw 2s linear forwards;
}

@keyframes draw {
    from {
        stroke-dashoffset: 3000;
        stroke-dasharray: 3000;
        stroke: white;
        stroke-width: 5;
        fill: rgb(20, 30, 45);
    }
    75% {
        stroke-dashoffset: 0;
        stroke: white;
        stroke-width: 5;
        fill: rgb(20, 30, 45);
    }
    100% {
        stroke-dashoffset: 0;
        stroke: lightgreen;
        stroke-width: 12;
        fill: rgb(12, 11, 27);
    }
}
</style>