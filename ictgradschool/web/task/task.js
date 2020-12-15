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
            const interest = document.createElement("h3");
            const ol = document.createElement("ol");
            // const p = document.createElement("p");

            fullName.innerHTML = `${staffDetails[i].firstName} ${staffDetails[i].lastName}`;

            const li1 = document.createElement("li");
            const li2 = document.createElement("li");
            li1.innerHTML = `Birth Year: ${staffDetails[i].details.birthYear}`;
            li2.innerHTML = `Country: ${staffDetails[i].details.country}`;

            interest.innerHTML = `Interests:`;

            div.appendChild(fullName);
            ul.appendChild(li1);
            ul.appendChild(li2);
            div.appendChild(ul);
            div.appendChild(interest);

            for (let j = 0; j < staffDetails[i].interests.length; j++) {
                const li3 = document.createElement("li");
                li3.innerHTML = `${staffDetails[i].interests[j]}`;




                ol.appendChild(li3);

                // p.innerHTML = `<ul><li>${staffDetails[i].details.birthYear}</li><li> ${staffDetails[i].details.country}</li></ul>`;
                // div.appendChild(p);
            }

            div.appendChild(ol);
        }

    }


    createPerson();

});