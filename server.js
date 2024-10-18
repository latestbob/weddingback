const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(cors())

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    //
  ];
  
  // GET endpoint to return users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });

//   POST Request send mail

app.post('/api/send', async (req, res) => {

    const { name, email } = req.body;

   


 var transport = nodemailer.createTransport({
      host: 'mail.ireoluwayimika.online',
      port: 465,
      auth: {
        user: 'invites@ireoluwayimika.online',
        pass: 'BOBson246**'
      }
    });

  let mailOptions = {
    from: 'invites@ireoluwayimika.online',
    to: email,
    subject: "You're Invited to The IreoluwaYimika Experience",
    html: `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="line-height: inherit;">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>

  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="line-height: inherit; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff; color: #000000;">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="line-height: inherit; color: #000000; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; min-width: 320px; Margin: 0 auto; background-color: #ffffff; width: 100%;" cellpadding="0" cellspacing="0" width="100%" valign="top" bgcolor="#ffffff">
  <tbody style="line-height: inherit;">
  <tr style="line-height: inherit; border-collapse: collapse; vertical-align: top;" valign="top">
    <td style="line-height: inherit; color: #000000; word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
    

<div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: #ffffff;">
  <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
    <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
  <div style="line-height: inherit; height: 100%; width: 100%;">
  <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; height: 100%; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table id="u_content_image_1" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 20px 10px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        


      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: #e9e9f3;">
  <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
    <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e9e9f3;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #e9e9f3;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
  <div style="line-height: inherit; background-color: #e9e9f3; height: 100%; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width: 100%;">
  <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; height: 100%; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_heading_1" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 80px 10px 0px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        
  <h1 class="v-line-height v-font-size" style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Open Sans',sans-serif; font-size: 30px;">
    <div style="line-height: inherit;">
<div style="line-height: inherit;"><strong style="line-height: inherit;"></strong></div>
</div>
  </h1>

      </td>
    </tr>
  </tbody>
</table>

<table style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 13px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        
  <div class="v-line-height" style="line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="margin: 0; font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px;">Dear ${name} </span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_4" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 0px 50px 40px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        
  <div class="v-line-height" style="line-height: 160%; text-align: center; word-wrap: break-word;">
    <p style="margin: 0; font-size: 14px; line-height: 170%;"><span style="font-size: 12px; line-height: 20.4px;">

        We are excited to have you join us for <strong> The ÌrèolùwàYimika Experience!</strong> <br> Please find the invitation attached for all the details. <br> <br>
        
        Looking forward to celebrating this special day with you.</strong></span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_button_1" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 0px 10px 40px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        
  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
<div align="center" style="line-height: inherit;">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://admin.asknello.com" style="height:37px; v-text-anchor:middle; width:203px;" arcsize="67.5%"  stroke="f" fillcolor="#d07750"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Montserrat',sans-serif;"><![endif]-->  
    <a href="https://ireoluwayimika.online/" target="_blank" class="v-button v-size-width" style="line-height: inherit; box-sizing: border-box; display: inline-block; font-family: 'Montserrat',sans-serif; text-decoration: none; -webkit-text-size-adjust: none; text-align: center; color: #FFFFFF; background-color: #723526; border-radius: 25px; -webkit-border-radius: 25px; -moz-border-radius: 25px; width: 35%; max-width: 100%; overflow-wrap: break-word; word-break: break-word; word-wrap: break-word; mso-border-alt: none;">
      <span class="v-line-height" style="display: block; padding: 10px 20px; line-height: 120%;"><span style="font-size: 14px; line-height: 16.8px;">Our Love Story</span></span>
    </a>
  <!--[if mso]></center></v:roundrect><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_text_3" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 0px 60px 20px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        
  <div class="v-line-height" style="line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="margin: 0; font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px; font-family: 'Open Sans', sans-serif;"><strong style="line-height: inherit;">December, 21st 2024 | The ÌrèolùwàYimika Experience</strong></span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: transparent;">
  <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
    <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
  <div style="line-height: inherit; height: 100%; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width: 100%;">
  <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; height: 100%; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_image_3" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 10px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000;" valign="top">
  <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
    <td style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; padding-right: 0px; padding-left: 0px;" align="center" valign="top">
      
      <img align="center" border="0" src="images/image-1.png" alt="" title="" style="line-height: inherit; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; border: none; height: auto; float: none; width: 20%; max-width: 116px; display: inline-block;" width="116" class="v-src-width v-src-max-width">
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; font-family: 'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
  <tbody style="line-height: inherit;">
    <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
      <td class="v-container-padding-padding" style="line-height: inherit; vertical-align: top; border-collapse: collapse; color: #000000; overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 80px; font-family: 'Montserrat',sans-serif;" align="left" valign="top">
        


      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>

  `,

  attachments: [
    {
      filename: 'Wedding_Invitation.pdf',
      path: './attachments/Wedding_Invitation.pdf', // Local file path to the PDF
      contentType: 'application/pdf'
    }
  ]
  };

  // i have added new to mainbackend

  try {
    let info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }



res.status(200).json({ message: 'Working' });




});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });