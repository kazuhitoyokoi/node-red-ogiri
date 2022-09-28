const fs = require('fs');
const csv = require('csv');
const getTime = require('date-fns/getTime');

fs.createReadStream(__dirname + '/test.csv')
    .pipe(csv.parse({columns: true}, function (err, data) {
        if (err) throw err;
        data.forEach(line => {
            let a = line.a.split('/');
            let today = getTime(new Date());
            let lineDate = getTime(new Date(a[0], a[1]-1, a[2]));
            if (today <= lineDate) console.log(line);
        })
}));
