$(document).ready(function(){
   $.get("https://public-api.wordpress.com/rest/v1/sites/25262138/posts", function(data, status){

       var userNameInMenu = $('div.menu div.user-name');

       var bannerNameSpan = $('div.profile-banner div.user-intro h1.user-headline span.user-name');

       var detailsNameSpan = $('div.stat-board span.user-name');
       var detailsEmailSpan = $('div.stat-board span.user-email');

       var detailsWebsiteSpan = $('div.stat-board span.user-website a');

       var userName = data.posts[0].author.name;
       var userEmail = data.posts[0].author.email;
       var userWebsite = data.posts[0].author.URL;

       userNameInMenu.text(userName);

       bannerNameSpan.text(userName);
       detailsNameSpan.text(userName);

       detailsEmailSpan.text(userEmail);

       detailsWebsiteSpan.text(userWebsite);
       detailsWebsiteSpan.attr('href', userWebsite);

    });

    var currentVisiblePanel = $('div.user-about-wrapper');

    $('a#contact-link').click(function(event){
        event.preventDefault();
        event.stopPropagation();

        currentVisiblePanel.hide('fast');
        $('div.user-contact-wrapper').slideDown();
        currentVisiblePanel = $('div.user-contact-wrapper');
    });

    $('a#about-me-link').click(function(event){
        event.preventDefault();
        event.stopPropagation();

        currentVisiblePanel.hide('fast');
        $('div.user-about-wrapper').slideDown();
        currentVisiblePanel = $('div.user-about-wrapper');
    });


});
