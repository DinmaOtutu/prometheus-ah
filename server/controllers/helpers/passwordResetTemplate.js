const passwordResetTemplate = {
  passwordReset: url => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Authors Haven Email Template</title>
      <style>
        .container {
          box-sizing: border-box;
          font-family: 'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;
          font-size: 16px;
          vertical-align: top;
          padding: 30px;
          max-width: 600px;
          mnargin: auto;
        }
        .header {
          background: #fff;
        }
        .button {
          box-sizing: border-box;
          border-color: #348eda;
          font-weight: 400;
          text-decoration: none;
          display: inline-block;
          color: #ffffff;
          background-color: #B71540;
          border: solid 1px #B71540;
          border-radius: 2px;
          font-size: 14px;
          padding: 12px 45px;
        }
      .ii a[href] {
          color: #fff;
      }
      .hx {
        color: #500050;
    }
      </style>
    </head>
    <body>
      <section class="container">
        <header class="header">
          <h3>Welcome to Author Haven!</h3>
          <h3>By clicking on the following link, you will be redirected to a form to change your password</h3>
        </header>
        <p>Let's reset your password.<p>
        <a class="button" href="${url}"> Reset Password</a>
      </section>
    </body>
    </html>
  `
};

export default passwordResetTemplate;