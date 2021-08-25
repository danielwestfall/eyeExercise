//elephant svg

const elephant =
	'<svg version="1.1" class="elephantmove" width="600px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">' +
	'<g fill="#a89e9b" stroke="#46413d" stroke-linejoin="round">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m26.568 115.17c7.536 1.667 18.812-0.30342 18.812-0.30342 33.922-4.9823 12.088-51.265 9.7093-83.139 0 0-4.22-10.333-12.391-9.4338-12.709 1.4047-16.628 14.807-25.073 24.407-9.1746 10.43-13.842 23.414-14.117 33.883-0.46999 17.842 9.7698 31.65 23.06 34.59z" stroke-linecap="round" stroke-width="6.9845"/>' +
	'<path id="two" onClick="selectAspect(this.id)" d="m164.45 115.17c-7.536 1.667-18.812-0.30342-18.812-0.30342-35.612-8.2868-15.588-49.955-9.7093-83.139 0 0 4.22-10.333 12.391-9.4338 12.709 1.399 16.628 14.804 25.073 24.404 9.1746 10.428 13.842 23.409 14.117 33.88 0.46999 17.842-9.7698 31.65-23.06 34.59z" stroke-linecap="round" stroke-width="6.9845"/>' +
	'<path id="three" onClick="selectAspect(this.id)" d="m93.848 3.5001c-10.967 0.30913-21.243 3.6958-30.186 9.1063-13.643 9.1832-24.034 19.993-28.54 33.744-2.5731 6.62-3.9824 13.534-3.9824 20.416 0 22.532 15.068 38.396 36.85 45.452 2.423 13.262-13.479 17.171-22.692 19.768 2.7201 5.5605 9.0435 11.767 13.149 12.151 36.396 2.3882 60.886-14.752 65.562-32.238 21.241-7.2136 35.868-22.948 35.868-45.133 0-6.6709-1.3457-13.371-3.77-19.806-5.2473-12.729-14.121-24.324-28.514-34.195-9.4509-5.7756-20.404-9.2656-32.098-9.2656-0.55544 0-1.094-0.0155-1.646 0z" stroke-width="6.9846"/>' +
	"</g>" +
	'<circle id="four" onClick="selectAspect(this.id)" cx="68.903" cy="91.658" r="6.2362" fill="#46413d" stroke-width=".81216"/>' +
	'<circle id="five" onClick="selectAspect(this.id)" cx="123.23" cy="91.658" r="6.2362" fill="#46413d" stroke-width=".81216"/>' +
	'<path id="six" onClick="selectAspect(this.id)" d="m125.71 113.49 12.284-6.2855c0.78961 3.038 0.0977 7.9666-3.3099 11.838-4.3055 4.8911-9.0158 6.2759-8.974-5.5522z" fill="#f6f6f6" stroke="#46413d" stroke-width="3.1043"/>' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m65.528 113.49-12.284-6.2855c-0.7896 3.038-0.0977 7.9666 3.3099 11.838 4.3055 4.8911 9.0158 6.2759 8.974-5.5522z" fill="#f6f6f6" stroke="#46413d" stroke-width="3.1043"/>' +
	"</svg>";

//puppy svg

const puppy =
	'<svg version="1.1" class="puppymove" width="600px"viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="head" onClick="selectAspect(this.id)" d="m31.6 46.027c-6.0585 13.585-8.0349 33.445-4.9197 47.752 9.6152 7.7602 21.866 12.574 33.076 13.29 2.5673 4.015 8.6462 8.0319 13.217 8.8762 4.9963 0.9229 9.1885 1.2731 13.46 1.1641 4.2715 0.109 8.4636-0.2412 13.46-1.1641 4.571-0.8443 10.65-4.8612 13.217-8.8762 11.21-0.7155 23.208-4.9749 34.764-13.29 1.7297-18.429 0.2095-33.785-6.6069-47.728-6.1-12.478-15.708-21.979-26.047-30.485-8.3328-4.8149-17.883-7.6879-28.035-7.6879-0.5043-0.0143-0.9962 0-1.5037 0-10.151 0-19.679 2.8743-28.011 7.6879-12.802 6.4528-20.3 17.52-26.071 30.46z" fill="#f9f6ee" stroke="#3c291c" stroke-width="6.9846"/>' +
	'<path id="leftFace" onClick="selectAspect(this.id)" d="m32.8 34.467c14.787-9.6942 28.714-20.593 48.504-23.282l-9.5691 65.917-42.261 15.015c-1.7995-18.635-0.086-37.973 3.3259-57.65z" fill="#ab8b61"/>' +
	'<path id="rightFace" onClick="selectAspect(this.id)" d="m141.3 34.467c-14.787-9.6942-28.714-20.593-48.504-23.282l9.5691 65.917 42.261 15.015c1.7995-18.635 0.086-37.973-3.326-57.65z" fill="#ab8b61"/>' +
	'<path id="leftEar" onClick="selectAspect(this.id)" d="m35.6 25.177c6.2276-6.3497 23.348-16.255 19.066-2.1304-14.312 47.2-1.6962 76.824-19.449 81.264-16.58 4.1465-25.567-11.077-24.925-20.609 1.1207-16.642 12.642-45.609 25.309-58.525z" fill="#9a6e3b" stroke="#3c291c" stroke-width="6.9846"/>' +
	'<path id="rightEar" onClick="selectAspect(this.id)" d="m139.4 25.177c-6.2276-6.3497-23.348-16.255-19.065-2.1304 14.312 47.2 1.6961 76.824 19.449 81.264 16.58 4.1465 25.567-11.077 24.925-20.609-1.1207-16.642-12.642-45.609-25.309-58.525z" fill="#9a6e3b" stroke="#3c291c" stroke-width="6.9846"/>' +
	'<path id="nose" onClick="selectAspect(this.id)" d="m77.6 86.067c1.1352-4.2455 16.9-4.6528 18.52 0 1.3877 3.9848-5.0303 9.1265-9.2603 9.1382-3.8537 0.0101-10.401-4.8701-9.2601-9.1382z" fill="#3c291c"/>' +
	"</svg>";

