
<template>
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="updateDiv">
        <input class="form-control" placeholder="test" />
        <input class="form-control" placeholder="test" />
        <input class="form-control" placeholder="test" />
        <input class="form-control" placeholder="test" />
        <button class="btn btn-success" style="width:100px" v-on:click="this.save()">
          Save
        </button>
      </div>
    </body>
  </html>
</template>

<script>
import axios from "axios";
// import handle from "../assets/adminPage.js";
export default {
  data: function () {
    return {
      product: null,
    };
  },

  methods: {
    getById: function (id){
    // getById(id) {
      console.log(id);
      // if(id!=null){
      // axios
      //   .get("http://127.0.0.1:8000/api/product/"+id)
      //   .then((response) => (this.product = response.data));
      // }
    },
    save() {
      console.log("test");
     
      //     axios.post("http://127.0.0.1:7000/api/product/", {
      //       product: {
      //         params: { product_name: product_name,  }
      //       },
      //     });
      //   }
    
      
    },
    redirectTo(url) {
      window.location = url;
    },
  },
  // mounted() {},
  mounted() {},
};
</script>


<style>
.updateDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 300px;
}

.form-control{
  margin: 5px 0;
}
</style>
