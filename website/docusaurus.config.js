module.exports={
  "title": "LF Energy Open Source Readiness",
  "tagline": "From open source curious to contributor",
  "url": "https://lfe-osr.netlify.app",
  "baseUrl": "/",
  "trailingSlash": false,
  "organizationName": "lfenergy-ospo-sig",
  "projectName": "open-source-readiness",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon/favicon-lfe.png",
  "customFields": {
    "repoUrl": "https://github.com/lfenergy-ospo-sig/open-source-readiness"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": false,
          "path": "../docs",
          "editUrl": "https://github.com/lfenergy-ospo-sig/open-source-readiness/edit/main/docs"
        },
        "blog": {},
        "theme": {
          "customCss": "src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
    './src/plugin/category-listing',
    './src/plugin/checklist-listing',
    
  ],
  "themeConfig": {
    // Algolia search disabled — original config pointed at the FINOS index.
    // To re-enable, apply for DocSearch (https://docsearch.algolia.com/apply/)
    // and replace appId/apiKey/indexName with LF Energy values.
    // "algolia": {
    //   "appId": "TBD",
    //   "apiKey": process.env.ALGOLIA_API_KEY ? process.env.ALGOLIA_API_KEY : "none",
    //   "indexName": "TBD",
    // },
    "navbar": {
      "title": "LF Energy Open Source Readiness",
      "logo": {
        "alt": "LF Energy OSPO SIG Logo",
        "src": "/img/ospo-sig-color.svg",
        "srcDark": "/img/ospo-sig-white.svg"
      },
      "items": [
		  {
			  "label": "Open Source Readiness",
			  "to": "/docs/bok/Introduction",
			  "position": "right",
		  },
		  {
			  "label": "InnerSource",
			  "to": "/docs/InnerSource/Introduction",
			  "position": "right",
		  },
		  {
			  "label": "Strategy",
			  "to": "/docs/tags/strategy",
			  "position": "right",
		  }
      ]
    },
    "image": "/img/site-preview.png",
    "footer": {
      "links": [
        {
          "title": "RESOURCES",
          "items": [
            {
              "label": "Open Source Readiness",
              "to": "/docs/bok/Introduction"
            },
            {
              "label": "Presentations",
              "to": "/docs/presentations/Introduction"
            },
            {
              "label": "Training",
              "to": "/docs/osr-resources/Training"
            },
            {
              "label": "InnerSource",
              "to": "/docs/InnerSource/Introduction"
            },            
          ]
        },
         {
          "title": "DOCS",
          "items": [
            {
              "label": "Artifacts",
              "to": "/docs/bok/Artifacts/Introduction"
            },
            {
              "label": "Activities",
              "to": "docs/bok/Activities/Introduction"
            },
            {
              "to": "docs/bok/OSMM/Introduction",
              "label": 'Maturity',
            },
            {
              "to": "docs/bok/Roles/Introduction",
              "label": 'Roles',
            },
            {
              "to": "docs/bok/Regulations/Introduction",
              "label": 'Regulations',
            }
          ]
        },
         {
          "title": "EVENTS",
          "items": [
            {
              "label": "OSR Meetings",
              "to": "/docs/bok/Introduction#how-do-i-get-involved"
            },
            {
              "label": "InnerSource Meetings",
              "to": "/docs/InnerSource/Introduction#meetings"
            },
            {
              "label": "LF Energy Events",
              "to": "https://lfenergy.org/newsroom/events/"
            }
          ]
        },
        {
          "title": "COMMUNITY",
          "items" : [
            {
              "label": "LF Energy Website",
              "to": "https://lfenergy.org"
            },
            {
              "label": "LF Energy TAC",
              "to": "https://tac.lfenergy.org/"
            }
          ]
        },
        {
          "title": "UPDATES",
          "items": [
            {
              "html": "<a title=\"GitHub\" href=\"https://github.com/lfenergy-ospo-sig/open-source-readiness\"><img src=\"https://img.shields.io/github/stars/lfenergy-ospo-sig/open-source-readiness?label=Open%20Source%20Readiness&style=social\" /></a>"
            },
            {
              "label": "LinkedIn",
              "to": "https://www.linkedin.com/company/lf-energy-foundation"
            },
            {
              "label": "OSPO SIG Mailing List",
              "to": "mailto:ospo-sig+subscribe@lists.lfenergy.org?subject=Subscribe%20Me&body=Please%20subscribe%20me%20to%20the%20OSPO%20SIG%20Mailing%20List"
            }
          ]
        }
      ],
      "copyright": "<span class=\"footer-copyright\">Copyright © 2026 - LF Energy</span>",
      "logo": {
        "src": "/img/ospo-sig-color.svg",
        "srcDark": "/img/ospo-sig-white.svg",
        "alt": "LF Energy OSPO SIG Logo",
        "width": 50
      }
    }
  }
}
