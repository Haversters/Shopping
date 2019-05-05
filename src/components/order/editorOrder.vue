<template>
  <el-card class="box-card">
    <div class="text item">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
        
      >
        <el-form-item label="订单状态" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="未发货"></el-radio>
            <el-radio label="已发货"></el-radio>
             <el-radio label="已收货"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        resource: [
          { required: true, message: "请选择订单状态", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写备注", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           this.$message({
          showClose: true,
          message: '恭喜你，添加成功',
          type: 'success'
        });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
  .text{
    text-align: center;
  }
</style>