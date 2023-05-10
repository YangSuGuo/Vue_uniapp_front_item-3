<template>
    <el-container>
        <el-header>
            <el-row :gutter="10">
                <el-col :xl="5" :lg="5" :md="6" :sm="7" :xs="8">
                    <div class="grid-content bg-purple">
                        <span class="文本 标题">YSG~</span>
                        <el-tooltip class="item" effect="dark" content="夜间模式" placement="bottom">
                            <span class="文本 开关" @click="day">O_O</span>
                        </el-tooltip>
                    </div>
                </el-col>
                <el-col :xl="10" :lg="10" :md="8" :sm="4" :xs="2">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :xl="5" :lg="5" :md="5" :sm="7" :xs="7">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :xl="4" :lg="4" :md="5" :sm="6" :xs="7">
                    <div class="grid-content bg-purple-light">

                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        day(){}
    }
};
</script>
<style scoped>
.文本 {
    font-size: 4.1rem;
    font-family: Broadway, serif;
    text-align: center;
    writing-mode: horizontal-tb;
}

.标题 {
    /*text-indent:450px;*/
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>