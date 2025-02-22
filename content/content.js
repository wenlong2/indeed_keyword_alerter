function updateOverlay(text) {
  let overlay = document.getElementById('overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.prepend(overlay);
  }
  overlay.textContent = "Keyword found: " + text;
}

function cleanOverlay() {
  let overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.remove();
  }
}

function filter_keywords(jobcard, keywords) {
  if (!jobcard) {
    cleanOverlay();
    return;
  }
  if (keywords.length === 0) {
    cleanOverlay();
    return;
  }
  for (const keyword of keywords) {
    if (jobcard.includes(keyword)) {
      updateOverlay(keyword);
      break;
    }
  }
}

let keywords = ["TS/SCI", "clearance"];
browser.storage.local.get('indeed_keywords').then(result => {
    if (result.indeed_keywords) {
        keywords = result.indeed_keywords;
    }
    startMonitoring(); 
});

function startMonitoring() {
    cleanOverlay();
    let lastJobText = "";
    setInterval(() => {
	const jobDescElement = document.querySelector('[id^="jobDescriptionText"]');
	if (jobDescElement) {
	    const jobText = jobDescElement.innerText;
	    if (jobText !== lastJobText) {
		cleanOverlay();
		filter_keywords(jobText, keywords);
		lastJobText = jobText;
	    }
	}
    }, 100); 
}

browser.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.indeed_keywords) {
        keywords = changes.indeed_keywords.newValue || [];
    }
});
