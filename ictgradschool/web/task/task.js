window.addEventListener("load", function () {

    const staffDetails = [
        {
            firstName: "Borris",
            lastName: "Jacobs",
            details: {birthYear: "1996", country: "Russia"},
            interests: ["rowing", "surfing", "rugby"]
        },
        {
            firstName: "Sarah",
            lastName: "Cunningham",
            details: {birthYear: "1984", country: "United States of America"},
            interests: ["boxing", "programming", "diving", "rally racing"]
        },
        {
            firstName: "Andrew",
            lastName: "Masters",
            details: {birthYear: "1987", country: "Australia"},
            interests: ["cooking", "programming", "photography", "skiing", "hiking"]
        },
        {
            firstName: "Alice",
            lastName: "Pickering",
            details: {birthYear: "1980", country: "New Zealand"},
            interests: ["cooking", "programming", "photography", "skiing", "hiking"]
        }
    ];


    function createPerson() {

        const div = document.querySelector("#right");


        for (let i = 0; i < staffDetails.length; i++) {
            const fullName = document.createElement("h3");
            const ul = document.createElement("ul");
            const p = document.createElement("p");

            fullName.innerHTML = `${staffDetails[i].firstName} ${staffDetails[i].lastName}`;

            const li1 = document.createElement("li");
            const li2 = document.createElement("li");
            li1.innerHTML=staffDetails[i].details.birthYear;
            li2.innerHTML=staffDetails[i].details.country;
            ul.appendChild(li2);
            ul.appendChild(li1);
div.appendChild(ul);
            // p.innerHTML = `<ul><li>${staffDetails[i].details.birthYear}</li><li> ${staffDetails[i].details.country}</li></ul>`;
            div.appendChild(fullName);
            // div.appendChild(p);


        }


    }

createPerson();

});