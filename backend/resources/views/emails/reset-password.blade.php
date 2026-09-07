<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Recuperação de Password | Behind the Thread</title>

    <style>
        @font-face {
            font-family: "Basteleur";
            src: url("{{ config('app.url') }}/typography/Basteleur-Bold.woff2")
                format("woff2");
            font-weight: 700;
        }

        @font-face {
            font-family: "Basteleur";
            src: url("{{ config('app.url') }}/typography/Basteleur-Moonlight.woff2")
                format("woff2");
            font-weight: 400;
        }

        @font-face {
            font-family: "Lexend";
            src: url("{{ config('app.url') }}/typography/Lexend-Regular.ttf")
                format("truetype");
            font-weight: 400;
        }

        @font-face {
            font-family: "Lexend";
            src: url("{{ config('app.url') }}/typography/Lexend-Bold.ttf")
                format("truetype");
            font-weight: 700;
        }

        @media only screen and (max-width: 700px) {
            .email-wrapper {
                padding: 30px 15px !important;
            }

            .email-container {
                width: 100% !important;
            }

            .brand {
                font-size: 25px !important;
            }

            .content-cell {
                padding: 32px 25px !important;
            }

            .page-title {
                font-size: 34px !important;
            }

            .main-card {
                box-shadow: 7px 7px 0 #1e1e1e !important;
            }
        }
    </style>
</head>

<body
    style="
        margin:0;
        padding:0;
        width:100%;
        background:#fef0cf;
        color:#1e1e1e;
        font-family:'Lexend', Arial, Helvetica, sans-serif;
        -webkit-text-size-adjust:100%;
        -ms-text-size-adjust:100%;
    "
>

<table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    role="presentation"
    style="
        width:100%;
        background:#fef0cf;
    "
