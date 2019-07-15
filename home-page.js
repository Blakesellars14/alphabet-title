// import
var frameModule = require("tns-core-modules/ui/frame");
var HomeViewModel = require("./home-view-model");
var dialogs = require("tns-core-modules/ui/dialogs");

var homeViewModel = new HomeViewModel();

var credits = "Tŝilhqot’in Alphabet by Bella Alphonse";

function pageLoaded(args) {

  var page = args.object;

  page.bindingContext = homeViewModel;
}
exports.pageLoaded = pageLoaded;

function onButtonTap(args) {
  // say Hello
  alertMessage("Hello");
}
exports.onButtonTap = onButtonTap;

function showCredits(args) {
  alertMessage(credits);
}
exports.showCredits = showCredits;

function alertMessage(theMessage) {
  dialogs.alert(theMessage);
}


