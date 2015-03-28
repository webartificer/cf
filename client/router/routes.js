Router.map(function() {
    this.route('index.view', {
        path: '/',
        data: function () {
            Session.set('siteTitle', 'Charlie Fox');
            return {
                asideTestData: 'test test string',
                articleTestData: 'test test article'
            };
        }
    });
    this.route('blog.view', {
        path: '/blog',
        data: function () {
            Session.set('siteTitle', 'Charlie Fox | Blog');
            return {
                asideTestData: 'test test string',
                articleTestData: 'test test article'
            };
        }
    });
    this.route('subpage.view', {
        path: '/subpage',
        data: function () {
            Session.set('siteTitle', 'This is subpage view!');
            return {
                asideSubpageTestData: 'subpage test string',
                articleSubpageTestData: 'subpage test article'
            };
        }
    });
    this.route('portfolio.view', {
        path: '/portfolio',
        data: function () {
            Session.set('siteTitle', 'Charlie Fox | Portfolio');
        }
    });

    this.route('portfolioDesc.view', {
        path: '/portfolio/:_id',
        data: function() { return Folio.findOne(this.params._id); }

        // data: function() { return Bookmarks.findOne(this.params._id); }
    });

    this.route('project.view', {
        path: '/projects',
        data: function () {
            Session.set('siteTitle', 'Charlie Fox | Projects');
        }
        // data: function() { return Bookmarks.findOne(this.params._id); }
    });

    this.route('projectDesc.view', {
        path: '/projects/:_id',
        data: function() { return Projects.findOne(this.params._id); }

        // data: function() { return Bookmarks.findOne(this.params._id); }
    });

    this.route('cv.view', {
        path: '/cv',
        data: function () {
            Session.set('siteTitle', 'Charlie Fox | Curriculum Vitae');
        }
        // data: function() { return Bookmarks.findOne(this.params._id); }
    });
});
