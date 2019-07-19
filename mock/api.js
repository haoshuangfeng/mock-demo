module.exports = function (router) {
  router.get('/foo.json', (req, resp) => {
    resp.send({
      status: 0
    });
  });
}
