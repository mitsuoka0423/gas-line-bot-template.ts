import { replyMessage } from "./apis/messagingApi";

function doPost(e) {
  const events = JSON.parse(e.postData.contents).events;

  for (const event of events) {
    replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: "text",
        text: event.message.text,
      }],
    });
  }
}