//lion svg

const lion =
	'<svg version="1.1" class="lionmove"  width="550px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m174.37 71.29c0 23.922-7.13 41.204-25.701 55.146-18.571 13.943-48.583 24.545-55.749 30.28-8.0181-5.7353-39.165-16.338-57.523-30.28-18.358-13.942-23.927-31.224-23.927-55.146 0-47.845 36.467-67.806 81.45-67.806 44.984 0 81.45 19.96 81.45 67.806z" fill="#ac5e1a" stroke="#792f03" stroke-width="6.9677"/>' +
	'<g fill="none" onClick="selectAspect(this.id)" stroke="#792f03" stroke-width="7.7419">' +
	'<path id="two" onClick="selectAspect(this.id)" d="m92.509 155.46v-150.83"/>' +
	'<path id="three" onClick="selectAspect(this.id)" d="m45.685 14.278c16.285 8.5336 34.329 30.737 47.204 63.716-24.236-16.793-63.032-27.664-80-16.534"/>' +
	'<path id="four" onClick="selectAspect(this.id)" d="m16.304 100.17c13.734-21.312 79.032-22.192 75.451-22.986-3.4077-0.75522-49.056 28.446-53.461 52.022"/>' +
	'<path id="five" onClick="selectAspect(this.id)" d="m66.727 143.73c-0.13908-16.079 23.893-67.88 26.161-66.539"/>' +
	'<path id="six" onClick="selectAspect(this.id)" d="m139.99 14.278c-16.285 8.5336-34.329 30.737-47.204 63.716 24.236-16.793 63.032-27.664 80-16.534"/>' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m169.37 100.17c-13.734-21.312-79.032-22.192-75.451-22.986 3.4077-0.75522 49.056 28.446 53.461 52.022"/>' +
	'<path id="eight" onClick="selectAspect(this.id)" d="m118.95 143.73c0.13909-16.079-23.893-67.88-26.161-66.539"/>' +
	"</g>" +
	'<path id="nine" onClick="selectAspect(this.id)" d="m91.175 24.787c-9.6904 0.29051-18.77 3.4733-26.672 8.5582-7.8076-3.5031-23.392-2.7273-29.159 0.62377-3.1172 10.789-1.0357 22.864 3.9411 31.089-2.2736 6.2215-3.5188 12.719-3.5188 19.188 0 21.176 13.314 36.085 32.561 42.716 2.467 4.2232 8.4666 8.2107 12.852 9.0004 8.771 1.5788 14.97 1.723 23.74 0 4.4858-0.88139 10.488-5.1092 12.906-9.2996 18.768-6.7793 31.693-21.566 31.693-42.416 0-6.2693-1.189-12.566-3.3312-18.613 5.229-8.2303 7.5062-20.622 4.3165-31.663-5.8547-3.4016-21.828-4.162-29.511-0.47406-8.3509-5.4279-18.029-8.7079-28.362-8.7079-0.49078 0-0.96665-0.01471-1.4544 0z" fill="#dbb27b" stroke="#792f03" stroke-width="6.9677"/>' +
	'<g fill="#792f03" stroke-width=".99759">' +
	'<path id="ten" onClick="selectAspect(this.id)" d="m64.438 84.994c-0.7166 1.0157-1.1495 2.2752-1.1495 3.6429 0 3.3576 2.5672 6.0881 5.724 6.0881 2.8768 0 5.2306-2.2727 5.6302-5.2147l-10.205-4.5161z"/>' +
	'<path id="eleven" onClick="selectAspect(this.id)" d="m119.07 84.994c0.71659 1.0157 1.1494 2.2752 1.1494 3.6429 0 3.3576-2.5672 6.0881-5.724 6.0881-2.8768 0-5.2306-2.2727-5.6302-5.2147l10.205-4.5161z"/>' +
	'<path id="twelve" onClick="selectAspect(this.id)" d="m80.283 100.36c1.5436-6.1404 22.981-6.7294 25.185 0 1.8873 5.7634-6.8404 13.2-12.592 13.217-5.2405 0.0151-14.144-7.0437-12.592-13.217z"/>' +
	"</g>" +
	'<path id="thirteen" onClick="selectAspect(this.id)" d="m41.804 42.915c3.6548-1.2962 10.759-0.05586 15.261 1.2098-5.8048 5.7869-9.6017 10.586-13.176 18.349-3.0597-5.9341-3.7963-14.095-2.0853-19.559z" opacity=".2" stroke-width=".99759"/>' +
	'<path id="fourteen" onClick="selectAspect(this.id)" d="m143.36 42.915c-3.6549-1.2962-10.759-0.05586-15.261 1.2098 5.8048 5.7869 9.6017 10.586 13.176 18.349 3.0597-5.9341 3.7962-14.095 2.0854-19.559z" opacity=".2" stroke-width=".99759"/>' +
	'<g fill="none" stroke="#4d2812" stroke-linecap="round" stroke-width="1.5484">' +
	'<path id="fifteen" onClick="selectAspect(this.id)" d="m3.7888 98.564 54.977 4.0327"/>' +
	'<path id="sixteen" onClick="selectAspect(this.id)" d="m181.99 98.564-54.977 4.0327"/>' +
	'<path id="seventeen" onClick="selectAspect(this.id)" d="m61.991 107.84-42.276 17.341"/>' +
	'<path id="eighteen" onClick="selectAspect(this.id)" d="m123.79 107.84 42.276 17.341"/>' +
	'<path id="nineteen" onClick="selectAspect(this.id)" d="m65.967 113.49c-1.5166 1.2098-28.437 24.599-28.437 24.599"/>' +
	'<path id="twenty" onClick="selectAspect(this.id)" d="m119.81 113.49c1.5166 1.2098 28.437 24.599 28.437 24.599"/>' +
	"</g>" +
	"</svg>";

