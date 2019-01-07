<!DOCTYPE html>
<html>

<head>
  <meta charSet="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title data-react-helmet="true"></title>
  <link rel="shortcut icon" href="/icons/favicon.ico" />
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="theme-color" content="#336699" />
  <script src="/socket.io/socket.io.js"></script>
</head>

<body>
  <?php
/* This will give an error. Note the output
 * above, which is before the header() call */
header('Location: public/index.html');
exit;
?>
</body>

</html>
