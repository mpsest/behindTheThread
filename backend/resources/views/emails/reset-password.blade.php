<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Recuperação de Password | Behind the Thread</title>

    <style>
        @font-face {
            font-family: "Slibinas";
            src: url("{{ config('app.url') }}/typography/Slibinas.otf")
                format("opentype");
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
                font-size: 24px !important;
            }

            .content-cell {
                padding: 32px 25px !important;
            }

            .page-title {
                font-size: 28px !important;
            }

            .main-card {
                box-shadow: 6px 6px 0 #1e1e1e !important;
            }

            .cta-button {
                display: block !important;
                text-align: center !important;
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
                    max-width:640px;
                "
            >

                <tr>
                    <td style="padding:0 0 24px; border-bottom:2px solid #1e1e1e;">

                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                        >
                            <tr>
                                <td
                                    align="center"
                                    class="brand"
                                    style="
                                        color:#1e1e1e;
                                        font-family:'Slibinas', sans-serif;
                                        font-size:30px;
                                        line-height:1;
                                        letter-spacing:-.5px;
                                        text-transform:uppercase;
                                    "
                                >
                                    Behind the Thread
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <tr>
                    <td style="padding:32px 0 0;">

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
                                            margin:0 0 28px;
                                            padding:0;
                                            color:#1e1e1e;
                                            font-family:'Slibinas', sans-serif;
                                            font-size:34px;
                                            line-height:1;
                                            font-weight:400;
                                            letter-spacing:0;
                                            text-align:center;
                                            text-transform:uppercase;
                                        "
                                    >
                                        Recuperar Password
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
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        role="presentation"
                                        style="
                                            margin:0 0 38px;
                                        "
                                    >
                                        <tr>
                                            <td align="center">

                                                <!--[if mso]>
                                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="{{ $url }}" style="height:46px;v-text-anchor:middle;width:220px;" arcsize="0%" strokecolor="#1e1e1e" fillcolor="#1e1e1e">
                                                <w:anchorlock/>
                                                <center style="color:#fef0cf;font-family:Arial,sans-serif;font-size:15px;font-weight:400;">Repor Password</center>
                                                </v:roundrect>
                                                <![endif]-->
                                                <!--[if !mso]><!-->
                                                <a
                                                    href="{{ $url }}"
                                                    class="cta-button"
                                                    style="
                                                        display:inline-block;
                                                        padding:10px 24px;
                                                        background:#1e1e1e;
                                                        color:#fef0cf;
                                                        border:3px solid #1e1e1e;
                                                        font-family:'Lexend',
                                                            Arial,
                                                            Helvetica,
                                                            sans-serif;
                                                        font-size:15px;
                                                        line-height:1.4;
                                                        font-weight:400;
                                                        text-decoration:none;
                                                    "
                                                >
                                                    Repor Password
                                                </a>
                                                <!--<![endif]-->

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