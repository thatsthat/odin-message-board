var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there 11!",
    user: "Amandillo",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    user: "Pep",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* GET home page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
  router.post();
});

/* POST action for new message form. */
router.post("/new", function (req, res, next) {
  messages.push({
    user: req.body.user,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
