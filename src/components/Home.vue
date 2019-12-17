<template>
  <el-table class="User-list" :data="employeeList" border stripe>
    <el-table-column type="index"></el-table-column>
    <el-table-column label="姓名" prop="username"></el-table-column>
    <el-table-column label="性别" prop="sex"></el-table-column>
    <el-table-column label="手机" prop="phone"></el-table-column>
    <el-table-column label="邮箱" prop="Email"></el-table-column>
    <el-table-column label="状态" prop="State"></el-table-column>
    <el-table-column label="操作" ></el-table-column>
  </el-table>
</template>
<script>
export default {
  data: function() {
    return {
      employeeList:[]
    };
  },

  created() {
    this.getEmployee();
  },
  methods: {
    //获取所有员工 的信息
    getEmployee() {
      const that = this;
      this.$http({
        method: "post",
        url: "/apis/AppData.asmx/Employeelist"
      }).then(function(respones) {
        let list = JSON.parse(that.$x2js.xml2js(respones.data).string.__text);
        // console.log(list);
        that.employeeList = list;
        console.log(that.employeeList);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.User-list{
  margin-top:50px; 
  font-size: 14px;
  text-align: center;
}
</style>