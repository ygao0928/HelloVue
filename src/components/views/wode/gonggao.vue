<template>
  <div class="gonggao_bar">
    <el-table :data="gaogao_tableData"
    :row-style="tableRowStyle"
     stripe style="width: 100%;">
      <el-table-column prop="theme" align="center" label="公告主题" ></el-table-column>
      
      <el-table-column prop="depart" align="center" label="发布部门"></el-table-column>
      <el-table-column prop="fabu" align="center" label="发布人"></el-table-column>
      <el-table-column prop="statue" align="center" label="状态"></el-table-column>
      <el-table-column label="操作" align="center" prop="id" >
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gaogao_tableData: []
    };
  },
  created(){
      this.findgaongao();
  },
  methods: {
      
    handleEdit(index, row) {
      console.log(index, row.id);
      this.open();
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    findgaongao(){
        const that = this;
      that.$http({
            method:"post",
            url:"/apis/AppData.asmx/findgonggao"
        }).then(function (res) {
            let list = JSON.parse(that.$x2js.xml2js(res.data).string.__text);
            that.gaogao_tableData=list;
            console.log(list);
        })
    },
    //设置表格行的样式
            tableRowStyle({row,rowIndex}){
                return 'text-align: center;font-size:15px;'
            },
             open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  }
};
</script>

<style>
.ff{
    text-align: center
}
</style>