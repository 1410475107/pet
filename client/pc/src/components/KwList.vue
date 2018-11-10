<template>
  <div>
      <el-form :inline="true"  class="demo-loginForm" label-width="80px">
        <el-form-item label="关键词：">
            <el-input name="keywords" v-model="keywords"  class="myinput"></el-input>
        </el-form-item>
       
        <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
    </el-form>

    <el-table :data="kwlist" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="60"> </el-table-column>
    <el-table-column  label="关键词" width="180">
        <template slot-scope="scope">
            <div v-html="scope.row.kw"></div>
       </template>
    </el-table-column>
    <el-table-column prop="c1" label="分类一"> </el-table-column>
    <el-table-column prop="c2" label="分类二"> </el-table-column>
    <el-table-column prop="c3" label="分类三"> </el-table-column>
  </el-table>
    <hr>
  <el-pagination :page-size="20" :pager-count="11" 
  layout="prev, pager, next"
  :total="200000"
  @current-change = 'getData'
  >
</el-pagination>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      kwlist: [],
      keywords: ""
    };
  },
  mounted() {
    this.serverData(1);
  },
  methods: {
    getData(page) {
      this.serverData(page);
    },
    search() {
      this.serverData(1);
    },
    serverData(page) {
      let _this = this;
      _this.http
        .get("/kwlist", {
          params: {
            page: page,
            keywords: _this.keywords
          }
        })
        .then(function(res) {
          console.log(res);
          if (_this.keywords) {
            for (const ind in res.data) {
              console.log(ind);
              res.data[ind].kw = res.data[ind].kw.replace(
                _this.keywords,
                `<span class="H">${_this.keywords}</span>`
              );
            }
          }
          _this.kwlist = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.H {
  color: #ff0000;
}
</style>
