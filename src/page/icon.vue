<template>
  <div class="content">
    <h2>按钮 Icon</h2>
    <p>常用的操作按钮。</p>

    <h3>基础用法</h3>
    <p>基础的<code>按钮</code>用法。</p>
    <ba-demo :code="code.default">
      <template slot="source">
        <button>默认按钮</button>
        <button>默认按钮</button>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>Button 组件默认提供7种主题，由<code>type</code>属性来定义，默认为default。</p>
        <p>Button 组件默认提供7种主题，由type属性来定义，默认为default。</p>
        <p>Button 组件默认提供7种主题，由type属性来定义，默认为default。</p>
        <p>Button 组件默认提供7种主题，由type属性来定义，默认为default。</p>
      </template>
    </ba-demo>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/button';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code
      };
    }
  };
</script>