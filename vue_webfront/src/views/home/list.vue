<template>
    <div class="list">
        <div v-for="(item, index) in items" :key="index">
            <div :id="index" class="card">
                <div class="card-image">
                    <el-image
                            :src="item.url"
                            class="card-img"
                            fit="cover"
                            lazy>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </div>
                <div class="card-content">
                    <h2 class="card-title">{{ item.title }}</h2>
                    <div class="card-meta">
                        <span class="card-time">{{ item.time }}</span>
                        <p><span class="card-overview">{{ item.overview }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            items: [{
                title: '卡片 1',
                time: '2023-10-17',
                overview: '示例标题',
                url: 'https://picsum.photos/400/300?random=1'
            }],
        }
    },
    methods: {},
    created() {
        // axios.post('http://localhost:8080/api/auth/essay/list?parameter=vue')
            axios.post('http://localhost:8080/api/auth/essay/list?', {
                parameter: "vue"
            })
            .then(res => {
                console.log("前端返回的res:", res)
            }).catch(err => {
            console.log("错误：" + err)
        })
    }
}
</script>

<style lang="css" scoped>
.list {
    margin-top: 5rem;
    display: contents;
}

.card {
    max-width: 38rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

@media (min-width: 768px) {
    .card {
        width: 640px;
    }
}

.card-image,
.card-content {
    padding: 16px;
}

.card-title {
    font-size: 24px;
    margin-bottom: 8px;
}

.card-meta {
    display: flow;
    align-items: center;
    justify-content: space-between;
}

.card-time {
    font-size: 14px;
    color: #999999;
    margin-right: 8px;
}

.card-overview {
    font-size: 16px;
    color: #333333;
}

.image-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #dddddd;
    border-radius: 8px;
}

</style>