define({ "api": [
  {
    "type": "get",
    "url": "/api/beacon_info",
    "title": "Request Beacon information",
    "name": "get_beaconInfo",
    "group": "Beacon_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beaconId",
            "description": "<p>Beacon ID</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0-1",
            "optional": true,
            "field": "template",
            "description": "<p>If we want extra information (for BE rendering)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/api/beacon_info?groupId=123&beaconId=123&template=1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"results\": {\n      \"title\" : \"Beacon title\",\n      \"desc\" : \"Beacon description...\"\n   }\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/beacon_info.ts",
    "groupTitle": "Beacon_Info"
  },
  {
    "type": "get",
    "url": "/api/localizations",
    "title": "Request localization information",
    "name": "get_localizations",
    "group": "Beacon_Info",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/api/localizations",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"results\": {\n       \"en\": {\"app_name\":\"Imatra Beacon\"},\n       \"fin\": {\"app_name\":\"Imatra Beacon\"}\n   }\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/localizations.ts",
    "groupTitle": "Beacon_Info"
  }
] });
