<template>
  <el-container class="home-container">
    <el-aside class="home-aside" width="200px">
      <div style="height:60px;text-align: center;line-height:60px;">
        <img src="../../assets/images/logo_admin.png" alt />
      </div>
      <el-menu
        default-active="/"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:0"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-menu"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-menu"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-menu"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="comment">
          <i class="el-icon-menu"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-menu"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="home-header">
        <span class="el-icon-s-fold" style="font-size: 30px; vertical-align: middle"></span>
        <span>江苏传智播客科技教育有限公司</span>
        <el-dropdown style="float: right">
          <img src="../../assets/images/avatar.jpg" alt style="vertical-align: middle" />
          <span class="el-dropdown-link">
            黑马小哥
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-setting">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="home-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .home-aside {
    background-color: #002033;
    width: 200px;
  }
  .home-header {
    border-bottom: 1px solid #000;
    line-height: 60px;
  }
}
</style>
