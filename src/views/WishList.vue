
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
            <a class="navbar-brand" href="#"
              ><img class="round" src="../assets/myLogo_2.png" />
            </a>
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
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <!-- navBar -->
                <li class="nav-item">
                  <a class="nav-link" href="/booking">Wish List</a> 
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/brand">My Orders</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/category">Categories</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/booking">Booking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/brand">Brands</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/category">Categories</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/delivery">Delivery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/discount">Discounts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/favorite">Favorites</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/product">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/status">Statuses</a>
                </li>

                <!--  -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
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

      <section id="section_1" class="container_100">
        <div class="divWrapper">
          <div class="leftFilterSide">
            <div class="filterWrapper">
              <input
                type="text"
                class="form-control margin10"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Category Name"
              />

              <!-- <input
                type="text"
                class="form-control margin10"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Brand Name"
              /> -->

              <input
                type="text"
                class="form-control margin10"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Product Name"
              />
              <div class="priceDivWrapper margin10">
                <input
                  style="width: 45%"
                  type="number"
                  min="0"
                  step="100"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Price From"
                />

                <input
                  style="width: 45%"
                  type="number"
                  min="0"
                  step="100"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Price To"
                />
              </div>

              <div class="checkboxWrapper">
                <ul class="chBoxUl">
                  <li v-for="brand in brands" :key="brand.id">
                    <input
                      type="checkbox"
                      v-bind:id="`myCheckbox${brand.id}`"
                    />
                    <label v-bind:for="`myCheckbox${brand.id}`">
                      <img :src="brand.img_path" class="brandImg" />
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  class="btn btn-primary"
                  type="submit"
                  style="width: 80%"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div class="rightListSide">
            <div
              class="card"
              style="width: 18rem"
              v-for="product in products"
              :key="product.id"
            >
              <img :src="product.img_path" class="card-img-top" alt="..." />

              <div class="card-body cardDiv">
                <h5 class="card-title">{{ product.product_name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text" style="font-size: 12px; font-weight: bold">
                  {{ product.price }}
                </p>
                <div style="display: flex; justify-content: space-between">
                  <button style="width: 60px" href="#" class="btn btn-primary">
                    Book
                  </button>
                  <button style="width: 60px" href="#" class="btn btn-success">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      products: {},
      brands: {},
    };
  },
  methods: {
    
  },
 
  mounted() {
        
    axios
      .get("http://127.0.0.1:8000/api/product/favProd/TMP User ID")
      .then((response) => (this.products = response.data));

      axios
      .get("http://127.0.0.1:8000/api/brand")
      .then((response) => (this.brands = response.data));
   
  },
};
</script>


<style>
@import "../assets/styles.scss";
</style>

