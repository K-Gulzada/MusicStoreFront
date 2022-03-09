
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
            <a class="navbar-brand" href="#"><img class="round" src="../assets/myLogo_2.png"/>
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
                  <a class="nav-link" href="/AdminPage#bookingDiv">Booking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AdminPage#brandDiv">Brands</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AdminPage#categoryDiv">Categories</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AdminPage#discountDiv">Discounts</a>
                </li>
                 <li class="nav-item">
                  <a class="nav-link" href="/AdminPage#statusDiv">Statuses</a>
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
                  <li>
                    <input type="checkbox" id="myCheckbox1" />
                    <label for="myCheckbox1"
                      ><img class="brandImg" src="../assets/b_1.png"
                    /></label>
                  </li>
                  <li>
                    <input type="checkbox" id="myCheckbox2" />
                    <label for="myCheckbox2"
                      ><img class="brandImg" src="../assets/b_2.jpg"
                    /></label>
                  </li>
                  <li>
                    <input type="checkbox" id="myCheckbox3" />
                    <label for="myCheckbox3"
                      ><img class="brandImg" src="../assets/b_3.jpg"
                    /></label>
                  </li>

                  <li>
                    <input type="checkbox" id="myCheckbox4" />
                    <label for="myCheckbox4"
                      ><img class="brandImg" src="../assets/b_5.webp"
                    /></label>
                  </li>
                  <li>
                    <input type="checkbox" id="myCheckbox5" />
                    <label for="myCheckbox5"
                      ><img class="brandImg" src="../assets/b_6.png"
                    /></label>
                  </li>
                  <li>
                    <input type="checkbox" id="myCheckbox6" />
                    <label for="myCheckbox6"
                      ><img class="brandImg" src="../assets/b_7.jpg"
                    /></label>
                  </li>

                  <li>
                    <input type="checkbox" id="myCheckbox7" />
                    <label for="myCheckbox7"
                      ><img
                        class="brandImg"
                        src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png"
                    /></label>
                  </li>
                  <li>
                    <input type="checkbox" id="myCheckbox8" />
                    <label for="myCheckbox8"
                      ><img
                        class="brandImg"
                        src="http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png"
                    /></label>
                  </li>
                  <li>
                    <input type="checkbox" id="myCheckbox9" />
                    <label for="myCheckbox9"
                      ><img
                        class="brandImg"
                        src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png"
                    /></label>
                  </li>
                </ul>
              </div>
              <div>
                <button class="btn btn-primary" type="submit" style="width: 150px;">Search</button>
              </div>
            </div>
          </div>

          <div class="rightListSide">
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 18rem">
              <img src="../assets/logo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
    };
  },
  methods: {
    // updateCountProduct(id, symbol, count, name, index) {
    //   console.log(this.products[index].count);
    //   if (count >= 0) {
    //     if (count <= 5) {
    //       axios.post("http://127.0.0.1:7000/api/product/", {
    //         notification: {
    //           params: { name: name },
    //           sendMethodID_id: 2,
    //           templateID_id: 6,
    //         },
    //       });
    //     }
    //     axios
    //       .post("http://127.0.0.1:8000/api/updateCount/" + id, {
    //         Product: { count: 1, operation: symbol },
    //       })
    //       .then((response) => {
    //         this.redirectTo("/");
    //       });
    //   }
    // },
    // redirectTo(url) {
    //   window.location = url;
    // },
  },
  // mounted() {
  //   axios
  //     .get("http://127.0.0.1:8000/api/index/")
  //     .then((response) => (this.products = response.data.Product));
  // },
};
</script>


<style>
@import "../assets/styles.scss";
</style>

