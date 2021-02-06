<template>
    <div>
        <h1>Welcome to {{title}}</h1>
        <input type="text" v-model = "input1"> <!-- Vue에서는 value -> v-model-->
        <button type="button" @click="getData">Get</button><!-- Vue에서는 onclick -> @click-->
        <button type="button" @click="setData">Set</button><!-- Vue에서는 onclick -> @click-->
        <select class="form-control" v-model="region" @change = "changeRegion">
            <option :key="index" :value="value.initial" v-for="(value,index) in options">
                {{value.full_name}}
            </option>
        </select>

        <table class="table table-bordered" v-if = "tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.initial}}</td>
                <td>{{d.full_name}}</td>
            </tr>
        </table>

    
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"JX님",
            input1: "abc",
            //배열 형태의 데이터셋
            options:[
                {initial:"s", full_name:"Seoul"},
                {initial:"i", full_name:"Incheon"},
                {initial:"p", full_name:"Pohang"}
            ],
            region:"i"
            tableShow:"false";
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
        },
        changeRegion(){
            console.log("the region is changed");
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