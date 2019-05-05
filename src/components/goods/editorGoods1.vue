<template>
  <el-card class="box-card">
    <div class="text item">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="品牌" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-04",
          name: "aiphon9",
          address: "www.mujinxin.com"
        },
        {
          date: "2016-05-03",
          name: "aiphon8",
          address: "www.mujinxin.com"
        },
        {
          date: "2016-05-02",
          name: "aiphon7",
          address: "www.mujinxin.com"
        },
        {
          date: "2016-05-01",
          name: "aiphon6",
          address: "www.mujinxin.com"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
       this.$message({
        showClose: true,
        message: "编辑成功",
        type: "success"
      });
    },
    handleDelete(index, row) {
      this.$message({
        showClose: true,
        message: "添加成功",
        type: "success"
      });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>
 <style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
