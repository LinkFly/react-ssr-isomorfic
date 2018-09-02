export default ({body}) => {
  return `<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  <div id="container">${body}</div>
  <script src="client-part.js"></script>
</body>
</html>`;
};
