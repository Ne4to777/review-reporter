type GetEmailContent = (report: string) => string
export const getEmailContent: GetEmailContent = report => `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Отчет</title>
        <style>
            * {
                font-family: 'Arial';            
            }
        </style>
    </head>
    <body>
        ${report}
    </body>
    </html>`
    .replace(/\\n/g, '');
