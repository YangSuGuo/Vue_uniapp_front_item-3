<template>
  <el-table
      :data="tableData"
      class="table"
      stripe
      style="width: 100%">
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
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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