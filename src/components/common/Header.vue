<template>
  <div class="header">
      <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
      <div class="logo">智能办公系统</div>
      <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <!-- <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div> -->
                <!-- 消息中心 -->
                <!-- <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-chat-round"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div> -->
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/logo.png" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="" target="_blank">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            collapse:false,
            fullscreen: false,
            name: 'linxin',
            message: 2
        }
    },
    computed:{
        username(){
            let username = localStorage.getItem('ms_username');
            return username?username:this.name;
        }
    },
    methods:{
        // 用户名下拉菜单选择事件
       handleCommand(command){
           if(command == 'loginout'){
               localStorage.removeItem('ms_username');
                this.$router.push('/login');
           }

       }, // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
    }
}
</script>

<style>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background-color: #242f42;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
/* .user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
} */
 .user-avator {
    margin-left: 20px;
}
.user-avator img {
   margin-top: 45px;
    margin-left: 70px;
     width: 40px; 
     height: 40px; 
    border-radius: 50%; 
} 
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>