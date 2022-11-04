<template>
  <div>
    <div class="footer_wrap">
      <!-- <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part?username=小金同学">小金同学</router-link>
      <router-link to="/part/小可同学">小可同学</router-link> -->
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="fn1('/part', 'Part', '小金同学')">小金同学</span>
      <span @click="fn2('/part', 'Part', '小可同学')">小可同学</span>
    </div>
    <div class="top">
      <!-- 第七步：设置挂载点-当url的hash值路径切换,显示规则里对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    btn(targetPath, targetName) {
      //   this.$router.push({ path: targetPath })
      this.$router.push({
        name: targetName,
      })
    },
    fn1(targetPath, targetName, username) {
      this.$router
        .push({
          name: targetName,
          query: {
            username,
          },
        })
        .catch(() => {})
    },
    fn2(targetPath, targetName, uname) {
      this.$router
        .push({
          name: targetName,
          params: {
            uname,
          },
        })
        .catch(() => {})
    },
  },
}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
/* .footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
} */
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>
