<script setup lang="ts">
const props = defineProps({
    isShow: {
        type: Boolean,
        defualt: true,
        required: true
    }
})
</script>

<template>
    <el-card shadow="hover" header="模板语法">
        <p>模板语法还是指令: `v-show`, `v-if`</p>
        <p>v-show: <span v-show="props.isShow">我是v-show</span></p>
        <p>v-if:
            <span v-if="props.isShow">我是v-if</span>
            <span v-else>我是v-else</span>
        </p>
    </el-card>
</template>