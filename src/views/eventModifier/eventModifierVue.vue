<script setup lang="ts">
import './index.scss'
const clickBox = (val: any) => {
    console.log(val)
}
</script>

<template>
    <el-card shadow="hover" header="模板语法">
        <div class="box1" @click="clickBox('box1')">
            <span>我是box1</span>
            <div class="box2" @click="clickBox('box2')">
                <span>我是box2</span>
                <div class="box3" @click.stop="clickBox('box3')">我是box3</div>
            </div>
        </div>
    </el-card>
</template>