// wolf svg

const wolf =
	'<svg version="1.1" class="wolfmove" width="600px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m16.129 3.9874c-4.5026 13.496-4.4004 33.209 1.6977 47.51-7.4198 16.243-11.915 33.445-14.066 47.752 12.387 9.4233 31.012 12.574 42.223 13.29 2.5674 4.015 8.6463 8.0319 13.217 8.8762 4.9962 0.9229 9.1883 1.2731 13.46 1.1641 4.2715 0.109 8.4636-0.2412 13.46-1.1641 4.571-0.8443 10.65-4.8612 13.217-8.8762 11.21-0.7155 29.859-3.8663 42.247-13.29-1.8736-17.32-6.7277-34.909-14.09-47.728 6.1094-14.303 6.203-34.029 1.6977-47.534-11.987 2.2212-22.546 9.9303-27.744 17.049-8.3328-4.8149-17.883-7.6879-28.035-7.6879-0.5043-0.0143-0.9962 0-1.5037 0-10.151 0-19.679 2.8743-28.011 7.6879-5.1965-7.1206-15.778-14.827-27.768-17.049z" fill="#5b584a" stroke="#231e0e" stroke-width="6.9846"/>' +
	'<path id="two" onClick="selectAspect(this.id)" d="m24.129 79.897c-6.9566-0.0519-12.747 6.8723-16.54 17.752v0.0239c0.7104 0.44765 1.422 0.87149 2.1342 1.2853 0.6218 0.3613 1.2436 0.70643 1.8673 1.0428 0.153 0.0818 0.3072 0.16194 0.4608 0.24259 0.3244 0.17169 0.6452 0.34402 0.9701 0.50927 0.4422 0.22171 0.8855 0.44352 1.3339 0.65484 0.1135 0.0542 0.2259 0.11587 0.3395 0.16976 9.9607 4.7187 20.297 6.5847 31.988 7.4938 0.4346 0.038 0.8711 0.086 1.3096 0.1214 2.9703 4.7961 6.7897 7.2098 10.962 8.4637 0.049 0.017 0.097 0.032 0.1456 0.049 0.2569 0.075 0.5164 0.1513 0.776 0.2182 4.2821 1.2554 8.7232 1.2797 12.854 1.1884 4.1304 0.091 8.5715 0.066 12.854-1.1884 0.3089-0.08 0.6163-0.1751 0.9216-0.2668 4.1722-1.2539 7.9916-3.6676 10.962-8.4639 0.4095-0.033 0.8063-0.085 1.2125-0.1213 11.731-0.9064 22.097-2.7619 32.085-7.4938 0.185-0.0874 0.3731-0.17712 0.5578-0.26678 0.6135-0.29206 1.2169-0.60968 1.8189-0.92152 0.1364-0.0717 0.2759-0.14566 0.4123-0.21831 0.1056-0.0561 0.2099-0.11329 0.3153-0.16975 0.6237-0.3364 1.2455-0.68152 1.8673-1.0428 0.7123-0.41381 1.4238-0.83765 2.1342-1.2853v-0.0239c-4.6686-13.393-12.358-20.802-21.536-16.564-3.8335 10.062-11.272 16.17-23.233 17.364-3.7539-8.3906-7.4366-15.43-20.372-15.43s-16.618 7.0396-20.372 15.43c-11.961-1.1948-19.4-7.3027-23.233-17.364-1.7218-0.79502-3.3894-1.1764-4.9959-1.1883z" fill="#ece7da"/>' +
	'<g fill="#231e0e">' +
	'<path id="three" onClick="selectAspect(this.id)" d="m60.629 86.817c1.5958-5.9684 23.758-6.5409 26.036 0 1.9511 5.6019-7.0715 12.83-13.018 12.847-5.4177 0.0147-14.622-6.8464-13.018-12.847z"/>' +
	"</g>" +
	'<g fill="#949389">' +
	'<path id="four" onClick="selectAspect(this.id)" d="m20.029 16.147c6.4115 4.1448 12.647 8.5377 16.608 16.004-6.001 5.6248-9.9263 10.289-13.621 17.835-5.9348-15.33-5.449-25.48-2.9873-33.839z"/>' +
	'<path id="five" onClick="selectAspect(this.id)" d="m124.43 16.147c-6.4114 4.1448-12.647 8.5377-16.608 16.004 6.001 5.6248 9.9263 10.289 13.621 17.835 5.9348-15.33 5.4491-25.48 2.9873-33.839z"/>' +
	'<path id="six" onClick="selectAspect(this.id)" d="m88.629 46.867c4.7024-2.3411 15.865 3.2729 20.577 9.1383 2.3796 4.1345 2.5331 8.0217 1.5958 11.788l-28.548 11.641c5.9766-8.5447 7.7865-19.589 6.3748-32.567z" opacity=".46502"/>' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m57.029 46.867c-4.7024-2.3411-15.865 3.2729-20.578 9.1383-2.3795 4.1345-2.533 8.0217-1.5957 11.788l28.548 11.641c-5.9765-8.5447-7.7864-19.589-6.3747-32.567z" opacity=".46502"/>' +
	"</g>" +
	"</svg>";

//rat svg

