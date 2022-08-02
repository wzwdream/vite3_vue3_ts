<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <el-card shadow="hover" header="模板语法">
        <p><a :href="href">标签属性绑定</a></p>
        <el-input :disabled="props.disabled" placeholder="Please input" />
    </el-card>
</template>
