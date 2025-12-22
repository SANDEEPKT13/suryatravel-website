// Google Apps Script for Telegram Bot Integration
// Deploy this as a web app to get the URL

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // ===== CONFIGURATION =====
    const BOT_TOKEN = "YOUR_BOT_TOKEN"; // Replace with your Telegram bot token
    const CHAT_ID = "1115371805"; // Replace with your chat ID
    // ========================

    // Format the message with emojis
    const text =
      "🚗 *New Ride Booking*\n" +
      "━━━━━━━━━━━━━━━━━━━━━\n" +
      "👤 *Name:* " + data.fullName + "\n" +
      "📱 *Mobile:* " + data.mobile + "\n" +
      "📍 *Pickup:* " + data.pickup + "\n" +
      "🎯 *Drop:* " + data.drop + "\n" +
      "🗓️ *Date:* " + data.date + "\n" +
      "🚘 *Vehicle:* " + data.carType;

    // Send to Telegram
    const telegramUrl = "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage";
    
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown"
      }),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(telegramUrl, options);
    const result = JSON.parse(response.getContentText());

    if (result.ok) {
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: "Booking received successfully"
      })).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: result.description
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional) - run this in Apps Script editor to test
function testWebhook() {
  const testData = {
    fullName: "Test User",
    mobile: "9876543210",
    pickup: "Delhi Airport",
    drop: "Taj Mahal, Agra",
    carType: "Innova Crysta",
    date: "25-12-25"
  };

  // Simulate the doPost call
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  Logger.log(result.getContent());
}
