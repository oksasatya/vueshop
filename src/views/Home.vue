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
    mounted() {
      console.log(process.env)
    },
    created(){
    window.axios.get('http://larashop-api.test/buku/php')
      .then((response) => {
          console.log(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
    },
    data: () => ({
      categories: [
        {
          id:1,
          image : 'http://via.placeholder.com/150',
          name : 'Ekonomi',
          slug : 'ekonomi'
        },
        {
          id : 2,
          image : 'http://via.placeholder.com/150',
          name : 'Komputer',
          slug : 'komputer'
        }
      ],
    }),
  }
</script>
