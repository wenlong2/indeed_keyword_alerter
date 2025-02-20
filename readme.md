# Firefox Addon: Indeed Job Description Keyword Alerter

## Overview

This Firefox addon scans job descriptions on Indeed and alerts users if specified keywords are found (e.g., TS/SCI, clearance, etc.). Most job descriptions are long, and it is frustrating to read through them, only to find a disqualifying keyword at the end. With this extension, if a relevant keyword is found in the job description, an overlay message will immediately appear at the top of the page, indicating the detected keyword specified by the applicant (whether they like or dislike it).

## Features

- Monitors job descriptions on Indeed in real-time.
- Highlights user-specified keywords (default keywords are `TS/SCI`, `clearance`).
- Allows customization of keywords stored in browser storage.
- Removes the overlay when no matching keywords are found.

## Installation

1. Clone or download this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click **This Firefox** > **Load Temporary Add-on**.
4. Select the extension’s directory and choose `manifest.json`.

## Usage

- Visit Indeed and open a job posting.
- If a keyword is detected, an overlay will appear at the top of the page.
- Keywords can be customized in the popup window. If there is more than one keyword, separate them with a comma.

## Technical Details

- The overlay dynamically updates when a new keyword is found.
- If no keywords are matched, the overlay is removed.
- Auto keyword scanning is triggered when clicking a new job card.

## GitHub Repository

You can find the source code and contribute to the project 

- on GitHub: [``https://github.com/wenlong2/indeed_keyword_alerter``](https://github.com/wenlong2/indeed_keyword_alerter) 
- contact me: wenlongtamu  AT  gmail.com

## License

Wenlong Yuan, all rights reserved. The developers are not responsible for damages from using this extension.

