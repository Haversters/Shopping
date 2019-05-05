<template>
  <el-card class="box-card">
    <div class="text item">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
      >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="品牌" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper,slot"
        :total="tableData.length"
      ></el-pagination>
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
      search: "",
      currentPage: 1,
      pagesize: 4
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
    },
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(`当前页: ${val}`);
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

.el-main {
  line-height: 0px!important;
}
</style>
