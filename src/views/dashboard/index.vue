<template>
  <div class="app-container">
    dashboard page
  </div>
</template>

<script>
import {list2} from '@/api/demo'
  export default {
    name: "dashboard",
    components: {},
    data() {
      return {
        tokenQuery:{
          required:true
        }
      }
    },
    created() {
      this.setPageTitle()
      this.test()
    },
    methods: {
        test() {
            // 这个是默认的请求，主要是为了测试request模块和API请求是否正常，如果需要自己该笔那，请注释下面的代码
            list2().then(resp=>{
                console.log('resp:',resp)
            }).catch(err=>{
                console.error('error:',err)
            })
        },
      setPageTitle() {
        const title = 'dashboard'
        document.title = `${title}`
      },
    }
  }
</script>

<style scoped>

</style>