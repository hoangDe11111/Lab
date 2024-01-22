const axios = require('axios');


async function fetchUrls(urls) {
    const results =[];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

/*
Đoạn mã 1:

    - Trong đoạn mã 1, chúng ta sử dụng một vòng lặp for-of để lặp qua danh sách các URL.
    - Trong mỗi vòng lặp, chúng ta sử dụng từ khóa await để đợi cho đến khi lời gọi axios.get(url) hoàn thành và trả về dữ liệu.
    - Kết quả trả về từ mỗi lời gọi axios.get(url) được đẩy vào mảng results bằng cách sử dụng phương thức push().
    - Cuối cùng, hàm trả về mảng results chứa tất cả các kết quả từ các lời gọi axios.get(url).
*/

//2
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    )
    return results;
}
/*
Đoạn mã 2:

    - Trong đoạn mã 2, chúng ta sử dụng phương thức Promise.all() để đợi cho tất cả các promise được tạo từ mảng urls hoàn thành và trả về kết quả.
    - Sử dụng phương thức map() trên mảng urls để tạo một mảng mới chứa các promise từ các lời gọi axios.get(url).
    - Sử dụng await để đợi cho tất cả các promise trong mảng được giải quyết và trả về một mảng kết quả.
    - Cuối cùng, hàm trả về mảng kết quả.
*/