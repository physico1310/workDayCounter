var a = {
    ram: { start: "01-08-2001", end: "10-07-2005" },
    neha: { start: "12-01-2003", end: "11-07-2008" },
    raj: { start: "02-01-2006", end: "11-07-2009" },
    vinod: { start: "17-08-2001", end: "11-02-2004" },
    anjana: { start: "30-01-2007", end: "11-07-2008" },
    vibha: { start: "15-01-2005", end: "21-09-2010" },
};

const data = {};
for (let item in a) {
    let end = a[item].end;
    let start = a[item].start;
    split = end.split("-");
    end = [split[1], split[0], split[2]].join("-"); //changing date format to mm-dd-yyyy
    split = start.split("-");
    start = [split[1], split[0], split[2]].join("-"); ///changing date format to mm-dd-yyyy
    let diff = new Date(end) - new Date(start);
    let final = diff / (1000 * 3600 * 24);
    data[item] = final;
}
console.table(data);
