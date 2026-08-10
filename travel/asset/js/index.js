/* =====================================================
   TRAVELVISTA - JS TASK 5
===================================================== */


/* =====================================================
   1. CURRENT DATE & TIME
===================================================== */

window.addEventListener("load", function () {

    const dateTime =
        document.getElementById("currentDateTime");

    const now = new Date();

    dateTime.textContent =
        now.toLocaleString();

});


/* =====================================================
   2. EXPLORE DESTINATIONS BUTTON
===================================================== */

const exploreBtn =
    document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =====================================================
   3. SEARCH DESTINATIONS
===================================================== */

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


/* =====================================================
   4. DESTINATION CARD SELECTION
===================================================== */

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


/* =====================================================
   5. COUNTRY HOVER
===================================================== */

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


/* =====================================================
   6. ROUTE INFORMATION
===================================================== */

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


/* =====================================================
   7. IMAGE DOUBLE CLICK
===================================================== */

const destinationImages =
    document.querySelectorAll(".image-box");

destinationImages.forEach(function (box) {

    box.addEventListener("dblclick",
        function () {

            this.classList.toggle("zoomed");

        });

});


/* =====================================================
   8. TOP RATED VIEW DETAILS
===================================================== */

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


/* =====================================================
   9. PACKAGE DETAILS MODAL
===================================================== */

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


/* =====================================================
   10. DESCRIPTION MODAL
===================================================== */

const descriptionButtons =
    document.querySelectorAll(".btn-description");

const descriptionTitle =
    document.getElementById("descriptionTitle");

const destinationDescription =
    document.getElementById(
        "destinationDescription"
    );


descriptionButtons.forEach(function (button) {

    button.addEventListener("click",
        function () {

            const destination =
                this.getAttribute(
                    "data-destination"
                );


            descriptionTitle.textContent =
                destination;


            destinationDescription.textContent =
                "Discover the beautiful landscapes, " +
                "local culture, attractions and " +
                "unforgettable experiences of " +
                destination + ".";

        });

});


/* =====================================================
   11. BOOKING VARIABLES
===================================================== */

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


/* =====================================================
   12. READY TO GO BUTTON
===================================================== */

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


/* =====================================================
   13. CHOOSE PACKAGE POPUP
===================================================== */

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


/* =====================================================
   14. CHOOSE PACKAGE CALCULATION
===================================================== */

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


/* =====================================================
   15. CHOOSE THIS PACKAGE
===================================================== */

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


/* =====================================================
   16. UPDATE BOOKING SUMMARY
===================================================== */

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


/* =====================================================
   17. FORM VALIDATION
===================================================== */

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


/* =====================================================
   18. BOOKING CONFIRMATION
===================================================== */

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


/* =====================================================
   19. RESET
===================================================== */

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