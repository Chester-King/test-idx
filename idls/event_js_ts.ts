export type event_js = {
    "version": "0.1.0",
    "name": "event_js",
    "instructions": [
      {
        "name": "createEntity",
        "accounts": [],
        "args": [
          {
            "name": "n1",
            "type": "u64"
          }
        ]
      },
      {
        "name": "testString",
        "accounts": [],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "n1",
            "type": "string"
          }
        ]
      },
      {
        "name": "testPubkey",
        "accounts": [],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "n1",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "testU8",
        "accounts": [],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "n1",
            "type": "u8"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "U64Event",
        "fields": [
          {
            "name": "data",
            "type": "u64",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      },
      {
        "name": "StringEvent",
        "fields": [
          {
            "name": "id",
            "type": "u64",
            "index": false
          },
          {
            "name": "data",
            "type": "string",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      },
      {
        "name": "PubkeyEvent",
        "fields": [
          {
            "name": "id",
            "type": "u64",
            "index": false
          },
          {
            "name": "data",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      },
      {
        "name": "U8Event",
        "fields": [
          {
            "name": "id",
            "type": "u64",
            "index": false
          },
          {
            "name": "data",
            "type": "u8",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      }
    ]
  }

export const IDL: event_js = {
    "version": "0.1.0",
    "name": "event_js",
    "instructions": [
      {
        "name": "createEntity",
        "accounts": [],
        "args": [
          {
            "name": "n1",
            "type": "u64"
          }
        ]
      },
      {
        "name": "testString",
        "accounts": [],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "n1",
            "type": "string"
          }
        ]
      },
      {
        "name": "testPubkey",
        "accounts": [],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "n1",
            "type": "publicKey"
          }
        ]
      },
      {
        "name": "testU8",
        "accounts": [],
        "args": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "n1",
            "type": "u8"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "U64Event",
        "fields": [
          {
            "name": "data",
            "type": "u64",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      },
      {
        "name": "StringEvent",
        "fields": [
          {
            "name": "id",
            "type": "u64",
            "index": false
          },
          {
            "name": "data",
            "type": "string",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      },
      {
        "name": "PubkeyEvent",
        "fields": [
          {
            "name": "id",
            "type": "u64",
            "index": false
          },
          {
            "name": "data",
            "type": "publicKey",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      },
      {
        "name": "U8Event",
        "fields": [
          {
            "name": "id",
            "type": "u64",
            "index": false
          },
          {
            "name": "data",
            "type": "u8",
            "index": false
          },
          {
            "name": "label",
            "type": "string",
            "index": true
          }
        ]
      }
    ]
  }