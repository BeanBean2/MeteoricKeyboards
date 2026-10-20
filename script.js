const form = document.getElementById("builder-form");
const totalPrice = document.getElementById("total-price");
const summaryText = document.getElementById("summary-text");
const checkoutButton = document.getElementById("checkout-button");

function getSelectedValue(id) {
  const input = document.getElementById(id);
  return Number(input.value);
}

function updateSummary() {
  const layoutName = document.getElementById("layout").selectedOptions[0].text.split(" — ")[0];
  const switchesName = document.getElementById("switches").selectedOptions[0].text.split(" — ")[0];
  const keycapsName = document.getElementById("keycaps").selectedOptions[0].text.split(" — ")[0];
  const caseName = document.getElementById("case").selectedOptions[0].text.split(" — ")[0];

  const addonTotal = Array.from(document.querySelectorAll('input[name="addon"]:checked')).reduce(
    (sum, input) => sum + Number(input.value),
    0
  );

  const total = getSelectedValue("layout") + getSelectedValue("switches") + getSelectedValue("keycaps") + getSelectedValue("case") + addonTotal;

  totalPrice.textContent = `$${total}`;
  summaryText.textContent = `${layoutName} with ${switchesName} switches, ${keycapsName} keycaps, ${caseName} case.`;
}

form.addEventListener("change", updateSummary);
checkoutButton.addEventListener("click", () => {
  const total = totalPrice.textContent;
  alert(`Thanks! We'll contact you to complete your custom order. Estimated total: ${total}`);
});

updateSummary();
