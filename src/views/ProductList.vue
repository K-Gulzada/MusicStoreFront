
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
      <!-- <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script> -->
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
                  <a class="nav-link" href="/wishList">Wish List</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/brand">My Orders</a>
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
                type="nu,mber"
                class="form-control margin10"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Category ID"
                ref="category_id"
              />

              <input
                type="text"
                class="form-control margin10"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Product Name"
                ref="product_name"
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
                  @click="search()"
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
                  <img
                    v-if="image"
                    :key="image.id"
                    @click="addFavorite(product.id)"
                    style="width: 20px; height: 20px"
                    :src="image.src"
                  />
                  <button
                    :disabled="isActive == product.id"
                    style="width: 60px"
                    href="#"
                    class="btn btn-primary"
                    @click="bookProduct(product.id)"
                  >
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
      filteredProducts: {},
      isActive: 0,
      brands: {},
      favorites: {},
      index: 0,
      favorite_id: 0,
      image: null,
      prod_name_for_search: "",
      category_id_for_search: "",
      images: [
        {
          id: 1,
          src: "/img/heart_icon.b9566ecf.png",
        },
        {
          id: 2,
          src: "/img/red_heart_icon.74914c32.png",
        },
      ],
    };
  },
  methods: {
    favoriteIcon() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    },
    addFavorite(product_id) {
     
      // this.image = this.images[this.index];
      // this.index = (this.index + 1) % this.images.length;

      this.favorite_id = axios.get("http://127.0.0.1:8000/api/favorite/", {
        product_id: product_id, // 1
        user_id: "314", // 314
      });

      //  console.log(this.index);
      if (this.index == 0) {
        axios.post("http://127.0.0.1:8000/api/favorite/", {
          product_id: product_id,
          user_id: "TMP User ID",
        });
        // red
        //post request to add new favorite
      } else {
        //delete request to delete from favorite table
        console.log(product_id);

        this.favorite_id = axios.get(
          "http://127.0.0.1:8000/api/favorite/getId/byParams",
          {
            product_id: product_id, // 1
            user_id: "314", // 314
          }
        );
        console.log(this.favorite_id);

        // axios.delete("http://127.0.0.1:8000/api/product/" + favorite_id);
      }
    },
    bookProduct(id) {
      console.log(id);
      this.isActive = id;
      axios.post("http://127.0.0.1:8000/api/booking/", {
        product_id: id,
      });
    },
    search() {
      console.log(this.$refs.product_name.value);
      console.log(this.$refs.category_id.value);
      if (this.$refs.product_name.value.length == 0) {
        this.products = axios.get("http://127.0.0.1:8000/api/product/", {
          category_id: this.$refs.category_id.value,
        });
      }

      if (this.$refs.category_id.value.length == 0) {
        this.products = axios.get("http://127.0.0.1:8000/api/product/", {
          product_name: this.$refs.product_name.value,
        });
      }
      if (
        this.$refs.category_id.value.length != 0 &&
        this.$refs.product_name.value.length != 0
      ) {
        this.products = axios.get("http://127.0.0.1:8000/api/product/", {
          product_name: this.$refs.product_name.value,
          category_id: this.$refs.category_id.value,
        });
      }
      //location.reload();
      console.log(this.products);
    },

    
  },
 
  mounted() {
    this.favoriteIcon();
    axios
      .get("http://127.0.0.1:8000/api/product/")
      .then((response) => (this.products = response.data));

    axios
      .get("http://127.0.0.1:8000/api/brand/")
      .then((response) => (this.brands = response.data));
    axios
      .get("http://127.0.0.1:8000/api/favorite/")
      .then((response) => (this.favorites = response.data));
  },
};
</script>


<style>
@import "../assets/styles.scss";
</style>

