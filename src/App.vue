<template>
  <div id="app">
    <el-container class="homeBox">
      <el-header>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <i class="el-icon-date" @click="changeMenu" style="font-size:24px; color:#fff;">切换列表</i>
        </el-radio-group>
        <el-row class="block-col-2" style="float:right;">
          <el-col>
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/home">
                  <el-dropdown-item index="1-1">首页界面</el-dropdown-item>
                </router-link>
                <router-link to="/home/background">
                  <el-dropdown-item index="1-2-1">后台流程介绍</el-dropdown-item>
                </router-link>
                <router-link to="/home/shopMall">
                  <el-dropdown-item index="1-2-2">商城购物流程介绍</el-dropdown-item>
                </router-link>
                <router-link to="/home/member">
                  <el-dropdown-item index="2-1">会员信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/goodsInfo">
                  <el-dropdown-item index="3-1">商品信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/editorGoods">
                  <el-dropdown-item index="3-2-1">修改商品信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/newGoods">
                  <el-dropdown-item index="3-2-2">添加商品</el-dropdown-item>
                </router-link>
                <router-link to="/home/deleteGoods">
                  <el-dropdown-item index="3-2-3">删除商品</el-dropdown-item>
                </router-link>
                <router-link to="/home/orderInfo">
                  <el-dropdown-item index="4-1">订单信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/editormembers">
                  <el-dropdown-item index="4-2-1">修改会员信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/editorOrder">
                  <el-dropdown-item index="4-2-2">修改订单状态</el-dropdown-item>
                </router-link>
                <router-link to="/home/usersInfo">
                  <el-dropdown-item index="5-1">用户信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/editorUsers">
                  <el-dropdown-item index="5-2-1">编辑用户信息</el-dropdown-item>
                </router-link>
                <router-link to="/home/newUsers">
                  <el-dropdown-item index="5-2-2">添加管理员</el-dropdown-item>
                </router-link>
                <router-link to="/home/deleteUsers">
                  <el-dropdown-item index="5-2-3">删除管理员</el-dropdown-item>
                </router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="{isCollapse?'100px':'200px'}">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#353534"
            text-color="#fff"
            style="border:none;"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">商城首页</span>
              </template>
              <el-menu-item-group>
                <!-- <span slot="title">首页</span> -->
                <router-link to="/home">
                  <el-menu-item index="1-1">首页界面</el-menu-item>
                </router-link>
              </el-menu-item-group>
              <el-submenu index="1-2">
                <span slot="title">商城流程介绍</span>
                <router-link to="/home/background">
                  <el-menu-item index="1-2-1">后台流程介绍</el-menu-item>
                </router-link>
                <router-link to="/home/shopMall">
                  <el-menu-item index="1-2-2">商城购物流程介绍</el-menu-item>
                </router-link>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">会员管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/home/member">
                  <el-menu-item index="2-1">会员信息</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span slot="title">商品管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/home/goodsInfo">
                  <el-menu-item index="3-1">商品信息</el-menu-item>
                </router-link>
              </el-menu-item-group>
              <el-submenu index="3-2">
                <span slot="title">商城商品管理</span>
                <router-link to="/home/editorGoods">
                  <el-menu-item index="3-2-1">修改商品信息</el-menu-item>
                </router-link>
                <router-link to="/home/newGoods">
                  <el-menu-item index="3-2-2">添加商品</el-menu-item>
                </router-link>
                <router-link to="/home/deleteGoods">
                  <el-menu-item index="3-2-3">删除商品</el-menu-item>
                </router-link>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span slot="title">订单管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/home/orderInfo">
                  <el-menu-item index="4-1">订单信息</el-menu-item>
                </router-link>
              </el-menu-item-group>
              <el-submenu index="4-2">
                <span slot="title">商城订单管理</span>
                <router-link to="/home/editormembers">
                  <el-menu-item index="4-2-1">修改会员信息</el-menu-item>
                </router-link>
                <router-link to="/home/editorOrder">
                  <el-menu-item index="4-2-2">修改订单状态</el-menu-item>
                </router-link>
              </el-submenu>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-rank"></i>
                <span slot="title">用户管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/home/usersInfo">
                  <el-menu-item index="5-1">用户信息</el-menu-item>
                </router-link>
              </el-menu-item-group>
              <el-submenu index="5-2">
                <span slot="title">商城用户管理</span>
                <router-link to="/home/editorUsers">
                  <el-menu-item index="5-2-1">编辑用户信息</el-menu-item>
                </router-link>
                <router-link to="/home/newUsers">
                  <el-menu-item index="5-2-2">添加管理员</el-menu-item>
                </router-link>
                <router-link to="/home/deleteUsers">
                  <el-menu-item index="5-2-3">删除管理员</el-menu-item>
                </router-link>
              </el-submenu>
            </el-submenu>
            <!-- <el-menu-item index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">订单管理</span>
            </template>
            </el-menu-item>-->
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isCollapse: flase
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeMenu() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    }
  }
};
</script>

<style>
#app {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #0f2b50;
  /* color: #333; */
  line-height: 60px;
}

.el-aside {
  /* background-color: #353534; */
  background-color: #353534;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #eaeae7;
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
.el-main {
  line-height: 80px !important;
}
.el-submenu__title i {
  color: #fff;
}

/* 下拉菜单 */
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
