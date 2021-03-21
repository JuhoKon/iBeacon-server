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
          "content": "    HTTP/1.1 200 OK\n{\n \"result\":{\n  \"id\": 1,\n  \"imageDescription\": {\n      \"en\": \"Welcome to giants stairs! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus\",\n      \"fi\": \"Tervetuloa jättiläisten portaille! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus.\"\n  },\n  \"buttonRedirectUrl\": \"https://www.imatra.fi/kylät-ja-kaupunginosat/mansikkala\",\n  \"conditions\": [],\n  \"notification\": {\n      \"fi\": \"Tässä ilmoitus\",\n      \"en\": \"This is notification\"\n  },\n  \"mediaUrl\": {\n      \"videoUrl\": \"https://www.youtube.com/embed/6LZy9gPwugk\",\n      \"imageUrl\": \"https://storage.googleapis.com/beaconinfomedia/images/638A9916.jpg\"\n  },\n  \"beaconId\": \"789\",\n  \"videoDescription\": {\n      \"en\": \"Video description. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus.\",\n      \"fi\": \"Videon kuvausteksti. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus.\"\n  },\n  \"location\": {\n      \"en\": \"Giants stairs\",\n      \"fi\": \"Jättiläisten portaat\"\n  },\n  \"intro\": {\n      \"en\": \"Intro text for page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin.\",\n      \"fi\": \"Introteksti sivulle. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin.\"\n  },\n  \"isExit\": false\n\n}",
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
  },
  {
    "type": "get",
    "url": "/api/tours",
    "title": "Request tours",
    "name": "get_tours",
    "group": "Tours",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/api/tours",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"results\": [\n        {\n          \"name\": {\n             \"en\": \"Rakennuttaja\",\n             \"fi\": \"Constructor\"\n           },\n          \"groupId\": \"3\"\n          \"mapUrl\": \"mapUrl.com\",\n          \"feedbackUrl\": \"feedbackUrl.com\",\n          \"beaconInfoIds\": [\n           \"789\"\n          ]\n        },\n        {\n          \"name\": {\n             \"fi\": \"Opettaja\",\n             \"en\": \"Teacher\"\n           },\n          \"groupId\": \"2\"\n          \"mapUrl\": \"mapUrl.com\",\n          \"feedbackUrl\": \"feedbackUrl.com\",\n          \"beaconInfoIds\": [\n            \"123\"\n          ]\n        },\n        {\n          \"name\": {\n              \"fi\": \"Vierailija\",\n              \"en\": \"Visitor\"\n          },\n          \"groupId\": \"1\"\n          \"mapUrl\": \"mapUrl.com\",\n          \"feedbackUrl\": \"feedbackUrl.com\",\n          \"beaconInfoIds\": [\n            \"456\"\n            ]\n        }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/tours.ts",
    "groupTitle": "Tours"
  }
] });
