"use strict";

import vue from "vue";

const helper = {
  install(vue) {
    vue.prototype.appname = process.env.VUE_APP_NAME;
    vue.prototype.getImage = function (image) {
      if (image != null && image.length > 0) {
        return process.env.VUE_APP_BACKEND_URL + "/images/" + image;
      }
      return "/img/default.png";
    };
  },
};

vue.use(helper);
