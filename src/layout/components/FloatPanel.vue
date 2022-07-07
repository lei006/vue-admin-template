<template>
  <ul class="vab-theme-setting">

    <li><a><i class="el-icon-share" /><p>主题配置</p></a></li>
    <li><a><i class="el-icon-phone" aria-hidden="true" /><p>随机换肤</p></a></li>
    <li><a><i class="el-icon-picture-outline-round" aria-hidden="true" /><p>购买源码</p></a></li>
    <li><a><i class="el-icon-s-promotion" aria-hidden="true" /><p>拷贝源码</p></a></li>
    <li><a><i class="el-icon-s-opportunity" aria-hidden="true" /><p>清理缓存</p></a></li>
  </ul>

</template>

<script>

export default {

  methods: {

  }
}
</script>

<style lang="scss" scoped>

.float-panel{
    position: fixed;
    top: 50%;
    right: 20px;
    z-index: 1997;
    padding: 10px 0 0 0;
    margin: 0;
    text-align: center;
    cursor: pointer;
    background: var(--el-color-white);
    border: 1px solid #dcdfe6;
    border-top-left-radius: 5.5px;
    border-bottom-left-radius: 5.5px;
    box-shadow: 0 0 50px 0 rgba(82,63,105,.15);
    transform: translateY(-50%);
}

.vab-theme-setting {
    position: fixed;
    top: 50%;
    right: 20px;
    z-index: 1997;
    padding: 10px 0 0 0;
    margin: 0;
    text-align: center;
    cursor: pointer;
    background: var(--el-color-white);
    border: 1px solid #dcdfe6;
    border-top-left-radius: 5.5px;
    border-bottom-left-radius: 5.5px;
    box-shadow: 0 0 50px 0 rgba(82,63,105,.15);
    transform: translateY(-50%)
}

.vab-theme-setting>li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px 10px 10px;
    margin: 0;
    list-style: none
}

.vab-theme-setting>li:nth-child(2) [class*=ri-] {
    -webkit-animation: rotate 6s linear infinite;
    animation: rotate 6s linear infinite
}

.vab-theme-setting>li:first-child a {
    color: #3698fd;
    background: #ebf5ff;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease
}

.vab-theme-setting>li:first-child a:hover {
    color: var(--el-color-white);
    background: #3698fd
}

.vab-theme-setting>li:nth-child(2) a {
    color: #1bc3bb;
    background: #e8f9f8;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease
}

.vab-theme-setting>li:nth-child(2) a:hover {
    color: var(--el-color-white);
    background: #1bc3bb
}

.vab-theme-setting>li:nth-child(3) a {
    color: #faa500;
    background: #fff6e6;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease
}

.vab-theme-setting>li:nth-child(3) a:hover {
    color: var(--el-color-white);
    background: #faa500
}

.vab-theme-setting>li:nth-child(4) a {
    color: #b37feb;
    background: #f7f2fd;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease
}

.vab-theme-setting>li:nth-child(4) a:hover {
    color: var(--el-color-white);
    background: #b37feb
}

.vab-theme-setting>li:nth-child(5) a {
    color: #ef4c5d;
    background: #fdedef;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease
}

.vab-theme-setting>li:nth-child(5) a:hover {
    color: var(--el-color-white);
    background: #ef4c5d
}

.vab-theme-setting>li a {
    display: inline-block;
    width: 60px;
    height: 60px;
    padding-top: 10px;
    text-align: center;
    background: #f6f8f9;
    border-radius: 5.5px
}

.vab-theme-setting>li a p {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 25px;
    text-overflow: ellipsis;
    white-space: nowrap
}

</style>
