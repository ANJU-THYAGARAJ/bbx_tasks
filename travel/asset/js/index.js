
function updateDateTime() {
    const now = new Date();

    const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    const dateTime = now.toLocaleString("en-IN", options);

    document.getElementById("currentDateTime").textContent = dateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);


const exploreBtn =
    document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });

});

const searchInput =
    document.getElementById("searchInput");

const seasonFilter =
    document.getElementById("seasonFilter");

const destinationWrappers =
    document.querySelectorAll(".destination-wrapper");

const noResults =
    document.getElementById("noResults");


function filterDestinations() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedSeason =
        seasonFilter.value;

    let visibleCards = 0;


    destinationWrappers.forEach(function (wrapper) {

        const card =
            wrapper.querySelector(".destination-card");

        const name =
            card.getAttribute("data-name")
                .toLowerCase();

        const season =
            card.getAttribute("data-season");


        const searchMatch =
            name.includes(searchText);

        const seasonMatch =
            selectedSeason === "all" ||
            season === selectedSeason;


        if (searchMatch && seasonMatch) {

            wrapper.classList.remove("d-none");

            visibleCards++;

        } else {

            wrapper.classList.add("d-none");

        }

    });


    if (visibleCards === 0) {

        noResults.classList.remove("d-none");

    } else {

        noResults.classList.add("d-none");

    }

}


searchInput.addEventListener(
    "input",
    filterDestinations
);

seasonFilter.addEventListener(
    "change",
    filterDestinations
);


const destinationCards =
    document.querySelectorAll(".destination-card");

destinationCards.forEach(function (card) {

    card.addEventListener("click", function () {

        destinationCards.forEach(function (item) {

            item.classList.remove("selected");

        });

        this.classList.add("selected");

    });

});

const locations =
    document.querySelectorAll(".location-hover");

locations.forEach(function (location) {

    location.addEventListener("mouseenter",
        function () {

            this.textContent =
                this.getAttribute("data-location");

        });


    location.addEventListener("mouseleave",
        function () {

            this.textContent =
                this.getAttribute("data-country");

        });

});

const routeTexts =
    document.querySelectorAll(".route-text");


routeTexts.forEach(function (route) {

    route.addEventListener("mouseenter",
        function () {

            const card =
                this.closest(".destination-card");

            const destination =
                card.getAttribute("data-name");


            if (destination === "Ponmudi") {

                this.textContent =
                    "TVM → Nedumangad → Vithura → Ponmudi";

            } else if (destination === "Munnar") {

                this.textContent =
                    "Kochi → Adimali → Munnar";

            } else if (destination === "Goa") {

                this.textContent =
                    "Airport → Panaji → Calangute → Goa";

            } else if (destination === "Manali") {

                this.textContent =
                    "Delhi → Chandigarh → Mandi → Manali";

            } else {

                this.textContent =
                    "City → Main Road → Destination";

            }

        });


    route.addEventListener("mouseleave",
        function () {

            this.textContent =
                "Hover Me to Know Route";

        });

});


const destinationImages =
    document.querySelectorAll(".image-box");

destinationImages.forEach(function (box) {

    box.addEventListener("dblclick",
        function () {

            this.classList.toggle("zoomed");

        });

});


const detailsButtons =
    document.querySelectorAll(".details-btn");


detailsButtons.forEach(function (button) {

    button.addEventListener("click",
        function () {

            const targetId =
                this.getAttribute("data-target");

            const target =
                document.getElementById(targetId);


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });


                target.classList.add("selected");


                setTimeout(function () {

                    target.classList.remove("selected");

                }, 3000);

            }

        });

});


const packageButtons =
    document.querySelectorAll(".btn-package");

const packageDestination =
    document.getElementById("packageDestination");

const packageCost =
    document.getElementById("packageCost");

const estimatedCost =
    document.getElementById("estimatedCost");

const packageQuantity =
    document.getElementById("packageQuantity");

const packageDays =
    document.getElementById("packageDays");

const packageType =
    document.getElementById("packageType");


let currentPackageCost = 0;


packageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const destination =
            this.getAttribute("data-destination");

        currentPackageCost =
            Number(
                this.getAttribute("data-cost")
            );


        packageDestination.textContent =
            destination;

        packageCost.textContent =
            currentPackageCost.toLocaleString();

        calculatePackageCost();

    });

});


function calculatePackageCost() {

    const quantity =
        Number(packageQuantity.value);

    const days =
        Number(packageDays.value);


    let cost =
        currentPackageCost *
        quantity *
        days;


    if (packageType.value === "couple") {

        cost =
            cost * 1.8;

    }


    estimatedCost.textContent =
        Math.round(cost).toLocaleString();

}


packageQuantity.addEventListener(
    "input",
    calculatePackageCost
);

packageDays.addEventListener(
    "input",
    calculatePackageCost
);

