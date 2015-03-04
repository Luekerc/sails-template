this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n      <div class="avatar"></div>\n      <h1>Log in</h1>\n      <form class="form" ng-submit="login(credentials)">\n            <label ng-class="error.identifier ? \'error\' : \'\'">\n                  <input type="text" placeholder="Email" ng-model="credentials.identifier">\n                  <p class="error" ng-bind="error.identifier"></p>\n            </label>\n            <label ng-class="error.password ? \'error\' : \'\'">\n                  <input type="password" placeholder="Password" ng-model="credentials.password">\n                  <p class="error" ng-bind="error.password"></p>\n            </label>\n            <button type="submit">Log in</button>\n      </form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n\t<div class="avatar"></div>\n\t<h1>Register</h1>\n\t<form class="form" ng-submit="register(credentials)" novalidate>\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<button type="submit">Register</button>\n\t</form>\n</section>';

}
return __p
};