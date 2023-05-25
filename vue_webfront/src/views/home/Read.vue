<template>
    <el-container id="Read">
        <el-header class="顶栏">
            <el-row :gutter="10">
                <el-col :lg="5" :md="6" :sm="7" :xl="5" :xs="8">
                    <div class="grid-content bg-purple">
                        <div class="Header" @click="Return">
                            <i class="el-icon-back"></i>
                            <span class="title01">返回</span>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="15" :md="14" :sm="11" :xl="15" :xs="0">
                    <div class="grid-content bg-purple-light">
                        <span class="Article">{{ title }}</span>
                    </div>
                </el-col>
                <el-col :lg="4" :md="4" :sm="6" :xl="4" :xs="0">
                    <div class="grid-content bg-purple-light">
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="主要">
            <div id="home">
                <div class="mavon-view-wrapper">
                    <mavon-editor
                            :editable="false"
                            :shortCut="false"
                            :subfield="false"
                            :toolbarsFlag="false"
                            :value="content"
                            defaultOpen="preview"
                            previewBackground="#fbfbfb"
                    ></mavon-editor>
                </div>
            </div>
            <el-footer style="margin-top: 8rem">
                <el-row :gutter="10">
                    <el-col :lg="8" :md="8" :sm="8" :xl="8" :xs="8">
                        <div class="grid-content2 联系">
                            <span>如有问题，请联系我。</span>
                            <span>E-mail：3130876713@qq.com</span>
                        </div>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="8" :xl="8" :xs="0">
                        <div class="grid-content2 bg-purple"></div>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="8" :xl="8" :xs="0">
                        <div class="grid-content2 icon">
                        </div>
                    </el-col>
                </el-row>
            </el-footer>
        </el-main>
    </el-container>
</template>

<script>
// todo 添加返回上一级功能【页头】【ok】
// todo 夜间模式未适配【不想】
// todo 渲染长文本有割裂
import axios from "axios";

export default {
    data() {
        return {
            content: '',
            title: this.$store.state.card.title,
        };
    },
    created() {
        axios.post(`http://localhost:8080/api/auth/essay/article`, {
            aid: this.$store.state.card.aid
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(res => {
            this.content = res.data.text;
        }).catch(err => {
            console.log("错误：" + err)
        })
    },
    methods: {
        Return(){
            this.$router.push('/')
        },
    },
    mounted() {

    },
};
</script>

<style>
#Read {
    margin: 7.5rem 20rem 0;
}
@media (max-width: 1000px) {
    #Read {
        margin: 1rem 3rem 0;
    }
}
.Article {
    font-size: 3.5rem;
    font-family: "Source Sans 3 Semibold", serif;
    text-align: center;
    writing-mode: horizontal-tb;

    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-purple-light {
    /*background: #e5e9f2;*/
}
.bg-purple {
    font-family: "Source Sans 3 Semibold", serif;
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    /*background: #d3dce6;*/
}
.grid-content {
    border-radius: 4px;
    min-height: 40px;
    -webkit-touch-callout: none;
    user-select: none;
}
.mavon-view-wrapper {
    width: 70vw;
}
</style>
