$('#btn').on('click', function() {

    location.replace('index2.html')

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=taurus&day=today",
        "method": "POST",
        "headers": {
            "X-RapidAPI-Key": "c973172611msh61d40a4a3bea534p1473e5jsn02c835257f47",
            "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).then(function (response) {
        // response.preventDefault();
        // const nameInput = $('#nameInput').val();
        // const starSign = $('#exampleFormControlSelect1').val();
        // console.log(nameInput, starSign);

        console.log(response);

        var outputs = response.color;
        $('#color').append(outputs);

        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=iTlqWT1GAonqCLPWWB15I2HfB3BaNfp5&tag=" + outputs + "&rating=pg";
      
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(responseTwo) {
            console.log(responseTwo)
            var results = responseTwo.data.images.original.url;
            var imgTag = $("<img>");
            imgTag.attr("src", results);
            console.log(results);
            $('#testTwo').append(imgTag);

            
});
});


       
});