const rat =
	'<svg version="1.1" class="ratmove" width="700px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m50.901 10.427c-7.9063-0.0829-15.902 3.1248-20.317 9.3945-7.0129 9.9601-5.202 27.532 11.724 32.518-12.692 29.039 1.9525 46.382 24.709 49.99 1.9591 1.6892 4.7751 3.1226 7.7522 3.8952 0.1031 0.027 0.2022 0.07 0.3056 0.095 0.3804 0.1141 0.7471 0.2199 1.1075 0.2866 3.5695 0.6592 6.6157 0.9493 9.6618 0.9356 0.076 6e-4 0.153-5e-4 0.2291 0 3.0462 0.014 6.0926-0.2764 9.6619-0.9356 0.3604-0.066 0.7271-0.1725 1.1075-0.2866 0.1013-0.029 0.2031-0.062 0.3056-0.095 2.9773-0.7726 5.774-2.206 7.7333-3.8952 22.756-3.6078 37.42-20.951 24.727-49.99 16.926-4.9857 18.737-22.558 11.724-32.518-9.4175-13.376-35.171-12.817-41.473 3.8953-4.6597-1.5283-8.316-2.1884-13.347-2.0813-0.1863 4e-3 -0.3683 0.0133-0.5537 0.0191-0.1897-6e-3 -0.3824-0.0151-0.573-0.0191-5.031-0.10706-8.6682 0.55298-13.328 2.0813-3.3479-8.8782-12.196-13.196-21.157-13.29z" fill="#bdac92" stroke="#7e6149" stroke-width="5.4992"/>' +
	'<path id="two" onClick="selectAspect(this.id)" d="m86.001 72.287c-16.336 0-28.52 8.0138-29.745 24.036 3.6153 1.6717 7.4466 2.8531 11.785 3.5408 1.9591 1.6893 3.8035 2.7399 6.7806 3.5125 0.103 0.027 0.1876 0.072 0.2911 0.097 0.3803 0.114 0.7551 0.2244 1.1155 0.291 3.5694 0.6594 6.6062 0.9355 9.6523 0.9216 0.076 0 0.1665-3e-4 0.2424 0 3.0465 0.014 6.083-0.2622 9.6524-0.9216 0.3604-0.066 0.7352-0.177 1.1156-0.291 0.1013-0.029 0.2128-0.063 0.3153-0.097 2.9773-0.7726 4.5769-2.0193 6.5362-3.7085 4.3458-0.689 8.9956-1.8642 12.617-3.5408-1.2258-16.022-14.021-23.84-30.358-23.84z" fill="#e6dbcd" opacity=".51029"/>' +
	'<path id="three" onClick="selectAspect(this.id)" d="m75.701 79.357c1.2564-4.6992 18.706-5.15 20.499 0 1.5361 4.4106-5.5677 10.102-10.25 10.115-4.2656 0.011-11.513-5.3904-10.25-10.115z" fill="#b59a81"/>' +
	'<path id="four" onClick="selectAspect(this.id)" d="m35.601 23.177c9.9658-11.027 27.088-3.9709 28.134 6.8179-4.7248 4.4287-15.017 12.902-17.926 18.843-19.076-7.8146-14.511-20.899-10.208-25.661z" opacity=".2"/>' +
	'<path id="five" onClick="selectAspect(this.id)" d="m135.7 23.177c-9.966-11.027-27.088-3.9709-28.134 6.8179 4.725 4.4287 15.017 12.902 17.926 18.843 19.076-7.8146 14.511-20.899 10.208-25.661z" opacity=".2"/>' +
	'<g fill="none" onClick="selectAspect(this.id)" stroke="#64472e" stroke-linecap="round" stroke-width="1.2221">' +
	'<path id="six" onClick="selectAspect(this.id)" d="m19.301 79.139c11.266-4.5496 24.594-2.9128 38.988 1.9226"/>' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m60.975 85.076c-12.938 0.26227-24.223 3.0029-32.733 9.9072"/>' +
	'<path id="eight" onClick="selectAspect(this.id)" d="m64.157 89.399c-8.078 1.8622-16.397 9.4074-18.054 17.217"/>' +
	'<path id="nine" onClick="selectAspect(this.id)" d="m152.95 79.139c-11.266-4.5496-24.594-2.9128-38.988 1.9226"/>' +
	'<path id="ten" onClick="selectAspect(this.id)" d="m111.28 85.076c12.938 0.26227 24.223 3.0029 32.733 9.9072"/>' +
	'<path id="eleven" onClick="selectAspect(this.id)" d="m108.09 89.399c8.078 1.8622 16.397 9.4074 18.054 17.217"/>' +
	"</g>" +
	'<circle id="twelve" onClick="selectAspect(this.id)" cx="63.205" cy="69.735" r="4.8017" fill="#64472e" stroke-width=".95067"/>' +
	'<circle id="thirteen" onClick="selectAspect(this.id)" cx="108.67" cy="69.735" r="4.8017" fill="#64472e" stroke-width=".95067"/>' +
	"</svg>";

//cat svg

