(function () {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Côte D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People’s Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
    var matches = [];
    var results = $(".results");
    $("input").on("input", function () {
        $("p").remove();
        matches = [];
        var written = $("input").val().toLowerCase();

        if (written.length === 0) {
            $("p").remove();
            console.log("zo");
        }
        for (var i = 0; i <= countries.length - 1; i++) {
            if (countries[i].toLowerCase().indexOf(written) === 0) {
                matches.push(countries[i]);
                console.log(countries[i]);
            }
            if (matches.length >= 4) {
                break;
            }
            if (matches.length === 0) {
                $("p").remove();
            }
        }
        var htmlForFeedback = "";
        for (var j = 0; j < matches.length; j++) {
            htmlForFeedback += "<p class = 'country'>" + matches[j] + "</p>";
        }
        results.append(htmlForFeedback);
    });

    results.on("mouseover.highlight", "p", function (event) {
        $(event.currentTarget).addClass("hovered");
        $("input").val($(event.currentTarget).text());
    });
    results.on("mouseleave", "p", function (event) {
        $(event.currentTarget).removeClass("hovered");
    });
    results.on("mousedown", "p", function (e) {
        $("input").val($(e.currentTarget).text());
        $("p").remove();
    });
    var pOrder = 0;
    $(window).on("keydown", function (e) {
        var ps = $("p");
        if (e.which === 40) {
            console.log(ps);
            ps.eq(pOrder).addClass("hovered");
            ps.eq(pOrder - 1).removeClass("hovered");
            $("input").val(ps.eq(pOrder).text());
            pOrder++;
            console.log(pOrder);

            if (pOrder === matches.length) {
                return (pOrder = 0);
            }
            return pOrder;
        }
        if (e.which === 38) {
            console.log(ps);
            pOrder--;
            ps.eq(pOrder).addClass("hovered");
            ps.eq(pOrder + 1).removeClass("hovered");
            $("input").val(ps.eq(pOrder).text());
            console.log(pOrder);
            if (pOrder == -matches.length) {
                pOrder = 0;
                return pOrder;
            }
            return pOrder;
        }
    });
    $(window).on("click", function () {
        if (!$("input").is(":focus")) {
            $("p").remove();
            console.log("2");
        }
    });

    // $("body").on("click", function (event) {
    //     event.stopPropagation();
    //     if($("input").hasFocus){
    //     $("input").blur();
    //     });
})();
