const widgets = require("../data/widget.mock")


module.exports = function (app) {

  function findAllWidgets(req, res) {
    res.send(widgets)
  }

  function findWidgetById(req, res) {

  }

  function createWidget(req, res) {

  }

  function updateWidget(req, res) {

  }

  function deleteWidget(req, res) {

  }

  app.get("/api/widgets", findAllWidgets);
  app.get("/api/widgets/:wid", findWidgetById);
  app.post("/api/widgets", createWidget);
  app.put("/api/widgets/:wid", updateWidget);
  app.delete("/api/widgets/:wid", deleteWidget);
}
