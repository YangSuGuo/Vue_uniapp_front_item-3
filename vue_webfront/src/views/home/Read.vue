<template>
    <div class="mavon-view-wrapper">
        <mavon-editor :value="content" :editable="false"></mavon-editor>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            content: '',
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
    methods: {},
};
</script>

<style>

</style>
