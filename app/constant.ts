export let toolList = [
  {
    name: "word_segmentor",
    url: "https://word.pecha.tools",
    needUser: false,
    demo: "https://word.pecha.tools/demo",
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.d{fill:none}.a,.c,.d{stroke:%23000;stroke-linecap:round;stroke-linejoin:round}.c,.d{stroke-width:.75px}.c{fill:%23fff}%3C/style%3E%3C/defs%3E%3Ccircle cx='73.734' cy='34.889' r='3'/%3E%3Cpath class='a' d='M74.234 43.389v-6'/%3E%3Ccircle cx='85.562' cy='55.081' r='2.928'/%3E%3Cpath d='M63.398 55.08s-7.361 7.956-16.442 7.956-16.441-7.955-16.441-7.955 7.361-7.956 16.441-7.956 16.442 7.956 16.442 7.956Z' style='stroke-width:.75px;stroke:%23000;stroke-linecap:round;stroke-linejoin:round'/%3E%3Ccircle class='c' cx='73.883' cy='55.081' r='11.874'/%3E%3Cpath class='c' d='m42.488 21.288 5.366 30.873c-3.8 1.006-9.534-4.706-11.016-13.232s1.85-16.635 5.65-17.64Z'/%3E%3Cpath class='c' d='m51.34 21.288-5.365 30.873c3.8 1.006 9.534-4.706 11.015-13.232s-1.848-16.635-5.65-17.64Z'/%3E%3Ccircle cx='43.734' cy='47.889' r='1'/%3E%3Cpath class='c' d='m51.425 88.712-5.366-30.873c3.8-1.006 9.534 4.706 11.015 13.232s-1.848 16.635-5.65 17.64Z'/%3E%3Cpath class='c' d='m42.572 88.712 5.366-30.873c-3.8-1.006-9.534 4.706-11.016 13.232s1.85 16.635 5.65 17.64Z'/%3E%3Ccircle cx='49.734' cy='61.889' r='1'/%3E%3Ccircle cx='73.734' cy='54.889' r='2'/%3E%3Cpath class='d' d='M81.765 55.08s-3.529 3.814-7.882 3.814-7.881-3.813-7.881-3.813 3.528-3.814 7.881-3.814 7.882 3.814 7.882 3.814Z'/%3E%3Cpath class='a' d='M88.234 55.389h10'/%3E%3Cpath class='d' d='m23.425 47.776 4.799-4.798 9.078 9.078M23.425 62.385l4.799 4.799 9.078-9.079M79.706 34.545l3.161-3.741 3.336 8.784 5.794-12.525 3.863 8.946 2.634-4.392'/%3E%3C/svg%3E",
  },
  {
    name: "sentence_segmentor",
    url: "https://sentence.pecha.tools",
    needUser: false,
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.b{fill:%23fff;stroke:%23000;stroke-linecap:round;stroke-linejoin:round}.b{fill:none}%3C/style%3E%3C/defs%3E%3Ccircle class='a' cx='55.234' cy='55.389' r='3'/%3E%3Cpath class='b' d='m64.466 79.791 7.091 9.409 2.872-2.471M41.767 89.2l-2.51-2.838 8.304-8.358M55.234 62.389v-4'/%3E%3Cpath d='M82.234 49.389v13.88a10.12 10.12 0 0 1-10.12 10.12h-33.76a10.12 10.12 0 0 1-10.12-10.12v-13.88' style='stroke-width:.75px;fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round'/%3E%3Cpath class='a' d='M21.544 46.106A15.141 15.141 0 0 0 44.03 25.824Z'/%3E%3Cpath class='a' d='M32.234 51.081a15.09 15.09 0 0 1-15.272-15.01c.01-9.682 7.01-15.682 15.272-15.271Z'/%3E%3Ccircle cx='27.734' cy='46.889' r='1'/%3E%3Cpath class='a' d='M88.456 46.106A15.141 15.141 0 0 1 65.97 25.824Z'/%3E%3Cpath class='a' d='M77.234 51.081a15.141 15.141 0 0 0 15.272-15.01c.072-8.361-6.01-15.682-15.272-15.271Z'/%3E%3Ccircle cx='81.734' cy='46.889' r='1'/%3E%3Cpath d='M72.373 79.889a17.416 17.416 0 0 0-34.832 0Z'/%3E%3Cpath d='M65.656 72.178s-4.756 5.14-10.624 5.14-10.624-5.14-10.624-5.14 4.757-5.141 10.624-5.141 10.624 5.14 10.624 5.14Z' style='fill:%23fff'/%3E%3Ccircle cx='58.734' cy='70.889' r='3'/%3E%3C/svg%3E",
  },
  {
    name: "BO-EN_post_editor",
    url: "https://post-editor.pecha.tools/bo2en",
    needUser: false,
    ICON: "/svg/bo-en-translate.png",
  },
  {
    name: "EN-BO_post_editor",
    url: "https://post-editor.pecha.tools/en2bo",
    needUser: false,
    ICON: "/svg/en-bo-translate.png",
  },
  {
    name: "Speech_To_Text",
    url: null,
    department: ["stt"],
    needUser: false,
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.c{fill:%23fff}.a,.b,.c,.d,.e{stroke:%23000}.a,.b,.c,.e{stroke-linecap:round;stroke-linejoin:round}.b,.e{fill:none}.b,.c{stroke-width:.75px}.d{stroke-miterlimit:10}%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M19.234 81.766V60.853a7.465 7.465 0 0 1 7.465-7.464h8.535v7h-3.729a3.271 3.271 0 0 0-3.271 3.27v9.107a9 9 0 0 1-9 9Z'/%3E%3Cpath class='a' d='M19.234 29.011v20.913a7.465 7.465 0 0 0 7.465 7.465h8.535v-7h-3.729a3.271 3.271 0 0 1-3.271-3.272v-9.106a9 9 0 0 0-9-9Z'/%3E%3Ccircle class='b' cx='24.818' cy='51.209' r='2.357'/%3E%3Cpath class='b' d='m23.151 52.876 3.333-3.333'/%3E%3Cpath class='c' d='M55.92 25.3a7.828 7.828 0 0 1 7.829 7.828v15.425h-5.065V33.128a7.828 7.828 0 0 0-7.828-7.828h5.065Z'/%3E%3Cpath class='a' d='M79.781 52.389h-.588A23.557 23.557 0 0 0 48.99 32.867a22.863 22.863 0 0 0-15.73 16.072 23.508 23.508 0 1 0 45.928 9.45h.593a6.453 6.453 0 0 1 6.453 6.452V45.936a6.453 6.453 0 0 1-6.453 6.453Z'/%3E%3Crect class='d' x='85.234' y='44.389' width='4' height='21' rx='1.88' transform='rotate(180 87.234 54.889)'/%3E%3Cpath class='e' d='M87.234 74.389v3.827a6.173 6.173 0 0 1-6.173 6.173H52.406a6.173 6.173 0 0 1-6.172-6.173V63.389'/%3E%3Crect class='d' x='84.234' y='68.389' width='6' height='6' rx='2.235'/%3E%3Cpath class='c' d='M76.316 55.324s-4.176 4.424-9.272 4.373-9.183-4.558-9.183-4.558 4.176-4.423 9.272-4.372 9.183 4.557 9.183 4.557Z'/%3E%3Ccircle cx='69.234' cy='56.388' r='2.5'/%3E%3Cpath class='e' d='M53.234 67.389v6M56.234 67.389v6M59.234 67.389v6'/%3E%3Cpath class='a' d='M44.234 33.116v15.273h5V33.13a7.735 7.735 0 0 1 7.727-7.742h-5a7.727 7.727 0 0 0-7.727 7.727Z'/%3E%3Ccircle cx='46.734' cy='54.889' r='9' style='stroke-miterlimit:10;stroke-width:.75px;stroke:%23000'/%3E%3Ccircle cx='46.136' cy='55.115' r='4.95' style='stroke:%23fff;stroke-width:.5px;fill:none;stroke-linecap:round;stroke-linejoin:round'/%3E%3C/svg%3E",
    demo: "https://stt.pecha.tools/stt_cs_gb_review/?session=spsither@gmail.com",
  },
  {
    name: "OCR",
    url: null,
    needUser: false,
    department: ["ocr", "gylph"],
    ICON: "data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110'%3E%3Cdefs%3E%3Cstyle%3E.a,.b{fill:%23fff;stroke:%23000}.a,.b,.c{stroke-linecap:round;stroke-linejoin:round}.a{stroke-width:.75px}.c{fill:none;stroke:%23fff}%3C/style%3E%3C/defs%3E%3Cpath class='a' d='m61.94 76.412 4.088-2.057h0l2.295 4.56a2.288 2.288 0 0 1-1.015 3.072h0a2.288 2.288 0 0 1-3.073-1.015l-2.296-4.56h0Z'/%3E%3Cpath class='b' d='M30.183 37.389h29.05v31h0-29.05a6.95 6.95 0 0 1-6.95-6.95V44.338a6.95 6.95 0 0 1 6.95-6.95Z'/%3E%3Crect class='b' x='51.234' y='30.389' width='46' height='46' rx='9.938'/%3E%3Crect x='56.734' y='44.889' width='35' height='26' rx='7.488'/%3E%3Cpath class='c' d='M63.234 44.389v26M78.234 50.389v20M91.234 50.389h-35M91.234 60.389h-28M84.234 52.389v6M87.234 55.389h-6'/%3E%3Ccircle class='c' cx='70.234' cy='65.389' r='3'/%3E%3Cpath d='M59.734 22.889h.902a6.098 6.098 0 0 1 6.098 6.097v.903h-7v-7ZM87.734 29.889h-7v-.903a6.098 6.098 0 0 1 6.098-6.097h.902v7Z'/%3E%3Cpath class='a' d='m39.583 76.412 4.088-2.057h0l2.296 4.56a2.288 2.288 0 0 1-1.016 3.072h0a2.288 2.288 0 0 1-3.073-1.015l-2.295-4.56h0Z'/%3E%3Cpath d='M46.3 81.784a5.105 5.105 0 0 0-5.105 5.105h10.21a5.105 5.105 0 0 0-5.105-5.105ZM68.656 81.784a5.105 5.105 0 0 0-5.105 5.105h10.21a5.105 5.105 0 0 0-5.105-5.105Z'/%3E%3Cpath class='a' d='M31.497 55.06h0a6.601 6.601 0 0 1 8.864 2.929l7.875 15.645h0L36.443 79.57h0l-7.875-15.646a6.601 6.601 0 0 1 2.929-8.864Z'/%3E%3Ccircle cx='34.188' cy='60.603' r='2.288' style='fill:none;stroke-width:.75px;stroke-linecap:round;stroke-linejoin:round;stroke:%23000'/%3E%3Crect x='26.234' y='43.389' width='21' height='3' rx='1.421' style='stroke-linecap:round;stroke-linejoin:round;stroke:%23000'/%3E%3Cpath class='b' d='M38.01 33.389a3 3 0 0 1 3-3H27.526a3 3 0 0 0-3 3Z'/%3E%3Cpath class='b' d='M40.358 30.389H27.337a2.922 2.922 0 0 1 2.897 2.945l-.022 13.055h0l13.022.008h0l.022-13.063a2.922 2.922 0 0 0-2.898-2.945Z'/%3E%3Cpath d='M23.234 45.389h-3.361a4.639 4.639 0 0 0-4.64 4.639v13.36' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:%23000'/%3E%3Ccircle cx='15.234' cy='61.389' r='2.5'/%3E%3Cpath class='a' d='M82.646 37.185s-4.009 4.332-8.954 4.332-8.953-4.332-8.953-4.332a18.707 18.707 0 0 1 8.953-2.517 18.707 18.707 0 0 1 8.954 2.517Z'/%3E%3Ccircle cx='73.234' cy='39.389' r='2.5'/%3E%3C/svg%3E",
    demo: "https://stt.pecha.tools/glyph_annotation/",
  },
];
