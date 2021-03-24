<template>
  <div>
    <footer class="iq-footer">
      <div class="container-fluid container">
        <div class="row">
          <div class="col-lg-6">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 text-right">
            Copyright 2020 <a href="#">Landearn</a> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import LoadScript from "vue-plugin-load-script";
Vue.use(LoadScript);

export default {
  name: "UserFooter",
  // head: {
  //   script: [
  //     {
  //       type: "text/javascript",
  //       src: "/assets/js/backend-bundle.min.js",
  //       async: true,
  //       body: true,
  //     }, // Insert in body
  //   ],
  // },
  created() {
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute("src", "/assets/js/backend-bundle.min.js");
    document.body.appendChild(ckeditor);

    let ckeditor1 = document.createElement("script");
    ckeditor1.setAttribute(
      "src",
      "/assets/vendor/daterangepicker/moment.min.js"
    );
    document.body.appendChild(ckeditor1);

    let ckeditor2 = document.createElement("script");
    ckeditor2.setAttribute(
      "src",
      "/assets/vendor/daterangepicker/daterangepicker.min.js"
    );
    document.body.appendChild(ckeditor2);

    let ckeditor3 = document.createElement("script");
    ckeditor3.setAttribute("src", "/assets/js/flex-tree.min.js");
    document.body.appendChild(ckeditor3);

    let ckeditor4 = document.createElement("script");
    ckeditor4.setAttribute("src", "/assets/js/tree.js");
    document.body.appendChild(ckeditor4);

    let ckeditor5 = document.createElement("script");
    ckeditor5.setAttribute("src", "/assets/js/table-treeview.js");
    document.body.appendChild(ckeditor5);

    let ckeditor6 = document.createElement("script");
    ckeditor6.setAttribute("src", "/assets/js/masonry.pkgd.min.js");
    document.body.appendChild(ckeditor6);

    let ckeditor7 = document.createElement("script");
    ckeditor7.setAttribute("src", "/assets/js/imagesloaded.pkgd.min.js");
    document.body.appendChild(ckeditor7);

    let ckeditor8 = document.createElement("script");
    ckeditor8.setAttribute("src", "/assets/js/mapbox-gl.js");
    document.body.appendChild(ckeditor8);

    let ckeditor9 = document.createElement("script");
    ckeditor9.setAttribute("src", "/assets/js/mapbox.js");
    document.body.appendChild(ckeditor9);

    let ckeditor10 = document.createElement("script");
    ckeditor10.setAttribute("src", "/assets/vendor/fullcalendar/core/main.js");
    document.body.appendChild(ckeditor10);

    let ckeditor11 = document.createElement("script");
    ckeditor11.setAttribute(
      "src",
      "/assets/vendor/fullcalendar/daygrid/main.js"
    );
    document.body.appendChild(ckeditor11);

    let ckeditor12 = document.createElement("script");
    ckeditor12.setAttribute(
      "src",
      "/assets/vendor/fullcalendar/timegrid/main.js"
    );
    document.body.appendChild(ckeditor12);

    let ckeditor13 = document.createElement("script");
    ckeditor13.setAttribute("src", "/assets/vendor/fullcalendar/list/main.js");
    document.body.appendChild(ckeditor13);

    let ckeditor14 = document.createElement("script");
    ckeditor14.setAttribute(
      "src",
      "/assets/vendor/fullcalendar/interaction/main.js"
    );
    document.body.appendChild(ckeditor14);

    let ckeditor15 = document.createElement("script");
    ckeditor15.setAttribute("src", "/assets/js/sweetalert.js");
    document.body.appendChild(ckeditor15);

    let ckeditor16 = document.createElement("script");
    ckeditor16.setAttribute("src", "/assets/js/vector-map-custom.js");
    document.body.appendChild(ckeditor16);

    let ckeditor17 = document.createElement("script");
    ckeditor17.setAttribute("src", "/assets/js/customizer.js");
    document.body.appendChild(ckeditor17);

    let ckeditor18 = document.createElement("script");
    ckeditor18.setAttribute("src", "/assets/js/chart-custom.js");
    document.body.appendChild(ckeditor18);

    let ckeditor19 = document.createElement("script");
    ckeditor19.setAttribute("src", "/assets/js/slider.js");
    document.body.appendChild(ckeditor16);

    let ckeditor20 = document.createElement("script");
    ckeditor20.setAttribute("src", "/assets/js/app.js");
    document.body.appendChild(ckeditor20);
  },
  mounted() {
    // Vue.loadScript("../assets/js/customizer.js");
  },
};
</script>

<style scoped></style>
