<template>
  <el-container class="homeBox">
    <el-header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">商城首页</span>
            </template>
            <el-menu-item-group>
              <span slot="title">首页</span>
              <el-menu-item index="1-1">
                <router-link to="/home/index">首页界面</router-link>
               
                </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-2">
              <span slot="title">商城流程介绍</span>
              <el-menu-item index="1-2-1">后台流程介绍</el-menu-item>
              <el-menu-item index="1-2-2">商城购物流程介绍</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">会员管理</span>
            </template>
          </el-menu-item>-->
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">会员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">会员信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">商品信息</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-2">
              <span slot="title">商城商品管理</span>
              <el-menu-item index="3-2-1">修改商品信息</el-menu-item>
              <el-menu-item index="3-2-2">添加商品</el-menu-item>
              <el-menu-item index="3-2-3">删除商品</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">订单信息</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="4-2">
              <span slot="title">商城订单管理</span>
              <el-menu-item index="4-2-1">修改会员信息</el-menu-item>
              <el-menu-item index="4-2-2">修改订单状态</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">用户信息</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="5-2">
              <span slot="title">商城用户管理</span>
              <el-menu-item index="5-2-1">编辑用户信息</el-menu-item>
              <el-menu-item index="5-2-2">添加管理员</el-menu-item>
              <el-menu-item index="5-2-3">删除管理员</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- <el-menu-item index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">订单管理</span>
            </template>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
/* 自定义样式开始 */
.homeBox {
  height: 100%;
}
</style>
