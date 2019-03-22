TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 93,
  "thumbnailUrl": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_t.jpg",
  "hfovMin": 60,
  "partial": false,
  "hfov": 360,
  "frames": [
   {
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "width": 3000,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_t.jpg",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "width": 3000,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 4.633537171069046,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.6135290557378226,
        "yaw": -172.8842864871914,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 47,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BC09A935_B0E6_DF09_41E3_BD5F3F4FB54F, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_B8F85E55_B099_3509_41D3_8ADE3BAD9EE7",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.6135290557378226,
        "roll": 0,
        "pitch": 4.633537171069046,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -172.8842864871914
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 2.259246795242226,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.622559591068808,
        "yaw": 176.1814096243062,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 47,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_B8F84E55_B099_3509_41D8_054D89085F6A",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.622559591068808,
        "roll": 0,
        "pitch": 2.259246795242226,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 176.1814096243062
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": -3.5294184483704565,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.618501467876148,
        "yaw": -156.32721943512848,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 47,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE282952_B0F9_7F0B_41CA_FA8F9799C71C, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_B8F83E55_B099_3509_41CF_3D68F206FF47",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.618501467876148,
        "roll": 0,
        "pitch": -3.5294184483704565,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -156.32721943512848
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": -2.5609143046767056,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.621756916501022,
        "yaw": -88.73046907298459,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 47,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE06058B_B0FF_571A_41D2_18EFBB704DB2, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_B8F82E56_B099_350B_41E5_6335D3DA2523",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.621756916501022,
        "roll": 0,
        "pitch": -2.5609143046767056,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -88.73046907298459
       }
      ]
     },
     {
      "rotationY": 0,
      "id": "popup_BC09A935_B0E6_DF09_41E3_BD5F3F4FB54F",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 860,
         "width": 872,
         "url": "media/popup_BC09A935_B0E6_DF09_41E3_BD5F3F4FB54F_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 504,
         "width": 512,
         "url": "media/popup_BC09A935_B0E6_DF09_41E3_BD5F3F4FB54F_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.6135290557378226,
      "pitch": 4.633537171069046,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -172.8842864871914,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_BE06058B_B0FF_571A_41D2_18EFBB704DB2",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 905,
         "width": 877,
         "url": "media/popup_BE06058B_B0FF_571A_41D2_18EFBB704DB2_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 512,
         "width": 496,
         "url": "media/popup_BE06058B_B0FF_571A_41D2_18EFBB704DB2_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.5069167324573223,
      "pitch": -2.5609143046767056,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -88.73046907298459,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_BE282952_B0F9_7F0B_41CA_FA8F9799C71C",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 821,
         "width": 871,
         "url": "media/popup_BE282952_B0F9_7F0B_41CA_FA8F9799C71C_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 482,
         "width": 512,
         "url": "media/popup_BE282952_B0F9_7F0B_41CA_FA8F9799C71C_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.618501467876148,
      "pitch": -3.5294184483704565,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -156.32721943512848,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 90,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1275,
         "width": 1275,
         "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "inertia": false,
      "id": "panorama_B8F89E55_B099_3509_41DF_B60C5441547F_tcap0",
      "angle": 0
     },
     {
      "rotate": false,
      "class": "CeilingCapPanoramaOverlay",
      "hfov": 90,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1275,
         "width": 1275,
         "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "inertia": false,
      "id": "panorama_B8F89E55_B099_3509_41DF_B60C5441547F_ccap0",
      "angle": 0
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "width": 3000,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "width": 3000,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "width": 3000,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "width": 3000,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_B8F89E55_B099_3509_41DF_B60C5441547F_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "audios": [
   {
    "maximumAngle": 267.0315789473684,
    "audio": {
     "mp3Url": "media/audio_C63EBC37_CF82_57C6_41DD_26F5EF317770.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_C63EBC37_CF82_57C6_41DD_26F5EF317770.ogg"
    },
    "pitch": 10.88205868671416,
    "class": "DirectionalPanoramaAudio",
    "yaw": 92.46315789473684,
    "autoplay": true,
    "id": "audio_C63EBC37_CF82_57C6_41DD_26F5EF317770",
    "loop": true
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "label": "outside-stitch-V3",
  "id": "panorama_B8F89E55_B099_3509_41DF_B60C5441547F",
  "class": "Panorama"
 },
 {
  "buttonZoomOut": "this.IconButton_9B3402EF_95D9_661C_41CF_8988A8059367",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "buttonZoomIn": "this.IconButton_9B9BB541_95DF_2204_41C6_CAA4E78DDF76",
  "buttonCardboardView": "this.IconButton_D6B36998_9EAC_C02F_41DB_A2B808181407",
  "mouseControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.23663261061968527,
   "class": "PanoramaCameraPosition",
   "yaw": -162.56243697478922
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_B8F89E55_B099_3509_41DF_B60C5441547F_camera"
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_t.jpg",
  "hfovMin": 60,
  "hfov": 360,
  "frames": [
   {
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2056,
       "width": 2056,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_t.jpg",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2056,
       "width": 2056,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 6.162607201092684,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.873589229596993,
        "yaw": 127.7491792785756,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_A39F9FD3_AB0B_7428_41C1_D51AAD297D9D",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.873589229596993,
        "roll": 0,
        "pitch": 6.162607201092684,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 127.7491792785756
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 1.7895136186829734,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.894203736941521,
        "yaw": 163.97430781610444,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE055D59_B0F9_D706_41D2_DE34AECFED76, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A39FBFD3_AB0B_7428_418F_C524927D0371",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.894203736941521,
        "roll": 0,
        "pitch": 1.7895136186829734,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 163.97430781610444
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 19.969896205899214,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.661839709044945,
        "yaw": -149.10387368039014,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE348A08_B0E7_7D07_41D9_10305FD68170, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A39FAFD3_AB0B_7428_41B8_079A73173B4A",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.661839709044945,
        "roll": 0,
        "pitch": 19.969896205899214,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -149.10387368039014
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 12.637424638841548,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.801717141306044,
        "yaw": -167.57675810688707,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_A0F1878E_B0E6_F31B_41D3_0220074833A5, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A39FDFD4_AB0B_7428_41E0_0253C435B12B",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.801717141306044,
        "roll": 0,
        "pitch": 12.637424638841548,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -167.57675810688707
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 3.2550654550293276,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.889818134456039,
        "yaw": -151.1763033457799,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_A0B9355E_B0E9_773B_41E3_55638A31C46C, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A39FCFD4_AB0B_7428_41DD_6E9335ABAF40",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.889818134456039,
        "roll": 0,
        "pitch": 3.2550654550293276,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -151.1763033457799
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 5.173006282659452,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.880235017203278,
        "yaw": -165.44780763244125,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BF07E6C3_B0EB_3509_41D7_66EB085B4F87, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A39FFFD4_AB0B_7428_41C6_06E8EEAEAB71",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.880235017203278,
        "roll": 0,
        "pitch": 5.173006282659452,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -165.44780763244125
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 4.880838392455352,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.8819758703452423,
        "yaw": -102.01732966925042,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 35,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_A39FEFD4_AB0B_7428_41C6_246B174FB85C",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 70,
           "width": 70,
           "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 3.8819758703452423,
        "roll": 0,
        "pitch": 4.880838392455352,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -102.01732966925042
       }
      ]
     },
     {
      "rotationY": 0,
      "id": "popup_BE055D59_B0F9_D706_41D2_DE34AECFED76",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 943,
         "width": 881,
         "url": "media/popup_BE055D59_B0F9_D706_41D2_DE34AECFED76_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 512,
         "width": 478,
         "url": "media/popup_BE055D59_B0F9_D706_41D2_DE34AECFED76_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 4.156444044273641,
      "pitch": 1.5112204832469804,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": 163.97430781610444,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_BE348A08_B0E7_7D07_41D9_10305FD68170",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 860,
         "width": 872,
         "url": "media/popup_BE348A08_B0E7_7D07_41D9_10305FD68170_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 504,
         "width": 512,
         "url": "media/popup_BE348A08_B0E7_7D07_41D9_10305FD68170_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.680839300173074,
      "pitch": 19.13501679959123,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -149.10387368039014,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_A0F1878E_B0E6_F31B_41D3_0220074833A5",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 821,
         "width": 871,
         "url": "media/popup_A0F1878E_B0E6_F31B_41D3_0220074833A5_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 482,
         "width": 512,
         "url": "media/popup_A0F1878E_B0E6_F31B_41D3_0220074833A5_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.801717141306044,
      "pitch": 12.637424638841548,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -167.57675810688707,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_A0B9355E_B0E9_773B_41E3_55638A31C46C",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 821,
         "width": 871,
         "url": "media/popup_A0B9355E_B0E9_773B_41E3_55638A31C46C_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 482,
         "width": 512,
         "url": "media/popup_A0B9355E_B0E9_773B_41E3_55638A31C46C_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.889818134456039,
      "pitch": 3.2550654550293276,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -151.1763033457799,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_BF07E6C3_B0EB_3509_41D7_66EB085B4F87",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 905,
         "width": 877,
         "url": "media/popup_BF07E6C3_B0EB_3509_41D7_66EB085B4F87_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 512,
         "width": 496,
         "url": "media/popup_BF07E6C3_B0EB_3509_41D7_66EB085B4F87_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 3.7583340067755535,
      "pitch": 5.173006282659452,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -165.44780763244125,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 67.5,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "inertia": false,
      "id": "panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_tcap0",
      "angle": 0
     },
     {
      "rotate": false,
      "class": "CeilingCapPanoramaOverlay",
      "hfov": 67.5,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "inertia": false,
      "id": "panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_ccap0",
      "angle": 0
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2056,
       "width": 2056,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2056,
       "width": 2056,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2056,
       "width": 2056,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2056,
       "width": 2056,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "label": "rec-inside2-V1",
  "partial": false,
  "id": "panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A",
  "class": "Panorama"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 3.632831086439351,
   "class": "PanoramaCameraPosition",
   "yaw": -160.25340466926096
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_camera"
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_t.jpg",
  "hfovMin": 60,
  "hfov": 360,
  "frames": [
   {
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2168,
       "width": 2168,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_t.jpg",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2168,
       "width": 2168,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 6.919341306997826,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.193962424534098,
        "yaw": -86.60206868926913,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "width": 40,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_A3BBF789_AB09_5438_41D1_85704F127853",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "width": 80,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 4.193962424534098,
        "roll": 0,
        "pitch": 6.919341306997826,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -86.60206868926913
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 3.0651274138657056,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.218688384835531,
        "yaw": -174.04217326623373,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "width": 40,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BF22E1AD_B0EA_CF19_41DD_DBEDAC439E95, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A3BBC789_AB09_5438_41B7_2670712F2FE3",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "width": 80,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 4.218688384835531,
        "roll": 0,
        "pitch": 3.0651274138657056,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -174.04217326623373
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": 0.22799774253234015,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.224698837828409,
        "yaw": -79.85780470544428,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "width": 40,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BF359A2C_B0E9_3D1F_41E3_1BEBAD68F5E9, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A3BBD789_AB09_5438_41D3_C1B4A26311EB",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "width": 80,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 4.224698837828409,
        "roll": 0,
        "pitch": 0.22799774253234015,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -79.85780470544428
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "roll": 0,
        "pitch": -1.52750076724854,
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.2790387613182475,
        "yaw": 152.1478261003837,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_BE0F0616_B0EE_D50A_41A6_611FBDA2DA7A, {'borderSize':0,'rollOverIconWidth':20,'pressedIconLineWidth':5,'paddingBottom':5,'rollOverBorderColor':'#000000','paddingRight':5,'iconColor':'#000000','pressedBorderColor':'#000000','backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverBorderSize':0,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverIconHeight':20,'pressedIconHeight':20}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_A3B8278A_AB09_5438_41E4_CA1A07CF3D3A",
      "enabledInCardboard": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 5.2790387613182475,
        "roll": 0,
        "pitch": -1.52750076724854,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 152.1478261003837
       }
      ]
     },
     {
      "rotationY": 0,
      "id": "popup_BF22E1AD_B0EA_CF19_41DD_DBEDAC439E95",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 903,
         "width": 877,
         "url": "media/popup_BF22E1AD_B0EA_CF19_41DD_DBEDAC439E95_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 512,
         "width": 497,
         "url": "media/popup_BF22E1AD_B0EA_CF19_41DD_DBEDAC439E95_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 4.093600421401705,
      "pitch": 3.0651274138657056,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -174.04217326623373,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_BF359A2C_B0E9_3D1F_41E3_1BEBAD68F5E9",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 860,
         "width": 872,
         "url": "media/popup_BF359A2C_B0E9_3D1F_41E3_1BEBAD68F5E9_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 504,
         "width": 512,
         "url": "media/popup_BF359A2C_B0E9_3D1F_41E3_1BEBAD68F5E9_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 4.224698837828409,
      "pitch": 0.22799774253234015,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": -79.85780470544428,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotationY": 0,
      "id": "popup_BE0F0616_B0EE_D50A_41A6_611FBDA2DA7A",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 860,
         "width": 872,
         "url": "media/popup_BE0F0616_B0EE_D50A_41A6_611FBDA2DA7A_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 504,
         "width": 512,
         "url": "media/popup_BE0F0616_B0EE_D50A_41A6_611FBDA2DA7A_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "80%",
      "hfov": 5.2790387613182475,
      "pitch": -1.52750076724854,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "yaw": 152.1478261003837,
      "showDuration": 500,
      "popupMaxHeight": "80%",
      "rotationX": 0,
      "hideDuration": 500,
      "showEasing": "cubic_in"
     },
     {
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 72,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "inertia": false,
      "id": "panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_tcap0",
      "angle": 0
     },
     {
      "rotate": false,
      "class": "CeilingCapPanoramaOverlay",
      "hfov": 72,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "inertia": false,
      "id": "panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_ccap0",
      "angle": 0
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2168,
       "width": 2168,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2168,
       "width": 2168,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2168,
       "width": 2168,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2168,
       "width": 2168,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "label": "waiting-area-stitch2-V1",
  "partial": false,
  "id": "panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7",
  "class": "Panorama"
 },
 {
  "manualZoomSpeed": 8,
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -0.03811621570260403,
   "class": "PanoramaCameraPosition",
   "yaw": -169.43130253917408
  },
  "automaticZoomSpeed": 100,
  "id": "panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_camera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B8F89E55_B099_3509_41DF_B60C5441547F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_B8F89E55_B099_3509_41DF_B60C5441547F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_A39C6FD3_AB0B_7428_41DC_E241EDD8C92A_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_A3BB9789_AB09_5438_41CA_1F6F50CE47F7_camera"
   }
  ]
 },
 {
  "duration": 300,
  "id": "effect_BEE2ABD7_96AD_C021_41C5_B5AA98652E3C",
  "easing": "quad_out",
  "from": "left",
  "class": "SlideInEffect"
 },
 {
  "to": "left",
  "duration": 300,
  "id": "effect_B2985577_96D3_C0E1_41C3_01FE95C7B68D",
  "easing": "quad_out",
  "class": "SlideOutEffect"
 },
 {
  "to": "left",
  "duration": 300,
  "id": "effect_BD0DE42B_96B5_C061_41BF_0D8DB975B6EC",
  "easing": "quad_out",
  "class": "SlideOutEffect"
 },
 {
  "to": "top",
  "duration": 0,
  "id": "effect_BDC026E1_96B4_41E1_41B4_5BB85E4AB36E",
  "easing": "quad_out",
  "class": "SlideOutEffect"
 },
 {
  "to": "left",
  "duration": 300,
  "id": "effect_BEFA410D_96AC_C021_41D0_69686E377BB3",
  "easing": "quad_out",
  "class": "SlideOutEffect"
 },
 {
  "to": "right",
  "duration": 300,
  "id": "effect_F3B8C9F4_9E55_C3E7_41E3_7B1BB61EFECA",
  "easing": "linear",
  "class": "SlideOutEffect"
 },
 {
  "duration": 300,
  "id": "effect_F160F148_9E54_402F_41E1_5428B98E14C6",
  "easing": "linear",
  "from": "right",
  "class": "SlideInEffect"
 },
 "this.popup_BC09A935_B0E6_DF09_41E3_BD5F3F4FB54F",
 "this.popup_BE282952_B0F9_7F0B_41CA_FA8F9799C71C",
 "this.popup_BE06058B_B0FF_571A_41D2_18EFBB704DB2",
 "this.popup_BE055D59_B0F9_D706_41D2_DE34AECFED76",
 "this.popup_BE348A08_B0E7_7D07_41D9_10305FD68170",
 "this.popup_A0F1878E_B0E6_F31B_41D3_0220074833A5",
 "this.popup_A0B9355E_B0E9_773B_41E3_55638A31C46C",
 "this.popup_BF07E6C3_B0EB_3509_41D7_66EB085B4F87",
 "this.popup_BF22E1AD_B0EA_CF19_41DD_DBEDAC439E95",
 "this.popup_BF359A2C_B0E9_3D1F_41E3_1BEBAD68F5E9",
 "this.popup_BE0F0616_B0EE_D50A_41A6_611FBDA2DA7A",
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_93DBCDC0_832D_5774_41C4_2278D4F56F1E_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_93DBCDC0_832D_5774_41C4_2278D4F56F1E.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 666,
  "label": "door-sign-IMG_1072-crop",
  "id": "photo_93DBCDC0_832D_5774_41C4_2278D4F56F1E"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_9475CF09_831C_F4F4_41D2_E9E659816D7F_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_9475CF09_831C_F4F4_41D2_E9E659816D7F.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "kerb-IMG_1082-crop",
  "id": "photo_9475CF09_831C_F4F4_41D2_E9E659816D7F"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_94D35469_832D_3534_41BF_FF734B9AADD4_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_94D35469_832D_3534_41BF_FF734B9AADD4.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "carpark-IMG_1085-crop",
  "id": "photo_94D35469_832D_3534_41BF_FF734B9AADD4"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A5BA4A2F_8335_5D0C_41D6_5CD0D7F7A03D_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A5BA4A2F_8335_5D0C_41D6_5CD0D7F7A03D.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "reception-desk-IMG_0960",
  "id": "photo_A5BA4A2F_8335_5D0C_41D6_5CD0D7F7A03D"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A5B673F6_833B_731C_41CA_BF6F85313627_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A5B673F6_833B_731C_41CA_BF6F85313627.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 666,
  "label": "banner-IMG_1062",
  "id": "photo_A5B673F6_833B_731C_41CA_BF6F85313627"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A33AD485_8317_F5FC_41D4_64053C47028B_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A33AD485_8317_F5FC_41D4_64053C47028B.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "atm-IMG_0964",
  "id": "photo_A33AD485_8317_F5FC_41D4_64053C47028B"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_B332EA8D_811C_FD0C_41D0_83D8BA67553A_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_B332EA8D_811C_FD0C_41D0_83D8BA67553A.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "tv-IMG_1055",
  "id": "photo_B332EA8D_811C_FD0C_41D0_83D8BA67553A"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_B5734556_811F_771C_41D0_3644D6430119_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_B5734556_811F_771C_41D0_3644D6430119.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 666,
  "label": "coffee-table-IMG_1059",
  "id": "photo_B5734556_811F_771C_41D0_3644D6430119"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A5BA4F45_97F4_C021_41BD_C52E3D16FAD0_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A5BA4F45_97F4_C021_41BD_C52E3D16FAD0.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "clock-IMG_0971",
  "id": "photo_A5BA4F45_97F4_C021_41BD_C52E3D16FAD0"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A5B978C9_97F4_4021_41BC_D61BBFC2D0E4_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A5B978C9_97F4_4021_41BC_D61BBFC2D0E4.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 667,
  "label": "terminal-IMG_0969",
  "id": "photo_A5B978C9_97F4_4021_41BC_D61BBFC2D0E4"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A7987861_9FAC_C0E1_41CE_A02CECA25656_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A7987861_9FAC_C0E1_41CE_A02CECA25656.jpg",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 1000,
  "class": "Photo",
  "height": 666,
  "label": "coffee-table-IMG_1059",
  "id": "photo_A7987861_9FAC_C0E1_41CE_A02CECA25656"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_A687C610_9FEC_403F_41DB_F52FDB0939EE_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_A687C610_9FEC_403F_41DB_F52FDB0939EE.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 872,
  "class": "Photo",
  "height": 860,
  "label": "modal_coffee",
  "id": "photo_A687C610_9FEC_403F_41DB_F52FDB0939EE"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_D9FA9A1D_9FFC_4021_41D3_F13BDFC28224_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_D9FA9A1D_9FFC_4021_41D3_F13BDFC28224.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 877,
  "class": "Photo",
  "height": 903,
  "label": "modal_tv",
  "id": "photo_D9FA9A1D_9FFC_4021_41D3_F13BDFC28224"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_DAC39777_9FF3_C0E0_41D1_969EE69FFD33_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_DAC39777_9FF3_C0E0_41D1_969EE69FFD33.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 872,
  "class": "Photo",
  "height": 860,
  "label": "modal_banner",
  "id": "photo_DAC39777_9FF3_C0E0_41D1_969EE69FFD33"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_DA0BAE0B_9FED_C021_41D1_0945F877EDF5_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_DA0BAE0B_9FED_C021_41D1_0945F877EDF5.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 871,
  "class": "Photo",
  "height": 821,
  "label": "modal_terminal",
  "id": "photo_DA0BAE0B_9FED_C021_41D1_0945F877EDF5"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_DE75DD22_9FEC_4063_41D6_AE7AF560D60A_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_DE75DD22_9FEC_4063_41D6_AE7AF560D60A.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 871,
  "class": "Photo",
  "height": 821,
  "label": "modal_clock",
  "id": "photo_DE75DD22_9FEC_4063_41D6_AE7AF560D60A"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_DFFE927E_9FEC_C0E3_41CA_9E1B54F9D439_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_DFFE927E_9FEC_C0E3_41CA_9E1B54F9D439.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 877,
  "class": "Photo",
  "height": 905,
  "label": "modal_EFTPOS",
  "id": "photo_DFFE927E_9FEC_C0E3_41CA_9E1B54F9D439"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_D9FB37BC_9FEC_4067_41DD_7E0908868B31_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_D9FB37BC_9FEC_4067_41DD_7E0908868B31.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 877,
  "class": "Photo",
  "height": 905,
  "label": "modal_carpark",
  "id": "photo_D9FB37BC_9FEC_4067_41DD_7E0908868B31"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_DC2CE25B_9FD4_4021_41CF_6B6EB052E41D_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_DC2CE25B_9FD4_4021_41CF_6B6EB052E41D.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 871,
  "class": "Photo",
  "height": 821,
  "label": "modal_kerb",
  "id": "photo_DC2CE25B_9FD4_4021_41CF_6B6EB052E41D"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_DEE0A108_9FD5_C02F_41DE_25B1617F4C16_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_DEE0A108_9FD5_C02F_41DE_25B1617F4C16.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 872,
  "class": "Photo",
  "height": 860,
  "label": "modal_entranceway",
  "id": "photo_DEE0A108_9FD5_C02F_41DE_25B1617F4C16"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_D20EB8C5_9E5C_4021_41C9_1682A1E7F046_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_D20EB8C5_9E5C_4021_41C9_1682A1E7F046.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 881,
  "class": "Photo",
  "height": 943,
  "label": "modal-rec-desk",
  "id": "photo_D20EB8C5_9E5C_4021_41C9_1682A1E7F046"
 },
 {
  "duration": 5000,
  "thumbnailUrl": "media/photo_CC4EFD01_9EEC_4021_41D6_75D8D14E551A_t.png",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/photo_CC4EFD01_9EEC_4021_41D6_75D8D14E551A.png",
     "class": "ImageResourceLevel"
    }
   ]
  },
  "width": 872,
  "class": "Photo",
  "height": 860,
  "label": "modal-waiting-area-compressor",
  "id": "photo_CC4EFD01_9EEC_4021_41D6_75D8D14E551A"
 },
 "this.audio_C63EBC37_CF82_57C6_41DD_26F5EF317770"
], "children": [
 {
  "toolTipFontFamily": "Arial",
  "top": 0,
  "minHeight": 50,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "toolTipFontSize": 12,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadow": true,
  "toolTipShadowVerticalLength": 0,
  "height": "100%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "toolTipFontColor": "#606060",
  "toolTipPaddingRight": 6,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#767676",
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "progressBottom": 0,
  "paddingLeft": 0,
  "toolTipShadowSpread": 0,
  "playbackBarBottom": 5,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderColor": "#000000",
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "width": "100%",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderSize": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipPaddingTop": 4,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "borderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarHeadWidth": 6,
  "shadow": false,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingRight": 0,
  "toolTipPaddingLeft": 6,
  "paddingBottom": 0,
  "paddingTop": 0,
  "toolTipFontWeight": "normal",
  "playbackBarBorderRadius": 0,
  "left": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "toolTipOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundOpacity": 1
 },
 {
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "bottom": 30,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_9BC3440D_95F7_221C_41D8_A50723EF31B6_pressed.png",
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_9BC3440D_95F7_221C_41D8_A50723EF31B6.png",
  "mode": "toggle",
  "width": 50,
  "class": "IconButton",
  "height": 50,
  "paddingRight": 0,
  "id": "IconButton_9BC3440D_95F7_221C_41D8_A50723EF31B6",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": 30,
  "paddingLeft": 0,
  "maxWidth": 111,
  "maxHeight": 111,
  "borderSize": 0
 },
 {
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "bottom": 30,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_9BA46372_95E8_E604_4187_910AAA69B389_pressed.png",
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_9BA46372_95E8_E604_4187_910AAA69B389.png",
  "mode": "push",
  "width": 50,
  "class": "IconButton",
  "height": 50,
  "paddingRight": 0,
  "id": "IconButton_9BA46372_95E8_E604_4187_910AAA69B389",
  "paddingBottom": 0,
  "paddingTop": 0,
  "click": "this.setComponentVisibility(this.Container_997A1BDF_96B4_4021_41E1_4BDFF3A4BEFC, true, 0, this.effect_BEE2ABD7_96AD_C021_41C5_B5AA98652E3C, 'showEffect', false); this.setComponentVisibility(this.IconButton_9BA46372_95E8_E604_4187_910AAA69B389, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8E77BA81_96F3_C021_4196_752DB72D0296, true, 0, null, null, false)",
  "backgroundOpacity": 0,
  "left": 30,
  "paddingLeft": 0,
  "maxWidth": 110,
  "maxHeight": 110,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_9BA46372_95E8_E604_4187_910AAA69B389_rollover.png"
 },
 {
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "bottom": 30,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_9B3402EF_95D9_661C_41CF_8988A8059367_pressed.png",
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_9B3402EF_95D9_661C_41CF_8988A8059367.png",
  "mode": "push",
  "width": 50,
  "class": "IconButton",
  "height": 50,
  "paddingRight": 0,
  "id": "IconButton_9B3402EF_95D9_661C_41CF_8988A8059367",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": 150,
  "paddingLeft": 0,
  "maxWidth": 110,
  "maxHeight": 110,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_9B3402EF_95D9_661C_41CF_8988A8059367_rollover.png"
 },
 {
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "bottom": 30,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_9B9BB541_95DF_2204_41C6_CAA4E78DDF76_pressed.png",
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_9B9BB541_95DF_2204_41C6_CAA4E78DDF76.png",
  "mode": "push",
  "width": 50,
  "class": "IconButton",
  "height": 50,
  "paddingRight": 0,
  "id": "IconButton_9B9BB541_95DF_2204_41C6_CAA4E78DDF76",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": 210,
  "paddingLeft": 0,
  "maxWidth": 110,
  "maxHeight": 110,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_9B9BB541_95DF_2204_41C6_CAA4E78DDF76_rollover.png"
 },
 {
  "gap": 10,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "bottom": 30,
  "borderRadius": 0,
  "minHeight": 1,
  "shadow": false,
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "width": 376,
  "class": "Container",
  "height": 430,
  "scrollBarMargin": 2,
  "visible": false,
  "paddingRight": 0,
  "id": "Container_997A1BDF_96B4_4021_41E1_4BDFF3A4BEFC",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "left": 25,
  "paddingLeft": 0,
  "layout": "absolute",
  "children": [
   {
    "horizontalAlign": "center",
    "transparencyActive": false,
    "verticalAlign": "middle",
    "top": 9,
    "borderRadius": 0,
    "minHeight": 1,
    "shadow": false,
    "cursor": "hand",
    "minWidth": 1,
    "iconURL": "skin/IconButton_86856852_96AC_C023_41DE_D87B1CBD8DD2.png",
    "mode": "push",
    "width": 329,
    "class": "IconButton",
    "height": 126,
    "paddingRight": 0,
    "id": "IconButton_86856852_96AC_C023_41DE_D87B1CBD8DD2",
    "paddingBottom": 0,
    "paddingTop": 0,
    "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_997A1BDF_96B4_4021_41E1_4BDFF3A4BEFC, false, 0, this.effect_B2985577_96D3_C0E1_41C3_01FE95C7B68D, 'hideEffect', false); this.setComponentVisibility(this.IconButton_8E77BA81_96F3_C021_4196_752DB72D0296, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_9BA46372_95E8_E604_4187_910AAA69B389, true, 0, null, null, false)",
    "backgroundOpacity": 0,
    "left": 0,
    "paddingLeft": 0,
    "maxWidth": 498,
    "maxHeight": 182,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_86856852_96AC_C023_41DE_D87B1CBD8DD2_rollover.png"
   },
   {
    "horizontalAlign": "center",
    "transparencyActive": false,
    "verticalAlign": "middle",
    "top": 128,
    "borderRadius": 0,
    "minHeight": 1,
    "shadow": false,
    "cursor": "hand",
    "minWidth": 1,
    "iconURL": "skin/IconButton_87870A1D_96AC_4021_41CF_8B9F2E8BD3B9.png",
    "mode": "push",
    "width": 329,
    "class": "IconButton",
    "height": 126,
    "paddingRight": 0,
    "id": "IconButton_87870A1D_96AC_4021_41CF_8B9F2E8BD3B9",
    "paddingBottom": 0,
    "paddingTop": 0,
    "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_997A1BDF_96B4_4021_41E1_4BDFF3A4BEFC, false, 0, this.effect_BD0DE42B_96B5_C061_41BF_0D8DB975B6EC, 'hideEffect', false); this.setComponentVisibility(this.IconButton_8E77BA81_96F3_C021_4196_752DB72D0296, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_9BA46372_95E8_E604_4187_910AAA69B389, true, 0, null, null, false)",
    "backgroundOpacity": 0,
    "left": 0,
    "paddingLeft": 0,
    "maxWidth": 498,
    "maxHeight": 182,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_87870A1D_96AC_4021_41CF_8B9F2E8BD3B9_rollover.png"
   },
   {
    "horizontalAlign": "center",
    "transparencyActive": false,
    "verticalAlign": "middle",
    "bottom": 59,
    "borderRadius": 0,
    "minHeight": 1,
    "shadow": false,
    "cursor": "hand",
    "minWidth": 1,
    "iconURL": "skin/IconButton_87F6BD01_96D5_C021_41DE_826886576A76.png",
    "mode": "push",
    "width": 329,
    "class": "IconButton",
    "height": 126,
    "paddingRight": 0,
    "id": "IconButton_87F6BD01_96D5_C021_41DE_826886576A76",
    "paddingBottom": 0,
    "paddingTop": 0,
    "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_997A1BDF_96B4_4021_41E1_4BDFF3A4BEFC, false, 0, this.effect_BDC026E1_96B4_41E1_41B4_5BB85E4AB36E, 'hideEffect', false); this.setComponentVisibility(this.IconButton_8E77BA81_96F3_C021_4196_752DB72D0296, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_9BA46372_95E8_E604_4187_910AAA69B389, true, 0, null, null, false)",
    "backgroundOpacity": 0,
    "left": 3,
    "paddingLeft": 0,
    "maxWidth": 498,
    "maxHeight": 182,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_87F6BD01_96D5_C021_41DE_826886576A76_rollover.png"
   }
  ],
  "horizontalAlign": "left",
  "borderSize": 0,
  "scrollBarVisible": "rollOver"
 },
 {
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "bottom": 30,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_8E77BA81_96F3_C021_4196_752DB72D0296_pressed.png",
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_8E77BA81_96F3_C021_4196_752DB72D0296.png",
  "mode": "push",
  "width": 50,
  "class": "IconButton",
  "height": 50,
  "visible": false,
  "paddingRight": 0,
  "id": "IconButton_8E77BA81_96F3_C021_4196_752DB72D0296",
  "paddingBottom": 0,
  "paddingTop": 0,
  "click": "this.setComponentVisibility(this.Container_997A1BDF_96B4_4021_41E1_4BDFF3A4BEFC, false, 0, this.effect_BEFA410D_96AC_C021_41D0_69686E377BB3, 'hideEffect', false); this.setComponentVisibility(this.IconButton_8E77BA81_96F3_C021_4196_752DB72D0296, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_9BA46372_95E8_E604_4187_910AAA69B389, true, 0, null, null, false)",
  "backgroundOpacity": 0,
  "left": 30,
  "paddingLeft": 0,
  "maxWidth": 110,
  "maxHeight": 110,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_8E77BA81_96F3_C021_4196_752DB72D0296_rollover.png"
 },
 {
  "transparencyActive": false,
  "verticalAlign": "middle",
  "top": 30,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_D6B36998_9EAC_C02F_41DB_A2B808181407.png",
  "mode": "push",
  "width": 56,
  "class": "IconButton",
  "height": 55,
  "paddingRight": 0,
  "id": "IconButton_D6B36998_9EAC_C02F_41DB_A2B808181407",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": 30,
  "paddingLeft": 0,
  "maxWidth": 56,
  "maxHeight": 55,
  "borderSize": 0
 },
 {
  "children": [
   {
    "borderSize": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "top": "0%",
    "borderRadius": 0,
    "minHeight": 500,
    "shadow": false,
    "minWidth": 500,
    "width": 622,
    "class": "Image",
    "height": 556,
    "paddingRight": 0,
    "id": "Image_C4C4B151_9EB4_4021_41B8_C4967C7D559A",
    "paddingBottom": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "left": "0%",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "url": "skin/Image_C4C4B151_9EB4_4021_41B8_C4967C7D559A.png",
    "maxWidth": 1158,
    "maxHeight": 1035
   },
   {
    "horizontalAlign": "center",
    "transparencyActive": false,
    "verticalAlign": "middle",
    "bottom": 45.39,
    "borderRadius": 0,
    "pressedIconURL": "skin/IconButton_C1587C77_9E74_40E1_41D1_0B644FC6ABB0_pressed.png",
    "minHeight": 1,
    "shadow": false,
    "cursor": "hand",
    "minWidth": 1,
    "iconURL": "skin/IconButton_C1587C77_9E74_40E1_41D1_0B644FC6ABB0.png",
    "mode": "push",
    "width": 103,
    "class": "IconButton",
    "height": 54,
    "paddingRight": 0,
    "id": "IconButton_C1587C77_9E74_40E1_41D1_0B644FC6ABB0",
    "paddingBottom": 0,
    "paddingTop": 0,
    "click": "this.setComponentVisibility(this.Container_C7923A58_9EB4_C02F_41A7_8644ABEC1BC5, false, 0, this.effect_F3B8C9F4_9E55_C3E7_41E3_7B1BB61EFECA, 'hideEffect', false)",
    "backgroundOpacity": 0,
    "right": 256.71,
    "paddingLeft": 0,
    "maxWidth": 206,
    "maxHeight": 108,
    "borderSize": 0,
    "rollOverIconURL": "skin/IconButton_C1587C77_9E74_40E1_41D1_0B644FC6ABB0_rollover.png"
   }
  ],
  "verticalAlign": "top",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "bottom": 80,
  "borderRadius": 0,
  "minHeight": 500,
  "shadow": false,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "overflow": "scroll",
  "minWidth": 500,
  "scrollBarWidth": 10,
  "width": 622,
  "class": "Container",
  "height": 556,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "id": "Container_C7923A58_9EB4_C02F_41A7_8644ABEC1BC5",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "right": 0,
  "layout": "absolute",
  "paddingLeft": 0,
  "maxWidth": 8000,
  "maxHeight": 8000,
  "borderSize": 0,
  "scrollBarVisible": "rollOver"
 },
 {
  "horizontalAlign": "center",
  "transparencyActive": false,
  "verticalAlign": "middle",
  "bottom": 30,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_FA228E34_9E73_C067_41DD_EBA0C5CAB45F_pressed.png",
  "minHeight": 1,
  "shadow": false,
  "cursor": "hand",
  "minWidth": 1,
  "iconURL": "skin/IconButton_FA228E34_9E73_C067_41DD_EBA0C5CAB45F.png",
  "mode": "push",
  "width": 50,
  "class": "IconButton",
  "height": 50,
  "paddingRight": 0,
  "id": "IconButton_FA228E34_9E73_C067_41DD_EBA0C5CAB45F",
  "paddingBottom": 0,
  "paddingTop": 0,
  "click": "this.setComponentVisibility(this.Container_C7923A58_9EB4_C02F_41A7_8644ABEC1BC5, true, 0, this.effect_F160F148_9E54_402F_41E1_5428B98E14C6, 'showEffect', false)",
  "backgroundOpacity": 0,
  "right": 90,
  "paddingLeft": 0,
  "maxWidth": 110,
  "maxHeight": 110,
  "borderSize": 0,
  "rollOverIconURL": "skin/IconButton_FA228E34_9E73_C067_41DD_EBA0C5CAB45F_rollover.png"
 },
 {
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0
  ],
  "minWidth": 0,
  "backgroundColor": [
   "#000000"
  ],
  "class": "UIComponent",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "visible": false,
  "paddingRight": 0,
  "id": "veilPopupPanorama",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "left": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0
 },
 {
  "scaleMode": "custom",
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "shadow": false,
  "backgroundColorRatios": [],
  "minWidth": 0,
  "backgroundColor": [],
  "class": "ZoomImage",
  "visible": false,
  "paddingRight": 0,
  "id": "zoomImagePopupPanorama",
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "left": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0
 },
 {
  "shadowSpread": 1,
  "gap": 5,
  "rollOverIconColor": "#666666",
  "fontStyle": "normal",
  "fontWeight": "normal",
  "top": 10,
  "fontColor": "#FFFFFF",
  "iconBeforeLabel": true,
  "borderRadius": 0,
  "minHeight": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   0.09803921568627451,
   1
  ],
  "cursor": "hand",
  "iconWidth": 20,
  "pressedIconColor": "#888888",
  "minWidth": 0,
  "iconLineWidth": 5,
  "fontFamily": "Arial",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "mode": "push",
  "class": "CloseButton",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "label": "",
  "iconColor": "#000000",
  "shadowBlurRadius": 6,
  "shadowColor": "#000000",
  "visible": false,
  "paddingRight": 5,
  "id": "closeButtonPopupPanorama",
  "paddingBottom": 5,
  "paddingTop": 5,
  "iconHeight": 20,
  "backgroundOpacity": 0.3,
  "fontSize": 12,
  "right": 10,
  "layout": "horizontal",
  "textDecoration": "none",
  "borderColor": "#000000",
  "paddingLeft": 5,
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "backgroundColorDirection": "vertical",
  "borderSize": 0
 }
], 
 "gap": 10,
 "mouseWheelEnabled": true,
 "scripts": {
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "existsKey": function(key){    return key in window; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "registerKey": function(key, value){    window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   var showEndFunction = function() {       var loadedFunction = function(){           if(!self.isCardboardViewMode())               popupPanoramaOverlay.set('visible', false);       };       popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', 1);       self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);   };   var hideFunction = function() {       var restoreShowDurationFunction = function(){           popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);           popupPanoramaOverlay.set('visible', false);           popupPanoramaOverlay.set('showDuration', showDuration);           popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);           popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);       };       self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);       var currentWidth = zoomImage.get('imageWidth');       var currentHeight = zoomImage.get('imageHeight');       popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', hideDuration);       popupPanoramaOverlay.set('popupMaxWidth', currentWidth);       popupPanoramaOverlay.set('popupMaxHeight', currentHeight);       if(popupPanoramaOverlay.get('visible'))           restoreShowDurationFunction();       else           popupPanoramaOverlay.set('visible', true);   };   if(!imageHD){       imageHD = popupPanoramaOverlay.get('image');   }   if(!toggleImageHD && toggleImage){       toggleImageHD = toggleImage;   }   var zoomImage = this.zoomImagePopupPanorama;   var showDuration = popupPanoramaOverlay.get('showDuration');   var hideDuration = popupPanoramaOverlay.get('hideDuration');   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');   var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "getKey": function(key){    return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && typeof player.resumeCamera !== 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction(caller);   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; }
 },
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 20,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_D6B36998_9EAC_C02F_41DB_A2B808181407], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "shadow": false,
 "contentOpaque": false,
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "height": "100%",
 "buttonToggleMute": "this.IconButton_9BC3440D_95F7_221C_41D8_A50723EF31B6",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "borderSize": 0,
 "scrollBarVisible": "rollOver"
})