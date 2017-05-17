<template>
  <div class="sidebar" :class="classes">
    <ul class="sidebar-test">
      <li>
        <router-link to="/icon">icon</router-link>
      </li>
      <li>
        <router-link to="/button">button</router-link> 
      </li>
      <li>下拉框</li>
      <li>输入框</li>
      <li>单选框</li>
      <li>多选框</li>
      <li>弹出框</li>
      <li>下拉框</li>
      <li>输入框</li>
      <li>单选框</li>
      <li>多选框</li>
      <li>弹出框</li>
      <li>下拉框</li>
      <li>输入框</li>
      <li>单选框</li>
      <li>多选框</li>
      <li>弹出框</li>
      <li>下拉框</li>
      <li>输入框</li>
      <li>单选框</li>
      <li>多选框</li>
      <li>弹出框</li>
      <li>下拉框</li>
      <li>输入框</li>
      <li>单选框</li>
      <li>多选框</li>
      <li>弹出框</li>
      <li>下拉框</li>
      <li>输入框</li>
      <li>单选框</li>
      <li>多选框</li>
      <li>弹出框</li>
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