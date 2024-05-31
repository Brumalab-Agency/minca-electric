import * as React from "react";

export const EmailAbandoned = ({ products }) => {
  const generateProductHTML = (products) => {
    return `
      				      <div key="${products.id}">
      <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 750px; margin: 0 auto;" width="750">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; border-right: 3px solid #c2c2c2; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 247px;"><img src="${products.image}" alt="${products.name}" style="display: block; height: auto; border: 0; width: 100%;" width="247" title="I'm an image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
									 			</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; border-right: 3px solid #c2c2c2; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block mobile_hide block-1" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: Verdana, sans-serif">
																	<div class style="font-size: 12px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #000000; line-height: 1.2;">
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													
													<table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #000000; line-height: 1.2;">
																		<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><br><strong>${products.name}</strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block mobile_hide block-1" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block mobile_hide block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: Verdana, sans-serif">
																	<div class style="font-size: 12px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #000000; line-height: 1.2;">
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #000000; line-height: 1.2;">
																	<p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><strong>$ ${products.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}&nbsp;</strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block block-4" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: Verdana, sans-serif">
																	<div class style="font-size: 12px; font-family: Verdana, Geneva, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #000000; line-height: 1.2;">
																		<p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;">&nbsp;</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>


</div>






    `;
  };

  console.log(products);
  console.log(products[0].totalPrice);

  const productsHTML = products.map(generateProductHTML).join("");

  const emailContent = `




  <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:770px) {
			.desktop_hide table.icons-outer {
				display: inline-table !important;
			}

			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-1 .column-1 .block-3.heading_block h1,
			.row-3 .column-1 .block-2.heading_block h1 {
				font-size: 28px !important;
			}

			.row-15 .column-2 .block-1.spacer_block {
				height: 35px !important;
			}

			.row-16 .column-1 .block-1.paragraph_block td.pad>div {
				font-size: 11px !important;
			}
		}
	</style>
</head>

<body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">

	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111111;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111111; color: #000000; width: 750px; margin: 0 auto;" width="750">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #111111; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 220px;"><a href="https://www.mincaelectric.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://74e0ccd2f8.imgdist.com/pub/bfra/k3jp5jpj/f70/19g/l7a/imagen_2024-05-16_093528581.png" style="display: block; height: auto; border: 0; width: 100%;" width="220" alt="Minca logo" title="Minca logo" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="80%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #dddddd;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													
													<table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-top:10px;text-align:center;width:100%;">
																
                                                                <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 21px; font-weight: 500; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;">¡Hey! ¿Pasó algo? 
No queremos que te vayas sin disfrutar de una movilidad eléctrica. </h1>
															</td>
														</tr>
													</table>
													
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					
					

					

					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 750px; margin: 0 auto;" width="750">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #000000; line-height: 1.2;">
																		<p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;">
    <strong>¡Los productos de tu carrito van a expirar! Si quieres volver a ellos simplemente 
    <a href="https://www.mincaelectric.com/checkout" style="text-decoration: underline; color: inherit;">haz click en este link</a></strong>
</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>

					

					


				      <div>${productsHTML}</div>
 								






					












					
					
					
					<table class="row row-16" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111111;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111111; color: #000000; width: 750px; margin: 0 auto;" width="750">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #111111; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0;">INVERSIONES LOGUZ SAS NIT 901127287-1<br>CRA 11A # 94A 56 LOCAL 3 Bogotá, Colombia</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0;">www.mincaelectric.com</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="icons_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
																<table class="icons-outer" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table;">
																	<tr>
																		<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><a href="https://www.instagram.com/mincaelectriccol/" target="_self" style="text-decoration: none;"><img class="icon" src="https://74e0ccd2f8.imgdist.com/pub/bfra/k3jp5jpj/upv/nv6/duq/icons8-instagram-96.png" alt="Instragram icon" height="auto" width="32" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																		<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><a href="https://www.tiktok.com/discover/minca-electric" target="_self" style="text-decoration: none;"><img class="icon" src="https://74e0ccd2f8.imgdist.com/pub/bfra/k3jp5jpj/ci1/z63/29h/icons8-tik-tok-150.png" alt="Tik tok icon" height="auto" width="32" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="image_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 220px;"><a href="https://www.mincaelectric.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://74e0ccd2f8.imgdist.com/pub/bfra/k3jp5jpj/f70/19g/l7a/imagen_2024-05-16_093528581.png" style="display: block; height: auto; border: 0; width: 100%;" width="220" alt="Minca logo" title="Minca logo" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>		
				</td>
			</tr>
		</tbody>



    
	</table>
</body>



</html>










    
  `;

  return <div dangerouslySetInnerHTML={{ __html: emailContent }} />;
};
