import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function quoteApiPlugin(): Plugin {
  return {
    name: 'quote-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/quote', async (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const {
                fullName,
                companyName,
                email,
                phone,
                packagingType,
                estimatedQuantity,
                projectDetails,
                timeline,
              } = data;

              // Validate required fields
              if (!fullName || !companyName || !email || !phone || !projectDetails) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'Please complete all required fields.',
                  })
                );
                return;
              }

              const recipient = process.env.QUOTE_RECIPIENT_EMAIL || 'anujuluuzondu@gmail.com';
              const subject = 'New Packaging Quote Request — Lord Stan Concepts';
              const resendApiKey = process.env.RESEND_API_KEY;

              let emailSent = false;
              let emailServiceConfigured = false;
              let emailDeliveryError: string | null = null;

              const textContent = `
NEW PACKAGING QUOTE REQUEST — LORD STAN CONCEPTS
------------------------------------------------
Full Name: ${fullName}
Company Name: ${companyName}
Email: ${email}
Phone / WhatsApp: ${phone}
Packaging Type: ${packagingType || 'Not specified'}
Estimated Quantity: ${estimatedQuantity || 'Not specified'}
Timeline: ${timeline || 'Standard'}

Project Details:
${projectDetails}

Submitted: ${new Date().toISOString()}
Target Recipient: ${recipient}
              `.trim();

              const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #121214; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5dfd3; border-radius: 8px; background-color: #faf8f5; }
    .header { border-bottom: 2px solid #c5a059; padding-bottom: 12px; margin-bottom: 20px; }
    .title { font-size: 20px; font-weight: bold; margin: 0; color: #121214; }
    .subtitle { color: #8c7647; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; }
    .item { margin-bottom: 12px; }
    .label { font-size: 11px; text-transform: uppercase; color: #666; font-weight: bold; display: block; }
    .value { font-size: 15px; color: #111; font-weight: 500; }
    .brief { background: #ffffff; padding: 16px; border: 1px solid #e0dad0; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; }
    .footer { font-size: 12px; color: #888; margin-top: 24px; border-top: 1px solid #e5dfd3; padding-top: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="subtitle">Lord Stan Concepts</div>
      <h1 class="title">New Packaging Quote Request</h1>
    </div>
    
    <div class="item">
      <span class="label">Client Name</span>
      <span class="value">${fullName}</span>
    </div>
    <div class="item">
      <span class="label">Company / Brand</span>
      <span class="value">${companyName}</span>
    </div>
    <div class="item">
      <span class="label">Email Address</span>
      <span class="value"><a href="mailto:${email}">${email}</a></span>
    </div>
    <div class="item">
      <span class="label">Phone / WhatsApp</span>
      <span class="value"><a href="tel:${phone}">${phone}</a></span>
    </div>
    <div class="item">
      <span class="label">Packaging Type</span>
      <span class="value">${packagingType || 'Folding Paperboard Cartons'}</span>
    </div>
    <div class="item">
      <span class="label">Estimated Quantity</span>
      <span class="value">${estimatedQuantity || '1,000 – 5,000 units'}</span>
    </div>
    <div class="item">
      <span class="label">Target Timeline</span>
      <span class="value">${timeline || 'Standard (3–4 weeks)'}</span>
    </div>
    
    <div class="item">
      <span class="label">Project Brief &amp; Specifications</span>
      <div class="brief">${projectDetails.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    </div>

    <div class="footer">
      This quote request was submitted via Lord Stan Concepts website for ${recipient}.
    </div>
  </div>
</body>
</html>
              `.trim();

              if (resendApiKey && !resendApiKey.includes('your_api_key_here')) {
                emailServiceConfigured = true;
                try {
                  const sender = process.env.QUOTE_SENDER_EMAIL || 'Lord Stan Concepts <onboarding@resend.dev>';
                  const resendRes = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${resendApiKey}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      from: sender,
                      to: [recipient],
                      reply_to: email,
                      subject: subject,
                      text: textContent,
                      html: htmlContent,
                    }),
                  });

                  if (resendRes.ok) {
                    emailSent = true;
                  } else {
                    const errData = await resendRes.json().catch(() => ({}));
                    emailDeliveryError = (errData as { message?: string }).message || 'Email dispatch failed';
                    console.error('[RESEND_ERROR]', errData);
                  }
                } catch (err: unknown) {
                  const error = err as Error;
                  emailDeliveryError = error.message;
                  console.error('[EMAIL_SEND_EXCEPTION]', error);
                }
              } else {
                console.log('----------------------------------------------------');
                console.log(`[QUOTE RECEIVED] Target Recipient: ${recipient}`);
                console.log(`[FROM]: ${fullName} (${companyName}) <${email}> ${phone}`);
                console.log(`[TYPE]: ${packagingType} | [QTY]: ${estimatedQuantity}`);
                console.log(`[BRIEF]: ${projectDetails}`);
                console.log('----------------------------------------------------');
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  emailSent,
                  emailServiceConfigured,
                  emailDeliveryError,
                  recipient,
                  subject,
                  data: {
                    fullName,
                    companyName,
                    email,
                    phone,
                    packagingType,
                    estimatedQuantity,
                    projectDetails,
                    timeline,
                  },
                })
              );
            } catch (err: unknown) {
              const error = err as Error;
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  error: error.message || 'Failed to process submission',
                })
              );
            }
          });
          return;
        }

        if (req.method === 'GET') {
          const recipient = process.env.QUOTE_RECIPIENT_EMAIL || 'anujuluuzondu@gmail.com';
          const hasKey = Boolean(process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes('your_api_key_here'));
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              status: 'ready',
              recipient,
              emailServiceConfigured: hasKey,
            })
          );
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), quoteApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
