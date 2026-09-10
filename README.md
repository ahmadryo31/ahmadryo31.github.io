# Ryo personal site

Arabic, right-to-left personal site with profile, games, and anime sections.

## Preview
Download `preview.html` and open it in a browser. It is a self-contained copy with the existing supplied images embedded; no server is needed.
The production entry point is `index.html`, alongside `styles.css`, `app.js`, and `assets/`.

## Accounts
Set confirmed usernames and HTTPS profile URLs in the `profiles` array in `app.js`.
Missing URLs are shown as non-interactive labels. Discord copy appears only after a username is supplied.

## Navigation
Sections use `#profiles`, `#games`, and `#anime`; refresh and browser history preserve the selected section.
The right sidebar becomes a toggleable drawer below 800px.
Reduced-motion preferences are respected automatically.

## Assets
Existing profile, banner, and anime images are preserved. Original supplied images are small; higher-resolution originals are still needed.
New game cover downloads were not permitted by automatic approval review; game cards use typography and verified official source links instead.

## Validation
JavaScript syntax, local assets, HTML IDs/anchors, checked.
Browser rendering was not verified: this environment does not offer a compatible supervised preview for plain static projects.
The redesign is prepared for review; it has not been deployed.
