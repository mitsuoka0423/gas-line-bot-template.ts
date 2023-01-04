import { Message } from "@line/bot-sdk";

interface ReplyMessageProps {
  replyToken: string;
  messages: Message[];
}

const TOKEN = PropertiesService.getScriptProperties().getProperty(
  "CHANNEL_ACCESS_TOKEN"
);

const ENDPOINT_URL = "https://api.line.me/v2/bot/message/reply";

export const replyMessage = ({ replyToken, messages }: ReplyMessageProps) => {
  const payload = {
    replyToken,
    messages,
  };

  UrlFetchApp.fetch(ENDPOINT_URL, {
    payload: JSON.stringify(payload),
    method: "post",
    headers: { Authorization: `Bearer ${TOKEN}` },
    contentType: "application/json",
  });
};
