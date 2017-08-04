import uniqueId from 'lodash/uniqueId';

const page = {
  sections: [
    {
      name: 'Basic',
      groups: {
        tp: {
          name: 'HeadingSubheadingButton',
          elements: {
            heading: {
              style: {
                fontFamily: 'Montserrat'
              },
            },
          }
        }
      },
      style: {
        paddingBottom: 4,
        paddingTop: 6,
        imageFilter: '1957',
      },
      color: {
        backgroundImage: {
          content: {url:'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/5939b06ee3df282dbda0888f/1496952956394/Tori%27s+Bakeshop+Ca'},
        }
      }
    }
  ]
}


export default {
  palette: ['#ffc4c4', '#7ec6cc', '#fffac6'],
  // palette: ['#def7f2', '#d5e0de','#797c7c'],
  backgroundImages: [
    {url:'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/5939b06ee3df282dbda0888f/1496952956394/Tori%27s+Bakeshop+Ca'}
  ],
  images: [
    {url:'https://s-media-cache-ak0.pinimg.com/736x/8f/dd/3c/8fdd3ccb3a6e4efa9d6750ac2dbdf893--chocolate-layer-cakes-chocolate-coffee.jpg'},
    {url:'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {url:'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {url:'http://www.howsweeteats.com/wp-content/uploads/2014/08/boozy-coconut-hot-fudge-milkshakes-I-howsweeteats.com-2.jpg'},
    {url:'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {url:'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/28/12/enhanced/webdr02/enhanced-1509-1414514224-18.jpg?crop=395:598;57,0&downsize=715:*&output-format=auto&output-quality=auto'}
  ],
  headerImages: [
    {url:'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {url:'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {url:'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {url:'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'}
  ],
  page
}

const __page = {
  "sections": [
    {
      "name": "Navbar1",
      "style": {
        "paddingHorizontal": 4,
        "paddingVertical": 2
      },
      "color": {
        "background": "#ffffff",
        "text": "#211a1a"
      },
      "elements": {
        "logo": {
          "name": "LogoImage",
          "style": {
            "height": 35,
            "aspectRatio": "auto",
            "borderRadius": "0"
          },
          "content": {
            "src": "\/images\/logo.png"
          },
          "color": {
            
          },
          "elements": {
            
          },
          "groups": {
            
          }
        }
      },
      "groups": {
        "buttonList": {
          "name": "ButtonList",
          "style": {
            "textAlign": "inherit",
            "gutter": 2
          },
          "color": {},
          "elements": {
            "buttons": {
              "name": "SmallButton",
              "style": {
                "marginVertical": 2,
                "paddingVertical": 2,
                "paddingHorizontal": 3,
                "fontSize": 2,
                "minWidth": 1,
                "borderRadius": 2,
                "borderWidth": 1,
                "textTransform": "none"
              },
              "content": {
                "text": "View Samples",
                "href": "#"
              },
              "color": {
                "background": "#211a1a",
                "borderColor": "#211a1a",
                "text": "#ffffff"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        },
        "links": {
          "name": "HorizontalList",
          "style": {
            "marginHorizontal": 2,
            "gutter": 2
          },
          "color": {
            
          },
          "elements": {
            "links": {
              "name": "ReadableLink",
              "style": {
                "margin": "0"
              },
              "content": {
                "text": "Pricing"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        }
      }
    },
    {
      "name": 'Basic',
      "style": {
        "maxWidth": 1024,
        "paddingTop": 6,
        "paddingBottom": 6,
        "margin": "auto",
        "fontSize": 3
      },
      "color": {
        "background": "#ffffff",
        "text": "#211a1a"
      },
      "elements": {
        
      },
      "groups": {
        "tp": {
          "name": "HeadingSubheadingButton",
          "style": {
            "maxWidth": "auto",
            "buffer": 3
          },
          "color": {
            
          },
          "elements": {
            "heading": {
              "name": "BasicHeading",
              "style": {
                "fontSize": 5,
                "fontWeight": 6,
                "lineHeight": 1,
                "textTransform": "none",
                "marginBottom": 4,
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "Meet pixel. Phone by Google."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "subheading": {
              "name": "BasicSubheading",
              "style": {
                "textTransform": "none",
                "fontSize": 4,
                "fontWeight": 4,
                "marginBottom": 4,
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "From Dog Walkers and Babysitters, to Hairstylists and Personal Trainers, to ...."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            "buttonList": {
              "name": "ButtonList",
              "style": {
                "textAlign": "inherit",
                "gutter": "2"
              },
              "color": {
                
              },
              "elements": {
                "buttons": {
                  "name": "BasicButton",
                  "style": {
                    "marginVertical": 2,
                    "paddingVertical": 3,
                    "paddingHorizontal": 4,
                    "fontSize": 2,
                    "minWidth": 2,
                    "borderRadius": "2",
                    "borderWidth": "1",
                    "textTransform": "none"
                  },
                  "content": {
                    "text": "Free Trial",
                    "href": "#"
                  },
                  "color": {
                    "background": "#211a1a",
                    "borderColor": "#211a1a",
                    "text": "#ffffff"
                  },
                  "elements": {
                    
                  },
                  "groups": {
                    
                  }
                }
              },
              "groups": {
                
              }
            }
          }
        }
      }
    },
    {
      "name": "Basic1_2",
      "style": {
        "paddingVertical": 6,
        "maxWidth": 1024,
        "margin": "auto",
        "gutter": 4
      },
      "color": {
        "background": "#ffffff",
        "text": "#211a1a"
      },
      "elements": {
        
      },
      "groups": {
        "tp": {
          "name": "KickerHeadingParagraph",
          "style": {
            "maxWidth": "auto",
            "buffer": "3"
          },
          "color": {
            
          },
          "elements": {
            "kicker": {
              "name": "BasicKicker",
              "style": {
                "fontSize": 3,
                "marginBottom": 2,
                "textTransform": "none",
                "fontWeight": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "I am a BasicKicker"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "heading": {
              "name": "BasicHeading",
              "style": {
                "fontSize": "5",
                "fontWeight": "6",
                "lineHeight": "1",
                "textTransform": "none",
                "marginBottom": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "Meet pixel. Phone by Google."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "paragraph": {
              "name": "BasicParagraph",
              "style": {
                "marginBottom": 4,
                "lineHeight": 3
              },
              "content": {
                "text": "Id amet do reprehenderit mollit ad tempor consectetur ea fugiat nisi aute ex. Deserunt voluptate ut consectetur voluptate consequat elit sit sit do amet aliqua ipsum aliquip. Ad occaecat veniam tempor quis consectetur."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        },
        "media": {
          "name": "BlockImage",
          "style": {
            
          },
          "color": {
            
          },
          "elements": {
            "icon": {
              "name": "BasicImage",
              "style": {
                "aspectRatio": "auto",
                "borderRadius": "0"
              },
              "content": {
                "src": "https:\/\/4.bp.blogspot.com\/-G15GpgI5hR4\/VxzlyIKd8II\/AAAAAAAAJ58\/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB\/s1600\/IMG_3360.JPG"
              },
              "color": {
                
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        }
      }
    },
    {
      "name": "BasicWide1_2",
      "style": {
        "paddingVertical": "6",
        "maxWidth": "1024",
        "margin": "auto"
      },
      "color": {
        "background": "#f7f5f5",
        "text": "#211a1a"
      },
      "elements": {
        "image": {
          "name": "CoverImage",
          "style": {
            "aspectRatio": "4x3"
          },
          "content": {
            "src": "https:\/\/s-media-cache-ak0.pinimg.com\/736x\/8f\/dd\/3c\/8fdd3ccb3a6e4efa9d6750ac2dbdf893--chocolate-layer-cakes-chocolate-coffee.jpg"
          },
          "color": {
            
          },
          "elements": {
            
          },
          "groups": {
            
          }
        }
      },
      "groups": {
        "tp": {
          "name": "HeadingSubheadingButton",
          "style": {
            "maxWidth": "auto",
            "buffer": "3"
          },
          "color": {
            
          },
          "elements": {
            "heading": {
              "name": "BasicHeading",
              "style": {
                "fontSize": "5",
                "fontWeight": "6",
                "lineHeight": "1",
                "textTransform": "none",
                "marginBottom": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "Convert your deals into invoices."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "subheading": {
              "name": "BasicSubheading",
              "style": {
                "textTransform": "none",
                "fontSize": "4",
                "fontWeight": "4",
                "marginBottom": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "Fully automated invoicing directly from your CRM."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            "buttonList": {
              "name": "ButtonList",
              "style": {
                "textAlign": "inherit",
                "gutter": "2"
              },
              "color": {
                
              },
              "elements": {
                "buttons": {
                  "name": "BasicButton",
                  "style": {
                    "marginVertical": "2",
                    "paddingVertical": "3",
                    "paddingHorizontal": "4",
                    "fontSize": "2",
                    "minWidth": "2",
                    "borderRadius": "2",
                    "borderWidth": "1",
                    "textTransform": "none"
                  },
                  "content": {
                    "text": "Download Now",
                    "href": "#"
                  },
                  "color": {
                    "background": "#211a1a",
                    "borderColor": "#211a1a",
                    "text": "#ffffff"
                  },
                  "elements": {
                    
                  },
                  "groups": {
                    
                  }
                }
              },
              "groups": {
                
              }
            }
          }
        }
      }
    },
    {
      "name": "Basic1_2",
      "style": {
        "paddingVertical": "6",
        "maxWidth": "1024",
        "margin": "auto",
        "gutter": "4"
      },
      "color": {
        "background": "#ffffff",
        "text": "#211a1a"
      },
      "elements": {
        
      },
      "groups": {
        "tp": {
          "name": "HeadingParagraphLink",
          "style": {
            "maxWidth": "auto",
            "buffer": "3"
          },
          "color": {
            
          },
          "elements": {
            "heading": {
              "name": "BasicHeading",
              "style": {
                "fontSize": "5",
                "fontWeight": "6",
                "lineHeight": "1",
                "textTransform": "none",
                "marginBottom": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "The digital assistant for cost optimization"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "links": {
              "name": "BasicLink",
              "style": {
                
              },
              "content": {
                "text": "I am a BasicLink"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "paragraph": {
              "name": "BasicParagraph",
              "style": {
                "marginBottom": "4",
                "lineHeight": "3"
              },
              "content": {
                "text": "Qui laborum duis voluptate aliqua enim nostrud do ut sint dolor irure nisi et. Tempor velit quis proident pariatur proident proident reprehenderit aliquip commodo aliqua. Consectetur reprehenderit eu laboris consequat laborum qui sint exercitation tempor quis id laborum incididunt."
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        },
        "media": {
          "name": "Gallery",
          "style": {
            "padding": 2
          },
          "color": {
            
          },
          "elements": {
            "images": {
              "name": "BasicImage",
              "style": {
                "aspectRatio": "4x3",
                "borderRadius": "0"
              },
              "content": {
                "src": "https:\/\/img.buzzfeed.com\/buzzfeed-static\/static\/2014-10\/28\/12\/enhanced\/webd\u2026pg?crop=395:598;57,0&downsize=715:*&output-format=auto&output-quality=auto"
              },
              "color": {
                
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        }
      }
    },
    {
      "name": "CallToAction",
      "style": {
        "paddingVertical": "6",
        "maxWidth": "1024",
        "margin": "auto"
      },
      "color": {
        "background": "#ffffff",
        "text": "#211a1a"
      },
      "elements": {
        
      },
      "groups": {
        "tp": {
          "name": "HeadingSubheading",
          "style": {
            "maxWidth": "auto",
            "buffer": "3"
          },
          "color": {
            
          },
          "elements": {
            "heading": {
              "name": "BasicHeading",
              "style": {
                "fontSize": "5",
                "fontWeight": "6",
                "lineHeight": "1",
                "textTransform": "none",
                "marginBottom": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "The Ultimate Guide to Xsolla"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            },
            "subheading": {
              "name": "BasicSubheading",
              "style": {
                "textTransform": "none",
                "fontSize": "4",
                "fontWeight": "4",
                "marginBottom": "4",
                "fontFamily": "Source Sans Pro"
              },
              "content": {
                "text": "Serve fast maps from your infrastructure"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        },
        "interaction": {
          "name": "ButtonList",
          "style": {
            "textAlign": "inherit",
            "gutter": "2"
          },
          "color": {
            
          },
          "elements": {
            "buttons": {
              "name": "BasicButton",
              "style": {
                "marginVertical": "2",
                "paddingVertical": "3",
                "paddingHorizontal": "4",
                "fontSize": "2",
                "minWidth": "2",
                "borderRadius": "2",
                "borderWidth": "1",
                "textTransform": "none"
              },
              "content": {
                "text": "Sign Up Free",
                "href": "#"
              },
              "color": {
                "background": "#211a1a",
                "borderColor": "#211a1a",
                "text": "#ffffff"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        }
      }
    },
    {
      "name": "Footer1",
      "style": {
        "paddingVertical": "6",
        "maxWidth": "1024",
        "margin": "auto"
      },
      "color": {
        "background": "#ffffff",
        "text": "#211a1a"
      },
      "elements": {
        "copyright": {
          "name": "Copyright",
          "style": {
            "textTransform": "none",
            "fontSize": 3
          },
          "content": {
            "text": "I am a Copyright"
          },
          "color": {
            "text": "#211a1a"
          },
          "elements": {
            
          },
          "groups": {
            
          }
        }
      },
      "groups": {
        "button": {
          "name": "ButtonList",
          "style": {
            "textAlign": "inherit",
            "gutter": "2"
          },
          "color": {
            
          },
          "elements": {
            "buttons": {
              "name": "BasicButton",
              "style": {
                "marginVertical": "2",
                "paddingVertical": "3",
                "paddingHorizontal": "4",
                "fontSize": "2",
                "minWidth": "2",
                "borderRadius": "2",
                "borderWidth": "1",
                "textTransform": "none"
              },
              "content": {
                "text": "View Samples",
                "href": "#"
              },
              "color": {
                "background": "#211a1a",
                "borderColor": "#211a1a",
                "text": "#ffffff"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        },
        "links": {
          "name": "HorizontalList",
          "style": {
            "marginHorizontal": "2",
            "gutter": "2"
          },
          "color": {
            
          },
          "elements": {
            "links": {
              "name": "ReadableLink",
              "style": {
                "margin": "0"
              },
              "content": {
                "text": "Product"
              },
              "color": {
                "text": "#211a1a"
              },
              "elements": {
                
              },
              "groups": {
                
              }
            }
          },
          "groups": {
            
          }
        }
      }
    }
  ]
}