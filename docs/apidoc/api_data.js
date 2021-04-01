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
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/api/beacon_info?groupId=3&beaconId=789",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"result\":[\n     {\n        \"id\":1,\n        \"location\":{\n           \"en\":\"Giants stairs\",\n           \"fi\":\"Jättiläisten portaat\"\n        },\n        \"notification\":{\n           \"en\":\"This is notification\",\n           \"fi\":\"Tässä ilmoitus\"\n        },\n        \"conditions\":[\n\n        ],\n        \"isExit\":false\n     },\n     {\n        \"id\":2,\n        \"location\":{\n           \"fi\":\"Jättiläisten portaat toiseen kertaan ja exit\",\n           \"en\":\"Giants stairs second time and exit\"\n        },\n        \"notification\":{\n           \"en\":\"This is notification\",\n           \"fi\":\"Tässä ilmoitus\"\n        },\n        \"conditions\":[\n           1,\n           3\n        ],\n        \"isExit\":true\n     }\n  ]\n}",
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
    "url": "/api/beacon_content",
    "title": "Request Beacon content",
    "name": "get_beaconContent",
    "group": "Beacon_content",
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
            "field": "beaconInfoId",
            "description": "<p>BeaconInfoID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:8080/api/beacon_content?groupId=3&beaconInfoId=1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"result\":{\n     \"notification\":{\n        \"en\":\"This is notification\",\n        \"fi\":\"Tässä ilmoitus\"\n     },\n     \"buttonRedirectUrl\":\"https://www.imatra.fi/kylät-ja-kaupunginosat/mansikkala\",\n     \"videoDescription\":{\n        \"fi\":\"Videon kuvausteksti. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus.\",\n        \"en\":\"Video description. Nam sapien urna, pharetra vel diam a, tempor placerat massa. Phasellus laoreet pellentesque magna ac porta. Duis consequat lectus et tellus sagittis blandit. In aliquam malesuada est, nec volutpat neque varius id. Nulla id sem dui. Praesent lobortis massa rutrum leo consequat feugiat. Nulla egestas bibendum placerat. Aenean at congue justo. Praesent elementum consequat ipsum. Vestibulum et efficitur justo, et pellentesque risus.\"\n     },\n     \"id\":2,\n     \"introVideoUrl\":\"https://www.youtube.com/watch?v=6LZy9gPwugk\",\n     \"location\":{\n        \"en\":\"Giants stairs second time and exit\",\n        \"fi\":\"Jättiläisten portaat toiseen kertaan ja exit\"\n     },\n     \"isExit\":true,\n     \"mediaUrl\":{\n        \"imageUrl\":\"https://storage.googleapis.com/imatra_media/images/j_portaat.jpg\",\n        \"videoUrl\":\"https://www.youtube.com/embed/6LZy9gPwugk\"\n     },\n     \"beaconId\":\"789\",\n     \"intro\":{\n        \"en\":\"Intro text for page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin.\",\n        \"fi\":\"Introteksti sivulle. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lobortis lectus vel sollicitudin.\"\n     },\n     \"conditions\":[\n        1,\n        3\n     ],\n     \"imageDescription\":{\n        \"en\":\"Welcome to giants stairs! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus\",\n        \"fi\":\"Tervetuloa jättiläisten portaille! Donec mattis risus massa, ac tempor nisi suscipit et. Integer pharetra ac nisi eu congue. Fusce feugiat tortor at elit posuere, id scelerisque purus ultrices. In felis arcu, volutpat sit amet ligula nec, venenatis molestie quam. Duis ut pellentesque diam. Suspendisse potenti. Donec mattis nunc nec eros sodales, ut imperdiet ex tempus.\"\n     }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/beacon_content.ts",
    "groupTitle": "Beacon_content"
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
          "content": "    HTTP/1.1 200 OK\n{\n  \"results\":[\n     {\n        \"name\":{\n           \"fi\":\"Rakennuttaja\",\n           \"en\":\"Contractor\"\n        },\n        \"groupId\":\"3\",\n        \"mapUrl\":\"https://st.depositphotos.com/1172692/1379/v/950/depositphotos_13793704-stock-illustration-abstract-city-map-vector-illustration.jpg\",\n        \"feedbackUrl\":\"\",\n        \"beaconIds\":[\n           \"789\",\n           \"789\",\n           \"3092\"\n        ],\n        \"beaconInfoIds\":[\n           1,\n           2,\n           3\n        ],\n        \"introVideoUrl\":\"https://www.youtube.com/watch?v=6LZy9gPwugk\"\n     },\n     {\n        \"name\":{\n           \"en\":\"Parent\",\n           \"fi\":\"Vanhempi\"\n        },\n        \"groupId\":\"1\",\n        \"mapUrl\":\"https://st.depositphotos.com/1172692/1379/v/950/depositphotos_13793704-stock-illustration-abstract-city-map-vector-illustration.jpg\",\n        \"feedbackUrl\":\"\",\n        \"beaconIds\":[\n           \"789\"\n        ],\n        \"beaconInfoIds\":[\n           3\n        ],\n        \"introVideoUrl\":\"https://www.youtube.com/watch?v=6LZy9gPwugk\"\n     },\n     {\n        \"name\":{\n           \"en\":\"Teacher\",\n           \"fi\":\"Opettaja\"\n        },\n        \"groupId\":\"2\",\n        \"mapUrl\":\"https://st.depositphotos.com/1172692/1379/v/950/depositphotos_13793704-stock-illustration-abstract-city-map-vector-illustration.jpg\",\n        \"feedbackUrl\":\"\",\n        \"beaconIds\":[\n           \"789\"\n        ],\n        \"beaconInfoIds\":[\n           2\n        ],\n        \"introVideoUrl\":\"https://www.youtube.com/watch?v=6LZy9gPwugk\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/tours.ts",
    "groupTitle": "Tours"
  }
] });
