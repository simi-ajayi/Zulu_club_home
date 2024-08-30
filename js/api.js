const url = "https://zulushop.in/seller/app/v1/api/get_seller_details";
const url2 = "https://zulushop.in/app/v1/api/get_sellers"; //✅

const content1 = document.querySelector("#content1");
const content2 = document.querySelector("#content2");
const content4 = document.querySelector("#content4");

async function myApi() {
  try {
    let response1 = await fetch(url2, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        let data2 = data.data;
        // console.log(data2);
        let div = "";
        data2.forEach((element) => {
          div += `
          <div class="col col-md-4 card mt-5 row row-cols-2 flex-row p-4 pb-2">
            <div class="col w-75 px-0">
              <h3>${element.seller_name}</h3>
              <p>This is a highly trendy womens wear outlet</p>
              <p class="mb-0">Retail and Bulk</p>
              <p>${element.total_products} Products</p>
              <div class=""><a href="../pages/outlet-home.html?id=${element.seller_id}">Website</a> <a href="">App</a></div>
            </div>
            <div class="col w-25 px-0 h-75">
              <img
                src="${element.seller_profile}"
                alt=""
                style="width: 100%;object-fit: cover;"
              />
            </div></div>`;
        });
        // 4 3 2 1
        content1.innerHTML = div;

        content2.innerHTML = `<div class="col col-md-4 card mt-5 row row-cols-2 flex-row p-4 pb-2">
            <div class="col w-75 px-0">
              <h3>${data2[4].seller_name}</h3>
              <p>This is a highly trendy womens wear outlet</p>
              <p class="mb-0">Retail and Bulk</p>
              <p>${data2[4].total_products} Products</p>
              <div class=""><a href="../pages/outlet-home.html?id=${data2[4].seller_id}" target='_blank'>Website</a> <a href="">App</a></div>
            </div>
            <div class="col w-25 px-0 h-75">
              <img
                src="${data2[4].seller_profile}"
                alt=""
                style="width: 100%;object-fit: cover;"
              />
            </div>
          </div>
          <div class="col col-md-4 card mt-5 row row-cols-2 flex-row p-4 pb-2">
            <div class="col w-75 px-0">
              <h3>${data2[3].seller_name}</h3>
              <p>This is a highly trendy womens wear outlet</p>
              <p class="mb-0">Retail and Bulk</p>
              <p>${data2[3].total_products} Products</p>
              <div class=""><a href="../pages/outlet-home.html?id=${data2[3].seller_id}" target='_blank'>Website</a> <a href="">App</a></div>
            </div>
            <div class="col w-25 px-0 h-75">
              <img
                src="${data2[3].seller_profile}"
                alt=""
                style="width: 100%;object-fit: cover;"
              />
            </div>
          </div>
          <div class="col col-md-4 card mt-5 row row-cols-2 flex-row p-4 pb-2">
            <div class="col w-75 px-0">
              <h3>${data2[2].seller_name}</h3>
              <p>This is a highly trendy womens wear outlet</p>
              <p class="mb-0">Retail and Bulk</p>
              <p>${data2[2].total_products} Products</p>
              <div class=""><a href="../pages/outlet-home.html?id=${data2[2].seller_id}" target='_blank'>Website</a> <a href="">App</a></div>
            </div>
            <div class="col w-25 px-0 h-75">
              <img
                src="${data2[2].seller_profile}"
                alt=""
                style="width: 100%;object-fit: cover;"
              />
            </div>
          </div>`;
      });
    // var data1 = await response1.json();
    console.log(response1);
  } catch (error) {
    console.error("Error:", error);
  }
}

myApi();

// new  api

const url3 = "https://localhost/Zulu-Backend/app/v1/api/get_seller_profile_id"; //❌
// const url4 = "https://zulushop.in/app/v1/api/get_brand_data_product";
const url4 = "https://localhost/Zulu-Backend/app/v1/api/get_brands_data"; //❌
const url5 =
  "https://localhost/Zulu-Backend/app/v1/api/get_seller_features_sections"; //❌
const url6 = "https://zulushop.in/app/v1/api/get_categories"; //✅
const url7 = "https://zulushop.in/app/v1/api/get_products"; //✅

const url8 = "https://zulushop.in/app/v1/api/seller_list"; //✅

async function myApi2() {
  const postData = {
    seller_id: "85",
  };
  try {
    const response = await fetch(url4, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const result = await response.json();
      // setResponseMessage(result.message); // Assuming the API returns a message
    } else {
      // setResponseMessage('Failed to send data.');
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    // setResponseMessage('An error occurred.');
    console.error("Error:", error);
  }
}

myApi2();

async function myApi3() {
  try {
    let response1 = await fetch(url8, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let data2 = data;
        // console.log(data2);
        let div = "";
        data2.forEach((element) => {
          div += `
          <div class="col col-md-4 card mt-5 row row-cols-2 flex-row p-4 pb-2">
            <div class="col w-75 px-0">
              <h3>${element.account_number}</h3>
              <p>This is a highly trendy womens wear outlet</p>
              <p class="mb-0">Retail and Bulk</p>
              <p>${element.bulk_loyalty_type} Products</p>
            </div>
            <div class="col w-25 px-0 h-75">
              
            </div></div>`;
        });
        // 4 3 2 1
        content4.innerHTML = div;
      });
    // var data1 = await response1.json();
    console.log(response1);
  } catch (error) {
    console.error("Error:", error);
  }
}

myApi3();

async function myApi4() {
  try {
    let response1 = await fetch(url5, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // let data2 = data;
        // // console.log(data2);
        // let div = "";
        // data2.forEach((element) => {
        //   div += `
        //   <div class="col col-md-4 card mt-5 row row-cols-2 flex-row p-4 pb-2">
        //     <div class="col w-75 px-0">
        //       <h3>${element.account_number}</h3>
        //       <p>This is a highly trendy womens wear outlet</p>
        //       <p class="mb-0">Retail and Bulk</p>
        //       <p>${element.bulk_loyalty_type} Products</p>
        //     </div>
        //     <div class="col w-25 px-0 h-75">
              
        //     </div></div>`;
        // });
        // // 4 3 2 1
        // content4.innerHTML = div;
      });
    // var data1 = await response1.json();
    // console.log(response1);
  } catch (error) {
    console.error("Error:", error);
  }
}

myApi4();
