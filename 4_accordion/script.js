const ACCORDION = [
  { id: "acc1", title: "Acc 1", content: "This is Inside Accordion 1" },
  { id: "acc2", title: "Acc 2", content: "This is Inside Accordion 2" },
  { id: "acc3", title: "Acc 3", content: "This is Inside Accordion 3" },
];
document.addEventListener("DOMContentLoaded", function () {
  const accordionContainer = document.querySelector(".accordion-container");
  const active = ACCORDION[0]?.id;

  ACCORDION.forEach((item) => {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");

    const headingElement = document.createElement("p");
    headingElement.innerText = item.title;
    headingElement.classList.add("accordion-title");

    const contentElement = document.createElement("p");
    contentElement.innerText = item.content;
    contentElement.classList.add("accordion-content");

    if (item.id === active) {
      accordion.classList.add("active");
      contentElement.classList.add("active");
      contentElement.style.display = "block";
    } else {
      contentElement.style.display = "none";
    }

    accordion.appendChild(headingElement);
    accordion.appendChild(contentElement);
    accordion.id = item.id;

    accordionContainer.appendChild(accordion);
  });

  // On Accordion Click OPen the Content
  accordionContainer.addEventListener("click", function (e) {
    const accordion = e.target.closest(".accordion");
    if (!accordion) return;

    const currentContent = accordion.querySelector(".accordion-content");
    const isOpen = currentContent.style.display === "block";

    // Close all accordions
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.style.display = "none";
    });

    // Remove Active Class from main accordion
    document.querySelectorAll(".accordion").forEach((item) => {
      if (item.id === accordion.id && !isOpen) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Toggle clicked accordion
    currentContent.style.display = isOpen ? "none" : "block";
    active = accordion.id;
  });
});