const cat =
	'<svg version="1.1" class="catmove" width="700px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m58.488 3.2647c-9.3422 0.26334-18.097 3.1483-25.715 7.7574-0.4694-0.19819-0.9692-0.3745-1.4928-0.5428-0.4109-0.13197-0.8492-0.27044-1.289-0.38447-0.1176-0.0304-0.2425-0.0613-0.362-0.0905-0.086-0.0212-0.1831-0.0245-0.2714-0.0452-2.2246-0.51961-4.7344-0.83515-7.3276-0.94988-1.3456-0.0604-2.7002-0.0849-4.0482-0.0453-0.6009 0.0181-1.195 0.0534-1.7866 0.0905-0.075 5e-3 -0.1518 0.0177-0.2263 0.0225-0.5966 0.0399-1.2063 0.0771-1.7867 0.1357-0.052 6e-3 -0.1058 0.0171-0.1582 0.0225-0.6472 0.0676-1.2816 0.13597-1.8999 0.22616-0.1785 0.0259-0.3444 0.0627-0.5202 0.0905-0.4315 0.0685-0.8542 0.14663-1.2664 0.22615-0.086 0.0165-0.1635 0.0281-0.249 0.0453-0.4562 0.0915-0.907 0.18924-1.3342 0.29401-0.023 6e-3 -0.046 0.0171-0.068 0.0224-0.5272 0.13072-1.0403 0.27931-1.5152 0.42972-0.3059 0.0968-0.5782 0.18927-0.8595 0.29401-0.3093 0.11518-0.605 0.23732-0.882 0.36186-0.2678 0.12004-0.5338 0.23339-0.769 0.36187-0.1878 0.61124-0.3484 1.2353-0.4976 1.8545-0.01 0.0159-0.018 0.0293-0.023 0.0452-0.1444 0.60341-0.2531 1.2006-0.3618 1.8093-0.01 0.0307-0.016 0.0598-0.023 0.0905-0.1044 0.59456-0.1998 1.1891-0.2714 1.7867-0.01 0.0455-0.018 0.0902-0.023 0.1357-0.066 0.58326-0.099 1.1799-0.1357 1.7641-0.03 0.48451-0.036 0.96343-0.045 1.4474-0.01 0.19704-0.022 0.39118-0.023 0.58802-4e-4 0.0983-6e-4 0.19579 0 0.294 0 0.5673 0.017 1.1321 0.045 1.6962 0.029 0.54142 0.061 1.0914 0.1131 1.6284 0.058 0.58146 0.1416 1.167 0.2262 1.7414 0.01 0.0369-0.01 0.0763 0 0.11309 0.051 0.34085 0.1203 0.67991 0.1809 1.0177 0.07 0.38805 0.1448 0.76995 0.2262 1.1534 0.1292 0.60968 0.2706 1.2131 0.4297 1.8093 0.1612 0.6046 0.3296 1.1984 0.5202 1.7867 0.1679 0.51848 0.3528 1.034 0.5428 1.5379 0.058 0.15291 0.1212 0.30087 0.1808 0.45233 0.1835 0.46649 0.3863 0.9277 0.5881 1.3796 0.2449 0.54892 0.4981 1.0806 0.769 1.6058 0.269 0.52158 0.5435 1.0197 0.8367 1.5153 0.1824 0.30824 0.3514 0.62983 0.5428 0.92726-6.2803 17.418-6.872 40.932 2.4878 56.54 8.882-1.3986 16.648-2.2678 27.072 2.1486 1.7984 2.1509 5.3076 4.1406 8.9109 5.1338 0.1366 0.038 0.2702 0.101 0.4071 0.1357 0.4341 0.1285 0.8545 0.2406 1.2664 0.3167 4.2278 0.7808 7.8359 1.1245 11.444 1.1082 0.083 6e-4 0.1661-4e-4 0.2485 0 3.6081 0.016 7.2162-0.3274 11.444-1.1082 0.4085-0.075 0.8357-0.1895 1.2664-0.3167 0.03-0.01 0.06-0.013 0.09-0.023 3.7212-0.9585 7.3726-3.0283 9.2274-5.247 10.423-4.4164 18.19-3.5471 27.072-2.1485 9.36-15.608 8.7681-39.122 2.488-56.541 0.1263-0.19649 0.2393-0.40938 0.3617-0.61064 0.1367-0.22434 0.2756-0.44844 0.4072-0.67847 0.029-0.0528 0.061-0.10527 0.09-0.15833 0.185-0.32807 0.368-0.65627 0.5428-0.99511 0.2702-0.52409 0.5244-1.058 0.7689-1.6058 0.2338-0.52395 0.4467-1.0623 0.656-1.6057 0.012-0.0314 0.033-0.059 0.045-0.0905 0.21-0.54961 0.4041-1.1065 0.588-1.6736 0.1907-0.58827 0.359-1.1821 0.5201-1.7867 0.037-0.1357 0.079-0.27066 0.1133-0.40709 0.044-0.17098 0.071-0.34808 0.113-0.52018 0.1009-0.42166 0.2077-0.8387 0.2941-1.2665 0.1191-0.59056 0.2263-1.1862 0.3166-1.7867 0.01-0.0367-0.01-0.0764 0-0.11308 0.085-0.58181 0.1685-1.1751 0.226-1.7641 0.062-0.62519 0.1075-1.2462 0.1358-1.8772 0.025-0.57977 0.048-1.1587 0.045-1.7414 0-0.61273-0.031-1.218-0.068-1.8319-0.024-0.41246-0.051-0.83169-0.09-1.2439-0.033-0.35276-0.069-0.71082-0.1131-1.063-0.1156-0.91227-0.2818-1.8105-0.475-2.7139-0.1898-0.88788-0.4103-1.7734-0.6784-2.6461-0.7058-0.38559-1.5569-0.73315-2.533-1.0404-0.4727-0.14892-0.9686-0.27759-1.4927-0.40709-0.016-4e-3 -0.03-0.0188-0.045-0.0225-0.5068-0.12427-1.0587-0.23373-1.6058-0.33925-0.037-7e-3 -0.076-0.0157-0.1131-0.0225-0.5442-0.10315-1.0972-0.20992-1.6735-0.294-0.043-6e-3 -0.092-0.0164-0.1357-0.0226-0.5739-0.0818-1.1658-0.14113-1.7641-0.20355-0.052-6e-3 -0.1056-0.0172-0.1583-0.0226-0.587-0.0593-1.1834-0.0956-1.7867-0.1357-0.066-5e-3 -0.1362-0.0184-0.2036-0.0225-0.5924-0.0371-1.2075-0.0724-1.8092-0.0905-0.083-2e-3 -0.1663 2e-3 -0.2488 0-1.2651-0.0323-2.5383-0.0106-3.7996 0.0453-2.0314 0.0899-3.9981 0.29776-5.8349 0.63326-0.479 0.0875-0.9463 0.18894-1.4023 0.29401-0.1667 0.0384-0.3343 0.0723-0.4974 0.11309-0.072 0.0181-0.1544 0.0268-0.2263 0.0452-0.4398 0.11402-0.8783 0.25251-1.2891 0.38447-0.5177 0.16687-1.0282 0.34664-1.4926 0.5428-7.6181-4.609-16.373-7.494-25.715-7.7574-0.4702-0.0132-0.929 0-1.4022 0-0.091 0-0.1804-5e-4 -0.2713 0-0.099-5.8e-4 -0.1954 0-0.294 0-0.4733 0-0.9321-0.0132-1.4023 0z" fill="#f9f8e2" stroke="#b8854d" stroke-width="6.5135"/>' +
	'<path id="two" onClick="selectAspect(this.id)" d="m58.488 6.4947c-0.3789 0.0107-0.7541 0.0254-1.1309 0.0452 3.852 7.605 7.5718 18.284 8.7138 43.475 0.6269 13.829 8.5362 20.66 17.799 21.332 11.834 0.85829 22.186 0.53189 29.05-0.73399 0.9514-11.9-1.7402-22.786-4.8884-31.26l0.7104-0.92311c4.184-6.192 6.1959-15.788 4.116-24.358-2.2593-0.88092-6.3711-1.7616-10.901-1.8772-5.1614-0.1317-10.624 0.61099-13.479 1.8998l-1.4193 0.53171c-9.5422-6.2968-19.006-8.0376-27.258-8.1308-0.5341 0-0.9623-0.01-1.3118 0z" fill="#f59e40"/>' +
	'<path id="three" onClick="selectAspect(this.id)" d="m52.188 73.055c0.9837-3.6796 14.647-4.0326 16.052 0 1.2028 3.4537-4.3599 7.9101-8.026 7.9202-3.3401 9e-3 -9.0149-4.221-8.0258-7.9202z" fill="#b8854d"/>' +
	'<path id="four" onClick="selectAspect(this.id)" d="m10.888 19.705c3.5238-1.1749 10.373-0.0507 14.713 1.0966-5.5963 5.2454-9.2568 9.5953-12.702 16.632-2.9499-5.3787-3.66-12.776-2.0107-17.728z" opacity=".2"/>' +
	'<path id="five" onClick="selectAspect(this.id)" d="m108.89 19.705c-3.5237-1.1749-10.373-0.0507-14.713 1.0966 5.5963 5.2454 9.2568 9.5953 12.702 16.632 2.9498-5.3787 3.66-12.776 2.0106-17.728z" opacity=".2"/>' +
	'<g fill="none" stroke="#7d4329" stroke-linecap="round" stroke-width="1.4474">' +
	'<path id="six" onClick="selectAspect(this.id)" d="m13.664 73.129 14.364 0.67373"/>' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m106.76 73.129-14.364 0.67373"/>' +
	'<path id="eight" onClick="selectAspect(this.id)" d="m31.103 78.549-13.147 5.0839"/>' +
	'<path id="nine" onClick="selectAspect(this.id)" d="m89.322 78.549 13.147 5.0839"/>' +
	'<path id="ten" onClick="selectAspect(this.id)" d="m34.948 83.673c-1.4621 1.0966-5.3585 6.4627-5.3585 6.4627"/>' +
	'<path id="eleven" onClick="selectAspect(this.id)" d="m85.476 83.673c1.4621 1.0966 5.3585 6.4627 5.3585 6.4627"/>' +
	"</g>" +
	'<circle id="twelve" onClick="selectAspect(this.id)" cx="37.11" cy="61.622" r="5.0402" fill="#b8854d" stroke-width=".78403"/>' +
	'<circle id="thirteen" onClick="selectAspect(this.id)" cx="81.05" cy="61.622" r="5.0402" fill="#b8854d" stroke-width=".78403"/>' +
	"</svg>";

