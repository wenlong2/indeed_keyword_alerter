const defaultKeywordsText = "TS/SCI, clearance";
document.getElementById('save').onclick = () => {
  let inputText = document.getElementById('text').value;
  let indeed_keywords = inputText.split(',').map(word => word.trim()).filter(word => word);
    browser.storage.local.set({ indeed_keywords }).then(() => {
	window.close();
    });
};

document.addEventListener('DOMContentLoaded', () => {
  browser.storage.local.get('indeed_keywords').then(res => {
    let indeed_keywords = res.indeed_keywords || [];
    if (indeed_keywords.length === 0) {
	  indeed_keywords = defaultKeywordsText.split(',').map(word => word.trim()).filter(word => word);
    }
    document.getElementById('text').value = indeed_keywords.join(', ');
  });
});
