function maskify(data) {

    let str = data.toString()

    let res;
    if (data.length = 16) {

        let first = str.slice(0, 4);
        let last = str.substr(-4)

        res = first + "********" + last;
        console.log(res); 
    }
}

maskify(5168757313840532);