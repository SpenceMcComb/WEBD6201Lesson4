/**
 * Name: Spence McComb
 * Student ID: 100426427
 * Date Completed: January 27, 2020
 */ 

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let productsLI;

    // Part B
    let contactUsLI;
    let contactUsLIParent;
    let humanResourcesLI;
    let navbarImageHR;

    // Part C
    let bottomNav;
    let h4Copyright;

    let pageBody;
    let jqueryScript;
    let jqueryScriptParent;

    

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        // Part A
        // Step 1 - Bind/connect to the elements that you wish to manipulate
        productsLI = document.getElementById("products");

        // Step 2
        //productsLI.innerHTML = '<li id="projects" class="nav-item"><a class="nav-link" href="#"><i class="fas fa-hamsa"></i> Projects</a></li>';
        //productsLI.firstElementChild.innerHTML = '<i class="fas fa-hamsa"></i> Projects';
        productsLI.firstElementChild.lastChild.textContent = " Projects";


        // Part B
        contactUsLI = document.getElementById("contact");
        contactUsLIParent = contactUsLI.parentNode;
        humanResourcesLI = contactUsLI.cloneNode(true);

        humanResourcesLI.id = "hr";
        //humanResourcesLI.firstElementChild.innerHTML = '<i class="fas fa-users"></i> Human Resources';
        navbarImageHR = humanResourcesLI.firstElementChild.firstChild;
        navbarImageHR.className = "fas fa-users";

        contactUsLIParent.insertBefore(humanResourcesLI, contactUsLI);
        

        // Part C
        /* bottomNav = document.createElement("nav");
        bottomNav.className = "navbar fixed-bottom navbar-light bg-light";
        
        h4Copyright = document.createElement("h4");
        h4Copyright.innerHTML = "&copy; Copyright 2020";

        bottomNav.appendChild(h4Copyright);

        pageBody = document.getElementsByTagName("body")[0];
        pageBody.appendChild(bottomNav); */

        bottomNav = document.createElement("nav");
        bottomNav.className = "navbar fixed-bottom navbar-light bg-light";

        h4Copyright = document.createElement("h4");
        h4Copyright.innerHTML = "&copy; Copyright 2020";

        bottomNav.appendChild(h4Copyright);

        pageBody = document.getElementsByTagName("body")[0];
        pageBody.appendChild(bottomNav);

        jqueryScript = pageBody.children[4];

        pageBody.insertBefore(jqueryScript, bottomNav);

        jqueryScriptParent = jqueryScript.parentNode;
        jqueryScriptParent.insertBefore(bottomNav, jqueryScript);
        

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

