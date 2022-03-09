
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
          <button id="makeVisible" class="myBtn btn-success">+</button>          
        </div>
        <div class="hiddenDiv">
          <h2>Hello World!</h2>
        </div>
        <div id="brandDiv" class="b_div">
          <h3>Brands</h3>
          <button class="myBtn btn-success">+</button>
        </div>
        <div id="categoryDiv" class="b_div">
          <h3>Categories</h3>
          <button class="myBtn btn-success">+</button>
        </div>
        <div id="discountDiv" class="b_div">
          <h3>Discounts</h3>
          <button class="myBtn btn-success">+</button>
        </div>
        <div id="statusDiv" class="b_div">
          <h3>Statuses</h3>
          <button class="myBtn btn-success">+</button>
        </div>
      </section>
    </body>
  </html>
</template>

<script>
import axios from "axios";
import '../assets/adminPage.js'
export default {
  data: function () {
    return {
      products: {},
    };
  },
  methods: {
  
  },
  mounted() {
   
  },
};
</script>


<style>
@import "../assets/adminPageStyles.scss";
</style>


