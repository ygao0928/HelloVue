<template>
  <div class="wode-bar">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="user-info">
            <img src="../../assets/logo.png" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2019-11-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>东莞</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:252px;">
          <!-- <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress> -->
          <div id="myChart" :style="{width: '400px', height: '200px'}"></div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:403px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table :show-header="false" :data="todoList" style="width:100%;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{'todo-item-del': scope.row.status}"
                >{{scope.row.title}}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="12">
        <el-card shadow="hover" >
          <div slot="header" class="clearfix">
            <span>部门积分</span>
          </div>
          <el-table :data="depatData" stripe style="overflow-y:auto;width: 100%;height:130px">
            <el-table-column prop="Theme" label="主题" width="180"></el-table-column>
            <el-table-column prop="Integral_num" label="积分" width="180"></el-table-column>
            <el-table-column :formatter="formatDate" prop="Comp_date" label="完成时间"></el-table-column>
            <el-table-column :formatter="jifen_state" prop="Statue" label="状态"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>公司积分</span>
          </div>
          <el-table :data="comData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import moment from "moment";
export default {
  data() {
    return {
      depatData: [],
      comData: []
    };
  },
  mounted(){
    this.drawLine();
  },
  created() {
    this.showdep_jifen();
    this.showcom_jifen();
  },
  methods: {
    showdep_jifen() {
      const that = this;
      this.$http({
        method: "post",
        url: "/apis/AppData.asmx/dep_jifen",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
      }).then(function(res) {
        //that.$x2js.xml2js(respones.data).string.__text
        let bumen = JSON.parse(that.$x2js.xml2js(res.data).string.__text);
        console.log(bumen);
        that.depatData = bumen;
      });
    },
    showcom_jifen() {},
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '部门积分' },
            tooltip: {},
            xAxis: {
                data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
            },
            yAxis: {},
            series: [{
                name: '积分',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })},
    jifen_state: function(row, column) {
      return row.Statue == 3
        ? "待完成"
        : row.Statue == 4
        ? "已完成"
        : row.Statue == 5
        ? "通过"
        : row.Statue == -5
        ? "未通过"
        : row.Statue == -4
        ? "延时完成":""
    },
    formatDate: function(NewDtime) {
      console.log(NewDtime, "时间");
      var dt = new Date(parseInt(NewDtime.Comp_date.slice(6, 19)));
      var year = dt.getFullYear();
      var month = dt.getMonth() + 1;
      var date = dt.getDate();
      var hour = dt.getHours();
      var minute = dt.getMinutes();
      var second = dt.getSeconds();
      return year + "-" + month + "-" + date;
    }
  },

  filters: {
    dateformat: function(dataStr, pattern = "YYYY-MM-DD") {
      if (dataStr != "") {
        return moment(dataStr).format("YYYY-MM-DD");
      }
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
width: 7px; /*滚动条宽度*/
height: 7px; /*滚动条高度*/
background-color: white;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
background-color: rgba(221, 222, 224); /*滚动条的背景颜色*/
}
</style>