// tiger svg

const tiger =
	'<svg version="1.1" class="tigermove" width="700px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m69.156 3.503c-10.018 0.28237-19.405 3.376-27.574 8.3184-8.0716-3.405-24.183-2.6509-30.145 0.60629-3.2226 10.487-1.0707 22.223 4.0743 30.218-2.3505 6.0472-3.6378 12.363-3.6378 18.65 0 20.583 13.764 35.074 33.662 41.519 2.5504 4.1049 8.7528 7.9807 13.287 8.7482 9.0675 1.5346 15.476 1.6747 24.543 0 4.6375-0.8567 10.843-4.9661 13.342-9.0391 19.403-6.5894 32.764-20.962 32.764-41.228 0-6.0937-1.2293-12.214-3.4438-18.092 5.4058-7.9997 7.76-20.044 4.4624-30.776-6.0526-3.3063-22.566-4.0454-30.509-0.46078-8.6331-5.2758-18.639-8.4639-29.321-8.4639-0.50737 0-0.99932-0.0143-1.5036 0z" fill="#f2cc23" stroke="#231e0e" stroke-width="6.9846"/>' +
	'<g fill="#231e0e">' +
	'<path id="two" onClick="selectAspect(this.id)" d="m41.516 62.023c-0.74083 0.98722-1.1884 2.2115-1.1884 3.5408 0 3.2635 2.654 5.9175 5.9175 5.9175 2.9741 0 5.4074-2.209 5.8205-5.0686l-10.55-4.3896z"/>' +
	'<path id="three" onClick="selectAspect(this.id)" d="m97.996 62.023c0.74082 0.98722 1.1883 2.2115 1.1883 3.5408 0 3.2635-2.654 5.9175-5.9175 5.9175-2.9741 0-5.4074-2.209-5.8205-5.0686l10.55-4.3896z"/>' +
	'<path id="four" onClick="selectAspect(this.id)" d="m57.896 76.963c1.5958-5.9684 23.758-6.5409 26.036 0 1.951 5.6019-7.0716 12.83-13.018 12.847-5.4177 0.0147-14.622-6.8464-13.018-12.847z"/>' +
	"</g>" +
	'<path id="five" onClick="selectAspect(this.id)" d="m18.116 21.123c3.7784-1.2599 11.123-0.0543 15.777 1.1759-6.001 5.6248-9.9263 10.289-13.621 17.835-3.1631-5.7678-3.9246-13.7-2.1558-19.011z" opacity=".2"/>' +
	'<path id="six" onClick="selectAspect(this.id)" d="m123.12 21.123c-3.7785-1.2599-11.123-0.0543-15.777 1.1759 6.001 5.6248 9.9263 10.289 13.621 17.835 3.1631-5.7678 3.9246-13.7 2.1558-19.011z" opacity=".2"/>' +
	'<g fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5521">' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m0.77605 76.193 35.081 2.9398"/>' +
	'<path id="eight" onClick="selectAspect(this.id)" d="m141.15 76.193-35.081 2.9398"/>' +
	'<path id="nine" onClick="selectAspect(this.id)" d="m39.186 84.233-34.885 12.935"/>' +
	'<path id="ten" onClick="selectAspect(this.id)" d="m102.73 84.233 34.885 12.935"/>' +
	'<path id="eleven" onClick="selectAspect(this.id)" d="m43.306 89.723c-1.5679 1.1759-22.93 19.402-22.93 19.402"/>' +
	'<path id="twelve" onClick="selectAspect(this.id)" d="m98.616 89.723c1.5679 1.1759 22.93 19.402 22.93 19.402"/>' +
	"</g>" +
	'<g fill="#231e0e">' +
	'<path id="thirteen" onClick="selectAspect(this.id)" d="m49.756 13.313c13.774-5.9592 27.893-6.2348 42.406 0-15.108-1.538-27.304-1.3586-42.406 0z"/>' +
	'<path id="fourteen" onClick="selectAspect(this.id)" d="m45.946 19.273c16.25-5.9592 32.906-6.2348 50.028 0-17.852-0.37391-32.283-0.11843-50.028 0z"/>' +
	'<path id="fifteen" onClick="selectAspect(this.id)" d="m42.276 26.613c18.636-5.9592 37.738-6.2348 57.373 0-20.819 0.33016-37.311 0.46874-57.373 0z"/>' +
	'<path id="sixteen" onClick="selectAspect(this.id)" d="m15.676 66.623 18.891-0.90571-16.225 10.676c-1.3321-3.5061-2.2579-6.6341-2.6661-9.7706z"/>' +
	'<path id="seventeen" onClick="selectAspect(this.id)" d="m125.6 66.623-18.891-0.90571 16.225 10.676c1.3321-3.5061 2.2579-6.6341 2.6661-9.7706z"/>' +
	'<path id="eighteen" onClick="selectAspect(this.id)" d="m16.656 50.603 13.044 6.8894-14.433 3.1705c0.2346-3.7432 0.4656-7.0347 1.389-10.06z"/>' +
	'<path id="nineteen" onClick="selectAspect(this.id)" d="m124.61 50.603-13.044 6.8894 14.433 3.1705c-0.23461-3.7432-0.46561-7.0347-1.389-10.06z"/>' +
	"</g>" +
	"</svg>";

