Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFoundPage',
    loadingTemplate: 'loadingPage',
    templateNameConverter: 'camelCase',
    routeControllerNameConverter: 'camelCase'
});

// helper functions
Router.onBeforeAction(function () {
    var title = Session.get('siteTitle');
    if (title) {
        document.title = title;
    }
    this.next();
});

Router._filters = {
  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
};

var filters = Router._filters;

if(Meteor.isClient) {
  Router.onAfterAction(filters.resetScroll); // for all pages
}
