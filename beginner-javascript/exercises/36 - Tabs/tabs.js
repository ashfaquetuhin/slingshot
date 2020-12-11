const tabs = document.querySelector('.tabs');
const tabsButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  // hide all the tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // make all tabs unselect
  tabsButtons.forEach((tab) => {
    tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });

  // mkark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabpanel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;

  //   // METHOD 2 - find in the array of tabPanels
  //   console.log(tabPanels);
  //   const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id
  //   );
  //   tabPanel.hidden = false;
}

tabsButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
