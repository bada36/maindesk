const stage = document.getElementById("stage");
const menuItems = document.querySelectorAll(".menu_item");

const viewer = document.getElementById("viewer");
const big = document.getElementById("big");
const info = document.getElementById("info");

const images = {
  picture: [
    "https://d2w9rnfcy7mm78.cloudfront.net/41481222/original_3ff103a65f1a0dd38604c04e7df92002.jpg?1764569121",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481221/original_1fabaae8ae87b4ed613068f793eaed7c.jpg?1764569121",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481225/original_356b471a14fb952c8805b3146f9442c4.jpg?1764569121",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481223/original_154acf0549f0f26aa9ec5d99bca53c1d.jpg?1764569121",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481309/original_bda3f9e3a438c77808217662ca9e72cf.jpg?1764569351",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481310/original_70556de7968b40c701ed98c733b0f6ca.jpg?1764569351",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481314/original_b0c50ed1500082b76c82a4b1f86016bd.jpg?1764569380",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481315/original_e2bd2155a713290ff2b84847bad326d7.jpg?1764569381",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481319/original_fc9801f03611793985f1c3a8d517c568.jpg?1764569383",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481318/original_0df47201642f82ec16838dfab273c66b.jpg?1764569384",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481323/original_6c1ace89412014660e7f5f2361eccb27.jpg?1764569396",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481324/original_4fbdf8dd8092b9c40c03709dd0a6b60e.jpg?1764569396",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481249/original_3426ac1261a9351328d72507572592ea.jpg?1764569205",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481251/original_0f592a345b242e4801d03014a64c880b.jpg?1764569204",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481255/original_25031608dd19f89d1e23c2b196d4a889.jpg?1764569219",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481256/original_cfddf09b32d3eaab53f764d94d3cc202.jpg?1764569219",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481257/original_7ea7d7dd2c730a5415ec0b206790e1be.jpg?1764569220",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481258/original_1c9a4cee3c077393b968234ebc407bf8.jpg?1764569221",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481259/original_d6ec4f4d519ffd0683a724cf933f9501.jpg?1764569224",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481290/original_c77a6cfa18d9241ffdec86f90ebd74ec.jpg?1764569323",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481294/original_2f786b6e31fcb200f265fbeb6f2977cb.jpg?1764569323",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481291/original_d41e080b6c73a22ec73698f82299d281.jpg?1764569323",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481293/original_121d671230f671b1a8571816947ecf23.jpg?1764569324",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481292/original_021a8706884907c872812b02aedc53bd.jpg?1764569324",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481296/original_13f559cc1ee668debe3df8e5d221017e.jpg?1764569325",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481298/original_e568c4f49d85565c51a9531007f21faf.jpg?1764569336",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481301/original_64ffe2f73ad2be0f214fe8ef128be7e7.jpg?1764569338",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481311/original_bd3ba30ae49ba950b549c5294b45493b.jpg?1764569352",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481306/original_8f66e9f2d00fbbcf4188bfba5c1b3e22.jpg?1764569350",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481307/original_05d7515bca9bbaaeee8e1607a31183da.jpg?1764569350",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481241/original_b09a24bc6aa23b774557b7163c7570c0.jpg?1764569166",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481242/original_f653015c707d3f91b6dae2f33e65ed13.jpg?1764569168",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481239/original_c69a6d8a95d8aba0b70098d2b7a00100.jpg?1764569163",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481238/original_e71eac5395a3f58941fce0483887d827.jpg?1764569159",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481237/original_50bf97ba9d196b2738d17523d6d11c0b.jpg?1764569154",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481235/original_6c264e6ebeb61140c68e40486505bf19.jpg?1764569143",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481232/original_631eac2bb5be12db64fc3f508bba477b.jpg?1764569142",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481226/original_872632705f340f73d742b86653ff342c.jpg?1764569122",
  ],
  drawing: [
    "https://d2w9rnfcy7mm78.cloudfront.net/41765256/original_76c41d3c8e5f3b833d2b3cc31b755566.jpg?1765546688",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765257/original_ba4928920046d81ac5169b768fd43e62.jpg?1765546689",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765258/original_5912aaf27f23098a6ddec98acce0df1b.jpg?1765546690",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765260/original_873703afba195df67e799c38854e360b.jpg?1765546690",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765261/original_61fdafef5291eb766ee7d65d37070561.jpg?1765546691",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765262/original_df6da2c3b679a187dd745e20762eef84.jpg?1765546692",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765263/original_00b5718d8cb9e6fb9748c057fc28264e.jpg?1765546692",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765264/original_bc2467cb87f2f0e818fc015d0410b7d2.jpg?1765546692",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765265/original_d065494a126d1addea8483ee299de113.jpg?1765546693",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765266/original_41e5b8e1d43be8a47140c0bcb1f2d3d8.jpg?1765546693",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765267/original_9ea6261526cfa23d5ab9a80e1ed8ccee.jpg?1765546697",
    "https://d2w9rnfcy7mm78.cloudfront.net/41765268/original_c4b3767c5b0595a3a6c2bf11b9c1f247.jpg?1765546703",
  ],
  painting: [
    
  
    "https://d2w9rnfcy7mm78.cloudfront.net/41481970/original_c5e1b3b74497856cac2e2ce710b1db12.jpg?1764572944",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481969/original_b35d1b0d916ee69e0e64dc2b098bda03.jpg?1764572944",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481968/original_1541f4f345837a1a36f846617e72146f.jpg?1764572944",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481966/original_b351c0c914a233f31a5fa96b835539d8.jpg?1764572931",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481965/original_d8535ef5b11953768034c9a03a5ea010.jpg?1764572931",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481964/original_227220c12109695bcf0aadd2843a5278.jpg?1764572931",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481971/original_9b2d6cb3d696d2531990eda564878507.jpg?1764572945",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481963/original_1120016162e5b22fd2fa21422eecf20b.jpg?1764572927",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481961/original_01c12234dd63c3314bd7a85c8326a934.jpg?1764572922",
    "https://d2w9rnfcy7mm78.cloudfront.net/41481962/original_c5aafe40d3ca555bbd4d6ed36da7e691.jpg?1764572922",
    "https://d2w9rnfcy7mm78.cloudfront.net/41482061/original_c7592d04a9435594628a8e33dd8e1542.jpg?1764573682",
    "https://d2w9rnfcy7mm78.cloudfront.net/41795247/original_dd719e73aedb8bc4d10acd03822b3dc0.jpg?1765723715"
  ]
};

