
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

      <section id="section_brands" class="container_100">
        <div id="bookingDiv" class="visible_div">
          <h3>Booking</h3>
          <button
            @click="showDiv(1)"
            id="makeVisible"
            class="myBtn btn-success" >
            +
          </button>
        </div>
        <div id="hiddenDiv_1" v-if="isShowing == 1">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end; " >
            <button class="btn btn-primary">Add New</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Product ID</th>
                <th scope="col">User ID</th>
                <th scope="col">Status ID</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in bookings" :key="booking.id">
                <th scope="row">{{ booking.id }}</th>

                <td>{{ booking.product_id }}</td>
                <td>{{ booking.user_id }}</td>
                <td>{{ booking.status_id }}</td>
                <td>{{ booking.start_date }}</td>
                <td>{{ booking.end_date }}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="brandDiv" class="visible_div">
          <h3>Brands</h3>
          <button @click="showDiv(2)" class="myBtn btn-success">+</button>
        </div>
        <div id="hiddenDiv_2" v-if="isShowing == 2">
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
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="brand in brands" :key="brand.id">
                <th scope="row">{{ brand.id }}</th>

                <td><img :src="brand.img_path" class="brandImg" /></td>
                <td>{{ brand.name }}</td>
                <td>{{ brand.description }}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning" v-on:click="getById(brand.id)">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="categoryDiv" class="visible_div">
          <h3>Categories</h3>
          <button @click="showDiv(3)" class="myBtn btn-success">+</button>
        </div>
        <div id="hiddenDiv_3" v-if="isShowing == 3">
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
                <th scope="col">Product Type</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                <th scope="row">{{ category.id }}</th>

                <td>{{ category.productType }}</td>
                <td>{{ category.description }}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="discountDiv" class="visible_div">
          <h3>Discounts</h3>
          <button @click="showDiv(4)" class="myBtn btn-success">+</button>
        </div>
        <div id="hiddenDiv_4" v-if="isShowing == 4">
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
                <th scope="col">Product ID</th>
                <th scope="col">Percent</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="discount in discounts" :key="discount.id">
                <th scope="row">{{ discount.id }}</th>

                <td>{{ discount.product_id }}</td>
                <td>{{ discount.percent }}</td>
                <td>{{ discount.start_date }}</td>
                <td>{{ discount.end_date }}</td>

                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="statusDiv" class="visible_div">
          <h3>Statuses</h3>
          <button class="myBtn btn-success">+</button>
        </div>
        <div id="hiddenDiv_5" v-if="isShowing == 5">
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
                <th scope="col">Status Text</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="status in statuses" :key="status.id">
                <th scope="row">{{ status.id }}</th>

                <td>{{ status.status_text }}</td>

                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="productDiv" class="visible_div">
          <h3>Product</h3>
          <button
            @click="showDiv(6)"
            id="makeVisible"
            class="myBtn btn-success" >
            +
          </button>
        </div>
        <div id="hiddenDiv_6" v-if="isShowing == 6">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end; " >
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

                 <td><img :src="product.img_path" class="productImg" style="width:50px;"/></td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.category_id }}</td>
                <td>{{ product.brand_id }}</td>
                <td>{{ product.price }}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning"  v-on:click="getById(product.id)">Update</button></td>
              </tr>
            </tbody>
          </table>
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
      bookings: {},
      brands: {},
      categories: {},
      discounts: {},
      statuses: {},
      products:{},
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
    
  },
  // mounted() {},
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/booking/")
      .then((response) => (this.bookings = response.data));
    axios
      .get("http://127.0.0.1:8000/api/brand/")
      .then((response) => (this.brands = response.data));
    axios
      .get("http://127.0.0.1:8000/api/category/")
      .then((response) => (this.categories = response.data));
    axios
      .get("http://127.0.0.1:8000/api/discount/")
      .then((response) => (this.discounts = response.data));
    axios
      .get("http://127.0.0.1:8000/api/status/")
      .then((response) => (this.statuses = response.data));
    axios
      .get("http://127.0.0.1:8000/api/product/")
      .then((response) => (this.products = response.data));
  },
};
</script>


<style>
@import "../assets/adminPageStyles.scss";
</style>

