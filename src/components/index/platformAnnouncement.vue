<template>
  <div id="platformAnnouncement" v-show="showHide">
    <b></b><span>平台公告：{{msg}}</span>
  </div>
</template>

<script>
    export default {
        name: "platformAnnouncement",
        data() {
            return {
                msg: '',
              showHide:false
            }
        },
      created(){
          var $this=this;
          console.log(this)
          this.$axios.get('http://59.110.161.56:82/UserHome/get_system_notice')
            .then(function (response) {
              // gohandle success
              var data=response.data.data;
              $this.msg=data.abstract;
              $this.showHide=true
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  #platformAnnouncement{
    background: #fff;
    height:36px;
    line-height:36px;
    padding: 0 18px;
    color: #C11920;
    margin-bottom: 15px;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  b{
    display: inline-block;
    width:20px;
    background: #DC2229;
    vertical-align: top;
    position: relative;
    top: 10px;
    margin-right: 10px;
    height:16px;
  }
  }
</style>
