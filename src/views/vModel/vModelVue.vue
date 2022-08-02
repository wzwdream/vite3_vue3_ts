<script setup lang="ts">
const inputValue = ref<string>('') 
</script>

<template>
    <el-card shadow="hover" header="模板语法">
        <p>输入框的值：{{inputValue}}</p>
        <el-input v-model="inputValue" placeholder="Please input" />
    </el-card>
</template>
