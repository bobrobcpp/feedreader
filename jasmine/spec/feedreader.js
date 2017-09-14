/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('has a valid URL', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');


            });
         });

            it('has a valid name', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');


            });
         });

    });

    describe('The menu', function() {
        it('is hidden by default', function(){
        expect($('body').attr("class")).toMatch("menu-hidden");
        });

        it('changes visibility when clicked', function(){
            $('.menu-icon-link').trigger("click");
            expect($('body').attr("class")).not.toMatch("menu-hidden");
            $('.menu-icon-link').trigger("click");
            expect($('body').attr("class")).toMatch("menu-hidden");
        });

    });

    describe('Initial Entries', function(){
            beforeEach(function(done){
                loadFeed(0,function(){
                    done();
                });
            });

            it('has at least one .entry element in its .feed container', function(done){
                expect($('.feed').length).toBeGreaterThan(0);
                done();
            });
    });

    describe('New Feed Selection', function(){
        var firstContent;
        var secondContent;
                beforeEach(function(done){
                loadFeed(0,function(){
                    loadFeed(1,function(){
                        secondContent = $('.feed').html();
                               done();
                    });
                    firstContent = $('.feed').html();
                });
            });
            it('is loading content that changes', function(done){
                expect(firstContent).not.toEqual(secondContent);
                done();
            });
    });


}());
