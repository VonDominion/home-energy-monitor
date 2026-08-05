function createApp() {
  return (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Home Energy Monitor API' }));
  };
}

module.exports = createApp;
