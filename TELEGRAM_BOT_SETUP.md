# Telegram Bot Integration Setup Guide

## Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/start` and then `/newbot`
3. Give your bot a name (e.g., "Surya Travel Bot")
4. Give your bot a username (must end with "bot", e.g., "suryatravel_bot")
5. **Copy the BOT TOKEN** - you'll need this

## Step 2: Get Your Chat ID

1. In Telegram, search for **@userinfobot** or **@getmyid_bot**
2. Send any message to the bot
3. It will reply with your User ID (e.g., 1115371805)
4. This is your CHAT_ID

## Step 3: Deploy Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the code from `GoogleAppsScript.gs` into the editor
4. Replace:
   - `YOUR_BOT_TOKEN` with your Telegram bot token
   - `1115371805` with your Chat ID (if different)
5. Click **Deploy** → **New deployment** → Select **Web app**
6. Configure as:
   - Execute as: Your Google Account
   - Who has access: Anyone
7. Click **Deploy**
8. Copy the deployment URL (looks like: `https://script.google.com/macros/d/SCRIPT_ID/userweb`)

## Step 4: Update Your React App

In your `src/app/App.tsx`, find this line:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
```

Replace it with your deployment URL:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/userweb';
```

## Step 5: Test the Integration

1. Fill out the booking form on your website
2. Click "Book Your Cab Now"
3. You should receive a message on Telegram within a few seconds

## Troubleshooting

### No message received?
- Check that your BOT TOKEN is correct
- Check that you're using the right CHAT_ID
- Test the Google Apps Script with the `testWebhook()` function

### CORS Errors?
- The script uses `mode: 'no-cors'` so CORS shouldn't be an issue
- If you still see errors, check browser console for details

### Bot not responding?
- Make sure the bot is active on BotFather
- Make sure you have the correct Bot Token

## Optional: Send to Multiple Channels

To send messages to multiple chat IDs, modify the Google Apps Script:

```javascript
const CHAT_IDS = ["1115371805", "YOUR_SECOND_CHAT_ID"];

CHAT_IDS.forEach(chatId => {
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: "Markdown"
    }),
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch(telegramUrl, options);
});
```

## Optional: Save to Google Sheet

Add this to your Google Apps Script to also save to a sheet:

```javascript
function saveToSheet(data) {
  const sheetId = 'YOUR_SHEET_ID';
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  sheet.appendRow([
    new Date(),
    data.fullName,
    data.mobile,
    data.pickup,
    data.drop,
    data.date,
    data.carType
  ]);
}
```

Then call it in `doPost()`:
```javascript
saveToSheet(data);
```

---

**Need help?** Check that all configurations are correct and test with the provided test function in the script editor.
