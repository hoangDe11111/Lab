fetch('http://localhost:3000/categories')
.then(response => response.json())
.then(categories => {
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
              let productList = document.getElementById("productTab1");
              let productHTML = products.map(product => {
                let category = categories.find(cat => cat.id === product.cateId);
                function number_format(number) {
                  return number.toLocaleString('vi-VN');
                }
                return `
                  <div class="col-md-6 col-lg-4 col-xl-3">
                    <a href="shop-detail.html">
                      <div class="rounded position-relative fruite-item">
                        <div class="fruite-img">
                          <img src="${product.image}" style="width: 261px; height: 281px;" class="img-fluid w-100 rounded-top" alt="">
                        </div>
                        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">
                          ${category ? category.name : ""}
                        </div>
                        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>${product.name}</h4>
                          <p class="text-dark fs-4 fw-bold mb-3">${number_format(product.price)} VNĐ / kg</p>
                          <a href="cart.html" class="btn border border-secondary rounded-pill px-2 text-primary">
                            <i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                `;
              }).join('');

              productList.innerHTML = productHTML;
            });
        });

        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(categories => {
          fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(products => {
                      let productList = document.getElementById("products");
                      let productHTML = products.map(product => {
                        let category = categories.find(cat => cat.id === product.cateId);
                        function number_format(number) {
                          return number.toLocaleString('vi-VN');
                        }
                        return `
                        <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                            <img src="${product.image}"style="width: 261px; height: 281px;"  class="img-fluid w-100 rounded-top" alt="">
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                style="top: 10px; left: 10px;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">  ${category ? category.name : ""}</font>
                                </font>
                            </div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">${product.name}</font>
                                    </font>
                                </h4>
                                <p>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;"></font>
                                    </font>
                                </p>
                                <div class="d-flex justify-content-between flex-lg-wrap">
                                    <p class="text-dark mb-4 fs-5 fw-bold mb-0">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">${number_format(product.price)} VNĐ / kg</font>
                                        </font>
                                    </p>
                                    <a href="cart.html"
                                        class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                            class="fa fa-shopping-bag me-2 text-primary"></i>
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">Thêm vào giỏ hàng</font>
                                        </font>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                      `;
                    }).join('');
        
                      productList.innerHTML = productHTML;
                    });
                });