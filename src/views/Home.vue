<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
    created(){
    window.axios.get('http://larashop-api.test/buku/php')
      .then((response) => {
          console.log(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
    }
  }
</script>
