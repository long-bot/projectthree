
<template>
  <div class="article-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span>
         <my-header>
           内容管理
         </my-header>
        </span>

        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
      <el-form :model="reqParams" size="small" label-width="100px">
        <el-form-item label="状态：">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="reqParams.channel_id">
            <el-option v-for="(item) in Options" :key="item.id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-date-picker
            v-model="dataValues"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label>
          <el-button type="primary">按钮</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <!-- 默认插槽 -->
      <!-- <my-header><slot>顶顶顶</slot></my-header> -->
      <!-- 聚名插槽 -->
        <!-- <div slot="content" slot-scope="scope" v-for="item in scope" :key="item.id">内容内容 {{item.name}}  </div> -->
        <!-- <div slot="content" slot-scope="scope" v-for="item in scope.data" :key="item.id"> {{item.name}} </div> -->
        <!-- 自定义插槽   也就是获取原组件内提供的数据 -->
        <!-- <div slot="content" slot-scope="scope">{{scope}}</div>
        <div slot="footer">底部底部</div> -->

        <!-- < v-slot:header="scope"> 内容   {{scope.data}}  </dite,v> -->
<!-- <template v-slot:header='scope'>
    {{scope}}

</template> -->
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reqParams: {
        status: null,
        channel_id: null
      },
      Options: [{ name: 'java', id: 1 }],
      dataValues: []
    }
  }

}
</script>

<style lang="less" scope>
.article-container {
  .el-card {
    margin-bottom: 30px;
  }
}
</style>
