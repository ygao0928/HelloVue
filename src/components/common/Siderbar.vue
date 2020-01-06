<template>
  <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            default-active="wode"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            @open="handleOpen" @close="handleClose"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from './bus.js';
export default {
    data() {
        return {
            collapse: false,
            items:[
                {
                    icon: 'el-icon-user',
                    index: '7',
                    title: '我的',
                    subs:[
                        {
                            index:'wode',
                            title:'个人信息'
                        },
                         {
                            index:'gonggao',
                            title:'公告'
                        },
                        {
                            index:'toupiao',
                            title:'投票'
                        },
                        {
                            index:'kaoqin',
                            title:'个人考勤'
                        },
                        {
                            index:'baoxiao',
                            title:'报销'
                        },
                        {
                            index:'jihua',
                            title:'工作计划'
                        },{
                            index:'tongxunlu',
                            title:'通讯录'
                        },
                    ]
                },
                {
                    icon: 'el-icon-suitcase',
                    index: '8',
                    title: '工作任务',
                    subs:[
                        {
                            index:'nomoaltask',
                            title:'我的任务'
                        },
                        {
                            index:'nomoalztask',
                            title:'支线任务'
                        },
                        {
                            index:'jltask',
                            title:'我的任务'
                        },
                        {
                            index:'jlztask',
                            title:'支线任务'
                        },
                        {
                            index:'shtask',
                            title:'审核任务'
                        },
                        {
                            index:'shtask',
                            title:'审核任务'
                        },
                        {
                            index:'fbrw',
                            title:'发布任务'
                        },
                        {
                            index:'xjrw',
                            title:'新建任务'
                        }
                    ]
                },
                {
                    icon: 'el-icon-s-promotion',
                    index: 'workflow',
                    title: '工作流'
                },
                {
                    icon: 'el-icon-place',
                    index: 'project',
                    title: '项目管理'
                },
            ]
        }
    },
}
</script>

<style>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 270px;
}
.sidebar > ul {
    height: 100%;
}
</style>