packageType.addEventListener(
    "change",
    calculatePackageCost
);


const destinations = {

    Agra: {

        description:
            "Agra is a historic city in Uttar Pradesh and home to the magnificent Taj Mahal. Explore the Taj Mahal, Agra Fort and Mehtab Bagh while experiencing the rich Mughal history, architecture and culture of India.",

        images: [
            "img/agra1.jpg",
            "img/agra2.jpg",
            "img/agra3.jpg"
        ]
    },


    Munnar: {

        description:
            "Munnar is a beautiful hill station in Kerala surrounded by tea plantations, misty mountains, waterfalls and green valleys. Enjoy trekking, sightseeing, photography and peaceful moments surrounded by nature.",

        images: [
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Goa: {

        description:
            "Goa is a popular coastal destination famous for beautiful beaches, spectacular sunsets, water sports, Portuguese architecture and lively nightlife. It is ideal for relaxation, adventure and unforgettable beach experiences.",

        images: [
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Manali: {

        description:
            "Manali is a scenic Himalayan destination surrounded by snow-covered mountains, green valleys and beautiful rivers. Visit Solang Valley, explore Old Manali and enjoy trekking, adventure activities and breathtaking mountain views.",

        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Ponmudi: {

        description:
            "Ponmudi is a peaceful hill station in Kerala surrounded by misty mountains, lush forests, winding roads and beautiful valleys. It is a perfect destination for nature lovers, trekking enthusiasts and travelers looking for a quiet escape.",

        images: [
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Jaipur: {

        description:
            "Jaipur, the Pink City of Rajasthan, is famous for magnificent forts, royal palaces, colorful markets and traditional culture. Visit Amber Fort, Hawa Mahal and City Palace to experience the royal heritage of Rajasthan.",

        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Ooty: {

        description:
            "Ooty is a charming hill station in Tamil Nadu known for its cool climate, tea gardens, misty mountains and beautiful lakes. Enjoy the Nilgiri Mountain Railway, explore tea estates and experience the peaceful beauty of the hills.",

        images: [
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Kashmir: {

        description:
            "Kashmir is known as the Paradise on Earth, famous for snow-covered mountains, beautiful valleys, peaceful lakes and colorful gardens. Enjoy a shikara ride on Dal Lake, explore Srinagar and experience the breathtaking Himalayan scenery.",

        images: [
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Rishikesh: {

        description:
            "Rishikesh is a peaceful destination in Uttarakhand famous for the holy Ganges River, yoga, meditation, temples and exciting adventure activities. Enjoy river rafting, trekking, peaceful ashrams and beautiful views of the Himalayas.",

        images: [
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Alleppey: {

        description:
            "Alleppey, also known as Alappuzha, is famous for its beautiful backwaters, traditional houseboats and peaceful village landscapes. Enjoy a relaxing houseboat cruise, delicious Kerala food and stunning views of coconut trees and waterways.",

        images: [
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1602301278671-7e6e7c3b6b56?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Darjeeling: {

        description:
            "Darjeeling is a beautiful hill station famous for its tea gardens, Himalayan views and the historic Darjeeling Himalayan Railway. Enjoy spectacular views of Kanchenjunga, peaceful monasteries and refreshing mountain air.",

        images: [
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=1000&q=80"
        ]
    },


    Andaman: {

        description:
            "The Andaman Islands are a tropical paradise famous for crystal-clear waters, white sandy beaches, coral reefs and beautiful islands. Enjoy snorkeling, scuba diving, island hopping and peaceful sunsets surrounded by nature.",

        images: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"
        ]
    }

};

const descriptionButtons =
    document.querySelectorAll(".btn-description");

const descriptionTitle =
    document.getElementById("descriptionTitle");

const destinationDescription =
    document.getElementById("destinationDescription");

const descriptionImages =
    document.getElementById("descriptionImages");


descriptionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const destination =
            this.getAttribute("data-destination");

        const destinationData =
            destinations[destination];


        // Check destination
        if (!destinationData) {

            console.log(
                "Destination not found:",
                destination
            );

            return;
        }


        descriptionTitle.textContent =
            destination;

        destinationDescription.textContent =
            destinationData.description;

        descriptionImages.innerHTML = "";


        destinationData.images
            .slice(0, 3)
            .forEach(function (image, index) {

                const carouselItem =
                    document.createElement("div");

                carouselItem.classList.add(
                    "carousel-item"
                );


                // First image must be active
                if (index === 0) {

                    carouselItem.classList.add(
                        "active"
                    );

                }


                const img =
                    document.createElement("img");


                img.src = image;

                img.alt =
                    destination + " destination";

                img.classList.add(
                    "d-block",
                    "w-100",
                    "description-image"
                );


                // Optional error handling
                img.onerror = function () {

                    console.log(
                        "Image failed:",
                        image
                    );

                };


                carouselItem.appendChild(img);

                descriptionImages.appendChild(
                    carouselItem
                );

            });

    });

});




const bookingSection =
    document.getElementById("booking");

const bookingDestination =
    document.getElementById(
        "bookingDestination"
    );

const bookingPackage =
    document.getElementById(
        "bookingPackage"
    );

const bookingDays =
    document.getElementById(
        "bookingDays"
    );

const bookingAccommodation =
    document.getElementById(
        "bookingAccommodation"
    );

const bookingFood =
    document.getElementById(
        "bookingFood"
    );

const bookingCost =
    document.getElementById(
        "bookingCost"
    );

const bookingTotal =
    document.getElementById(
        "bookingTotal"
    );

const travelers =
    document.getElementById(
        "travelers"
    );


let selectedDestination = "";

let selectedBaseCost = 0;


const readyButtons =
    document.querySelectorAll(".btn-ready");


readyButtons.forEach(function (button) {

    button.addEventListener("click",
        function (event) {


            console.log(
                "Event Type:",
                event.type
            );

            console.log(
                "Target Element:",
                event.target
            );

            console.log(
                "Target Element ID:",
                event.target.id
            );


            selectedDestination =
                this.getAttribute(
                    "data-destination"
                );


            selectedBaseCost =
                Number(
                    this.getAttribute(
                        "data-cost"
                    )
                );


            bookingSection.classList.remove(
                "d-none"
            );


            bookingDestination.value =
                selectedDestination;


            bookingSection.scrollIntoView({
                behavior: "smooth"
            });


            updateBookingSummary();

        });

});


const choosePackageBtn =
    document.getElementById(
        "choosePackageBtn"
    );


choosePackageBtn.addEventListener(
    "click",
    function () {

        const modal =
            new bootstrap.Modal(
                document.getElementById(
                    "choosePackageModal"
                )
            );

        modal.show();

        calculateChoosePackage();

    }
);


const choosePackageType =
    document.getElementById(
        "choosePackageType"
    );

const chooseQuantity =
    document.getElementById(
        "chooseQuantity"
    );

const chooseDays =
    document.getElementById(
        "chooseDays"
    );

const chooseCost =
    document.getElementById(
        "chooseCost"
    );

const chooseTotal =
    document.getElementById(
        "chooseTotal"
    );


function calculateChoosePackage() {

    let quantity =
        Number(
            chooseQuantity.value
        );

    let days =
        Number(
            chooseDays.value
        );


    let cost =
        selectedBaseCost;


    if (
        choosePackageType.value ===
        "Couple Package"
    ) {

        cost =
            cost * 1.8;

    }


    let total =
        cost *
        quantity *
        days;


    chooseCost.textContent =
        Math.round(cost).toLocaleString();


    chooseTotal.textContent =
        Math.round(total).toLocaleString();

}


choosePackageType.addEventListener(
    "change",
    calculateChoosePackage
);

chooseQuantity.addEventListener(
    "input",
    calculateChoosePackage
);

chooseDays.addEventListener(
    "change",
    calculateChoosePackage
);


const chooseThisPackage =
    document.getElementById(
        "chooseThisPackage"
    );


chooseThisPackage.addEventListener(
    "click",
    function () {


        const type =
            choosePackageType.value;

        const quantity =
            Number(
                chooseQuantity.value
            );

        const days =
            Number(
                chooseDays.value
            );


        let cost =
            selectedBaseCost;


        if (
            type ===
            "Couple Package"
        ) {

            cost =
                cost * 1.8;

        }


        const total =
            cost *
            quantity *
            days;


        bookingPackage.value =
            type;


        bookingDays.value =
            days;


        bookingAccommodation.value =
            "Included";


        bookingFood.value =
            "Included";


        bookingCost.value =
            "₹" +
            Math.round(cost).toLocaleString();


        bookingTotal.value =
            "₹" +
            Math.round(total).toLocaleString();


        updateBookingSummary();


        const modal =
            bootstrap.Modal.getInstance(
                document.getElementById(
                    "choosePackageModal"
                )
            );

        modal.hide();

    });


function updateBookingSummary() {

    document.getElementById(
        "summaryDestination"
    ).textContent =
        bookingDestination.value ||
        "-";


    document.getElementById(
        "summaryTravelers"
    ).textContent =
        travelers.value ||
        "-";


    document.getElementById(
        "summaryPackage"
    ).textContent =
        bookingPackage.value ||
        "-";


    document.getElementById(
        "summaryDays"
    ).textContent =
        bookingDays.value ||
        "-";


    document.getElementById(
        "summaryAccommodation"
    ).textContent =
        bookingAccommodation.value ||
        "-";


    document.getElementById(
        "summaryFood"
    ).textContent =
        bookingFood.value ||
        "-";


    document.getElementById(
        "summaryCost"
    ).textContent =
        bookingCost.value ||
        "-";


    let total =
        bookingTotal.value.replace(
            /[^0-9]/g,
            ""
        );


    document.getElementById(
        "summaryTotal"
    ).textContent =
        total || "0";

}


travelers.addEventListener(
    "input",
    function () {

        updateBookingSummary();

    }
);


const bookingForm =
    document.getElementById(
        "bookingForm"
    );


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "fullName"
            );

        const email =
            document.getElementById(
                "email"
            );

        const mobile =
            document.getElementById(
                "mobile"
            );


        const nameError =
            document.getElementById(
                "nameError"
            );

        const emailError =
            document.getElementById(
                "emailError"
            );

        const mobileError =
            document.getElementById(
                "mobileError"
            );

        const travelersError =
            document.getElementById(
                "travelersError"
            );


        let valid = true;


        /* NAME */

        name.classList.remove("invalid");

        nameError.textContent = "";


        if (
            name.value.trim() === ""
        ) {

            name.classList.add(
                "invalid"
            );

            nameError.textContent =
                "Full name is required.";

            valid = false;

        }


        /* EMAIL */

        email.classList.remove("invalid");

        emailError.textContent = "";


        if (
            !email.value.includes("@")
        ) {

            email.classList.add(
                "invalid"
            );

            emailError.textContent =
                "Enter a valid email address.";

            valid = false;

        }


        /* MOBILE */

        mobile.classList.remove("invalid");

        mobileError.textContent = "";


        const mobilePattern =
            /^[0-9]{10}$/;


        if (
            !mobilePattern.test(
                mobile.value
            )
        ) {

            mobile.classList.add(
                "invalid"
            );

            mobileError.textContent =
                "Mobile number must contain exactly 10 digits.";

            valid = false;

        }


        /* TRAVELERS */

        travelers.classList.remove(
            "invalid"
        );

        travelersError.textContent = "";


        if (
            Number(travelers.value) <= 0
        ) {

            travelers.classList.add(
                "invalid"
            );

            travelersError.textContent =
                "Number of travelers must be greater than 0.";

            valid = false;

        }


        /* PACKAGE */

        if (
            bookingPackage.value === ""
        ) {

            alert(
                "Please choose a package."
            );

            valid = false;

        }


        /* SUBMIT */

        if (valid) {

            showConfirmation();

        }

    }
);


function showConfirmation() {

    const name =
        document.getElementById(
            "fullName"
        ).value.trim();

    const email =
        document.getElementById(
            "email"
        ).value;

    const mobile =
        document.getElementById(
            "mobile"
        ).value;


    const bookingDate =
        new Date().toLocaleString();


    const confirmationCard =
        document.getElementById(
            "confirmationCard"
        );


    const confirmationDetails =
        document.getElementById(
            "confirmationDetails"
        );


    confirmationDetails.innerHTML = `

        <p>
            <strong>Customer:</strong>
            ${name}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Mobile:</strong>
            ${mobile}
        </p>

        <p>
            <strong>Destination:</strong>
            ${bookingDestination.value}
        </p>

        <p>
            <strong>Package:</strong>
            ${bookingPackage.value}
        </p>

        <p>
            <strong>Days:</strong>
            ${bookingDays.value}
        </p>

        <p>
            <strong>Accommodation:</strong>
            ${bookingAccommodation.value}
        </p>

        <p>
            <strong>Food:</strong>
            ${bookingFood.value}
        </p>

        <p>
            <strong>Travelers:</strong>
            ${travelers.value}
        </p>

        <p>
            <strong>Package Cost:</strong>
            ${bookingCost.value}
        </p>

        <p>
            <strong>Total Cost:</strong>
            ${bookingTotal.value}
        </p>

        <p>
            <strong>Booking Date:</strong>
            ${bookingDate}
        </p>

        <p>
            <strong>Status:</strong>
            Confirmed
        </p>

    `;


    document
        .getElementById(
            "bookingSummary"
        )
        .classList.add("d-none");


    confirmationCard
        .classList.remove("d-none");


    const successModal =
        new bootstrap.Modal(
            document.getElementById(
                "successModal"
            )
        );


    successModal.show();

}



const resetBtn =
    document.getElementById(
        "resetBtn"
    );


resetBtn.addEventListener(
    "click",
    function () {

        document
            .getElementById(
                "bookingSummary"
            )
            .classList.remove(
                "d-none"
            );


        document
            .getElementById(
                "confirmationCard"
            )
            .classList.add(
                "d-none"
            );


        bookingDestination.value =
            selectedDestination;


        bookingPackage.value = "";
        bookingDays.value = "";
        bookingAccommodation.value = "";
        bookingFood.value = "";
        bookingCost.value = "";
        bookingTotal.value = "";

        updateBookingSummary();

    }
);