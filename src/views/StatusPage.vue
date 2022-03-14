
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
     
        <div id="statusDiv" class="visible_div">
          <h3>Statuses</h3>
          <button
            @click="showDiv(5)"
            id="makeVisible"
            class="myBtn btn-success" >
            +
          </button>
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
      </section>

       <section class="container_100">
        <div class="updateDiv">
        
          <textarea
            type="text"
            name="status_text"
            class="form-control"
            placeholder="Status Text"
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
      statuses: {},
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
      .get("http://127.0.0.1:8000/api/status/")
      .then((response) => (this.statuses = response.data));   
  },
};
</script>


<style>
@import "../assets/adminPageStyles.scss";
</style>

