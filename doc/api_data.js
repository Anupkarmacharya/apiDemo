define({ "api": [
  {
    "type": "get",
    "url": "/discover",
    "title": "Get discover from backend",
    "name": "GetDiscover",
    "group": "Discover",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/0.0.1 200 OK\n\t{\n\t\t\"firstName\":\"Anup\",\n\"lastName\":\"ok\",\n\t\t\"emailId\":\"programmer_anup@hotmail.com\",\n\t\t\"phoneNumber\":9860133116\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.2.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Lead Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./discover.js",
    "groupTitle": "Discover"
  },
  {
    "type": "get",
    "url": "/discover",
    "title": "Get discover from backend",
    "name": "GetDiscover",
    "group": "Discover",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/0.0.1 200 OK\n{\n\t\"firstName\":\"Anup\",\n\t\"emailId\":\"programmer_anup@hotmail.com\",\n\t\"phoneNumber\":9860133116\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Lead Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_oldDiscover.js",
    "groupTitle": "Discover"
  },
  {
    "type": "post",
    "url": "/discover",
    "title": "Post discovers Information",
    "name": "PostDiscober",
    "group": "Discover",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      HTTP/0.0.1 200 OK\n      {\n              \"firstName\":\"Anup\",\n\t\t\t\t\t\t\t\t\"lastName\":\"ok\",\n              \"emailId\":\"programmer_anup@hotmail.com\",\n              \"phoneNumber\":9860133116\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.2.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not inserted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Leads were inserted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./discover.js",
    "groupTitle": "Discover"
  },
  {
    "type": "post",
    "url": "/discover",
    "title": "Post discovers Information",
    "name": "PostDiscober",
    "group": "Discover",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/0.0.1 200 OK\n{\n        \"firstName\":\"Anup\",\n        \"emailId\":\"programmer_anup@hotmail.com\",\n        \"phoneNumber\":9860133116\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not inserted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Leads were inserted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_oldDiscover.js",
    "groupTitle": "Discover"
  },
  {
    "type": "get",
    "url": "/lead",
    "title": "Get Leads from backend",
    "name": "GetLead",
    "group": "Lead",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/0.0.1 200 OK\n{\n\t\"firstName\":\"Anup\",\n\t\"emailId\":\"programmer_anup@hotmail.com\",\n\t\"phoneNumber\":9860133116\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Lead Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./leads.js",
    "groupTitle": "Lead"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Post Leads Information",
    "name": "PostUser",
    "group": "Lead",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/0.0.1 200 OK\n{\n        \"firstName\":\"Anup\",\n        \"emailId\":\"programmer_anup@hotmail.com\",\n        \"phoneNumber\":9860133116\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not inserted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Leads were inserted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./leads.js",
    "groupTitle": "Lead"
  },
  {
    "type": "get",
    "url": "/sourcing",
    "title": "Get Leads from backend",
    "name": "GetSourcing",
    "group": "Sourcing",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/0.0.1 200 OK\n{\n\t\"firstName\":\"Anup\",\n\t\"emailId\":\"programmer_anup@hotmail.com\",\n\t\"phoneNumber\":9860133116\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Lead Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./leads.js",
    "groupTitle": "Sourcing"
  },
  {
    "type": "post",
    "url": "/sourcing",
    "title": "Post Leads Information",
    "name": "PostSourcing",
    "group": "Sourcing",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailID",
            "description": "<p>EmailID from leads</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone Number of Client from leads</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/0.0.1 200 OK\n{\n        \"firstName\":\"Anup\",\n        \"emailId\":\"programmer_anup@hotmail.com\",\n        \"phoneNumber\":9860133116\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeadsNotFound",
            "description": "<p>The Lead was not inserted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/0.0.1 404 Not Found\n{\n  \"error\": \"No Leads were inserted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./leads.js",
    "groupTitle": "Sourcing"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_parakhi_apiDemo_doc_main_js",
    "groupTitle": "_home_parakhi_apiDemo_doc_main_js",
    "name": ""
  }
] });
