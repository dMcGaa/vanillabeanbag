(function() {
    app.controller("indexCtrlr", function() {
        this.pages=pages;
    });
    var pages = [{
        name: 'Drinks',
        href: "/drinks"
    }, {
        name: 'Sage',
        href: "/sage"
    }, {
        name: 'Cuda',
        href: "/cuda"
    }, {
        name: 'Notify',
        href: "/notify"
    }, {
        name: 'Green Design',
        href: "/green-design"
    }, {
        name: 'Lipsum Media',
        href: "/lipsum-media"
    }];
})()
