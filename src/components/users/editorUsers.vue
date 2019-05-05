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
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户级别" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择用户级别">
            <el-option label="主管" value="1"></el-option>
            <el-option label="经理" value="2"></el-option>
            <el-option label="管理员" value="3"></el-option>
            <el-option label="普通用户" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="用户权限" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="能够删除商品" name="type"></el-checkbox>
            <el-checkbox label="能够添加商品" name="type"></el-checkbox>
            <el-checkbox label="能够删除用户" name="type"></el-checkbox>
            <el-checkbox label="能够删除用户地址" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊权限" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="能够管理用户"></el-radio>
            <el-radio label="不能管理用户"></el-radio>
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
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择用户权限", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个权限",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择特殊权限", trigger: "change" }
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
            message: "恭喜你，添加成功",
            type: "success"
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
.text {
  text-align: center;
}
</style>