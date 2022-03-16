export const allProducts = [
  {
    id: 1,
    name: "Apple iPhone 12, 128GB, White",
    model_name: "iPhone 12",
    storage: 128,
    os: "IOS 14",
    category: "phone",
    color: "white",
    size: "medium 6.1 Inches",
    brand: "apple",
    condition: "new",
    price: 899,
    description:
      'Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).The iPhone 12 models are beautifully designed with innovative features including an A14 Bionic, an advanced dual camera system and Super Retina XDR display with Ceramic Shield front 15.5 cm (6.1") all-screen OLED Display 2532 x 1170 pixels at 460 ppi. Backed by a one-year satisfaction guarantee.',
    reviews: [
        { id: 111, user: "Zahid", comment: "Nice for gaming" }
    ],
    images: [
        { id: 0, imageLink: "/images/products/iphone12_thumb.png" },
        { id: 1, imageLink: "/images/products/iphone12_01.jpg" },
        { id: 3, imageLink: "/images/products/iphone12_02.jpg" },
        { id: 4, imageLink: "/images/products/iphone12_03.jpg" },
        { id: 5, imageLink: "/images/products/iphone12_04.jpg" },
    ],
    rating:5
  },

  {
    id: 2,
    name: "Samsung Galaxy S10+, 512GB, Black",
    model_name: "Galaxy S10+",
    storage: 512,
    os: "Android",
    category: "phone",
    color: "black",
    size: "medium 6.4 Inches",
    brand: "samsung",
    price: 799,
    condition: "new",
    description:
      'The Galaxy S10 packs in a 3400mAh battery and manages to deliver over one day of battery life. It sports a triple camera setup at the back onsisting of a 12-megapixel telephoto camera, 12-megapixel wide-angle camera and 16-megapixel ultra wide camera. The device delivers excellent photos in the day, macros also turned out very well as the phone manages good edge detection. Low-light camera performance is impressive as well and the phone does a good job at keeping noise low.',
    reviews: [{ id: 221, user: "Zafar", comment: "Amazing phone" }],
    images: [
      { id: 0, imageLink: "/images/products/s10_thumb.png" },
      { id: 1, imageLink: "/images/products/s10_01.jpg" },
      { id: 3, imageLink: "/images/products/s10_02.jpg" },
      { id: 4, imageLink: "/images/products/s10_03.jpg" },
      { id: 5, imageLink: "/images/products/s10_04.jpg" },
      { id: 6, imageLink: "/images/products/s10_05.jpg" },
      { id: 6, imageLink: "/images/products/s10_06.jpg" },
  ],
  rating:3

  },
  {
    id: 3,
    name: "Samsung Galaxy Note 10+, 256GB",
    model_name: "Note 10+",
    storage: 256,
    os: "Android",
    category: "phone",
    color: "black",
    size: "large 6.8 Inches",
    brand: "samsung",
    price: 949,
    condition: "new",
    description:
      'The Samsung Galaxy Note 10+ has a new design and features a new Infinity-O display with a hole for a front-facing camera. The Galaxy Note 10+ has the camera hole right in the centre, at the top of the display and we got used to the hole in a matter of hours. The display sports QHD+ resolution and has good viewing angles. The Galaxy Note 10+ boasts of Dolby Audio support and the stereo speakers do help to improve the content viewing experience.',
    reviews: [{ id: 331, user: "Shahid", comment: "Phone is best for academic activities" }],
    images: [
      { id: 0, imageLink: "/images/products/note10_thumb.png" },
      { id: 1, imageLink: "/images/products/note10_01.jpg" },
      { id: 3, imageLink: "/images/products/note10_02.jpg" },
      { id: 4, imageLink: "/images/products/note10_03.jpg" },
      { id: 5, imageLink: "/images/products/note10_04.jpg" },
  ],    rating:4

  },
  {
    id: 4,
    name: "Huawei P40 Pro 5G ELS-NX9 256GB",
    model_name: "Huawei P40 Pro",
    storage: 256,
    os: "Android 10.0",
    category: "phone",
    color: "silvar",
    size: "large 6.10 Inches",
    brand: "huawei",
    price: 845,
    condition: "new",
    description:
      'Huawei P40 5G mobile was launched on 26th March 2020. The phone comes with a 6.10-inch touchscreen display with a resolution of 1080x2340 pixels and an aspect ratio of 19.5:9. Huawei P40 5G is powered by a 2.86GHz octa-core HiSilicon Kirin 990 5G processor that features 2 cores clocked at 2.86GHz, 2 cores clocked at 2.36GHz and 4 cores clocked at 1.95GHz. It comes with 8GB of RAM. The Huawei P40 5G runs Android 10 and is powered by a 3800mAh non-removable battery. The Huawei P40 5G supports proprietary fast charging.',
    reviews: [{ id: 331, user: "Shahid", comment: "Phone is best for academic activities" }],
    images: [
      { id: 0, imageLink: "/images/products/p40_thumb.png" },
      { id: 1, imageLink: "/images/products/p40_01.jpg" },
      { id: 3, imageLink: "/images/products/p40_02.jpg" },
      { id: 4, imageLink: "/images/products/p40_03.jpg" },
      { id: 5, imageLink: "/images/products/p40_04.jpg" },
      { id: 6, imageLink: "/images/products/p40_05.jpg" },
      { id: 7, imageLink: "/images/products/p40_06.jpg" },
  ],    rating:5

  }, 
  {
    id: 5,
    name: "OnePlus Nord CE, 5G Unlocked ",
    model_name: "OnePlus 9",
    storage: 256,
    os: "Android 11.0",
    category: "phone",
    color: "silvar",
    size: "medium 6.43 Inches",
    brand: "OnePlus",
    price: 499,
    condition: "new",
    description:
      "The OnePlus Nord CE 5G has a 6.43-inch AMOLED display with a holepunch for the selfie camera. It also has a 90Hz refresh rate. The display has good viewing angles and an in-display fingerprint scanner that's quick to unlock. The smartphone is thin and weighs 170gms which makes it comfortable for single-handed use.",
    reviews: [{ id: 331, user: "Shahid", comment: "Phone is best for academic activities" }],
    images: [
      { id: 0, imageLink: "/images/products/oneplus9_thumb.png" },
      { id: 1, imageLink: "/images/products/oneplus9_01.jpg" },
      { id: 3, imageLink: "/images/products/oneplus9_02.jpg" },
      { id: 4, imageLink: "/images/products/oneplus9_03.jpg" },
      { id: 5, imageLink: "/images/products/oneplus9_04.jpg" },
      { id: 5, imageLink: "/images/products/oneplus9_05.jpg" }
  ],    rating:4

  },
];
