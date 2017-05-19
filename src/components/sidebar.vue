<template>
  <div class="sidebar" :class="classes">
    <ul class="sidebar-test">
      <li>
        <router-link to="/icon">图标 Icon</router-link>
      </li>
      <li>
        <router-link to="/button">按钮 Button</router-link> 
      </li>
      <li>
        <router-link to="/radio">单选框 Radio</router-link> 
      </li>
      <li>
        <router-link to="/tree">树型控件 Tree</router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      visible: Boolean
    },

    computed: {
      classes() {
        return this.visible ? 'open' : '';
      }
    }
  };
</script>