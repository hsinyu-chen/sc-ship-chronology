query url `https://robertsspaceindustries.com/galactapedia/graphql`

query json
`{
    "operationName": "ArticleByCategory",
    "variables": {
        "query": "R6vNW9l6Ew"
    },
    "query": "query ArticleByCategory($query: String) {\n  allArticle(where: {categories: {contains: $query}}) {\n    edges {\n      node {\n        id\n        title\n        slug\n        body\n   template {\n      ... on SpacecraftShip {\n        SpacecraftShip {\n          _meta {\n            manufacturer\n            role\n            releaseDate\n            retirementDate\n            status\n          }\n          manufacturer\n           role\n          releaseDate\n          retirementDate\n          status\n        }\n        __typename\n      }\n    }\n      thumbnail {\n          url\n        }\n        categories {\n          ... on Category {\n            name\n            slug\n            __typename\n          }\n        }\n        tags {\n          ... on Tag {\n            name\n            slug\n            __typename\n          }\n        }\n      }\n    }\n  }\n}\n"
}`