<template>
  <el-container style="height: 100%;">
    <!--<el-header style="padding: 0;">-->
      <!--<div style="height: 60px;background-color:#545c64;"></div>-->
    <!--</el-header>-->
    <el-container>
      <el-aside width="200px" style="height: 100%">
        <el-menu
          router
          :default-active="this.$route.name"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="memberManagement">
            <i class="el-icon-setting"></i>
            <span slot="title">会员管理</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>财务管理</span>
            </template>
            <el-menu-item index="financialManagement">
              <i class="el-icon-setting"></i>
              <span slot="title">财务管理</span>
            </el-menu-item>
            <el-menu-item index="memberRecharge">
              <i class="el-icon-setting"></i>
              <span slot="title">会员充值管理</span>
            </el-menu-item>
            <el-menu-item index="transferRecordTK">
              <i class="el-icon-setting"></i>
              <span slot="title">TK币转账记录</span>
            </el-menu-item>
            <el-menu-item index="memberInvestment">
              <i class="el-icon-setting"></i>
              <span slot="title">会员投资</span>
            </el-menu-item>
            <el-menu-item index="presentRecord">
              <i class="el-icon-setting"></i>
              <span slot="title">提现记录</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统参数管理</span>
            </template>
            <el-menu-item index="systemParamsSet">
              <i class="el-icon-setting"></i>
              <span slot="title">系统参数设置</span>
            </el-menu-item>
            <el-menu-item index="productParamsSet">
              <i class="el-icon-setting"></i>
              <span slot="title">产品参数设置</span>
            </el-menu-item>
            <el-menu-item index="companyAccount">
              <i class="el-icon-setting"></i>
              <span slot="title">公司账户管理</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    mounted() {
      this.getPath()
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getPath() {
        console.log(this.$route)
      }
    }
  }
</script>
<style lang=scss  type=text/scss  scope>
  .el-aside .el-menu {
    height: 100%;
    border: 0;
  }
  .el-main{
    padding: 0;
  }
</style>
