'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3d292f5c9dce674efb9328966258eee1",
"assets/AssetManifest.bin.json": "569fe70e9f54f0a24cc98190b879ac9c",
"assets/AssetManifest.json": "9c026c24c67579da7423a62d6c740d29",
"assets/assets/ai_tip_image.png": "79fd67c4c189a542e9cd505923daf593",
"assets/assets/Artboard12.png": "655c617ccccee30943e0f8607ec6af5e",
"assets/assets/audio/canone.mp3": "612aaebc9bee5a51e35d0801a9ce338f",
"assets/assets/bgd.png": "2ba4ce62fad06d5ad2259bd5ea27a4b1",
"assets/assets/bigSize_music_app.png": "faa423266392e103a263df543e4f724b",
"assets/assets/creta-crayon.png": "8b1a33d2be10dec9a95ff7bd76057a2f",
"assets/assets/creta-digital-art.png": "83bda569ea3be2963ccf76775a95f5d5",
"assets/assets/creta-drawing.png": "9be6ecdc86b6240b23d97bdae7d6505a",
"assets/assets/creta-illustration.png": "cdd42fa516bcd3647e12b7d7df3cefc3",
"assets/assets/creta-oilpainting.png": "efa3012c06d044af70dae8d29abc57c4",
"assets/assets/creta-orientalpainting.png": "74332d0ead5fcb395e52c1d5c8f7b81a",
"assets/assets/creta-outlinedrawing.png": "9a6f7953d9260f91c7c6ef1a079a921a",
"assets/assets/creta-photo.png": "484dae169f5f9d46acc241b380853e26",
"assets/assets/creta-popart.png": "7d12a7faf31326e9250b79c8767254aa",
"assets/assets/creta-printmaking.png": "f82315d66f95eec8c60a08e967dfe925",
"assets/assets/creta-sketch.png": "b9b7da2f7c1156c1673ab753d53fb918",
"assets/assets/creta-watercolor.png": "7aceb96c30dc503ac48240d9b7e5fedf",
"assets/assets/creta_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/creta_logo_blue.png": "bafadae9d8eddb17987e77ba49c0d13b",
"assets/assets/creta_logo_only_white.png": "ea4ed073abe54ae00d48b1e8e1e0baa2",
"assets/assets/delete.svg": "290daba2785fb1146c928c8b3d3a7762",
"assets/assets/delete_content.svg": "f1958da0b63de6e70f78414664b93022",
"assets/assets/delete_frame.svg": "d67f01a11018305a3ee4e98a944a05c6",
"assets/assets/expiredTime.png": "c5abb04c6a0ced486b1941c4e6521229",
"assets/assets/giphy_official_logo.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/assets/google_map_thumbnail.png": "6689eb0847c91729f997d38e1f60e99f",
"assets/assets/google__g__logo.svg": "ea735e62c31af39012853c932d74375a",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/hycop_config.json": "5e8a6b212b20e4fe4a7da8f8b68f1719",
"assets/assets/icon.png": "cc9b97397cc141085df80ea3d8e054af",
"assets/assets/landing_page/image/arrow_1.png": "db9fff61674c0fd91e38b81ed38f0dac",
"assets/assets/landing_page/image/arrow_2.png": "35d1cc4ef4d9fbab7aa239d901ec260f",
"assets/assets/landing_page/image/arrow_3.png": "874b1cc1263e1f7116268cb25a01ffa4",
"assets/assets/landing_page/image/banner/banner_bottom1.png": "6d9f035f0c5a27fc6d032725b7b79447",
"assets/assets/landing_page/image/banner/banner_bottom10.png": "de6e8a67784ab81edbdcd781fa06ef39",
"assets/assets/landing_page/image/banner/banner_bottom11.png": "db3c8649d8e232d93cda4e2df0c3b81a",
"assets/assets/landing_page/image/banner/banner_bottom12.png": "00aa1b934e696988d1011b8ac2f83caf",
"assets/assets/landing_page/image/banner/banner_bottom2.png": "3a45f762dcef4ba915cb27feba7a8a43",
"assets/assets/landing_page/image/banner/banner_bottom3.png": "6890fce9bfba93a810de6e2ce51123c1",
"assets/assets/landing_page/image/banner/banner_bottom4.png": "a3fb853497c5d9c80d7f62bd10eb7e20",
"assets/assets/landing_page/image/banner/banner_bottom5.png": "5ff4dae4f087145afbf2547f60d5ae39",
"assets/assets/landing_page/image/banner/banner_bottom6.png": "2f0f68a714570c21a31265b83e331d1d",
"assets/assets/landing_page/image/banner/banner_bottom7.png": "43bfd49f01178a8ad700e32b71951feb",
"assets/assets/landing_page/image/banner/banner_bottom8.png": "272ca990a6b6317f85ff75709c515524",
"assets/assets/landing_page/image/banner/banner_bottom9.png": "ef9301b6f49a741ff2cefff27734f1e1",
"assets/assets/landing_page/image/banner/banner_top1.png": "eaca652e85e44cb5534eca8f35986ba0",
"assets/assets/landing_page/image/banner/banner_top10.png": "4d1202fdc7166fc68038dd60a50b90e6",
"assets/assets/landing_page/image/banner/banner_top11.png": "c95da6bfe157f146d99d46dab333241e",
"assets/assets/landing_page/image/banner/banner_top2.png": "2ec9dce79c891ad9283879bc1615dbd9",
"assets/assets/landing_page/image/banner/banner_top3.png": "413e3447ca722ad062dce9f0e1693b93",
"assets/assets/landing_page/image/banner/banner_top4.png": "9b39e25eb4924675a973f68327704836",
"assets/assets/landing_page/image/banner/banner_top5.png": "c788333884e98c8796afb20c9fcf5669",
"assets/assets/landing_page/image/banner/banner_top6.png": "c6998703f00cfa87c62575561823f84d",
"assets/assets/landing_page/image/banner/banner_top7.png": "ba8b43bfce2d8d92f101c9be639f18ee",
"assets/assets/landing_page/image/banner/banner_top8.png": "2f304d9d3000c9a25bd115424f09d58c",
"assets/assets/landing_page/image/banner/banner_top9.png": "d63face19ec8f3ddab8a1d2a5959e95a",
"assets/assets/landing_page/image/creta_animation_logo.png": "3e966207a8fbc57072fe480cda785842",
"assets/assets/landing_page/image/creta_animation_logo2.png": "57db1db4c75c15fa4dc8e46498a8a16e",
"assets/assets/landing_page/image/guide_1.png": "a8192d8c6c2b7ea3f23f28ac15573ffe",
"assets/assets/landing_page/image/guide_2.png": "77bfbd8dc6ac99b0d180a98e91976378",
"assets/assets/landing_page/image/guide_3.png": "350896d2888ed3c779140f04e87eb322",
"assets/assets/landing_page/image/guide_4.png": "8a39f26798a928307607f361b43ac13b",
"assets/assets/landing_page/image/promotion_1.png": "df844de8868ecdc460d76a962b3fb9b0",
"assets/assets/landing_page/image/promotion_2.png": "b74da2fc09be8fbd0e3e42795068858b",
"assets/assets/landing_page/image/promotion_3.png": "fd70c55b5a5f976efeee499360ed245a",
"assets/assets/landing_page/image/promotion_4.png": "5e634750297befd5742859ccf84b1246",
"assets/assets/landing_page/image/text_effect_1.png": "9e4be30c6be2450f8aac3e6f5ffb722e",
"assets/assets/landing_page/image/text_effect_1_big.png": "c4672a6ebf7fa27bd7ea8f0042beb48c",
"assets/assets/landing_page/image/text_effect_2.png": "c763236076ed499513feccb4d868139a",
"assets/assets/landing_page/image/text_effect_2_eng.png": "637522da498b51dc2baed667c1fdf4b2",
"assets/assets/landing_page/image/text_effect_3.png": "8631caf55874758b982d55f55d158b80",
"assets/assets/landing_page/image/text_effect_4.png": "1f171d7610dd5277d35f630318e736a2",
"assets/assets/landing_page/video/community_animation.mp4": "246fad328b0a14ced5490051307afb9e",
"assets/assets/landing_page/video/presentation_animation.mp4": "87069423be95d9a64a984760e6d2fb0f",
"assets/assets/landing_page/video/quick_start_animation.mp4": "334ede4a20c15b729b1bde648883632e",
"assets/assets/landing_page/video/signage_animation.mp4": "9c899acdbd3c8e021ae532aab11d0099",
"assets/assets/landing_page_banner.mp4": "b301e723bfe6e89334c032502309b0f8",
"assets/assets/lang/creta_lang_commu_en.json": "2da8d86fa5d0ace5b5130157ca390286",
"assets/assets/lang/creta_lang_commu_jp.json": "01f58916031ed4dee5fb93373fbc59af",
"assets/assets/lang/creta_lang_commu_kr.json": "cf4b131446a264f8bc1579a8698842f0",
"assets/assets/lang/creta_lang_device_en.json": "a296fc961aea9b84fa402167e4cee57d",
"assets/assets/lang/creta_lang_device_jp.json": "1b8ad91695ea72433566214e2079324b",
"assets/assets/lang/creta_lang_device_kr.json": "ccda4f685742e8712ff8c88fd6800cce",
"assets/assets/lang/creta_lang_mypage_en.json": "58338185224969770f3116621e3152a3",
"assets/assets/lang/creta_lang_mypage_jp.json": "4f3ce7e3a12f8f9319a2ffcd890d035c",
"assets/assets/lang/creta_lang_mypage_kr.json": "3d286364ed9a52ca1cf3cd9c283bad50",
"assets/assets/lang/creta_lang_studio_en.json": "67238c723bdf2eda09612dd577977463",
"assets/assets/lang/creta_lang_studio_jp.json": "4e40e61a44b6adb5945220c5760596bc",
"assets/assets/lang/creta_lang_studio_kr.json": "9eefdda350e0417ad431ccf256d1d444",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/medSize_music_app.png": "ed3cdca4079ecd547314445ddc643c26",
"assets/assets/miniSize_music_app.png": "0e562cfdefe9ae8260d14a42684e52f9",
"assets/assets/money-exchange.png": "3361f75c46fa013a14cfd10f794ccabb",
"assets/assets/music-big.png": "f3f4914a2fa8203e27ab3aae2555b41e",
"assets/assets/music-med.png": "b3185c64d2bb66db0f5989c745b53bed",
"assets/assets/music-small.png": "d597b7a7e30c56cdb762daf209e2fdf0",
"assets/assets/music-tiny.png": "3a35ed3296e2260a53ab377a4723f36d",
"assets/assets/music-visual-big.png": "7b7600d90cd42b7a27f2321e04997ff4",
"assets/assets/music-visual-med.png": "fc002d163aa615ef64ec89802146c6b1",
"assets/assets/music-visual-small.png": "acde009ee2812e8558df19cca2ca9074",
"assets/assets/music-visualizer.gif": "293e950ca3eecf8dd851cf9a3b4f2a4f",
"assets/assets/nextPage.png": "c3f0c62f482c31867254a256200e192d",
"assets/assets/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/smallSize_music_app.png": "918b32144e26ff55e11eaa9aabe4dd57",
"assets/assets/social/facebook.png": "a8c672ecb67d3f99ae0852f586ac3e22",
"assets/assets/social/instagram.png": "d65ff3d06682717ce3fd0badb0f8347a",
"assets/assets/social/kakaostory.png": "b063a980de47834fef8594ff1a250b19",
"assets/assets/social/kakaotalk.png": "29cfc3f569f9f81265f02aa1051e370a",
"assets/assets/social/line.png": "f1214c1d71725bffd39f3f924924c7d9",
"assets/assets/social/linkedin.png": "ab00f6fd1950939f067d6e309b82767b",
"assets/assets/social/pinterest.png": "fa9e7d9fba1c59a98109b3758631617f",
"assets/assets/social/reddit.png": "338024f972e6f39cd60d867c822483eb",
"assets/assets/social/tiktok.png": "a504231881a185b1a463744abdd43d0f",
"assets/assets/social/twitter.png": "6a17dedb51322e31156edf50ae85a254",
"assets/assets/social/youtube.png": "483aff5036fe78e3a7361ed739f9c63c",
"assets/assets/timeline_samples/activity_timeline.png": "c42cb377f4c13820bb7f87dbea14b045",
"assets/assets/timeline_samples/appHoriz_timeline.png": "2faff4f6621b6f2bdfd3dd43eab93135",
"assets/assets/timeline_samples/deliveryHoriz_timeline.png": "85c4ee935ed067850a818acfd638d4fa",
"assets/assets/timeline_samples/delivery_timeline.png": "323382ba6c7ab2e379d616b8c35b9a88",
"assets/assets/timeline_samples/football_timeline.png": "da52f447fd3d6c607fd8b0fd0605fa17",
"assets/assets/timeline_samples/monthHoriz_timeline.png": "f3429a94606006f19c009a15c123d7cc",
"assets/assets/timeline_samples/showcase_timeline.png": "68cff3b5821c0ab6276f126bc143eac8",
"assets/assets/timeline_samples/success_timeline.png": "f8bd2e3e9083f9500d7ec3be1f29cbff",
"assets/assets/timeline_samples/timeline_thumbnail.jpeg": "72d6787dbcc75638209e72db0dab4326",
"assets/assets/timeline_samples/weather_timeline.png": "0ca829652edc0d4abd7eb0132dd243c1",
"assets/assets/tipImage-1-1.png": "fe0ec67588b071f5b7980c4d88c2efd7",
"assets/assets/tipImage-1-2.png": "006a497f79eaf60cb8f893de92e0bf6e",
"assets/assets/tipImage-1-3.png": "e87acefb77b521ee366b127cb94ade72",
"assets/assets/tipImage-1-4.png": "eabb8c3ac2bfa97e7db7f12af542d258",
"assets/assets/tipImage-2-1.png": "b17e6a723043acab6c4cc0675c1ba1f6",
"assets/assets/tipImage-2-2.png": "9983ccb385d7ddf1ae5740768fe8b4bd",
"assets/assets/tipImage-2-3.png": "5aea6da297886bdb6e8633854645fa9f",
"assets/assets/tipImage-2-4.png": "7ad6eed05d40d74e2d4ca544ad87b963",
"assets/assets/underConstruction.gif": "45bbcf7832e2ba44aa5a0f84f2278526",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C_A_black.png": "9e7348ec9f5e6cc22b728d9972f18605",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C_A_white.png": "d96448cf69123d0d61baf801aba1ce51",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C_B_color.png": "a8a76eb1421d1032cb678664912445c6",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588_A_black.png": "704ae41d259d0d66c48e9eb789584c1c",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588_A_white.png": "56f39d5c9cf56d75a3a3694fa205cff6",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588_B_color.png": "99397f3088b6dc775eda6b7a2d1dd7de",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "39ed5e7ce397ceecdec6021342795243",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "d753cc8837cb9562a3d93349b59dd37e",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "7e28d32e2cb56202e8ab1dce3097cf27",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0_A_black.png": "5c8f0ff12d6854f855531256b6abead8",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0_A_white.png": "0a2f46d1d3cee5f9641b3c355cb7f2c4",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0_B_color.png": "6be4b6ed37ced83e21ffa336e8581da0",
"assets/assets/weather_sticker/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "51ae55b9564d05df7346c28db23d1ffe",
"assets/assets/weather_sticker/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "a340a70310770ae21e5f91f877d8147a",
"assets/assets/weather_sticker/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "7a3dfb17bb1d3792ca7aa013a038b907",
"assets/assets/weather_sticker/%25EB%2588%2588_A_black.png": "9c461ab2640949beb155ddf88d6e883d",
"assets/assets/weather_sticker/%25EB%2588%2588_A_white.png": "6a5389325e741f827e7bd7a08e911c2f",
"assets/assets/weather_sticker/%25EB%2588%2588_B_color.png": "2b166983b15ef59d71476b1a69e12ce2",
"assets/assets/weather_sticker/%25EB%25A7%2591%25EC%259D%258C_A_black.png": "d43a291b593b382ad27a63b0bab72c70",
"assets/assets/weather_sticker/%25EB%25A7%2591%25EC%259D%258C_A_white.png": "556865e5499f66c32c7c00cbff754167",
"assets/assets/weather_sticker/%25EB%25A7%2591%25EC%259D%258C_B_color.png": "9f35d886ec2ad83f477064fada05a3cf",
"assets/assets/weather_sticker/%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "03e021bc0752197cf06dc58d1dddff67",
"assets/assets/weather_sticker/%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "a18c2e18d057f707de2a2b39a076aa02",
"assets/assets/weather_sticker/%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "8ab15ae2e14d04a0fdc98cefa8e6a7ce",
"assets/assets/weather_sticker/%25EB%25B9%2584_A_black.png": "b71a545f1a1dd3ccb3190f321e9183eb",
"assets/assets/weather_sticker/%25EB%25B9%2584_A_white.png": "e8527b0bf5b739eacf6a071e586beca2",
"assets/assets/weather_sticker/%25EB%25B9%2584_B_color.png": "557910aefaa54e3a48f167fcc7fa6684",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2598%25EA%25B8%25B0_A_black.png": "48fe825919d923d52643e72c399456aa",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2598%25EA%25B8%25B0_A_white.png": "ce7e60c59d66cc676421df4c1edd0364",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2598%25EA%25B8%25B0_B_color.png": "866646b6f43c24313f554f35a647af2f",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588_A_black.png": "8ca6420e02df22e6a675099508db716c",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588_A_white.png": "8980eaba7dcca91803d4bed2e718e7c8",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588_B_color.png": "197a8f23914a0666e1886bed072060b4",
"assets/assets/weather_sticker/%25EC%2595%2588%25EA%25B0%259C_A_black.png": "92d4fcc74b0e52d3943b5977ba75c4d1",
"assets/assets/weather_sticker/%25EC%2595%2588%25EA%25B0%259C_A_white.png": "5aaa59807b090a3f6c97664c1d9f590f",
"assets/assets/weather_sticker/%25EC%2595%2588%25EA%25B0%259C_B_color.png": "656556341392427b15c3b408d81e0949",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "4fd89d82cdd2795324dce2391773e344",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "aee37d9938f113992ebc8147ecae2980",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "2b89a1eb043b9fbe0cf65db1cf49f8bb",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_black.png": "c2f96c74525cd0e4f9289f59261feda5",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_white.png": "67f79393f90a50eece90f5a13e167c97",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_B_color.png": "842cf4bf99aef08e1c385fb341340e94",
"assets/assets/weather_sticker/%25ED%2599%25A9%25EC%2582%25AC_A_black.png": "f0c6e1ec9aacb411034f245495e18c28",
"assets/assets/weather_sticker/%25ED%2599%25A9%25EC%2582%25AC_A_white.png": "9145ce1219074e1a35d5c7a7ccbf38ee",
"assets/assets/weather_sticker/%25ED%2599%25A9%25EC%2582%25AC_B_color.png": "c7072f8b4fb4b0a8398883cbb7c110ec",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0_A_black.png": "09f6f12d3e42b91cac62b56f293feeeb",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0_A_white.png": "7650e17fed1362d9f1907dd236296057",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0_B_color.png": "39615e38f20bfe2c2bda3f6803a6d3d2",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588_A_black.png": "dd90523e3845e981e3b13692e252fb4b",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588_A_white.png": "bde3eca76f5dabae52016706ae60a8b9",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588_B_color.png": "bcee3cc460078ed7b2633bb9d418d32d",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584_A_black.png": "034aed9fce59e249f55907e7b26c49bd",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584_A_white.png": "bbd9ca79c7dfdd6b94523372afa743b1",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584_B_color.png": "e3cc4b444cda85c66692b99cbe13b2c6",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_black.png": "ce94929fd5eefe79ebb24681850a1b46",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_white.png": "533f82bbc37f714dfefb5f67fb1e5a7c",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_B_color.png": "b652dced811a45c259f1896fb7b164c4",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590_A_black.png": "fb3c31daede792c62d6d285bed745b47",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590_A_white.png": "bddec9970c878adff77a20dc01a8af26",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590_B_color.png": "61a372ec15b09561670919d8315d9621",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "eae9f05df9e6d9b2a8554cc220569074",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "3cd1223a0a3f6f0c559ee5e3d7259104",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "14b5caf187a8ab6269939cb390f7ed26",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25BC_A_black.png": "edd8b8c5803557f3f904757b703e783a",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25BC_A_white.png": "571e82b20e7011e0cb4f5c0b999ad22a",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25BC_B_color.png": "186b2e53b2713974af432570e8e8700a",
"assets/assets/weather_sticker/weather_icon_vector/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C.svg": "b320a1623af3b77aa2d542f201be2a29",
"assets/assets/weather_sticker/weather_icon_vector/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588.svg": "6a92994433fa08d05dd161ed2b007610",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC.svg": "7fa2c05965f9e1ccbf93cb8eff1141ea",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%2588%2588.svg": "5fba5b8db10e80a82f9b0efa76944438",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%25A7%2591%25EC%259D%258C.svg": "5e22cdcb1fff312786a796b30add3f8b",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%25B9%2584.svg": "a5fa35793e0a4077d2619c6837f74788",
"assets/assets/weather_sticker/weather_icon_vector/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588.svg": "efc30dce889dafd3e25915d68b52ec33",
"assets/assets/weather_sticker/weather_icon_vector/%25EC%2595%2588%25EA%25B0%259C.svg": "8e8e24a4100541c6b3af7d00e1462748",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0.svg": "ef394fecdb7c3124fcd941d30ccf9c83",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588.svg": "be8fb093c56f3c108d6709219182f936",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584.svg": "a45784d6adfeedbceee89c5a8fd306a6",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590.svg": "36b66a821d8d2cb35e5d6dc35de25f98",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC.svg": "622e62b6f0e903c8e83316dc87c791f4",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A6%25BC.svg": "367aa8bce8a09fa8dba9c7f09f8747da",
"assets/assets/word_BG.jpg": "2252e6116841144504665a55df7fb766",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "8463bb411ab27c2023cc5e07d04bd647",
"assets/fonts/GodoRounded/godoRounded-R.ttf": "c4a61e69569e01a5fffaa79cbfbf265e",
"assets/fonts/Jua/Jua-Regular.ttf": "f32585404eaefb4f771d6ec0d0492682",
"assets/fonts/Macondo/Macondo-Regular.ttf": "cea32bd04bb9981d8dd78e509ac1cccd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Nanum_Gothic/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf": "9eaa2e637c6efe5b4e37b7626e65b47c",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf": "a2dcb7090ec61a328c2d518342cdc568",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf": "afce7d51531785bfad8c666d6ee2a9b7",
"assets/fonts/Nanum_Pen_Script/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/fonts/NotoSerifJP/NotoSerifJP-Black.otf": "03a19497f4617cd92b39cb6fbc7aa65f",
"assets/fonts/NotoSerifJP/NotoSerifJP-Bold.otf": "cdb27ed3c3417fcc2bb96039eec7b1de",
"assets/fonts/NotoSerifJP/NotoSerifJP-ExtraLight.otf": "e98cf8a5efbb054141a89d142ed66b60",
"assets/fonts/NotoSerifJP/NotoSerifJP-Light.otf": "5c25ebd15c46219349acf17a6ddb839a",
"assets/fonts/NotoSerifJP/NotoSerifJP-Medium.otf": "7145bf3627d58f6c497d6a0fa038d4b4",
"assets/fonts/NotoSerifJP/NotoSerifJP-Regular.otf": "3541d8b1e13e3efd42a20aeb1f5eaaaf",
"assets/fonts/NotoSerifJP/NotoSerifJP-SemiBold.otf": "40d227d9028fc08a7660e433168187ad",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "89816c0e22baa4f81a196a1c3b61bf46",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "5dac92efb94655ca5331df2505f3428a",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "ca12d8bbcfe658da84c5a1c3c36286ec",
"assets/packages/creta_common/assets/lang/creta_lang_en.json": "72bbacec01a6ff64b060ae314201479b",
"assets/packages/creta_common/assets/lang/creta_lang_jp.json": "901a690e7f58f85f800087d3186621fc",
"assets/packages/creta_common/assets/lang/creta_lang_kr.json": "78d1c1657b3f62ec42de1c8e91e2e27d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_weather_bg_null_safety/images/cloud.webp": "849a0a8f321c14b3af35ede9808a17b5",
"assets/packages/flutter_weather_bg_null_safety/images/lightning0.webp": "8d28c99840abf552a78cade97a4cad22",
"assets/packages/flutter_weather_bg_null_safety/images/lightning1.webp": "c267264ed06f875fa86b841e4e70064a",
"assets/packages/flutter_weather_bg_null_safety/images/lightning2.webp": "f48a914f5b0560942aed70b7ea9efbf3",
"assets/packages/flutter_weather_bg_null_safety/images/lightning3.webp": "29797eeedec55c06efd7f167a74ec6ad",
"assets/packages/flutter_weather_bg_null_safety/images/lightning4.webp": "a175b2bc15e4df4bab37d5ccc43c14a0",
"assets/packages/flutter_weather_bg_null_safety/images/rain.webp": "be14922d4d3c0caa92982861045a678a",
"assets/packages/flutter_weather_bg_null_safety/images/snow.webp": "d5ce493b018954f7eefb569fe185df05",
"assets/packages/flutter_weather_bg_null_safety/images/sun.webp": "f4a3e24a77f84b97ac15f8c5b846eed1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/giphy_get/assets/img/GIPHY_dark.png": "13139c9681ad6a03a0f4a45030aee388",
"assets/packages/giphy_get/assets/img/GIPHY_light.png": "7c7ed0e459349435c6694a720236d5f4",
"assets/packages/giphy_get/assets/img/poweredby_dark.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/packages/giphy_get/assets/img/poweredby_light.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/html_editor_enhanced/assets/font/Jua/Jua-Regular.ttf": "f32585404eaefb4f771d6ec0d0492682",
"assets/packages/html_editor_enhanced/assets/font/Macondo/Macondo-Regular.ttf": "cea32bd04bb9981d8dd78e509ac1cccd",
"assets/packages/html_editor_enhanced/assets/font/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/packages/html_editor_enhanced/assets/font/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf": "afce7d51531785bfad8c666d6ee2a9b7",
"assets/packages/html_editor_enhanced/assets/font/Nanum_Pen_Script/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/packages/html_editor_enhanced/assets/font/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/packages/html_editor_enhanced/assets/font/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/Zocial/Zocial.ttf": "858c8726c5108d6b6184ecc936b0e32b",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "0f283dfa74caadd83dada767e14e2972",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "45e191b8be3fc15acb0146728abfa70d",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "dec89de4956611027ad31869e4580e39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c09d1c48408e55b0357f146a87577ea",
"/": "2c09d1c48408e55b0357f146a87577ea",
"js/screenshot.js": "48bceb49033f912ff65831a4e4d08e07",
"main.dart.js": "b72a9f8b6fe5d69e67bc5046a8ff4e32",
"manifest.json": "10c4c2a8c89b772ff830f2ce83fa630d",
"version.json": "534c1d2f16718b3387f30c1432052801"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}