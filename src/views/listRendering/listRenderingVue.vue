<script setup lang="ts">
const props = defineProps({
    listData: {
        type: Array<listData>,
        defalut: [],
        required: true
    }
})
interface listData {
    name: string,
    age: number
}
</script>

<template>
    <el-card shadow="hover" header="模板语法">
        <div class="box">
            <span>姓名</span>
            <span>年龄</span>
        </div>
        <div v-for="(item, index) in props.listData" :key="index" class="box">
            <span>{{item.name}}</span>
            <span>{{item.age}}</span>
        </div>
    </el-card>
</template>
