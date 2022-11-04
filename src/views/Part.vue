<template>
  <div>
    <p>我的好友</p>
    <p>{{ $route.query.username }}</p>
    <p>{{ $route.params.uname }}</p>
  </div>
</template>

<script>
export default {
  name: 'Part',
}
</script>

<style></style>
