<template>
  <div>
    <el-main style="background-color:#eaedf1">
      <!-- 标签组件 -->
      <tabs></tabs>
      <router-view></router-view>
      <!-- 增加keep-alive缓存机制 -->
      <keep-alive :include="tagsList">
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </div>
</template>

<script>
import Tabs from "@/components/common/Tags.vue"; // 引入Tags组件
import bus from "@/components/common/bus.js"; // 组件传值使用的bus
export default {
  created() {
    // 用于keep-alive缓存，只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  },
  components: {
    tabs: Tabs, // 注册tabs组件
    // eslint-disable-next-line vue/no-unused-components
    bus // 注册bus组件传值公共文件
  },
  data() {
    return {
      tagsList: []
    };
  },
  methods: {}
};
</script>

<style></style>
