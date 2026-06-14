function switchTab(n) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('tab-' + n).classList.add('active');
  
  // Auto-load top picks when switching to that tab
  if (n === 1) populateTopPicks();
}

// Auto initialize when page loads
window.onload = function() {
  populateTopPicks();
  console.log('%c🪐 Saturn Research v1.0 initialized — 5x-80x gem hunter ready', 'color:#c026d3; font-size:1.2rem');
};
