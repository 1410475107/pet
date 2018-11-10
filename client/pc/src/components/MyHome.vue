<template>
<div>
  <el-form :inline="true" :model="userdata" class="demo-form-inline">
  <el-form-item label="账号">
    <el-input v-model="userdata.username" placeholder="账号"></el-input>
  </el-form-item>


  <el-form-item label="密码">
    <el-input v-model="userdata.passwd" placeholder="密码"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form>

 <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @current-change="pageChange"
      :current-page="cpage"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>


  <el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
  </el-row>


</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userdata: {
        username: "",
        passwd: ""
      },
       cpage: 4
    };
  },
  methods: {
    onSubmit() {
      console.log(this.userdata);
    },
    pageChange(val) {
      console.log(`当前页: ${val}`);
	  // 根据当前页数到服务器获取最新数据  ajax  axios
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
