<template>
    <div>
        <h1>Welcome to {{title}}</h1>
        <input type="text" v-model = "input1"> <!-- Vue에서는 value -> v-model-->
        <button type="button" @click="getData">Get</button><!-- Vue에서는 onclick -> @click-->
        <button type="button" @click="setData">Set</button><!-- Vue에서는 onclick -> @click-->
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"JX님",
            input1: "abc"
    };
},
    methods:{
        getData(){
            console.log(this.input1); //this를 붙여주어야 데이터에 접근 가능
        },
        setData(){
            this.input1="12345";
        }
    }
}
</script>