module.exports = function() {

  // fetchMeals: function() {
  //   console.log()
  // },



  function getDateFormat(reqDate) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm
    }

    if (reqDate === "tomorrow") {
      dd += 1;
    }

    date = yyyy + '-' + mm + '-' + dd;

    return date
  }

  // Src: https://gist.github.com/kmaida/6045266
  function convertTimestamp(timestamp) {
    var   d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
          yyyy = d.getFullYear(),
          mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
          dd = ('0' + d.getDate()).slice(-2),     // Add leading 0.
          time;

    // ie: 2013-02-18
    time = yyyy + '-' + mm + '-' + dd;

    return time;
  }

};
