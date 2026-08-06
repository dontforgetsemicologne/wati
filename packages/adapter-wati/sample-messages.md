# WhatsApp Team Inbox Sample Messages

Real webhook payloads delivered by the Wati WhatsApp Business API.

The adapter accepts three delivery shapes:

- A single event object
- An array of event objects
- A wrapper object `{ "events": [...] }`

All examples below are wrapped in the `events` form.

## Text message

```json
{
  "events": [
    {
      "id": "5f9f6c7d-1a2b-4c3d-9e0f-1234567890ab",
      "created": "2026-08-06T10:14:32Z",
      "timestamp": "1722934472",
      "type": "text",
      "eventType": "messageReceived",
      "text": "Hi! When does the store open tomorrow?",
      "waId": "14155552671",
      "senderName": "Alice",
      "username": "@alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "statusString": "SENT"
    }
  ]
}
```

## Image message

```json
{
  "events": [
    {
      "id": "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
      "created": "2026-08-06T10:15:01Z",
      "timestamp": "1722934501",
      "type": "image",
      "eventType": "messageReceived",
      "text": "Here's a photo of the broken part.",
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "statusString": "SENT",
      "data": {
        "mediaUrl": "https://live-mt-server-XXXXX.wati.io/media/abc123.jpg",
        "fileName": "broken-part.jpg",
        "caption": "Here's a photo of the broken part.",
        "mimeType": "image/jpeg"
      }
    }
  ]
}
```

## Document message

```json
{
  "events": [
    {
      "id": "9f8e7d6c-5b4a-4321-9876-abcdef012345",
      "created": "2026-08-06T10:16:22Z",
      "timestamp": "1722934582",
      "type": "document",
      "eventType": "messageReceived",
      "text": "Invoice for August",
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "data": {
        "mediaUrl": "https://live-mt-server-XXXXX.wati.io/media/inv-0826.pdf",
        "fileName": "invoice-0826.pdf",
        "caption": "Invoice for August",
        "mimeType": "application/pdf"
      }
    }
  ]
}
```

## Location message

```json
{
  "events": [
    {
      "id": "2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
      "created": "2026-08-06T10:17:48Z",
      "timestamp": "1722934668",
      "type": "location",
      "eventType": "messageReceived",
      "text": null,
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "data": {
        "latitude": "37.7749",
        "longitude": "-122.4194",
        "address": "San Francisco, CA",
        "name": "Ferry Building"
      }
    }
  ]
}
```

## Interactive button reply

Tapping a quick-reply button on a template message arrives as a `button` event:

```json
{
  "events": [
    {
      "id": "3c4d5e6f-7a8b-4c9d-0e1f-2a3b4c5d6e7f",
      "created": "2026-08-06T10:18:55Z",
      "timestamp": "1722934735",
      "type": "button",
      "eventType": "messageReceived",
      "text": "Yes, confirm",
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "buttonReply": {
        "buttonText": "Yes, confirm",
        "templateId": "appointment_reminder"
      }
    }
  ]
}
```

## List reply

Selecting a row from a list message arrives as an `interactive` event:

```json
{
  "events": [
    {
      "id": "4d5e6f7a-8b9c-4d0e-1f2a-3b4c5d6e7f8a",
      "created": "2026-08-06T10:19:30Z",
      "timestamp": "1722934770",
      "type": "interactive",
      "eventType": "messageReceived",
      "text": "Reschedule",
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "listReply": {
        "title": "Reschedule",
        "description": "Pick a new time",
        "listId": "support_actions"
      }
    }
  ]
}
```

## Reaction

```json
{
  "events": [
    {
      "id": "5e6f7a8b-9c0d-4e1f-2a3b-4c5d6e7f8a9b",
      "created": "2026-08-06T10:20:12Z",
      "timestamp": "1722934812",
      "type": "reaction",
      "eventType": "messageReceived",
      "text": "👍",
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "data": {
        "reaction": "👍",
        "messageId": "wamid.HBgLMTQxNTU1NTI2NjcVAgARGBI1QUFEQjVBMTYxNzhBQzQA"
      }
    }
  ]
}
```

## Sticker

```json
{
  "events": [
    {
      "id": "6f7a8b9c-0d1e-4f2a-3b4c-5d6e7f8a9b0c",
      "created": "2026-08-06T10:21:01Z",
      "timestamp": "1722934861",
      "type": "sticker",
      "eventType": "messageReceived",
      "text": null,
      "waId": "14155552671",
      "senderName": "Alice",
      "channelPhoneNumber": "14155550000",
      "conversationId": "conv-001",
      "data": {
        "mediaUrl": "https://live-mt-server-XXXXX.wati.io/media/sticker.webp",
        "mimeType": "image/webp"
      }
    }
  ]
}
```
