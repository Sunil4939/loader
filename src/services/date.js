// function formatDate(date) {
//     // console.log("date: ", date);
//     date = new Date(date)

//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//     let month = months[date.getMonth()]
//     let day = days[date.getDay()]
//     let d = date.getDate()
//     let year = String(date.getFullYear())
//      var dateString = `${d} ${month} ${year}`;
//     //  console.log(dateString)
//      return dateString;
//   }
  
// //   console.log(formatDate(new Date));
//   export default formatDate;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formattedDateServer = function (d = new Date()) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${day}/${month}/${year}`;
};



export const formattedDate3 = function (d = new Date()) {
    let month = String(d.getMonth());
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${day} ${months[d.getMonth()]} ${year}`;
};