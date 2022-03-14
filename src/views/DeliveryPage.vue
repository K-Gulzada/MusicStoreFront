
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
        <div id="deliveryDiv" class="visible_div">
          <h3>Delivery</h3>
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
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Price</th>
                <th scope="col">Status ID</th>
                <th scope="col">Ordered Date</th>
                <th scope="col">Delivered Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="deliveryItem in deliveryItems" :key="deliveryItem.id">
                <th scope="row">{{ deliveryItem.id }}</th>
                <td>{{ deliveryItem.address }}</td>
                 <td>{{ deliveryItem.phone_number }}</td>
                <td>{{ deliveryItem.price }}</td>
                <td>{{ deliveryItem.status_id }}</td>
                <td>{{ deliveryItem.ordered_date }}</td>
                <td>{{ deliveryItem.delivered_date }}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-warning">Update</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
       <section class="container_100">
        <div class="updateDiv">
          <input
            type="text"
            name="address"
            class="form-control"
            placeholder="Address"
          />
            <input
            type="text"
            name="phone_number"
            class="form-control"
            placeholder="Phone Number"
          />
            <input
            type="number"
            name="price"
            class="form-control"
            placeholder="Price"
          />
         
            <select class="form-control">
              <option selected disabled value="">STatus ID</option>
              <option>Paid</option>
              <option>Not Paid</option>
              <option>Booked</option>
            </select>
          <!-- 
          <select v-model="status.id">
            <option
              :selected="status.id === booking.status_id"
              v-for="status in statuses"
              :key="status.id"
              :value="status.id"
            >
              {{ status.status_text }}
            </option>
          </select>      -->

          <input
            type="date"
            name="ordered_date"
            class="form-control"
            placeholder="Ordered Date"
          />
          <input
            type="date"
            name="delivered_date"
            class="form-control"
            placeholder="Delivered Date"
          />

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
      deliveries: {},
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
      .get("http://127.0.0.1:8000/api/delivery/")
      .then((response) => (this.bookings = response.data));
   
  },
};
</script>


<style>
@import "../assets/adminPageStyles.scss";
</style>

