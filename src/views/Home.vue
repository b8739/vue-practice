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
    watch:{//변수 상태를 모니터링 하는 기능
        input1(){
            console.log(this.input1);
        }
    },
    methods:{
        getData(){
            console.log(this.input1); //this를 붙여주어야 데이터에 접근 가능
        },
        setData(){
            this.input1="12345";
        }
    },
    //그 외 lifestyle에 따른 다양한 함수들
    // beforeCreate(){
    //     console.log("beforeCreate");
    // },
    // created(){
    //     console.log("created");
    // },
    // beforeMount(){
    //     console.log("beforeMount");
    // },
    // mounted(){
    //     console.log("mounted");
    // },
    // beforeUpdate(){
    //     console.log("beforeUpdate");
    // },
    // updated(){
    //     console.log("updated");
    // }, 
    // beforeDestroy(){
    //     console.log("beforeDestroy");
    // }, 
    // destroyed(){
    //     console.log("destroyed");
    // }, 
}
</script>