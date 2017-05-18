<template>
  <div class="sidebar" :class="classes">
    <ul class="sidebar-test">
      <li>
        <router-link to="/icon">图标 icon</router-link>
      </li>
      <li>
        <router-link to="/button">按钮 button</router-link> 
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