const imageInfo = {
  "https://d2w9rnfcy7mm78.cloudfront.net/41481970/original_c5e1b3b74497856cac2e2ce710b1db12.jpg?1764572944":"<loveless;kissing>,2023,장지에 분채,아크릴,25.8 x 17.9 cm,",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481969/original_b35d1b0d916ee69e0e64dc2b098bda03.jpg?1764572944":"<광견병>연작,2022,장지에분채,",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481968/original_1541f4f345837a1a36f846617e72146f.jpg?1764572944":"<감정에는의지가없어나도모르게어린양을자처합니다>,2023,장지에 분채,72.7x60.6cm",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481966/original_b351c0c914a233f31a5fa96b835539d8.jpg?1764572931":"<무제>,2023,장지에 분채,30x30cm",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481965/original_d8535ef5b11953768034c9a03a5ea010.jpg?1764572931":"<광견병>,2022,장지에 분채,25x25cm",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481964/original_227220c12109695bcf0aadd2843a5278.jpg?1764572931":"<안녕하세요,>.2025,장지에 혼합재료,34x24.2cm",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481963/original_1120016162e5b22fd2fa21422eecf20b.jpg?1764572927":"<깨진 입>,장지에 분채,방해말,72.5x50cm",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481961/original_01c12234dd63c3314bd7a85c8326a934.jpg?1764572922":"<깨진 입>,장지에 분채,방해말,72.5x60.5cm",
  "https://d2w9rnfcy7mm78.cloudfront.net/41481962/original_c5aafe40d3ca555bbd4d6ed36da7e691.jpg?1764572922":"<별로 달지 않은 잠>,장지에 호분,과슈,52.6 x 41cm"

};


viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.close();
});

menuItems.forEach((item, index) => {
  if (index < 2) return;

  item.onclick = () => {
    const key = item.textContent.trim();
    stage.innerHTML = "";

    (images[key] || []).forEach(link => {
      const img = document.createElement("img");
      img.src = link;
      img.className = "art_img";
      img.dataset.info = imageInfo[link] || "";

      img.onclick = () => {
        big.src = img.src;
        info.textContent = img.dataset.info || "";
        viewer.showModal();
      };

      stage.appendChild(img);
    });
  };
});


    


