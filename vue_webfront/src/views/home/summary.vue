<template>
  <el-table
      :data="tableData"
      class="table"
      max-height="620"
      show-summary
      stripe
      style="width: 100%;">
    <el-table-column
        label="ID"
        prop="aid"
        sortable
        width="150">
    </el-table-column>
    <el-table-column
        label="标题"
        prop="title">
    </el-table-column>
    <el-table-column
        label="作者"
        prop="writer"
        sortable>
    </el-table-column>
    <el-table-column
        label="分类"
        prop="label"
        sortable>
    </el-table-column>
    <el-table-column
        label="文章浏览量"
        prop="pageview"
        sortable>
    </el-table-column>
    <el-table-column
        label="操作" width="100">
      <template slot-scope="scope">
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
      const aid = row.aid;
      axios.post('http://localhost:8080/api/auth/essay/deletelist', {
        aid: aid
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // withCredentials: true
      }).then(res => {
        this.$notify({
          title: 'No！你这个该死的混蛋，看看你做了什么',
          duration: 1000,
          message: this.$createElement('i', {style: 'color: teal'}),
          type: 'success',
          position: 'top-right',
        });
        axios.get('http://localhost:8080/api/auth/essay/alllist', {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true
        }).then(res => {
          this.tableData = res.data
          // console.log("前端返回的res:", res)
        }).catch(err => {
          console.log("错误：" + err)
        });
      }).catch(err => {
        this.$notify.error({
          title: '瞧瞧我刚刚保护了什么！',
          duration: 1000,
          message: this.$createElement('i', {style: 'color: teal'}),
          position: 'top-right',
        });
        console.log("错误：" + err)
      })
    }
  },
  created() {
    axios.get('http://localhost:8080/api/auth/essay/alllist', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true
    }).then(res => {
      this.tableData = res.data
      console.log("前端返回的res:", res)
    }).catch(err => {
      console.log("错误：" + err)
    })
  },
}
</script>

<style lang="scss" scoped>
.table {
  //height: 700px;
}
</style>