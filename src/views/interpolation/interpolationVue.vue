<script setup lang="ts">
const props = defineProps({
    msg: {
        type: String,
        defualt: '',
        required: true
    },
    num: {
        type: Number,
        defualt: 0,
        required: true
    }
})
console.log(props.msg)
</script>

<template>
    <el-card shadow="hover" header="模板语法">
        <p>我是模板语法</p>
        <p>msg: {{ props.msg }}</p>
        <p>num = 0 ? {{ props.num === 0 ? '是' : '否' }}</p>
    </el-card>
</template>