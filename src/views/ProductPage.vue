
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
      <header class="navPadding">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/"
                    >Home</a
                  >
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <section class="container_100">
        <div id="productDiv" class="visible_div">
          <h3>Product</h3>
          <button
            @click="showDiv(6)"
            id="makeVisible"
            class="myBtn btn-success"
          >
            +
          </button>
        </div>
        <div id="hiddenDiv_6" v-if="isShowing == 6">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <button class="btn btn-primary">Add New</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category ID</th>
                <th scope="col">Brand ID</th>
                <th scope="col">Price</th>
                <th scope="col">End date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <th scope="row">{{ product.id }}</th>

                <td>
                  <img
                    :src="product.img_path"
                    class="productImg"
                    style="width: 50px"
                  />
                </td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.category_id }}</td>
                <td>{{ product.brand_id }}</td>
                <td>{{ product.price }}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                <td>
                  <button
                    class="btn btn-warning"
                    v-on:click="getById(product.id)"
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          class="btn btn-primary"
          style="width: 100px"
          v-on:click="getById(999999)"
        >
          Test Button
        </button>
      </section>

      <section class="container_100">
        <div class="updateDiv">
          <div>
            <div class="image-preview">
              <img
                style="height: 90px"
                :src="'https://st.depositphotos.com/2000885/1902/i/600/depositphotos_19021343-stock-photo-red-heart.jpg'"
                class="rounded mx-auto d-block"
                alt="..."
              />
            </div>
            <label style="margin-top: 20px" for="productfile"
              >Upload file:</label
            >
            <input type="file" ref="file" id="productfile" name="productfile" />
          </div>

          <!-- <input v-model="product.id" type="text"     name="product_name" class="form-control" placeholder="Product Name" /> -->
          <input
            name="product_name"
            class="form-control"
            placeholder="Product Name"
          />
          <input
            type="number"
            name="price"
            class="form-control"
            placeholder="Price"
          />
          
            <!-- <select v-model="product.id">
              <option
                :selected="category.id === product.category_id"
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.productType }}
              </option>
            </select> -->
            <select class="form-control">
              <option selected disabled value="">Category ID</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
         
            
            <!-- <select v-model="product.id">
              <option
                :selected="brand.id === product.brand_id"
                v-for="brand in brands"
                :key="brand.id"
                :value="brand.id"
              >
                {{ brand.name}}
              </option>
            </select>
             -->
            <select class="form-control">
              <option selected disabled value="">Brand ID</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
        

          <!-- <input
            type="number"
            name="category_id"
            class="form-control"
            placeholder="Category ID"
          />
          <input
            type="number"
            name="brand_id"
            class="form-control"
            placeholder="Brand ID"
          /> -->

          <button
            class="btn btn-success"
            style="width: 100px"
            v-on:click="this.save()"
          >
            Save
          </button>
        </div>
      </section>
    </body>
  </html>
</template>

<script>
import axios from "axios";
// import handle from "../assets/adminPage.js";
export default {
  data: function () {
    return {
      isShowing: null,
      products: {},
      categories: {},
      brands: {},
      product: null,
    };
  },

  methods: {
    showDiv: function (id) {
      if (this.isShowing == id) {
        this.isShowing = null;
      } else {
        this.isShowing = id;
      }
    },
    getById: function (id) {
      console.log(id);
      // axios
      //   .get("http://127.0.0.1:8000/api/product/{id}")
      //   .then((response) => (this.products = response.data));
    },
  },
  // mounted() {},
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/product/")
      .then((response) => (this.products = response.data));
    axios
      .get("http://127.0.0.1:8000/api/category/")
      .then((response) => (this.categories = response.data));
    axios
      .get("http://127.0.0.1:8000/api/brand/")
      .then((response) => (this.brands = response.data));
  },
};
</script>


<style>
.updateDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 20%;
}

.form-control {
  margin: 5px 0;
}
</style>

