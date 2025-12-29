const TABS = [
  { id: "tab1", title: "Tab 1", content: "This is Inside Tab1" },
  { id: "tab2", title: "Tab 2", content: "This is Inside Tab2" },
  { id: "tab3", title: "Tab 3", content: "This is Inside Tab3" },
];

document.addEventListener("DOMContentLoaded", function () {
  const tabsHeaders = document.querySelector(".tabs-header-section");
  const tabsContent = document.querySelector(".tabs-section");
  let activeTab = TABS[0].id;

  // Create tabs
  TABS.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item.title;
    btn.classList.add("btn", "btn-tab");
    btn.dataset.tab = item.id;

    if (activeTab === item.id) {
      btn.classList.add("active");
    }

    tabsHeaders.appendChild(btn);

    const content = document.createElement("p");
    content.innerText = item.content;
    content.classList.add("tab-content");
    content.id = item.id;
    content.style.display = "none";

    tabsContent.appendChild(content);
  });

  // Initial content
  document.getElementById(activeTab).style.display = "block";

  // Click handling
  tabsHeaders.addEventListener("click", function (e) {
    const tabBtn = e.target.closest(".btn-tab");
    if (!tabBtn) return;

    const clickedTab = tabBtn.dataset.tab;

    // 🔑 Skip if same tab
    if (clickedTab === activeTab) return;

    // Hide all contents
    document.querySelectorAll(".tab-content").forEach((el) => {
      el.style.display = "none";
      el.classList.remove("active");
    });

    // Remove active class from all buttons
    document.querySelectorAll(".btn-tab").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Activate clicked tab
    tabBtn.classList.add("active");
    const tabContentCurr = document.getElementById(clickedTab);
    tabContentCurr.style.display = "block";
    tabContentCurr.classList.add("active");

    activeTab = clickedTab;
  });
});
