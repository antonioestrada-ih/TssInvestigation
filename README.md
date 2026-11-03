# Initial Investigation Formatter

A Chrome extension that turns the one-line `comment_block` from the Superset Initial Investigation query into a readable, multi-line comment that's ready to paste into ClickUp.

It replaces every `[BR]` in the pasted text with a line break and copies the result to your clipboard. Everything runs in your browser. The extension makes no network calls, stores no data, and its only permission is writing to the clipboard.

## Install

1. On this repo's GitHub page, click **Code → Download ZIP**.
2. Unzip it to a folder you'll keep, for example `Documents\TssInvestigation`.
   > Don't delete or move this folder later. Chrome loads the extension from it.
3. In Chrome, go to `chrome://extensions`.
4. Turn on **Developer mode** (toggle, top right).
5. Click **Load unpacked** and select the unzipped folder (the one that contains `manifest.json`).
6. Click the puzzle-piece icon in the toolbar and pin **Query Formatter**.

This also works in Microsoft Edge via `edge://extensions`.

## Use

1. In Superset, run the query that matches what you have:
   - **Initial Investigation w/ Patient**: filter by **Patient ID**, for an issue about a single patient.
   - **Initial Investigation w/ Enterprise**: filter by **Enterprise ID**, for an issue affecting the whole enterprise.

   Both queries return the same format in the `comment_block` column.
2. Double-click the `comment_block` cell to select all of its contents, then copy it (Ctrl+C).
3. Click the **Query Formatter** icon in the toolbar.
4. Paste into the box and click **Format & Copy**. You'll see a green "Copied to clipboard!" message.
5. Paste (Ctrl+V) into a ClickUp comment or the body of the ClickUp ticket.

### Example (fake data)

Input:

```
🚨 INITIAL INVESTIGATION: JANE SAMPLE (ID: 100000001)(CS25-000001) 🚨[BR]---[BR]🏢 Hierarchy:[BR]Admin Org: [Sample Dermatology Group][1001](...)
```

Output:

```
🚨 INITIAL INVESTIGATION: JANE SAMPLE (ID: 100000001)(CS25-000001) 🚨
---
🏢 Hierarchy:
Admin Org: [Sample Dermatology Group][1001](...)
```

## Good to know

- Only the exact uppercase text `[BR]` is converted.
- The box clears after a successful copy, so paste the result before you format the next one.
- Clicking **Format & Copy** with an empty box does nothing.

## Troubleshooting

| Problem | Fix |
|---|---|
| Red "Failed to copy" message | Close the popup, reopen it, and try again. |
| Extension disappeared or shows an error | Make sure the unzipped folder wasn't moved or deleted, then click reload (↻) on the extension's card in `chrome://extensions`. |
| Text still shows `[BR]` | Check that you copied the whole `comment_block` cell, and that the text was pasted into the extension, not straight into ClickUp. |

## Updating

1. Download the new ZIP from GitHub.
2. Replace the files in your existing folder.
3. In `chrome://extensions`, click reload (↻) on the **Query Formatter** card.

## Support

Post in **#gt_support_organization** on Slack, or reach out to Antonio Estrada directly.
