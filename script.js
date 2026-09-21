/* ============================================================
   [Thực hành] CSS | flex-grow Property Interactive Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initPlayground();
  updateMeasuredSizes();
  window.addEventListener('resize', updateMeasuredSizes);
});

/* ------------------------------------------------------------
 * 1. Tabs Switcher for Standard Example Scenarios
 * ------------------------------------------------------------ */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add('active');
      }

      setTimeout(updateMeasuredSizes, 50);
    });
  });
}

/* ------------------------------------------------------------
 * 2. Measure and Display Rendered Width of Demo Items
 * ------------------------------------------------------------ */
function updateMeasuredSizes() {
  // Scenario A
  const itemsA = document.querySelectorAll('.case-a .demo-item');
  itemsA.forEach((item, idx) => {
    const badge = document.getElementById(`size-a-${idx + 1}`);
    if (badge) {
      const w = Math.round(item.getBoundingClientRect().width);
      badge.textContent = `${w}px`;
    }
  });

  // Scenario B
  const itemsB = document.querySelectorAll('.case-b .demo-item');
  itemsB.forEach((item, idx) => {
    const badge = document.getElementById(`size-b-${idx + 1}`);
    if (badge) {
      const w = Math.round(item.getBoundingClientRect().width);
      badge.textContent = `${w}px`;
    }
  });

  // Scenario C
  const itemsC = document.querySelectorAll('.case-c .demo-item');
  itemsC.forEach((item, idx) => {
    const badge = document.getElementById(`size-c-${idx + 1}`);
    if (badge) {
      const w = Math.round(item.getBoundingClientRect().width);
      badge.textContent = `${w}px`;
    }
  });

  // Playground items
  for (let i = 1; i <= 5; i++) {
    const pItem = document.getElementById(`p-item-${i}`);
    const pSize = document.getElementById(`p-size-${i}`);
    if (pItem && pSize) {
      const w = Math.round(pItem.getBoundingClientRect().width);
      pSize.textContent = `${w}px`;
    }
  }

  const container = document.getElementById('interactive-container');
  const containerDim = document.getElementById('container-dim');
  if (container && containerDim) {
    const cw = Math.round(container.getBoundingClientRect().width);
    containerDim.textContent = `Chiều rộng container: ${cw}px`;
  }
}

/* ------------------------------------------------------------
 * 3. Interactive Playground Controls & Live Math
 * ------------------------------------------------------------ */
function initPlayground() {
  updatePlayground();
}

function updatePlayground() {
  const grows = [];
  let totalGrow = 0;

  for (let i = 1; i <= 5; i++) {
    const slider = document.getElementById(`grow-${i}`);
    const val = parseInt(slider.value, 10);
    grows.push(val);
    totalGrow += val;

    // Update label tag
    const valSpan = document.getElementById(`val-${i}`);
    if (valSpan) valSpan.textContent = val;

    // Update playground flex item
    const pItem = document.getElementById(`p-item-${i}`);
    const pGrow = document.getElementById(`p-grow-${i}`);
    if (pItem) {
      pItem.style.flexGrow = val;
    }
    if (pGrow) {
      pGrow.textContent = val;
    }
  }

  // Gap & Base Width
  const gapSlider = document.getElementById('container-gap');
  const gapVal = parseInt(gapSlider.value, 10);
  document.getElementById('val-gap').textContent = `${gapVal}px`;

  const baseSlider = document.getElementById('base-width');
  const baseVal = parseInt(baseSlider.value, 10);
  document.getElementById('val-base').textContent = `${baseVal}px`;

  const container = document.getElementById('interactive-container');
  if (container) {
    container.style.gap = `${gapVal}px`;
  }

  for (let i = 1; i <= 5; i++) {
    const pItem = document.getElementById(`p-item-${i}`);
    if (pItem) {
      pItem.style.width = `${baseVal}px`;
    }
  }

  // Update total stats
  const stats = document.getElementById('stats-summary');
  if (stats) {
    stats.innerHTML = `Tổng flex-grow: <strong>${totalGrow}</strong>`;
  }

  // Generate CSS Code
  generateCssCode(grows, gapVal, baseVal);

  // Measure updated sizes after transition
  setTimeout(updateMeasuredSizes, 60);
}

function applyPreset(values) {
  values.forEach((v, index) => {
    const slider = document.getElementById(`grow-${index + 1}`);
    if (slider) {
      slider.value = v;
    }
  });
  updatePlayground();
}

function generateCssCode(grows, gap, baseWidth) {
  const codeElem = document.getElementById('generated-css-code');
  if (!codeElem) return;

  let css = `/* Container Styles */\n.container {\n  display: flex;\n  gap: ${gap}px;\n}\n\n`;
  css += `/* Base item rule */\n.item {\n  width: ${baseWidth}px;\n  flex-shrink: 0;\n}\n\n`;
  css += `/* Item flex-grow configurations */\n`;

  grows.forEach((g, idx) => {
    css += `.item-${idx + 1} { flex-grow: ${g}; }`;
    if (idx === 1 && g > 0) {
      css += ` /* ★ Div thứ 2 đang phát triển */`;
    }
    css += `\n`;
  });

  codeElem.textContent = css;
}

/* ------------------------------------------------------------
 * 4. Clipboard Utilities
 * ------------------------------------------------------------ */
function copyText(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.textContent;
    btnElement.textContent = '✓ Đã chép!';
    btnElement.style.background = '#10b981';
    btnElement.style.color = '#ffffff';
    setTimeout(() => {
      btnElement.textContent = originalText;
      btnElement.style.background = '';
      btnElement.style.color = '';
    }, 1800);
  });
}

function copyCode(elementId, btnElement) {
  const codeElem = document.getElementById(elementId);
  if (!codeElem) return;
  const text = codeElem.textContent;
  copyText(text, btnElement);
}
