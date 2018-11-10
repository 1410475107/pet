<template>
    <div>
        <el-form :inline="true" class="demo-loginForm" label-width="80px">
            <el-form-item label="关键词：">
                <el-input name="keywords" v-model="keywords" class="myinput"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="kwlist" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="60"> </el-table-column>
            <el-table-column label="关键词" width="180">
                <template slot-scope="scope">
                    <div v-html="scope.row.kw"></div>
                </template>
            </el-table-column>
            <el-table-column prop="c1" label="分类一"> </el-table-column>
            <el-table-column prop="c2" label="分类二"> </el-table-column>
            <el-table-column prop="c3" label="分类三"> </el-table-column>
        </el-table>
        <hr>
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="200000" @current-change='getData' :current-page="cpage">
        </el-pagination>
    </div>
</template>

<script>
export default {
  name: "KwList",
  data() {
    return {
      kwlist: [],
      keywords: "",
      cpage: 1
    }
  },
  mounted() {
    //接收get过来的值
    this.cpage = this.$route.query.page * 1 ? this.$route.query.page * 1 : 1;
    this.serverData(this.cpage);
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
              res.data[ind].kw = res.data[ind].kw.replace(
                _this.keywords,
                `<span class="H">${_this.keywords}</span>`
              );
            }
          }
          _this.kwlist = res.data;
          //修改当前地址 下次可以通过该地址直接访问
          _this.$router.push({ path: "/list", query: { page: page } });
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