>
    <tr>
        <td
            align="center"
            class="email-wrapper"
            style="
                padding:55px 20px 70px;
            "
        >

            <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                class="email-container"
                style="
                    width:100%;
                    max-width:1000px;
                "
            >

                <tr>
                    <td style="padding:0 0 28px;">

                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                        >
                            <tr>

                                <td
                                    align="left"
                                    class="brand"
                                    style="
                                        color:#1e1e1e;
                                        font-family:'Basteleur',
                                            Georgia,
                                            'Times New Roman',
                                            serif;
                                        font-size:30px;
                                        line-height:1;
                                        font-weight:700;
                                        letter-spacing:-1px;
                                    "
                                >
                                    Behind the Thread
                                </td>

                                <td
                                    align="right"
                                    style="
                                        color:#1e1e1e;
                                        font-family:'Lexend',
                                            Arial,
                                            Helvetica,
                                            sans-serif;
                                        font-size:11px;
                                        line-height:1;
                                        font-weight:700;
                                        letter-spacing:1px;
                                        text-transform:uppercase;
                                    "
                                >
                                    
                                </td>

                            </tr>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td>

                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                            style="
                                border-top:2px solid #1e1e1e;
                            "
                        >
                            <tr>
                                <td style="height:1px; line-height:1px;">
                                    &nbsp;
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td style="padding:28px 0 35px;">

                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                        >
                            <tr>
                                <td
                                    align="left"
                                    style="
                                        color:#1e1e1e;
                                        font-family:'Lexend',
                                            Arial,
                                            Helvetica,
                                            sans-serif;
                                        font-size:11px;
                                        line-height:1.4;
                                        font-weight:700;
                                        letter-spacing:1.5px;
                                        text-transform:uppercase;
                                    "
                                >
                                    RECUPERAÇÃO DE PASSWORD
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td>

                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                            class="main-card"
                            style="
                                width:100%;
                                background:#fef0cf;
                                border:2px solid #1e1e1e;
                                box-shadow:10px 10px 0 #1e1e1e;
                            "
                        >
                            <tr>

                                <td
                                    class="content-cell"
                                    style="
                                        padding:45px 45px 48px;
                                    "
                                >

                                    <h1
                                        class="page-title"
                                        style="
                                            margin:0 0 30px;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Basteleur',
                                                Georgia,
                                                'Times New Roman',
                                                serif;
                                            font-size:42px;
                                            line-height:.95;
                                            font-weight:700;
                                            letter-spacing:-1px;
                                        "
                                    >
                                        Recuperar<br>
                                        Password
                                    </h1>

                                    <p
                                        style="
                                            margin:0 0 22px;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Lexend',
                                                Arial,
                                                Helvetica,
                                                sans-serif;
                                            font-size:14px;
                                            line-height:1.6;
                                            font-weight:700;
                                        "
                                    >
                                        Olá, {{ $user->name }}!
                                    </p>

                                    <p
                                        style="
                                            margin:0 0 16px;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Lexend',
                                                Arial,
                                                Helvetica,
                                                sans-serif;
                                            font-size:14px;
                                            line-height:1.75;
                                            font-weight:400;
                                        "
                                    >
                                        Recebemos um pedido para repor a
                                        password da tua conta no
                                        <strong>Behind the Thread</strong>.
                                    </p>

                                    <p
                                        style="
                                            margin:0 0 32px;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Lexend',
                                                Arial,
                                                Helvetica,
                                                sans-serif;
                                            font-size:14px;
                                            line-height:1.75;
                                            font-weight:400;
                                        "
                                    >
                                        Para criares uma nova password,
                                        utiliza o botão abaixo.
                                    </p>

                                    <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        role="presentation"
                                        style="
                                            margin:0 0 38px;
                                        "
                                    >
                                        <tr>
                                            <td>

                                                <a
                                                    href="{{ $url }}"
                                                    style="
                                                        display:inline-block;
                                                        padding:15px 25px;
                                                        background:#1e1e1e;
                                                        color:#fef0cf;
                                                        border:2px solid #1e1e1e;
                                                        font-family:'Lexend',
                                                            Arial,
                                                            Helvetica,
                                                            sans-serif;
                                                        font-size:12px;
                                                        line-height:1;
                                                        font-weight:700;
                                                        text-decoration:none;
                                                        text-transform:uppercase;
                                                        letter-spacing:.7px;
                                                    "
                                                >
                                                    Repor Password
                                                </a>

                                            </td>
                                        </tr>
                                    </table>

                                    <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        role="presentation"
                                        style="
                                            border-top:2px solid #1e1e1e;
                                        "
                                    >
                                        <tr>
                                            <td
                                                style="
                                                    height:20px;
                                                    line-height:20px;
                                                "
                                            >
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>

                                    <p
                                        style="
                                            margin:0 0 10px;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Lexend',
                                                Arial,
                                                Helvetica,
                                                sans-serif;
                                            font-size:12px;
                                            line-height:1.6;
                                            font-weight:700;
                                        "
                                    >
                                        O link é válido durante 60 minutos.
                                    </p>

                                    <p
                                        style="
                                            margin:0;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Lexend',
                                                Arial,
                                                Helvetica,
                                                sans-serif;
                                            font-size:12px;
                                            line-height:1.7;
                                            font-weight:400;
                                        "
                                    >
                                        Se não pediste a recuperação da
                                        password, podes ignorar este e-mail.
                                    </p>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td
                        style="
                            height:65px;
                            line-height:65px;
                        "
                    >
                        &nbsp;
                    </td>
                </tr>

                <tr>
                    <td>

                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                            style="
                                border-top:2px solid #1e1e1e;
                            "
                        >
                            <tr>

                                <td
                                    width="50%"
                                    valign="top"
                                    style="
                                        padding-top:18px;
                                        color:#1e1e1e;
                                        font-family:'Lexend',
                                            Arial,
                                            Helvetica,
                                            sans-serif;
                                        font-size:10px;
                                        line-height:1.4;
                                        font-weight:700;
                                        letter-spacing:.3px;
                                    "
                                >
                                    BEHIND THE THREAD
                                </td>

                                <td
                                    width="50%"
                                    align="right"
                                    valign="top"
                                    style="
                                        padding-top:18px;
                                        color:#1e1e1e;
                                        font-family:'Lexend',
                                            Arial,
                                            Helvetica,
                                            sans-serif;
                                        font-size:10px;
                                        line-height:1.4;
                                        font-weight:400;
                                    "
                                >
                                    © {{ date('Y') }}
                                </td>

                            </tr>
                        </table>

                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>

</body>
</html>