// leopard svg

const leopard =
	'<svg version="1.1" class="leopardmove" width="700px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">' +
	'<path id="one" onClick="selectAspect(this.id)" d="m69.156 3.503c-10.018 0.28237-19.405 3.376-27.574 8.3184-8.0716-3.405-24.183-2.6509-30.145 0.60629-3.2225 10.487-1.0707 22.223 4.0743 30.218-2.3505 6.0472-3.6378 12.363-3.6378 18.65 0 20.583 13.764 35.074 33.662 41.519 2.5504 4.1049 8.7528 7.9807 13.287 8.7482 9.0675 1.5346 15.476 1.6747 24.543 0 4.6375-0.8567 10.843-4.9661 13.342-9.0391 19.403-6.5894 32.764-20.962 32.764-41.228 0-6.0937-1.2292-12.214-3.4438-18.092 5.4058-7.9997 7.76-20.044 4.4624-30.776-6.0526-3.3063-22.566-4.0454-30.509-0.46078-8.6332-5.2758-18.639-8.4639-29.321-8.4639-0.50738 0-0.99933-0.0143-1.5036 0z" fill="#f4cf8f" stroke="#4e4221" stroke-width="6.9846"/>' +
	'<g fill="#4e4221">' +
	'<path id="two" onClick="selectAspect(this.id)" d="m41.516 62.023c-0.74082 0.98722-1.1884 2.2115-1.1884 3.5408 0 3.2635 2.654 5.9175 5.9175 5.9175 2.9741 0 5.4074-2.209 5.8205-5.0686l-10.55-4.3896z"/>' +
	'<path id="three" onClick="selectAspect(this.id)" d="m97.996 62.023c0.74082 0.98722 1.1884 2.2115 1.1884 3.5408 0 3.2635-2.654 5.9175-5.9175 5.9175-2.9741 0-5.4074-2.209-5.8205-5.0686l10.55-4.3896z"/>' +
	'<path id="four" onClick="selectAspect(this.id)" d="m57.896 76.963c1.5958-5.9684 23.758-6.5409 26.036 0 1.9511 5.6019-7.0716 12.83-13.018 12.847-5.4177 0.0147-14.622-6.8464-13.018-12.847z"/>' +
	"</g>" +
	'<path id="five" onClick="selectAspect(this.id)" d="m18.116 21.123c3.7785-1.2599 11.123-0.0543 15.777 1.1759-6.0011 5.6248-9.9263 10.289-13.621 17.835-3.1631-5.7678-3.9246-13.7-2.1558-19.011z" opacity=".2"/>' +
	'<path id="six" onClick="selectAspect(this.id)" d="m123.11 21.123c-3.7784-1.2599-11.123-0.0543-15.777 1.1759 6.001 5.6248 9.9263 10.289 13.621 17.835 3.1631-5.7678 3.9246-13.7 2.1558-19.011z" opacity=".2"/>' +
	'<g fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5521">' +
	'<path id="seven" onClick="selectAspect(this.id)" d="m0.77605 76.193 35.081 2.9398"/>' +
	'<path id="eight" onClick="selectAspect(this.id)" d="m141.15 76.193-35.081 2.9398"/>' +
	'<path id="nine" onClick="selectAspect(this.id)" d="m39.186 84.233-34.885 12.935"/>' +
	'<path id="ten" onClick="selectAspect(this.id)" d="m102.73 84.233 34.885 12.935"/>' +
	'<path id="eleven" onClick="selectAspect(this.id)" d="m43.306 89.723c-1.5679 1.1759-22.93 19.402-22.93 19.402"/>' +
	'<path id="twelve" onClick="selectAspect(this.id)" d="m98.616 89.723c1.5679 1.1759 22.93 19.402 22.93 19.402"/>' +
	"</g>" +
	'<ellipse id="thirteen" onClick="selectAspect(this.id)" cx="69.932" cy="16.401" rx="8.1763" ry="7.3449" fill="#0a0502" stroke-width=".43397"/>' +
	'<ellipse id="fourteen" onClick="selectAspect(this.id)" cx="69.841" cy="16.55" rx="4.1699" ry="6.3166" fill="#5c503e" stroke-width=".82116"/>' +
	'<ellipse id="fifteen" onClick="selectAspect(this.id)" transform="rotate(-40.124)" cx="15.703" cy="47.021" rx="6.9291" ry="6.2244" fill="#0a0502" stroke-width=".36777"/>' +
	'<ellipse id="sixteen" onClick="selectAspect(this.id)" transform="rotate(-40.124)" cx="15.626" cy="47.147" rx="3.5338" ry="5.3531" fill="#5c503e" stroke-width=".6959"/>' +
	'<ellipse id="seventeen" onClick="selectAspect(this.id)" transform="matrix(-.76465 -.64445 -.64445 .76465 0 0)" cx="-91.433" cy="-43.274" rx="6.9291" ry="6.2244" fill="#0a0502" stroke-width=".36777"/>' +
	'<ellipse id="eighteen" onClick="selectAspect(this.id)" transform="matrix(-.76465 -.64445 -.64445 .76465 0 0)" cx="-91.51" cy="-43.148" rx="3.5338" ry="5.3531" fill="#5c503e" stroke-width=".6959"/>' +
	'<ellipse id="nineteen" onClick="selectAspect(this.id)" transform="rotate(-62.18)" cx="-27.708" cy="44.724" rx="5.2163" ry="4.6858" fill="#0a0502" stroke-width=".27686"/>' +
	'<ellipse id="twenty" onClick="selectAspect(this.id)" transform="rotate(-62.18)" cx="-27.767" cy="44.819" rx="2.6603" ry="4.0298" fill="#5c503e" stroke-width=".52388"/>' +
	'<ellipse id="twentyone" onClick="selectAspect(this.id)" transform="matrix(-.46669 -.88442 -.88442 .46669 0 0)" cx="-93.125" cy="-79.247" rx="5.2163" ry="4.6858" fill="#0a0502" stroke-width=".27686"/>' +
	'<ellipse id="twentytwo" onClick="selectAspect(this.id)" transform="matrix(-.46669 -.88442 -.88442 .46669 0 0)" cx="-93.183" cy="-79.152" rx="2.6603" ry="4.0298" fill="#5c503e" stroke-width=".52388"/>' +
	'<g fill="#1f1811" stroke-width=".92045">' +
	'<circle id="twentythree" onClick="selectAspect(this.id)" cx="42.972" cy="46.682" r="3.5339"/>' +
	'<circle id="twentyfour" onClick="selectAspect(this.id)" cx="22.394" cy="71.572" r="3.5339"/>' +
	'<circle id="twentyfive" onClick="selectAspect(this.id)" transform="scale(-1,1)" cx="-119.01" cy="71.572" r="3.5339"/>' +
	'<circle id="twentysix" onClick="selectAspect(this.id)" cx="22.198" cy="59.231" r="3.5339"/>' +
	'<circle id="twentyseven" onClick="selectAspect(this.id)" transform="scale(-1,1)" cx="-119.21" cy="59.231" r="3.5339"/>' +
	'<circle id="twentyeight" onClick="selectAspect(this.id)" cx="59.325" cy="36.161" r="3.5339"/>' +
	'<circle id="twentynine" onClick="selectAspect(this.id)" cx="79.741" cy="36.132" r="3.5339"/>' +
	'<circle id="thirty" onClick="selectAspect(this.id)" cx="96.871" cy="46.682" r="3.5339"/>' +
	'<circle id="thirtyone" onClick="selectAspect(this.id)" cx="84.671" cy="49.762" r="3.5339"/>' +
	'<circle id="thirtytwo" onClick="selectAspect(this.id)" cx="69.131" cy="55.392" r="3.5339"/>' +
	'<circle id="thirtythree" onClick="selectAspect(this.id)" cx="56.023" cy="49.762" r="3.5339"/>' +
	"</g>" +
	"</svg>";
