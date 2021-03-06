let {
    addNewVisitor,
    listAllVisits,
    emptyVisits,
    veiwVisit,
    updateVisit,
    deleteVisit,
  } = require('../src/database');

  let firstVisitor = {

    visitor_name: "Lebo",
    visitor_age: 26,
    date_of_visit: new Date("04/02/2020"),
    time_of_visit: "12:33:00",
    assistant_name: "Romeo",
    comments: "None"
};

describe("AddNewVisitor function", () => {
    it("Adds a new visiter results to a visitors table", async() => {
        results = await addNewVisitor("Lebo", 26, "04/02/2020", "12:33:00", "Romeo", "None");
        expect(results[0].visitor_name).toEqual(firstVisitor.visitor_name);
        expect(results[0].visitor_age).toEqual(firstVisitor.visitor_age);
        expect(results[0].date_of_visit).toEqual(firstVisitor.date_of_visit);
        expect(results[0].time_of_visit).toEqual(firstVisitor.time_of_visit);
        expect(results[0].assistant_name).toEqual(firstVisitor.assistant_name);
        expect(results[0].comments).toEqual(firstVisitor.comments);
    })
})

describe("emptyVisits function", function() { 
    it("should be able to delete all visitors", async function (done) {

        expect(await emptyVisits()).not.toBeNull();
        done();
    });
});