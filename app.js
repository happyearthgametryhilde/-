(() => {
  'use strict';
  const C = window.HILDE_CONTENT;
  const $ = (selector, root = document) => root.querySelector(selector);
  const device = $('#device');
  const layer = $('#appLayer');
  const HOME_APPS = ['photos','notes','calendar','clock','camera','instagram','youtube','settings'];
  const DOCK_APPS = ['phone','safari','messages','kakao'];
  const LABELS = {photos:'사진',notes:'메모',calendar:'캘린더',clock:'시계',settings:'설정',camera:'카메라',phone:'전화',safari:'Safari',messages:'메시지',kakao:'카카오톡',instagram:'Instagram',youtube:'YouTube'};
  const SUPPLIED_APP_ART={settings:'settings.webp',photos:'photos.webp',notes:'notes.webp',phone:'phone.webp',camera:'camera.webp',safari:'safari.webp',messages:'messages.webp',kakao:'kakao.svg',instagram:'instagram.svg'};
  const PREFIX = 'hilde-phone-v1:';
  const clone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = (name, extra = '') => '<svg class="icon '+extra+'" aria-hidden="true"><use href="assets/icons.svg?v=20261019ah#'+name+'"/></svg>';
  // Inter Display numeral outlines; SIL OFL 1.1, see assets/fonts/Inter-OFL.txt.
  const LOCK_CLOCK_GLYPHS={"0":{"d":"M377.863 1000Q261.014 1000 176.345 938.908Q91.677 877.815 45.839 765.982Q0 654.148 0 500.534Q0 346.502 45.83 234.384Q91.661 122.266 176.303 61.133Q260.944 0 377.858 0Q495.005 0 579.764 61.092Q664.523 122.185 710.154 234.343Q755.784 346.502 755.784 500.679Q755.784 654.205 710.154 766.127Q664.523 878.049 579.764 939.025Q495.005 1000 377.863 1000ZM377.918 858.519Q444.759 858.519 493.016 815.294Q541.274 772.069 567.282 691.951Q593.29 611.834 593.29 500.621Q593.29 388.816 567.282 308.491Q541.274 228.165 492.969 184.823Q444.665 141.481 377.962 141.481Q311.26 141.481 262.885 184.823Q214.51 228.165 188.503 308.491Q162.495 388.816 162.495 500.621Q162.495 611.834 188.503 691.951Q214.51 772.069 262.911 815.294Q311.312 858.519 377.918 858.519Z","width":755.784,"advance":825.784},"1":{"d":"M399.01 15.605V984.395H232.978V178.438H232.094L0 328.321V171.236L240.468 15.605Z","width":399.01,"advance":469.01},"2":{"d":"M1.014 984.395V853.681L352.639 546.477Q402.003 502.315 437.295 465.839Q472.588 429.363 491.496 391.56Q510.403 353.758 510.403 307.152Q510.403 256.462 489.623 219.219Q468.843 181.975 430.832 161.728Q392.821 141.481 340.181 141.481Q283.692 141.481 243.171 165.72Q202.651 189.96 180.869 234.849Q159.088 279.739 159.088 342.106H0Q0 239.376 41.794 162.445Q83.589 85.514 160.026 42.757Q236.462 0 339.999 0Q436.878 0 511.598 37.269Q586.318 74.538 628.906 141.703Q671.494 208.869 671.494 298.855Q671.494 364.785 646.981 420.312Q622.469 475.838 575.044 529.115Q527.619 582.392 458.672 642.965L234.561 841.146V842.446H676.175V984.395Z","width":676.175,"advance":746.175},"3":{"d":"M359.427 1000Q245.487 1000 165.254 956.203Q85.02 912.406 42.51 837.543Q0 762.679 0 669.805H167.02Q167.02 729.884 189.634 773.031Q212.248 816.178 254.992 838.935Q297.736 861.692 357.294 861.692Q413.784 861.692 456.684 842.212Q499.584 822.732 523.654 787.114Q547.725 751.496 547.725 704.058Q547.725 659.064 521.821 625.852Q495.917 592.639 449.649 574.109Q403.381 555.578 341.222 555.578H257.581V423.46H341.222Q396.853 423.46 438.14 406.645Q479.428 389.831 502.25 359.077Q525.072 328.322 525.072 286.71Q525.072 240.519 503.758 206.683Q482.445 172.847 444.46 154.407Q406.475 135.967 355.37 135.967Q302.964 135.967 264.277 156.332Q225.59 176.696 204.341 214.173Q183.093 251.651 183.093 303.407H19.87Q19.87 215.162 61.612 146.58Q103.355 77.997 178.933 38.999Q254.512 0 355.786 0Q451.416 0 526.501 34.876Q601.585 69.753 644.537 130.637Q687.489 191.521 687.489 270.845Q687.489 349.701 637.723 405.657Q587.957 461.612 506.214 480.936V482.887Q571.962 492.12 619.205 524.682Q666.448 557.243 691.923 605.553Q717.398 653.862 717.398 711.313Q717.398 795.137 671.286 860.481Q625.174 925.826 544.511 962.913Q463.848 1000 359.427 1000Z","width":717.398,"advance":787.398},"4":{"d":"M0 767.177V632.095L438.779 15.605H546.111V186.734H486.074L172.664 627.623V628.973H783.666V767.177ZM487.074 984.395V726.398V664.968V15.605H649.933V984.395Z","width":783.666,"advance":853.666},"5":{"d":"M352.041 998.335Q252.275 998.335 174.525 959.415Q96.775 920.494 50.806 851.6Q4.837 782.705 0 692.276H165.018Q168.347 740.573 193.301 778.453Q218.256 816.334 259.544 838.233Q300.831 860.131 352.743 860.131Q407.386 860.131 448.322 834.969Q489.259 809.806 512.406 765.67Q535.553 721.535 535.553 664.291Q535.553 606.814 513.121 562.535Q490.689 518.257 450.793 493.068Q410.897 467.879 358.153 467.879Q288.946 467.879 239.804 496.436Q190.661 524.993 172.118 577.633H13.056L43.693 15.605H643.587V158.022H196.721L177.293 415.423H178.594Q218.906 373.264 271.026 352.575Q323.146 331.886 386.033 331.886Q452.066 331.886 509.088 356.294Q566.111 380.702 608.789 425.15Q651.468 469.597 675.356 529.623Q699.244 589.649 699.244 660.65Q699.244 759.584 655.915 835.761Q612.586 911.938 534.498 955.137Q456.41 998.335 352.041 998.335Z","width":699.244,"advance":769.244},"6":{"d":"M366.761 1000Q279.349 1000 211.43 968.622Q143.511 937.243 96.294 876.879Q49.077 816.515 24.538 729.35Q0 642.185 0 530.195Q0 409.597 23.615 311.99Q47.23 214.383 94.564 144.5Q141.898 74.616 212.639 37.308Q283.38 0 377.216 0Q469.934 0 540.063 34.993Q610.193 69.987 652.69 131.248Q695.186 192.509 703.821 271.989H541.17Q529.389 210.428 487.295 174.082Q445.201 137.736 378.283 137.736Q304.238 137.736 255.85 179.063Q207.463 220.389 183.756 293.706Q160.05 367.022 160.05 463.668H161.35Q184.627 426.424 220.258 400.313Q255.889 374.201 300.687 360.442Q345.486 346.684 396.097 346.684Q487.853 346.684 559.491 388.739Q631.129 430.794 672.313 503.641Q713.496 576.489 713.496 669.753Q713.496 767.438 669.166 841.964Q624.836 916.489 546.747 958.244Q468.659 1000 366.761 1000ZM365.825 860.392Q417.554 860.392 459.024 835.138Q500.494 809.884 524.915 766.516Q549.337 723.147 549.337 669.753Q549.337 616.359 525.539 573.823Q501.742 531.287 460.897 506.449Q420.051 481.612 368.321 481.612Q329.492 481.612 295.954 496.059Q262.417 510.506 237.254 536.202Q212.092 561.898 197.852 596.294Q183.613 630.689 183.613 670.585Q183.613 723.564 207.917 766.724Q232.222 809.884 273.6 835.138Q314.979 860.392 365.825 860.392Z","width":713.496,"advance":783.496},"7":{"d":"M66.736 984.395 483.07 162.183V161.299H0V15.605H656.696V162.183L242.755 984.395Z","width":656.696,"advance":726.696},"8":{"d":"M354.745 1000Q249.622 1000 169.765 965.124Q89.909 930.247 44.954 868.127Q0 806.008 0 725.046Q0 659.324 28.804 607.087Q57.607 554.85 108.491 521.352Q159.375 487.854 225.383 479.532V480.182Q138.959 466.06 86.099 407.854Q33.238 349.649 33.238 261.951Q33.238 185.54 74.525 126.346Q115.813 67.152 188.335 33.576Q260.858 0 354.745 0Q449.387 0 521.793 33.342Q594.198 66.684 635.043 125.761Q675.889 184.837 675.889 261.951Q675.889 349.233 623.145 407.529Q570.401 465.826 484.576 480.182V479.532Q550.583 487.854 601.468 521.56Q652.352 555.267 681.155 607.503Q709.959 659.74 709.959 725.046Q709.959 806.008 664.887 868.127Q619.816 930.247 539.959 965.124Q460.103 1000 354.745 1000ZM354.745 868.35Q409.7 868.35 450.819 849.117Q491.937 829.884 514.759 794.994Q537.581 760.105 537.581 714.227Q537.581 666.866 514.135 630.338Q490.689 593.81 449.479 573.029Q408.27 552.249 354.745 552.249Q301.455 552.249 260.154 573.029Q218.854 593.81 195.199 630.338Q171.545 666.866 171.545 714.227Q171.545 760.339 194.575 795.111Q217.605 829.884 258.698 849.117Q299.79 868.35 354.745 868.35ZM354.745 420.053Q401.508 420.053 436.553 402.172Q471.599 384.292 491.196 351.73Q510.793 319.168 510.793 276.307Q510.793 233.211 491.404 201.183Q472.015 169.154 436.97 151.273Q401.924 133.393 354.745 133.393Q307.801 133.393 272.664 151.273Q237.527 169.154 217.93 201.183Q198.333 233.211 198.333 276.307Q198.333 319.168 217.93 351.522Q237.527 383.875 272.872 401.964Q308.217 420.053 354.745 420.053Z","width":709.959,"advance":779.959},"9":{"d":"M334.615 1000Q242.548 1000 171.677 965.007Q100.806 930.013 58.01 868.427Q15.214 806.841 6.346 728.011H168.997Q180.778 789.338 223.496 825.801Q266.214 862.264 333.133 862.264Q407.411 862.264 455.682 820.937Q503.953 779.611 527.867 705.969Q551.781 632.328 551.781 536.332H550.481Q527.204 573.159 491.989 598.647Q456.775 624.135 412.509 637.061Q368.244 649.987 317.399 649.987Q226.059 649.987 154.213 608.348Q82.367 566.71 41.183 493.953Q0 421.196 0 328.582Q0 230.897 44.33 156.788Q88.66 82.679 166.957 41.339Q245.253 0 346.735 0Q434.147 0 502.066 31.378Q569.985 62.757 617.202 123.121Q664.419 183.485 688.958 270.65Q713.496 357.815 713.496 469.805Q713.496 590.403 689.465 688.01Q665.434 785.617 617.892 855.5Q570.349 925.384 499.4 962.692Q428.451 1000 334.615 1000ZM345.175 515.059Q384.004 515.059 417.542 500.82Q451.079 486.581 476.242 461.093Q501.404 435.605 515.644 401.626Q529.883 367.646 529.883 327.75Q529.883 274.356 505.579 231.82Q481.274 189.284 440.013 164.446Q398.751 139.608 347.671 139.608Q296.176 139.608 254.589 164.446Q213.002 189.284 188.581 232.028Q164.159 274.772 164.159 328.582Q164.159 381.977 187.956 424.097Q211.754 466.216 252.924 490.638Q294.095 515.059 345.175 515.059Z","width":713.496,"advance":783.496},":":{"width":180,"advance":300}};
  const CALENDAR_DATE_GLYPHS={"0":{"d":"M31.0 0.0C22.18103448275862 0.0 14.163793103448274 3.458445040214471 9.219827586206897 9.107238605898118C3.0732758620689653 16.485254691689008 0.0 27.552278820375328 0.0 42.99999999999999C0.0 71.12868632707774 10.689655172413794 85.99999999999999 31.0 85.99999999999999C51.04310344827586 85.99999999999999 62.0 71.12868632707774 62.0 43.691689008042886C62.0 27.552278820375328 59.060344827586206 16.71581769436996 52.7801724137931 9.107238605898118C47.83620689655172 3.343163538873995 39.95258620689655 0.0 31.0 0.0ZM31.0 8.991957104557642C43.693965517241374 8.991957104557642 49.97413793103448 20.174262734584445 49.97413793103448 42.769436997319026C49.97413793103448 66.51742627345844 43.82758620689655 77.58445040214477 30.73275862068965 77.58445040214477C18.30603448275862 77.58445040214477 12.025862068965516 66.0563002680965 12.025862068965516 43.115281501340476C12.025862068965516 20.174262734584445 18.30603448275862 8.991957104557642 31.0 8.991957104557642Z","width":62},"2":{"d":"M61.35010482180293 75.75623268698061H12.867924528301884C14.037735849056602 68.60941828254848 18.19706498951782 64.08310249307479 29.505241090146747 57.770083102493075L42.50314465408805 51.09972299168975C55.37106918238993 44.548476454293635 62.0 35.73407202216067 62.0 25.13296398891967C62.0 17.986149584487535 58.880503144654085 11.31578947368422 53.42138364779874 6.67036011080333C47.96226415094339 2.1440443213296447 41.20335429769392 0.0 32.494758909853246 0.0C20.79664570230608 0.0 12.08805031446541 3.81163434903047 7.018867924528301 11.196675900277015C3.7693920335429763 15.7229916897507 2.3396226415094343 21.08310249307479 2.079664570230608 29.77839335180056H13.517819706498951C13.90775681341719 23.94182825484765 14.68763102725367 20.48753462603878 16.247379454926623 17.628808864265935C19.236897274633122 12.387811634349035 25.21593291404612 9.171745152354575 32.10482180293501 9.171745152354575C42.50314465408805 9.171745152354575 50.30188679245283 16.0803324099723 50.30188679245283 25.371191135734072C50.30188679245283 32.279778393351805 46.0125786163522 38.23545706371191 37.82389937106918 42.523545706371195L25.865828092243184 48.955678670360115C6.628930817610062 59.0803324099723 1.0398322851153043 67.18005540166206 0.0 86.0H61.35010482180293Z","width":62},"3":{"d":"M24.721518987341774 44.959785522788195H26.160337552742618H31.000000000000007C43.55696202531646 44.959785522788195 50.22784810126583 50.14745308310991 50.22784810126583 60.17694369973189C50.22784810126583 70.66756032171581 43.03375527426161 77.00804289544234 31.130801687763714 77.00804289544234C18.44303797468355 77.00804289544234 12.295358649789032 71.35924932975871 11.510548523206753 59.13941018766755H0.0C0.5232067510548521 65.82573726541554 1.8312236286919834 70.20643431635388 4.054852320675106 73.89544235924932C8.89451476793249 81.9651474530831 17.91983122362869 85.99999999999999 30.607594936708864 85.99999999999999C49.70464135021098 85.99999999999999 62.000000000000014 75.85522788203752 62.000000000000014 60.06166219839142C62.000000000000014 49.455764075067016 57.42194092827005 43.691689008042886 46.30379746835444 40.23324396782841C54.9367088607595 37.12064343163538 59.253164556962034 31.356568364611256 59.253164556962034 22.941018766756024C59.253164556962034 8.646112600536185 48.65822784810127 0.0 31.000000000000007 0.0C12.295358649789032 0.0 2.3544303797468356 9.222520107238594 1.962025316455696 26.860589812332435H13.472573839662447C13.603375527426161 21.788203753351198 14.126582278481015 18.906166219839136 15.565400843881859 16.369973190348517C18.18143459915612 11.643431635388737 23.936708860759495 8.876675603217151 31.130801687763714 8.876675603217151C41.333333333333336 8.876675603217151 47.481012658227854 14.294906166219832 47.481012658227854 23.286863270777474C47.481012658227854 29.166219839142087 45.12658227848102 32.73994638069704 40.025316455696206 34.69973190348525C36.8860759493671 35.85254691689007 32.70042194092827 36.313672922252 24.721518987341774 36.42895442359249Z","width":62},"4":{"d":"M37.67886178861788 65.18395573997233V86.0H48.76829268292682V65.18395573997233H62.0V55.786998616874136H48.76829268292682V0.0H40.57723577235772L0.0 54.12171507607192V65.18395573997233ZM37.67886178861788 55.786998616874136H9.703252032520325L37.67886178861788 17.84232365145229Z","width":62},"5":{"d":"M57.20083682008369 0.0H9.728033472803347L2.8535564853556483 45.349726775956285H13.359832635983263C18.677824267782427 39.59289617486339 23.08786610878661 37.595628415300546 30.351464435146443 37.595628415300546C42.67364016736402 37.595628415300546 50.32635983263599 45.232240437158474 50.32635983263599 57.568306010928964C50.32635983263599 69.55191256830601 42.67364016736402 76.8360655737705 30.22175732217573 76.8360655737705C20.234309623430963 76.8360655737705 14.13807531380753 72.25409836065575 11.414225941422593 62.85519125683061H0.0C1.556485355648535 69.66939890710383 2.8535564853556483 72.95901639344262 5.577405857740586 76.0136612021858C10.765690376569037 82.35792349726776 20.10460251046025 86.0 30.481171548117157 86.0C49.02928870292887 86.0 62.0 73.78142076502732 62.0 56.15846994535519C62.0 39.7103825136612 49.937238493723854 28.431693989071036 32.29707112970711 28.431693989071036C25.811715481171547 28.431693989071036 20.623430962343097 29.959016393442624 15.305439330543933 33.48360655737705L18.93723849372385 10.221311475409834H57.20083682008369Z","width":62},"6":{"d":"M60.02127659574468 21.672922252010714C57.77872340425532 8.069705093833775 47.753191489361704 0.0 33.5063829787234 0.0C23.217021276595744 0.0 13.982978723404255 4.380697050938338 8.44255319148936 11.873994638069703C2.506382978723404 20.058981233243962 0.0 30.20375335120643 0.0 45.305630026809645C0.0 59.36997319034852 2.2425531914893613 68.24664879356567 7.914893617021277 75.62466487935656C12.927659574468084 82.42627345844502 21.106382978723403 85.99999999999999 31.395744680851067 85.99999999999999C49.204255319148935 85.99999999999999 62.0 74.35656836461125 62.0 58.10187667560321C62.0 42.769436997319026 50.12765957446808 31.932975871313666 33.374468085106386 31.932975871313666C24.140425531914893 31.932975871313666 16.885106382978723 34.93029490616621 11.872340425531917 41.04021447721179C12.004255319148935 20.404825737265412 19.391489361702128 8.991957104557642 32.714893617021275 8.991957104557642C40.8936170212766 8.991957104557642 46.56595744680851 13.603217158176932 48.41276595744681 21.672922252010714ZM31.92340425531915 40.92493297587131C43.136170212765954 40.92493297587131 50.12765957446808 47.84182305630026 50.12765957446808 58.908847184986584C50.12765957446808 69.3994638069705 42.212765957446805 77.00804289544234 31.527659574468082 77.00804289544234C20.71063829787234 77.00804289544234 12.53191489361702 69.05361930294904 12.53191489361702 58.44772117962466C12.53191489361702 48.07238605898122 20.4468085106383 40.92493297587131 31.92340425531915 40.92493297587131Z","width":62},"7":{"d":"M62.0 0.0H0.0V10.552891396332853H50.09704641350211C27.991561181434598 39.78561354019746 18.9662447257384 57.73765867418899 12.033755274261603 86.0H24.329113924050638C29.430379746835442 58.4654442877292 41.07172995780591 34.81241184767278 62.0 8.976022566995766Z","width":62},"9":{"d":"M1.9745222929936306 64.32707774798926C4.212314225053079 77.93029490616621 14.21656050955414 85.99999999999999 28.433121019108277 85.99999999999999C38.832271762208066 85.99999999999999 48.046709129511676 81.61930294906165 53.57537154989384 74.12600536193028C59.367303609341825 65.94101876675603 61.99999999999999 55.796246648793556 61.99999999999999 40.69436997319034C61.99999999999999 26.63002680965147 59.630573248407636 17.753351206434317 54.101910828025474 10.375335120643427C48.968152866242036 3.5737265415549473 40.8067940552017 0.0 30.539278131634816 0.0C12.768577494692144 0.0 0.0 11.643431635388737 0.0 27.782841823056295C0.0 43.115281501340476 11.847133757961783 53.95174262734584 28.696390658174096 53.95174262734584C37.51592356687898 53.95174262734584 44.09766454352442 51.18498659517425 50.02123142250531 44.84450402144771C49.8895966029724 65.59517426273457 42.51804670912951 77.00804289544234 29.222929936305732 77.00804289544234C21.061571125265395 77.00804289544234 15.401273885350319 72.39678284182304 13.558386411889595 64.32707774798926ZM30.40764331210191 8.876675603217151C41.20169851380042 8.876675603217151 49.36305732484076 16.83109919571045 49.36305732484076 27.552278820375328C49.36305732484076 37.81233243967828 41.46496815286624 44.959785522788195 30.01273885350318 44.959785522788195C18.823779193205944 44.959785522788195 11.847133757961783 38.04289544235924 11.847133757961783 26.97587131367292C11.847133757961783 16.485254691689008 19.6135881104034 8.876675603217151 30.40764331210191 8.876675603217151Z","width":62},"1":{"d":"M21 2L32 2L32 3L33 3L33 84L32 84L32 86L23 86L23 84L22 84L22 13L21 13L20 15L18 15L18 16L17 16L16 18L14 18L13 20L11 20L10 22L8 22L8 23L7 23L6 25L4 25L3 27L0 27L0 18L1 18L1 17L2 17L3 15L5 15L5 14L6 14L7 12L9 12L10 10L12 10L12 9L13 9L14 7L16 7L16 6L17 6L18 4L20 4L21 2Z","width":33},"8":{"d":"M29 0L33 0L33 1L40 1L40 2L46 3L47 5L51 6L51 7L52 7L52 8L54 9L54 11L56 12L56 14L57 14L57 16L58 16L58 22L59 22L59 23L58 23L58 29L57 29L57 31L56 31L55 35L54 35L54 36L53 36L53 37L52 37L51 39L49 39L48 41L46 41L46 42L48 42L48 43L50 43L51 45L53 45L53 46L54 46L54 47L55 47L55 48L56 48L56 49L58 50L58 52L60 53L60 56L61 56L61 61L62 61L62 65L61 65L61 70L60 70L60 73L58 74L58 76L57 76L57 77L56 77L56 78L55 78L55 79L54 79L54 80L53 80L52 82L50 82L50 83L48 83L48 84L46 84L46 85L40 86L40 87L22 87L22 86L19 86L19 85L16 85L16 84L14 84L14 83L10 82L10 81L9 81L9 80L8 80L8 79L7 79L7 78L6 78L6 77L4 76L4 74L2 73L2 70L1 70L1 66L0 66L0 61L1 61L1 56L2 56L2 53L4 52L4 50L5 50L5 49L6 49L6 48L7 48L7 47L8 47L9 45L11 45L12 43L16 42L16 41L14 41L13 39L11 39L11 38L10 38L10 37L9 37L9 36L7 35L7 33L5 32L5 29L4 29L4 24L3 24L3 21L4 21L4 16L5 16L6 12L8 11L8 9L9 9L9 8L10 8L11 6L15 5L16 3L19 3L19 2L22 2L22 1L29 1L29 0Z M31 9L30 9L30 10L24 10L24 11L21 11L20 13L18 13L18 15L17 15L17 16L15 17L15 19L14 19L14 27L15 27L16 31L17 31L17 32L18 32L18 33L19 33L20 35L22 35L22 36L25 36L25 37L37 37L37 36L40 36L40 35L42 35L42 34L43 34L43 33L44 33L44 32L45 32L45 31L47 30L47 27L48 27L48 19L47 19L47 17L46 17L46 16L44 15L44 13L42 13L42 12L40 12L40 11L38 11L38 10L32 10L32 9L31 9Z M25 47L24 47L24 48L21 48L21 49L19 49L18 51L16 51L16 52L14 53L13 57L12 57L12 60L11 60L11 65L12 65L12 68L13 68L13 70L15 71L15 73L16 73L16 74L18 74L18 75L20 75L20 76L22 76L22 77L25 77L25 78L37 78L37 77L40 77L40 76L42 76L42 75L46 74L46 72L48 72L48 70L49 70L49 68L50 68L50 65L51 65L51 60L50 60L50 57L49 57L48 53L47 53L46 51L44 51L43 49L40 49L40 48L38 48L38 47L25 47Z","width":62}};
  const pad = n => String(n).padStart(2,'0');
  function load(key, fallback) {
    try { const raw = localStorage.getItem(PREFIX+key); return raw ? JSON.parse(raw) : clone(fallback); }
    catch { return clone(fallback); }
  }
  function loadVersionedDefaults(key) {
    const revision=C[key+'Revision'];
    if(revision&&load(key+'Revision',null)!==revision){
      const fresh=clone(C[key]);
      if(key==='alarms'){
        const previous=load(key,[]),defaultIds=new Set(fresh.map(item=>item.id));
        if(Array.isArray(previous))fresh.push(...previous.filter(item=>item&&item.id!=='evening'&&!defaultIds.has(item.id)));
        fresh.sort((a,b)=>(a.hour*60+a.minute)-(b.hour*60+b.minute));
      }
      try{
        localStorage.setItem(PREFIX+key,JSON.stringify(fresh));
        localStorage.setItem(PREFIX+key+'Revision',JSON.stringify(revision));
      }catch{}
      return fresh;
    }
    return load(key,C[key]);
  }
  const state = {
    route:null, notes:loadVersionedDefaults('notes'), messages:clone(C.messages),
    kakao:clone(C.kakao), alarms:loadVersionedDefaults('alarms'),
    imports:load('photos',[]), favorites:load('favorites',[]),
    settings:load('settings',{previews:true,autoNotifications:true,wallpaper:null}),
    phoneTab:'recent',phoneFilter:'all',phoneQuery:'',phoneSearch:false,phoneEditing:false,phoneMenu:false,
    phoneCalls:clone(C.phone.calls),dial:'',deletedNote:null,
    kakaoFilter:'all',kakaoSearch:false,kakaoQuery:'',kakaoListPositions:{},kakaoAvatarVariants:load('kakaoAvatarVariants',{}),
    messagesMenu:null,messagesFilter:'all',messagesQuery:'',messagesListPositions:{},
    instagram:load('instagram',{likes:[],saved:[],comments:{}}),
    youtube:load('youtube',{liked:[],saved:[],history:[],subscriptions:[],added:[]}),
    safariHistory:load('safariHistory',C.safari?.recentSearches || []),safariPositions:{},safariSearchOpen:false,safariKeyboardOpen:false,safariKeyLanguage:'en',safariKeyNumbers:false,safariKeyShift:false,safariKeyUndo:[],
    igTab:'home',ytTab:'home',ytSection:'home',ytFilter:'전체',ytLibrary:'history',
    notesQuery:'',notesPinnedCollapsed:false,notesMenu:false,noteUndo:{},
    calendarPicker:false,calendarList:false,calendarDetail:false,calendarSearch:false,calendarQuery:'',
    igTagsVisible:{},clockTab:'alarms',clockEditing:false,
    stopwatch:{running:false,startedAt:0,elapsed:0,laps:[]},
    timer:{running:false,endsAt:0,remaining:900,duration:900,label:''},
    controls:{airplane:false,cellular:true,wifi:true,bluetooth:true,rotation:true,focus:false,brightness:85,volume:35}
  };
  function save(key) {
    // Conversation reads and replies live only in memory until the next reload.
    if(key==='messages'||key==='kakao'||key==='phoneCalls')return true;
    try { localStorage.setItem(PREFIX+key,JSON.stringify(key==='photos'?state.imports:state[key])); return true; }
    catch { toast('저장 공간이 부족해요. 추가한 사진을 줄여 주세요.'); return false; }
  }
  function dateParts(now = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Seoul',year:'numeric',month:'numeric',day:'numeric',weekday:'short',hour:'numeric',minute:'numeric',second:'numeric',hourCycle:'h23'}).formatToParts(now);
    return Object.fromEntries(parts.filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));
  }
  const TODAY = dateParts();
  let calendarYear = Number(TODAY.year);
  let calendarMonth = Number(TODAY.month)-1;
  let calendarDay = Number(TODAY.day);
  let toastTimer;
  const liveNotifications={started:false,timers:[],pending:[],current:null,dismissTimer:null,exitTimer:null};
  const kakaoScene={started:false,replied:false};
  const kakaoOpeningSound={openingPlayer:null,openingArmed:false,openingTimer:null,openingResolve:null,player:null,request:null,context:null,buffer:null,bufferRequest:null,source:null,primed:false,played:false,playing:false,attempt:0,mode:'idle',item:null,lastError:null};
  const historyTimes=[...[...C.kakao,...C.messages].flatMap(chat=>chat.items),...C.phone.calls].map(item=>Date.parse(item.date+'T'+item.time+':00+09:00')).filter(Number.isFinite);
  const incoming={messageTimer:null,callTimer:null,messageIndex:0,callIndex:0,storyStartedAt:(historyTimes.length?Math.max(...historyTimes):Date.now())+60000,sessionStartedAt:Date.now()};
  let gestureStart = null;
  let systemGesture = null;
  const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
  let lastAppOrigin = {x:0,y:250};
  const allPhotos = () => C.gallery?.mode==='placeholders' ? C.photos : state.imports.concat(C.photos);
  const visiblePhotos = () => {const photos=allPhotos();return photos.slice(0,C.gallery?.visibleCount ?? photos.length);};
  const contact = id => C.contacts.find(c=>c.id===id);
  function contactMonogram(name) {
    const letters=Array.from((name||'').trim());
    return letters.length===2?letters.join(''):(letters[0]||'');
  }
  function contactAvatar(person,extra='') {
    const letters=contactMonogram(person.name);
    return '<span class="avatar ios-contact-avatar '+extra+'" aria-hidden="true"><span class="contact-monogram" data-length="'+Array.from(letters).length+'">'+esc(letters)+'</span></span>';
  }
  function avatar(c, extra = '') {
    if(contact(c?.id))return contactAvatar(contact(c.id),extra);
    return '<span class="avatar '+extra+'" style="--avatar:'+esc(c?.color || '#82948b')+'">'+esc(c?.initial || '힐')+'</span>';
  }
  function kakaoAvatar(person) {
    const id=person?.id||person?.name||'default';
    const image=C.kakaoProfileImages?.[id];
    if(image)return '<span class="avatar kakao-avatar kakao-avatar-custom" aria-hidden="true"><img src="'+esc(image)+'" alt="" draggable="false"></span>';
    const variant=state.kakaoAvatarVariants[id]??Array.from(id).reduce((n,ch)=>n+ch.charCodeAt(0),0)%3;
    return '<span class="avatar kakao-avatar kakao-avatar-'+variant+'" data-avatar-variant="'+variant+'" aria-hidden="true"><img src="assets/kakao/default-profiles.png?v=20261018d" alt="" draggable="false"></span>';
  }
  function kakaoGroupAvatar(chat) {
    const senders=[...new Set(chat.items.filter(message=>!message.mine&&message.sender).map(message=>message.sender))];
    const count=Math.min(4,Math.max(2,Number(chat.participants||4)-1));
    const portraits=Array.from({length:count},(_,index)=>{
      const name=senders[index],person=state.kakao.find(person=>!person.group&&person.name===name)||{id:chat.id+'-member-'+index};
      return kakaoAvatar(person);
    }).join('');
    return '<span class="kakao-group-avatar kakao-group-avatar-'+count+'" aria-hidden="true">'+portraits+'</span>';
  }
  function kakaoMessagePreview(message) {
    return message?.type==='sticker'?'이모티콘':message?.type==='video'?'동영상':message?.type==='image'?'사진':message?.text||'';
  }
  function chatListTime(chat,fullDate=false) {
    const last=chat.items.at(-1);if(!last?.date)return chat.time;
    if(last.date===kakaoDay())return last.time;
    if(last.date===kakaoDay(-1))return '어제';
    const [year,month,day]=last.date.split('-');
    if(fullDate)return year+'. '+Number(month)+'. '+Number(day)+'.';
    return year!==dateParts().year?year.slice(2)+'.'+Number(month)+'.'+Number(day):Number(month)+'월 '+Number(day)+'일';
  }
  function kakaoListKey() {
    return JSON.stringify([state.kakaoFilter,state.kakaoSearch,state.kakaoSearch?state.kakaoQuery:'']);
  }
  function rememberKakaoListPosition() {
    const scroll=$('#kakaoListScroll',layer);
    if(scroll)state.kakaoListPositions[scroll.dataset.viewKey]=scroll.scrollTop;
  }
  function restoreKakaoListPosition() {
    const scroll=$('#kakaoListScroll',layer);
    if(scroll)scroll.scrollTop=state.kakaoListPositions[scroll.dataset.viewKey]||0;
  }
  function messagesListKey() { return JSON.stringify([state.messagesFilter,state.messagesQuery]); }
  function rememberMessagesListPosition() {
    const scroll=$('#messagesListScroll',layer);
    if(scroll)state.messagesListPositions[scroll.dataset.viewKey]=scroll.scrollTop;
  }
  function restoreMessagesListPosition() {
    const scroll=$('#messagesListScroll',layer);
    if(scroll)scroll.scrollTop=state.messagesListPositions[scroll.dataset.viewKey]||0;
  }
  function refreshMessagesList() {
    const scroll=$('#messagesListScroll',layer);if(!scroll)return;
    const top=scroll.getBoundingClientRect().top;
    const anchor=scroll.scrollTop>0?$$('.chat-row',scroll).find(row=>row.getBoundingClientRect().bottom>top):null;
    const anchorId=anchor?.dataset.id,anchorTop=anchor?.getBoundingClientRect().top;
    const position=scroll.scrollTop;
    $('#chatList',scroll).innerHTML=chatRows('messages',state.messagesQuery);
    const restored=anchorId?$$('.chat-row',scroll).find(row=>row.dataset.id===anchorId):null;
    scroll.scrollTop=restored?position+restored.getBoundingClientRect().top-anchorTop:position;
    rememberMessagesListPosition();
  }
  function kakaoRows(query='') {
    const q=query.trim().toLowerCase();
    const chats=state.kakao.filter(chat=>(state.kakaoFilter!=='unread'||chat.unread>0)&&(chat.name+' '+chat.items.map(m=>m.text).join(' ')).toLowerCase().includes(q));
    const rows=chats.map(chat=>{
      const last=chat.items.at(-1);
      const name=chat.group?'<span class="kakao-room-name">'+esc(chat.name)+'</span><span class="kakao-participants">'+esc(chat.participants||4)+'</span>':esc(chat.name);
      return '<button class="chat-row kakao-chat-row" data-action="thread" data-app="kakao" data-id="'+esc(chat.id)+'">'+(chat.group?kakaoGroupAvatar(chat):kakaoAvatar(chat))+'<span class="kakao-row-copy"><strong'+(chat.group?' class="kakao-group-title"':'')+'>'+name+'</strong><p>'+esc(kakaoMessagePreview(last))+'</p></span><span class="kakao-row-meta"><time>'+esc(chatListTime(chat,true))+'</time>'+(chat.unread?'<span class="chat-count" aria-label="읽지 않은 메시지 '+chat.unread+'개">'+(chat.unread>999?'999+':chat.unread)+'</span>':'')+'</span></button>';
    });
    return rows.join('')||'<p class="empty-state">채팅이 없습니다.</p>';
  }
  function renderKakao() {
    const count=unreadCount('kakao');
    const toolbar='<header class="kakao-list-header"><h1 tabindex="-1">채팅</h1><div><button data-action="kakao-search" aria-label="채팅 검색" aria-expanded="'+state.kakaoSearch+'">'+icon('kk-search')+'</button><button aria-label="새 채팅" disabled aria-disabled="true">'+icon('kk-new-chat')+'</button><button aria-label="카카오톡 설정" disabled aria-disabled="true">'+icon('kk-settings')+'</button></div></header>';
    const filters='<nav class="kakao-filters" aria-label="채팅 필터"><button data-action="kakao-filter" data-filter="all" class="'+(state.kakaoFilter==='all'?'selected':'')+'" aria-pressed="'+(state.kakaoFilter==='all')+'">전체</button><button data-action="kakao-filter" data-filter="unread" class="'+(state.kakaoFilter==='unread'?'selected':'')+'" aria-pressed="'+(state.kakaoFilter==='unread')+'">안읽음'+(count?'<span>'+count+'</span>':'')+'</button><button disabled aria-disabled="true">ChatGPT</button><button disabled aria-disabled="true">통화</button><button class="kakao-filter-add" aria-label="채팅 필터 추가" disabled aria-disabled="true">'+icon('kk-filter')+'</button></nav>';
    const searchbar=state.kakaoSearch?'<div class="kakao-searchbar">'+search('검색','kakao')+'<button data-action="kakao-search-close">취소</button></div>':'';
    return '<div class="app-view kakao kakao-list-app">'+toolbar+filters+searchbar+'<div class="app-scroll kakao-list-scroll" id="kakaoListScroll" data-view-key="'+esc(kakaoListKey())+'"><div class="chat-list" id="chatList">'+kakaoRows(state.kakaoSearch?state.kakaoQuery:'')+'</div></div>'+kakaoTabs()+'</div>';
  }
  function messageAvatar(chat) {
    const person=contact(chat?.id);
    if(person)return contactAvatar(person,'messages-contact-avatar');
    return '<span class="avatar messages-contact-avatar" aria-hidden="true"><img src="assets/messages/default-contact.svg?v=20261018d" alt="" draggable="false"></span>';
  }
  function calendarDateMarkup(day) {
    const value=String(Number(day)),digits=Array.from(value),gap=13;
    const width=digits.reduce((sum,ch)=>sum+CALENDAR_DATE_GLYPHS[ch].width,0)+gap*(digits.length-1);
    let x=94.5-width/2;
    const paths=digits.map(ch=>{const glyph=CALENDAR_DATE_GLYPHS[ch],path='<path d="'+glyph.d+'" transform="translate('+x+' 74)"></path>';x+=glyph.width+gap;return path;}).join('');
    return '<span class="calendar-date-readout">'+value+'</span><svg viewBox="0 0 192 192" aria-hidden="true" focusable="false"><defs><linearGradient id="calendarDateInk" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#535354"></stop><stop offset=".5" stop-color="#29292a"></stop><stop offset="1" stop-color="#444445"></stop></linearGradient></defs><g fill="url(#calendarDateInk)" fill-rule="evenodd" stroke="#141414" stroke-width="1.1" stroke-linejoin="round">'+paths+'</g></svg>';
  }
  function appIcon(app) {
    let overlay='';
    if(app==='calendar')overlay='<span class="calendar-icon-day">'+new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',weekday:'long'}).format(new Date())+'</span><span class="calendar-icon-date" data-day="'+TODAY.day+'">'+calendarDateMarkup(TODAY.day)+'</span>';
    else if(app==='clock')overlay='<span class="clock-face"><i class="clock-hand clock-hand-hour"></i><i class="clock-hand clock-hand-minute"></i><i class="clock-hand clock-hand-second"></i><b class="clock-center"></b></span>';
    const supplied=SUPPLIED_APP_ART[app],file=supplied||app+'.svg';
    return '<span class="app-icon native-app-icon app-icon-'+app+(supplied?' supplied-app-icon':'')+'"><img class="app-art" src="assets/app-icons/'+file+'?v=20261018d" alt="" draggable="false">'+overlay+'</span>';
  }
  function unreadCount(app) {
    const configured=C.badges?.[app];
    if(Number.isInteger(configured)&&configured>=0)return configured;
    if(app==='phone')return state.phoneCalls.filter(call=>call.missed&&call.unread).length;
    return (app==='messages' ? state.messages : app==='kakao' ? state.kakao : []).reduce((n,c)=>n+c.unread,0);
  }
  function appTile(app) {
    const count=unreadCount(app),disabled=app==='camera'||app==='calendar';
    return '<button class="app-tile" data-open="'+app+'"'+(disabled?' disabled aria-disabled="true"':'')+' aria-label="'+LABELS[app]+(disabled?'':' 열기')+(count?', 알림 '+count+'개':'')+'"><span class="app-icon-wrap">'+appIcon(app)+(count?'<span class="badge" aria-hidden="true">'+count+'</span>':'')+'</span><span class="app-label">'+LABELS[app]+'</span></button>';
  }
  function renderHome() {
    $('#appGrid').innerHTML = HOME_APPS.map(appTile).join('');
    $('#dock').innerHTML = DOCK_APPS.map(appTile).join('');
    renderNotifications();
  }
  function renderNotifications() {
    const area=$('#lockNotifications');area.innerHTML='';area.hidden=true;
  }
  const KAKAO_ALERT_URL='assets/kakao/notification-katalk.wav?v=20261019z';
  function preloadKakaoOpeningSound() {
    if(!C.kakaoScene)return null;
    if(!kakaoOpeningSound.openingPlayer&&typeof window.Audio==='function'){
      try{
        const opening=new window.Audio('assets/kakao/notification-opening.wav?v=20261020trusted1');
        opening.preload='auto';opening.setAttribute('playsinline','');opening.load();
        kakaoOpeningSound.openingPlayer=opening;
      }catch{}
    }
    if(!kakaoOpeningSound.player&&typeof window.Audio==='function'){
      try {
        const player=new window.Audio(KAKAO_ALERT_URL);player.preload='auto';player.setAttribute('playsinline','');
        player.onended=()=>{if(!kakaoOpeningSound.source){kakaoOpeningSound.playing=false;kakaoOpeningSound.mode='idle';}};
        kakaoOpeningSound.player=player;player.load();
      }catch{}
    }
    return kakaoOpeningSound.player;
  }
  function kakaoOpeningBannerVisible(item) {
    return Boolean(item?.openingSound&&liveNotifications.current===item&&!document.hidden&&device.dataset.mode!=='locked'&&(!$('#notificationBanner').hidden||item.starting)&&!$('#notificationBanner').classList.contains('is-dismissing'));
  }
  function stopKakaoOpeningSound() {
    kakaoOpeningSound.attempt++;kakaoOpeningSound.playing=false;kakaoOpeningSound.mode='idle';kakaoOpeningSound.item=null;
    const source=kakaoOpeningSound.source;kakaoOpeningSound.source=null;
    try{source?.stop();source?.disconnect();}catch{}
    try{kakaoOpeningSound.player?.pause();kakaoOpeningSound.openingPlayer?.pause();}catch{}
    clearTimeout(kakaoOpeningSound.openingTimer);kakaoOpeningSound.openingTimer=null;
    const resolve=kakaoOpeningSound.openingResolve;kakaoOpeningSound.openingResolve=null;resolve?.();
  }
  function prepareKakaoOpeningSound() {
    // Called only by unlock: this unmuted media play stays inside the trusted gesture.
    // The file itself begins with exactly the existing one-second opening delay.
    if(kakaoOpeningSound.played||kakaoOpeningSound.openingArmed)return;
    preloadKakaoOpeningSound();
    const player=kakaoOpeningSound.openingPlayer;if(!player)return;
    const volume=.85*Math.sqrt(Math.max(0,Math.min(100,Number(state.controls.volume)||0))/100);
    if(!volume)return;
    try{if(window.navigator?.audioSession)window.navigator.audioSession.type='playback';}catch{}
    kakaoOpeningSound.openingArmed=true;
    try{
      player.muted=false;player.volume=volume;player.currentTime=0;
      Promise.resolve(player.play()).catch(error=>{
        kakaoOpeningSound.lastError=error?.name||'playback';
        kakaoOpeningSound.openingArmed=false;
      });
    }catch(error){kakaoOpeningSound.lastError=error?.name||'playback';kakaoOpeningSound.openingArmed=false;}
  }
  function playKakaoOpeningSound(item,fromGesture=false) {
    if(kakaoOpeningSound.played||kakaoOpeningSound.playing||!kakaoOpeningBannerVisible(item))return;
    const player=preloadKakaoOpeningSound();if(!player)return;
    const volume=.85*Math.sqrt(Math.max(0,Math.min(100,Number(state.controls.volume)||0))/100);
    if(!volume){try{kakaoOpeningSound.openingPlayer?.pause();}catch{}kakaoOpeningSound.played=true;return;}
    if(kakaoOpeningSound.openingArmed&&kakaoOpeningSound.openingPlayer){
      const opening=kakaoOpeningSound.openingPlayer;
      kakaoOpeningSound.item=item;kakaoOpeningSound.playing=true;
      opening.volume=volume;
      return new Promise(resolve=>{
        kakaoOpeningSound.openingResolve=resolve;
        const finish=()=>{
          if(kakaoOpeningSound.openingResolve!==resolve)return;
          kakaoOpeningSound.openingResolve=null;
          kakaoOpeningSound.played=true;resolve();
        };
        const check=()=>{
          if(kakaoOpeningSound.openingResolve!==resolve)return;
          if(!kakaoOpeningBannerVisible(item)){stopKakaoOpeningSound();return;}
          if(opening.currentTime>=1){finish();return;}
          kakaoOpeningSound.openingTimer=setTimeout(check,16);
        };
        if(opening.paused){
          try{opening.currentTime=1;Promise.resolve(opening.play()).then(check,finish);}catch{finish();}
        }else check();
      });
    }
    stopKakaoOpeningSound();const attempt=++kakaoOpeningSound.attempt;
    kakaoOpeningSound.playing=true;kakaoOpeningSound.mode='alert';kakaoOpeningSound.item=item;
    try {
      player.muted=false;player.currentTime=0;player.volume=volume;
      return Promise.resolve(player.play()).then(()=>{
        if(attempt!==kakaoOpeningSound.attempt)return;
        const completingGesture=fromGesture&&liveNotifications.current===item&&!document.hidden&&device.dataset.mode!=='locked';
        if(!kakaoOpeningBannerVisible(item)&&!completingGesture){stopKakaoOpeningSound();return;}
        kakaoOpeningSound.played=true;kakaoOpeningSound.primed=true;kakaoOpeningSound.lastError=null;
      },error=>{
        if(attempt===kakaoOpeningSound.attempt){kakaoOpeningSound.playing=false;kakaoOpeningSound.mode='idle';kakaoOpeningSound.lastError=error?.name||'playback';}
      });
    }catch(error){kakaoOpeningSound.playing=false;kakaoOpeningSound.mode='idle';kakaoOpeningSound.lastError=error?.name||'playback';}
  }
  function testKakaoOpeningSound() {
    const player=preloadKakaoOpeningSound();if(!player){toast('이 브라우저에서는 소리를 재생할 수 없어요.');return;}
    const volume=.85*Math.sqrt(Math.max(0,Math.min(100,Number(state.controls.volume)||0))/100);
    if(!volume){toast('제어 센터에서 음량을 올려 주세요.');return;}
    stopKakaoOpeningSound();const attempt=++kakaoOpeningSound.attempt;kakaoOpeningSound.mode='test';
    try {
      player.muted=false;player.currentTime=0;player.volume=volume;
      Promise.resolve(player.play()).then(()=>{
        if(attempt===kakaoOpeningSound.attempt){kakaoOpeningSound.primed=true;kakaoOpeningSound.lastError=null;}
      },error=>{
        if(attempt!==kakaoOpeningSound.attempt)return;
        kakaoOpeningSound.mode='idle';kakaoOpeningSound.lastError=error?.name||'playback';
        toast(error?.name==='NotAllowedError'?'브라우저의 소리 재생 설정을 확인해 주세요.':'알림음을 불러오지 못했어요. 새로고침 후 다시 눌러 주세요.');
      });
    }catch{toast('알림음을 재생하지 못했어요.');}
  }
  function notificationIdentity(item) {
    const chat=state[item.app].find(chat=>chat.id===item.id);
    const person=item.sender?(state.kakao.find(chat=>chat.name===item.sender)||{id:item.sender}):chat;
    const portrait=item.app==='kakao'?kakaoAvatar(person):messageAvatar(chat);
    return '<span class="notification-identity" aria-hidden="true"><span class="notification-portrait">'+portrait+'</span><span class="notification-app-badge">'+appIcon(item.app)+'</span></span>';
  }
  function notificationThreadOpen(item) {
    return item&&device.dataset.mode==='app'&&state.route?.app===item.app&&state.route.page==='thread'&&state.route.id===item.id;
  }
  function hideNotificationBanner(resume=true) {
    const banner=$('#notificationBanner');
    if(resume&&banner.classList.contains('is-dismissing'))return;
    clearTimeout(liveNotifications.dismissTimer);
    clearTimeout(liveNotifications.exitTimer);
    if(banner.contains(document.activeElement))$('#homeButton').focus();
    const finish=()=>{
      if(kakaoOpeningSound.item===liveNotifications.current&&!kakaoOpeningSound.played)stopKakaoOpeningSound();
      liveNotifications.exitTimer=null;
      banner.hidden=true;banner.classList.remove('is-dismissing');banner.innerHTML='';
      liveNotifications.current=null;
      if(resume)liveNotifications.dismissTimer=setTimeout(pumpNotificationQueue,400);
    };
    if(resume&&!banner.hidden&&liveNotifications.current&&!reducedMotion()){
      banner.classList.add('is-dismissing');
      liveNotifications.exitTimer=setTimeout(finish,240);
    }else finish();
  }
  function pauseNotificationBanner() {
    stopKakaoOpeningSound();
    if(liveNotifications.current&&!$('#notificationBanner').classList.contains('is-dismissing'))liveNotifications.pending.unshift(liveNotifications.current);
    hideNotificationBanner(false);
  }
  function pumpNotificationQueue() {
    if(liveNotifications.current||device.dataset.mode==='locked'||!$('#controlCenter').hidden||document.hidden)return;
    let item;
    while((item=liveNotifications.pending.shift())){
      if(!item.scripted&&(C.notifications?.enabled===false||(state.settings.autoNotifications===false&&!item.test)))continue;
      if(notificationThreadOpen(item)){
        const chat=state[item.app].find(chat=>chat.id===item.id);
        if(chat?.unread){chat.unread=0;save(item.app);renderHome();}
        continue;
      }
      break;
    }
    if(!item)return;
    liveNotifications.current=item;
    const banner=$('#notificationBanner'),preview=state.settings.previews?item.text:'새로운 메시지가 도착했습니다.';
    banner.innerHTML='<button class="notification-banner-open" data-action="notification-open" data-app="'+esc(item.app)+'" data-id="'+esc(item.id)+'" aria-label="'+esc(item.name)+(item.group?' · '+esc(item.group):'')+': '+esc(preview)+'">'+notificationIdentity(item)+'<span class="notification-copy"><span class="notification-title"><strong class="notification-sender">'+esc(item.name)+'</strong><time>지금</time></span>'+(item.group?'<strong class="notification-group">'+esc(item.group)+'</strong>':'')+'<p>'+esc(preview)+'</p></span></button>';
    // For media fallback, play() resolves when playback really starts.
    // Reveal the banner at that point instead of showing it ahead of the sound.
    item.starting=Boolean(item.openingSound);banner.hidden=item.starting;
    let revealed=false;
    const reveal=()=>{
      if(revealed||liveNotifications.current!==item||document.hidden||device.dataset.mode==='locked')return;
      revealed=true;
      clearTimeout(liveNotifications.dismissTimer);
      item.starting=false;banner.hidden=false;
      if(item.openingSound)kakaoOpeningSound.played=true;
      liveNotifications.dismissTimer=setTimeout(()=>hideNotificationBanner(),4000);
    };
    const playback=playKakaoOpeningSound(item);
    if(playback&&typeof playback.then==='function'){
      liveNotifications.dismissTimer=setTimeout(()=>{
        if(liveNotifications.current!==item)return;
        // Never let an unresolved play promise emit a late tone after this limit.
        stopKakaoOpeningSound();reveal();
      },1200);
      playback.then(reveal,reveal);
    }else reveal();
  }
  function deliverLocalNotification(event,test=false) {
    if((C.notifications?.enabled===false&&!event.scripted)||!['messages','kakao'].includes(event.app))return;
    const chat=state[event.app].find(chat=>chat.id===event.chatId);if(!chat)return;
    const d=dateParts(),time=pad(d.hour)+':'+pad(d.minute);
    const sender=chat.group?(event.sender||chat.items.findLast(message=>message.sender)?.sender||chat.name):null;
    const item={app:event.app,id:chat.id,name:sender||(event.app==='messages'?(contact(chat.id)?.name||chat.name):chat.name),sender,group:chat.group?chat.name:null,text:event.text,test,scripted:event.scripted===true,openingSound:event.app==='kakao'&&event.id===C.kakaoScene?.opening.id};
    const viewing=notificationThreadOpen(item)&&!document.hidden&&$('#controlCenter').hidden;
    // Add each sample once during this visit; a reload starts with the original chats.
    if(!chat.items.some(message=>message.eventId===event.id)){
      const message={mine:false,text:event.text,time,eventId:event.id};
      if(sender)message.sender=sender;
      message.date=kakaoDay();
      chat.items.push(message);chat.time=time;chat.notificationAt=Date.now();
      chat.unread=viewing?0:(Number(chat.unread)||0)+1;
      if(event.app==='kakao'&&event.scripted){state.kakao.splice(state.kakao.indexOf(chat),1);state.kakao.unshift(chat);}
      save(event.app);
      if(notificationThreadOpen(item)){
        appendChatBubble(event.app,chat,message);
      }
      if(state.route?.app===event.app&&!state.route.page&&$('#chatList')){
        const query=$('[data-search="'+event.app+'"]')?.value||'';
        $('#chatList').innerHTML=chatRows(event.app,query);
      }
    }
    renderHome();
    if(viewing)return;
    liveNotifications.pending.push(item);pumpNotificationQueue();
  }
  function startKakaoScene() {
    const scene=C.kakaoScene;
    if(!scene||kakaoScene.started||device.dataset.mode==='locked')return;
    kakaoScene.started=true;
    setTimeout(()=>{
      deliverLocalNotification({...scene.opening,app:'kakao',chatId:scene.chatId,scripted:true});
    },scene.opening.delay);
  }
  function replyToKakaoScene() {
    const scene=C.kakaoScene;
    for(const reply of scene.replies)setTimeout(()=>{
      deliverLocalNotification({...reply,app:'kakao',chatId:scene.chatId,scripted:true});
    },reply.delay);
  }
  function startNotificationSchedule() {
    if(C.notifications?.enabled===false||liveNotifications.started||state.settings.autoNotifications===false||device.dataset.mode==='locked')return;
    liveNotifications.started=true;
    liveNotifications.timers=(C.notifications?.events||[]).map(event=>setTimeout(()=>{
      if(state.settings.autoNotifications!==false)deliverLocalNotification(event);
    },Math.max(0,Number(event.delay)||0)));
  }
  function stopNotificationSchedule() {
    liveNotifications.timers.forEach(clearTimeout);liveNotifications.timers=[];
    liveNotifications.started=false;liveNotifications.pending=[];hideNotificationBanner(false);
  }
  function incomingActive() { return C.incoming?.enabled===true&&device.dataset.mode!=='locked'&&!document.hidden; }
  function incomingStamp() {
    const d=dateParts(new Date(incoming.storyStartedAt+Date.now()-incoming.sessionStartedAt));
    return {date:d.year+'-'+pad(d.month)+'-'+pad(d.day),time:pad(d.hour)+':'+pad(d.minute)};
  }
  function deliverIncomingMessage() {
    const examples=C.incoming?.messages||[];if(!examples.length)return;
    const example=examples[incoming.messageIndex++%examples.length],chat=state.messages.find(chat=>chat.id===example.chatId);
    if(!chat?.unsavedNumber)return;
    const viewing=state.route?.app==='messages'&&state.route.page==='thread'&&state.route.id===chat.id&&$('#controlCenter').hidden;
    const message={id:'visit-message-'+incoming.messageIndex,mine:false,text:example.text,...incomingStamp(),generated:true,visitIncoming:true};
    chat.items.push(message);chat.time=message.time;chat.unread=viewing?0:chat.unread+1;
    // Keep source history; bound only the extra messages made during a long visit.
    const extras=chat.items.filter(item=>item.visitIncoming);
    if(extras.length>20){const oldest=extras[0];chat.items=chat.items.filter(item=>item!==oldest);if(!viewing)chat.unread=Math.min(chat.unread,chat.items.length);}
    state.messages=[chat,...state.messages.filter(item=>item!==chat)];
    if(state.route?.app==='messages'&&state.route.page==='thread'&&state.route.id===chat.id){
      const bubbles=$('#chatBubbles'),nearBottom=bubbles.scrollHeight-bubbles.scrollTop-bubbles.clientHeight<80,position=bubbles.scrollTop;
      bubbles.innerHTML=messageThreadContents(chat);bubbles.scrollTop=nearBottom?bubbles.scrollHeight:position;
    }
    refreshMessagesList();renderHome();
  }
  function deliverIncomingMissedCall() {
    const callers=C.incoming?.callers||[];if(!callers.length)return;
    const id=callers[incoming.callIndex++%callers.length],caller=state.messages.find(chat=>chat.id===id);if(!caller)return;
    const viewing=state.route?.app==='phone'&&!state.route.page&&state.phoneTab==='recent'&&$('#controlCenter').hidden;
    state.phoneCalls.unshift({id:'visit-missed-'+incoming.callIndex,contact:id,number:caller.name,...incomingStamp(),direction:'incoming',missed:true,unread:!viewing,visitIncoming:true});
    const extras=state.phoneCalls.filter(call=>call.visitIncoming);
    if(extras.length>30)state.phoneCalls=state.phoneCalls.filter(call=>call!==extras.at(-1));
    refreshPhoneRows();renderHome();
  }
  function startIncomingSchedule() {
    if(!incomingActive())return;
    for(const [key,range,deliver] of [['messageTimer',C.incoming.messageInterval,deliverIncomingMessage],['callTimer',C.incoming.callInterval,deliverIncomingMissedCall]]){
      if(key==='callTimer'&&C.phone.liveIncomingEnabled===false)continue;
      if(incoming[key]!==null)continue;
      const delay=range[0]+Math.floor(Math.random()*(range[1]-range[0]+1));
      incoming[key]=setTimeout(()=>{incoming[key]=null;if(incomingActive()){deliver();startIncomingSchedule();}},delay);
    }
  }
  function pauseIncomingSchedule() {
    for(const key of ['messageTimer','callTimer']){clearTimeout(incoming[key]);incoming[key]=null;}
  }
  // One scale for both axes preserves typeface proportions at every time.
  function renderLockClock(time) {
    const target=$('#lockClockDigits');if(!target||target.dataset.time===time)return;
    const chars=Array.from(time);let advance=0;
    const positions=chars.map(ch=>{const x=advance;advance+=LOCK_CLOCK_GLYPHS[ch].advance;return x;});
    const inkWidth=positions.at(-1)+LOCK_CLOCK_GLYPHS[chars.at(-1)].width;
    const scale=Math.min(88/1000,320/inkWidth),left=(352-inkWidth*scale)/2;
    const paths=chars.map((ch,index)=>{
      const glyph=LOCK_CLOCK_GLYPHS[ch],x=left+positions[index]*scale;
      if(ch===':')return '<g fill="white"><circle cx="'+(x+90*scale)+'" cy="'+(250*scale)+'" r="'+90*scale+'"></circle><circle cx="'+(x+90*scale)+'" cy="'+(750*scale)+'" r="'+90*scale+'"></circle></g>';
      return '<g data-clock-digit="'+ch+'" transform="translate('+x+' 0) scale('+scale+')"><path d="'+glyph.d+'"></path></g>';
    }).join('');
    target.innerHTML='<defs><mask id="lockClockShape" maskUnits="userSpaceOnUse" x="0" y="0" width="352" height="116"><g fill="white" fill-rule="nonzero">'+paths+'</g></mask></defs><rect width="352" height="116" fill="url(#lockClockGlass)" mask="url(#lockClockShape)"></rect>';
    target.dataset.time=time;
  }
  function updateClock() {
    const now=new Date(),d=dateParts(now),hour24=Number(d.hour)%24;
    const time=pad(hour24)+':'+pad(d.minute);
    $('#statusTime').textContent=time;
    const lockTime=$('#lockTime');
    lockTime.textContent=time;
    renderLockClock(time);
    lockTime.setAttribute('datetime',d.year+'-'+pad(d.month)+'-'+pad(d.day)+'T'+pad(hour24)+':'+pad(d.minute)+':'+pad(d.second)+'+09:00');
    $('#lockDate').textContent=new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'long',day:'numeric'}).format(now)+' ('+new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',weekday:'short'}).format(now)+')';
    const weekday=new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',weekday:'long'}).format(now);
    $$('.calendar-icon-day').forEach(e=>e.textContent=weekday);
    $$('.calendar-icon-date').forEach(e=>{if(e.dataset.day!==d.day){e.innerHTML=calendarDateMarkup(d.day);e.dataset.day=d.day;}});
    const worldTime=$('#seoulTime');if(worldTime){worldTime.textContent=pad(hour24)+':'+pad(d.minute);worldTime.setAttribute('datetime',pad(hour24)+':'+pad(d.minute));}
    updateClockTools();
    const hour=hour24%12,minute=Number(d.minute);
    $$('.clock-hand-hour').forEach(e=>e.style.transform='rotate('+(hour*30+minute/2)+'deg)');
    $$('.clock-hand-minute').forEach(e=>e.style.transform='rotate('+(minute*6)+'deg)');
    $$('.clock-hand-second').forEach(e=>e.style.transform='rotate('+(Number(d.second)*6)+'deg)');
  }
  function $$(selector,root=document) { return Array.from(root.querySelectorAll(selector)); }
  function fitDevice() {
    // Keep the framed page steady when the native keyboard reduces the viewport.
    if(document.activeElement?.id==='safariQuery')return;
    const scale=Math.max(.1,Math.min(1,(window.innerHeight-32)/864,(window.innerWidth-32)/410));
    document.documentElement.style.setProperty('--device-scale',scale);
  }
  function toast(message, undo = false) {
    clearTimeout(toastTimer);
    $('#toast').innerHTML = esc(message)+(undo?'<button data-action="undo-note">되돌리기</button>':'');
    $('#toast').classList.add('show');
    toastTimer = setTimeout(()=>$('#toast').classList.remove('show'),undo?6500:2600);
  }
  function applyWallpaper() {
    document.documentElement.style.setProperty('--wallpaper','url("'+(state.settings.wallpaper || 'assets/wallpaper-user-20261019.jpg?v=20261019v')+'")');
  }
  function unlock() {
    const wasLocked=device.dataset.mode==='locked';
    if(wasLocked)prepareKakaoOpeningSound();
    closeControlCenter(false);
    $('#lockScreen').hidden = true;
    $('#homeScreen').hidden = false;
    device.dataset.mode = 'home';
    delete device.dataset.app;
    device.classList.remove('dark-app');
    syncScreenAccessibility();
    renderHome();
    $('#unlockButton').blur();
    if(wasLocked)startKakaoScene();
    startNotificationSchedule();pumpNotificationQueue();startIncomingSchedule();
    if(wasLocked&&!reducedMotion())$('#homeScreen').animate?.([{opacity:0,transform:'scale(1.08)'},{opacity:1,transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'});
  }
  function home() {
    rememberKakaoListPosition();
    rememberMessagesListPosition();
    rememberSafariPosition();
    animateAppClose();
    tidyEmptyNote();
    state.route = null;
    layer.hidden = true;
    layer.innerHTML = '';
    unlock();
  }
  function lock() {
    rememberKakaoListPosition();
    rememberSafariPosition();
    rememberMessagesListPosition();pauseIncomingSchedule();
    pauseNotificationBanner();
    closeControlCenter(false);
    $$('.app-transition').forEach(e=>e.remove());
    tidyEmptyNote();
    state.route = null;
    layer.hidden = true;
    layer.innerHTML = '';
    $('#lockScreen').hidden = false;
    $('#homeScreen').hidden = true;
    device.dataset.mode = 'locked';
    delete device.dataset.app;
    device.classList.remove('dark-app');
    syncScreenAccessibility();
    renderNotifications();
  }
  function captureAppOrigin(app) {
    const tile=$('[data-open="'+app+'"] .app-icon'),bounds=device.getBoundingClientRect?.(),rect=tile?.getBoundingClientRect?.();
    if(!rect||!bounds?.width)return;
    const ratio=(device.clientWidth||390)/bounds.width;
    lastAppOrigin={x:(rect.left+rect.width/2-bounds.left-bounds.width/2)*ratio,y:(rect.top+rect.height/2-bounds.top-bounds.height/2)*ratio};
  }
  function animateAppOpen(previous,route) {
    if(reducedMotion()||!layer.animate)return;
    if(!previous||previous.app!==route.app){
      captureAppOrigin(route.app);
      layer.animate([{transform:'translate('+lastAppOrigin.x+'px,'+lastAppOrigin.y+'px) scale(.12)',opacity:.35,borderRadius:'110px'},{transform:'translate(0,0) scale(1)',opacity:1,borderRadius:'0px'}],{duration:430,easing:'cubic-bezier(.2,.85,.25,1)'});
    }else if(previous.page!==route.page){
      layer.firstElementChild?.animate?.([{opacity:.55,transform:'translateX(18px)'},{opacity:1,transform:'translateX(0)'}],{duration:220,easing:'cubic-bezier(.2,.8,.2,1)'});
    }
  }
  function animateAppClose() {
    if(layer.hidden||!layer.animate||reducedMotion())return;
    for(const animation of layer.getAnimations?.()||[])animation.cancel();
    const snapshot=layer.cloneNode(true);
    snapshot.removeAttribute('id');snapshot.removeAttribute('aria-label');snapshot.setAttribute('aria-hidden','true');snapshot.setAttribute('inert','');
    snapshot.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));
    snapshot.classList.add('app-transition','device');snapshot.dataset.mode='app';snapshot.dataset.app=state.route.app;
    snapshot.style.width='100%';snapshot.style.height='100%';
    device.appendChild(snapshot);
    const animation=snapshot.animate([{transform:'translate(0,0) scale(1)',opacity:1,borderRadius:'0px'},{transform:'translate('+lastAppOrigin.x+'px,'+lastAppOrigin.y+'px) scale(.12)',opacity:0,borderRadius:'110px'}],{duration:330,easing:'cubic-bezier(.3,0,.2,1)',fill:'forwards'});
    animation.onfinish=()=>snapshot.remove();animation.oncancel=()=>snapshot.remove();
  }
  function renderControlCenter() {
    const controls=state.controls;
    const toggle=(key,symbol,label)=>'<button class="cc-connect-button'+(controls[key]?' active':'')+' cc-'+key+'" data-action="control-toggle" data-control="'+key+'" aria-label="'+label+'" aria-pressed="'+controls[key]+'"><span>'+icon(symbol)+'</span><small>'+label+'</small></button>';
    const slider=(key,symbol,label)=>'<label class="cc-slider" style="--level:'+controls[key]+'%">'+icon(symbol)+'<input type="range" min="'+(key==='brightness'?15:0)+'" max="100" value="'+controls[key]+'" data-control-range="'+key+'" aria-label="'+label+'"><span class="cc-slider-fill"></span><output>'+controls[key]+'%</output></label>';
    $('#controlCenter').innerHTML='<div class="cc-top"><span>iPhone</span><button class="cc-close" data-action="control-close" aria-label="제어 센터 닫기">'+icon('close')+'</button></div><div class="cc-grid"><div class="cc-connect glass-dark">'+toggle('airplane','airplane','에어플레인 모드')+toggle('cellular','cellular','셀룰러')+toggle('wifi','wifi','Wi-Fi')+toggle('bluetooth','bluetooth','Bluetooth')+'</div>'+slider('brightness','sun','밝기')+slider('volume','volume','음량')+'<button class="cc-focus glass-dark'+(controls.focus?' active':'')+'" data-action="control-toggle" data-control="focus" aria-pressed="'+controls.focus+'">'+icon('moon')+'<span>집중 모드<small>'+(controls.focus?'켬':'끔')+'</small></span></button><button class="cc-round glass-dark'+(controls.rotation?' active':'')+'" data-action="control-toggle" data-control="rotation" aria-label="화면 방향 잠금" aria-pressed="'+controls.rotation+'">'+icon('rotation-lock')+'</button><button class="cc-round glass-dark" data-action="lock" aria-label="화면 잠그기">'+icon('lock')+'</button><button class="cc-shortcut glass-dark" data-open="photos">'+icon('photos')+'<span>사진</span></button><button class="cc-shortcut glass-dark" data-open="notes">'+icon('notes')+'<span>메모</span></button></div><button class="cc-dismiss" data-action="control-close" aria-label="제어 센터 닫기">위로 쓸어올려 닫기</button>';
  }
  function syncScreenAccessibility() {
    const modalOpen=!$('#controlCenter').hidden;
    for(const [selector,mode] of [['#lockScreen','locked'],['#homeScreen','home'],['#appLayer','app']]){
      const el=$(selector);
      if(modalOpen||device.dataset.mode!==mode)el.setAttribute('inert','');
      else el.removeAttribute('inert');
    }
  }
  function openControlCenter() {
    pauseNotificationBanner();
    renderControlCenter();$('#controlCenter').hidden=false;device.classList.add('cc-open');
    $('#controlCenterButton').setAttribute('aria-expanded','true');syncScreenAccessibility();
    $('#controlCenter .cc-close').focus();
  }
  function closeControlCenter(restoreFocus=true) {
    const wasOpen=!$('#controlCenter').hidden;
    $('#controlCenter').hidden=true;device.classList.remove('cc-open');
    $('#controlCenterButton').setAttribute('aria-expanded','false');syncScreenAccessibility();
    if(wasOpen&&restoreFocus){$('#controlCenterButton').focus();pumpNotificationQueue();}
  }
  function nav(backLabel = '', title = '', right = '', rightLabel = '', action = '') {
    return '<nav class="app-nav" aria-label="앱 탐색">'+(backLabel?'<button class="nav-btn" data-action="back" aria-label="'+esc(backLabel)+'로 돌아가기">'+icon('chevron-left')+'<span class="nav-back-label">'+esc(backLabel)+'</span>'+'</button>':'')+(title?'<span class="nav-title">'+esc(title)+'</span>':'')+(right?'<button class="nav-btn" data-action="'+action+'" aria-label="'+esc(rightLabel)+'">'+icon(right)+'</button>':'')+'</nav>';
  }
  function heading(text) { return '<h1 class="app-heading" tabindex="-1">'+esc(text)+'</h1>'; }
  function search(placeholder, kind) {
    return '<label class="search-field">'+icon('search')+'<input type="search" data-search="'+kind+'" placeholder="'+esc(placeholder)+'" aria-label="'+esc(placeholder)+'" autocomplete="off"></label>';
  }
  function navigate(route) {
    if(route.app==='camera'||route.app==='calendar')return;
    if(route.app==='phone'&&route.page==='call')return;
    if(route.app==='photos')route={app:'photos'};
    if(route.app==='settings'&&route.page==='wallpaper')route={app:'settings'};
    if(route.app==='instagram'&&route.page==='story')return;
    if(route.app==='messages'&&route.page&&route.page!=='thread')route={app:'messages'};
    rememberKakaoListPosition();
    rememberMessagesListPosition();
    rememberSafariPosition();
    const previous=state.route;
    for(const animation of layer.getAnimations?.()||[])animation.cancel();
    closeControlCenter(false);
    $$('.app-transition').forEach(e=>e.remove());
    tidyEmptyNote();
    state.route = route;
    device.dataset.app=route.app;
    $('#lockScreen').hidden = true;
    $('#homeScreen').hidden = false;
    layer.hidden = false;
    device.dataset.mode = 'app';
    const dark = route.app==='clock' || (route.app==='phone'&&route.page==='profile');
    device.classList.toggle('dark-app',dark);
    let markup = '';
    if (route.app==='messages') markup=route.page==='thread'?renderThread(route):renderMessages('messages');
    else if (route.app==='kakao') markup=route.page==='thread'?renderThread(route):route.page==='profile'?renderContact(route.id):renderMessages('kakao');
    else if (route.app==='notes') markup=route.page==='edit'?renderNoteEditor(route.id):renderNotes();
    else if (route.app==='photos') markup=renderPhotos();
    else if (route.app==='settings') markup=renderSettings(route.page);
    else if (route.app==='calendar') markup=renderCalendar();
    else if (route.app==='clock') markup=route.page==='add'?renderAlarmForm():renderClock();
    else if (route.app==='phone') markup=route.page==='profile'?renderContact(route.id):renderPhone();
    else if (route.app==='safari') markup=renderSafari();
    else if (route.app==='instagram') markup=renderInstagram(route);
    else if (route.app==='youtube') markup=renderYouTube(route);
    layer.innerHTML=markup;
    syncScreenAccessibility();
    bindView(route);
    updateClock();
    animateAppOpen(previous,route);
    if(notificationThreadOpen(liveNotifications.current))hideNotificationBanner();
    startNotificationSchedule();pumpNotificationQueue();startIncomingSchedule();
  }
  function back() {
    const r=state.route;
    if(!r) return home();
    if(r.app==='safari'&&r.page==='fan-post')return navigate(r.returnRoute||{app:'safari',page:'fan-community',board:r.board});
    if(r.app==='safari'&&r.page==='fan-community')return navigate({app:'safari',page:'search',query:fanBoard(r.board)?.searchQuery||GOOGLE_FAN_QUERY});
    if(r.app==='safari'&&r.page==='community')return navigate({app:'safari',page:'search',query:GOOGLE_PERSON_QUERY});
    if(r.page==='call') return navigate({app:'phone'});
    if(r.app==='instagram'&&r.page==='comments') return navigate(r.returnRoute||{app:'instagram',page:'post',id:r.id});
    if(r.app==='instagram'&&r.returnRoute) return navigate(r.returnRoute);
    if(r.app==='youtube'&&r.returnRoute) return navigate(r.returnRoute);
    if(r.page) return navigate({app:r.app});
    home();
  }
  function chatRows(app, query='') {
    if(app==='kakao')return kakaoRows(query);
    return state[app].filter(chat=>{
      const name=app==='messages'?(contact(chat.id)?.name||chat.name):chat.name;
      return (app!=='messages'||state.messagesFilter!=='unread'||chat.unread>0)&&(name+' '+chat.items.map(m=>m.text).join(' ')).toLowerCase().includes(query.toLowerCase());
    }).map(chat=>{
      const c=app==='messages'?(contact(chat.id)||chat):chat;
      const last=chat.items[chat.items.length-1];
      return '<button class="chat-row" data-action="thread" data-app="'+app+'" data-id="'+esc(chat.id)+'">'+(chat.unread&&app==='messages'?'<span class="unread-dot" aria-label="읽지 않음"></span>':'')+(app==='messages'?messageAvatar(chat):avatar(c))+'<span class="chat-row-copy"><span class="chat-row-top"><strong>'+esc(c?.name)+'</strong><time>'+esc(chatListTime(chat))+(app==='messages'?icon('chevron-right'):'')+(app==='kakao'&&chat.unread?'<span class="chat-count">'+chat.unread+'</span>':'')+'</time></span><p>'+esc((chat.group&&last?.sender?last.sender+': ':'')+(last?.text||''))+'</p></span></button>';
    }).join('') || '<p class="empty-state">'+(query.trim()?'검색 결과가 없어요.':state.messagesFilter==='unread'?'읽지 않은 메시지가 없습니다.':'메시지가 없습니다.')+'</p>';
  }
  function renderMessages(app) {
    if(app==='messages'){
      const menu=state.messagesMenu==='edit'?'<div class="messages-menu" role="menu"><button role="menuitem" data-action="messages-mark-read">모두 읽음</button></div>':state.messagesMenu==='filter'?'<div class="messages-menu messages-filter-menu" role="menu">'+[['all','전체 메시지'],['unread','읽지 않은 메시지']].map(([value,label])=>'<button data-action="messages-filter" data-filter="'+value+'" role="menuitemradio" aria-checked="'+(state.messagesFilter===value)+'">'+label+(state.messagesFilter===value?icon('check'):'')+'</button>').join('')+'</div>':'';
      const toolbar='<nav class="messages-topbar" aria-label="메시지 목록 도구"><button class="messages-edit messages-glass" data-action="messages-menu" data-menu="edit" aria-expanded="'+(state.messagesMenu==='edit')+'">편집</button><button class="messages-filter messages-glass'+(state.messagesFilter==='unread'?' active':'')+'" data-action="messages-menu" data-menu="filter" aria-label="메시지 필터" aria-expanded="'+(state.messagesMenu==='filter')+'">'+icon('messages-filter')+'</button></nav>';
      const footer='<footer class="native-searchbar"><label class="search-field">'+icon('ios-search')+'<input type="search" data-search="messages" placeholder="검색" aria-label="메시지 검색" autocomplete="off"><span class="messages-search-mic" aria-hidden="true">'+icon('ios-mic')+'</span></label><button class="native-compose" disabled aria-disabled="true" aria-label="새 메시지 작성 사용 안 함">'+icon('ios-compose')+'</button></footer>';
      return '<div class="app-view messages-app">'+toolbar+heading('메시지')+menu+'<div class="app-scroll messages-list-scroll" id="messagesListScroll" data-view-key="'+esc(messagesListKey())+'"><div class="chat-list" id="chatList">'+chatRows(app,state.messagesQuery)+'</div></div><div class="messages-bottom-fade"></div>'+footer+'</div>';
    }
    return renderKakao();
  }
  function kakaoTabs() {
    return '<nav class="kakao-tabs" aria-label="카카오톡 탭">'+[['friends','kk-friends','친구'],['chats','kk-chats','채팅'],['open','kk-open-chat','오픈채팅'],['shop','kk-shop','쇼핑'],['more','ellipsis','더보기']].map(([tab,symbol,label])=>'<button data-action="kakao-'+tab+'" aria-label="'+label+'" class="'+(tab==='chats'?'active':'')+'"'+(tab==='chats'?' aria-current="page"':' disabled aria-disabled="true"')+'><span>'+icon(symbol)+(tab==='chats'&&unreadCount('kakao')?'<b>'+unreadCount('kakao')+'</b>':'')+'</span></button>').join('')+'</nav>';
  }
  function kakaoDay(offset=0) {
    const d=dateParts(),date=new Date(Date.UTC(Number(d.year),Number(d.month)-1,Number(d.day)+offset));
    return date.getUTCFullYear()+'-'+pad(date.getUTCMonth()+1)+'-'+pad(date.getUTCDate());
  }
  function kakaoMessageDay(message,chat) { return message.date||chat.baseDate||kakaoDay(); }
  function kakaoDateChip(day) {
    const date=new Date(day+'T12:00:00+09:00');
    const label=Number.isNaN(date.getTime())?'오늘':new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',year:'numeric',month:'long',day:'numeric',weekday:'long'}).format(date);
    return '<p class="chat-date kakao-date-chip" data-date="'+esc(day)+'"><span>'+esc(label)+'</span>'+icon('chevron-right')+'</p>';
  }
  function sameKakaoMessageGroup(first,second,chat) {
    return Boolean(first&&second&&first.time&&first.time===second.time&&first.historySegment===second.historySegment&&Boolean(first.mine)===Boolean(second.mine)&&kakaoMessageDay(first,chat)===kakaoMessageDay(second,chat)&&(first.mine||(first.sender||chat.name)===(second.sender||chat.name)));
  }
  function kakaoBubbleContent(message) {
    if(message.type==='map-link')return '<div class="bubble kakao-map-link" role="group" aria-label="오두막 지도 링크 미리보기"><span class="kakao-map-url">'+esc(message.text)+'</span><div class="kakao-map-preview"><span class="kakao-map-logo" aria-hidden="true"><svg viewBox="0 0 32 40"><path d="M16 1C8.3 1 2 7.3 2 15c0 9.7 14 24 14 24s14-14.3 14-24C30 7.3 23.7 1 16 1Z" fill="#34a853"/><path d="M16 1C8.3 1 2 7.3 2 15c0 3.2 1.5 7 3.6 10.4L25.9 5.1C23.3 2.5 19.8 1 16 1Z" fill="#4285f4"/><path d="M2 15c0 3.2 1.5 7 3.6 10.4L16 15 6.1 5.1C3.5 7.7 2 11.2 2 15Z" fill="#fbbc04"/><path d="M6.1 5.1 16 15l9.9-9.9C23.3 2.5 19.8 1 16 1S8.7 2.5 6.1 5.1Z" fill="#ea4335"/><circle cx="16" cy="15" r="5" fill="#fff"/></svg></span><div><strong>구글 지도</strong><span>오두막</span></div></div></div>';
    if(message.type==='sticker'){
      const sprite='assets/kakao/stickers.svg?v=20261019aj#',angry=message.sticker==='sheep-angry-hop';
      const drawing=message.sticker==='sheep-hop'||angry?'<ellipse cx="60" cy="111" rx="24" ry="3" fill="#66554b" opacity=".12"/><g class="kakao-loop-sheep'+(angry?' kakao-angry-sheep':'')+'"><use href="'+sprite+(angry?'sheep-angry-hop':'sheep-only')+'" x="8" y="12" width="104" height="104"/></g>':'<g'+(message.sticker==='mouse-nod'?' class="kakao-sticker-nod"':'')+'><use href="'+sprite+esc(message.sticker)+'"/></g>';
      return '<div class="bubble kakao-sticker"><svg viewBox="0 0 120 120" role="img"><title>'+esc(message.text)+'</title>'+drawing+'</svg></div>';
    }
    if(message.type==='video')return '<div class="bubble kakao-media-card kakao-video-preview kakao-loop-preview" role="img" aria-label="'+esc(message.text)+' · 반복 재생"><svg class="kakao-loop-canvas" viewBox="0 0 174 148" aria-hidden="true"><ellipse class="kakao-loop-shadow" cx="87" cy="131" rx="28" ry="4" fill="#56795c"/><g class="kakao-loop-sheep"><use href="assets/kakao/stickers.svg?v=20261018p#sheep-only" x="20" y="15" width="134" height="134"/></g></svg></div>';
    if(message.type==='image'&&message.image==='noodle-ad')return '<div class="bubble kakao-media-card kakao-ad-capture'+(message.crop==='face'?' is-face-crop':'')+'" role="img" aria-label="'+(message.crop==='face'?'윤이 보낸 사진의 얼굴 확대본':'윤이 보낸 사진')+'"><img src="assets/kakao/yoon-hilde-photo.webp?v=20261019h" alt="" draggable="false"></div>';
    if(message.type==='image')return '<div class="bubble kakao-media-card kakao-image-placeholder" role="img" aria-label="첨부 이미지">'+icon('photos')+'<span>사진</span></div>';
    return '<div class="bubble">'+esc(message.text)+'</div>';
  }
  function kakaoBubbleMarkup(message,chat,index) {
    const first=!sameKakaoMessageGroup(chat.items[index-1],message,chat),last=!sameKakaoMessageGroup(message,chat.items[index+1],chat);
    const groupClass=(first?' kakao-group-start':' kakao-group-continuation')+(last?' kakao-group-end':'');
    const meta=last?'<span class="kakao-message-meta"><time class="bubble-time">'+esc(message.time)+'</time></span>':'';
    const body=kakaoBubbleContent(message);
    if(message.mine)return '<div class="bubble-wrap mine'+groupClass+'">'+body+meta+'</div>';
    const sender=message.sender||chat.name;
    const person=chat.group?(state.kakao.find(c=>c.name===sender)||{id:sender}):chat;
    return '<div class="bubble-wrap kakao-incoming'+groupClass+'">'+(first?kakaoAvatar(person):'<span class="kakao-avatar-spacer" aria-hidden="true"></span>')+'<div class="kakao-message-main">'+(first?'<span class="bubble-sender">'+esc(sender)+'</span>':'')+'<div class="kakao-message-line">'+body+meta+'</div></div></div>';
  }
  function kakaoThreadMessages(chat) {
    let previous='';
    return chat.items.map((message,index)=>{
      const day=kakaoMessageDay(message,chat),chip=previous!==day?kakaoDateChip(day):'';previous=day;
      const invitation=index===0&&chat.invitation?'<p class="kakao-system-notice" data-system="invitation" role="note">'+esc(chat.invitation.actor)+'님이 '+esc(chat.invitation.members.map(name=>name+'님').join(', '))+'을 초대했습니다.</p>':'';
      return chip+invitation+kakaoBubbleMarkup(message,chat,index);
    }).join('');
  }
  function appendChatBubble(app,chat,message) {
    const bubbles=$('#chatBubbles');if(!bubbles)return;
    bubbles.innerHTML=app==='messages'?messageThreadContents(chat):kakaoThreadMessages(chat);
    bubbles.scrollTop=bubbles.scrollHeight;
  }
  function renderKakaoThread(chat) {
    const title='<strong class="kakao-thread-title" title="'+esc(chat.name)+'" aria-label="'+esc(chat.name)+(chat.group?', '+(chat.participants||chat.members.length+1)+'명':'')+'"><span class="kakao-thread-name">'+esc(chat.name)+'</span>'+(chat.group?'<span class="kakao-thread-count">'+esc(chat.participants||chat.members.length+1)+'</span>':'')+'</strong>';
    const header='<header class="chat-header kakao-thread-header"><button class="kakao-back kakao-glass" data-action="back" aria-label="대화 목록으로">'+icon('chevron-left')+(unreadCount('kakao')?'<span>'+unreadCount('kakao')+'</span>':'')+'</button>'+title+'<div class="kakao-thread-tools kakao-glass"><button aria-label="대화 검색" disabled aria-disabled="true">'+icon('kk-search')+'</button><button aria-label="채팅방 메뉴" disabled aria-disabled="true">'+icon('kk-menu')+'</button></div></header>';
    const composer='<form class="chat-composer" id="chatComposer"><button type="button" class="kakao-compose-plus" aria-label="첨부" disabled aria-disabled="true">'+icon('kk-plus')+'</button><textarea rows="1" id="messageInput" aria-label="메시지 작성" placeholder="메시지 입력" maxlength="2000"></textarea><button type="button" class="kakao-compose-smile" aria-label="이모티콘" disabled aria-disabled="true">'+icon('kk-smile')+'</button><button type="button" class="kakao-compose-hash" aria-label="샵 검색" disabled aria-disabled="true">'+icon('kk-hash')+'</button><button class="send-button" type="submit" aria-label="메시지 보내기" disabled hidden>'+icon('arrow-up')+'</button></form>';
    return '<div class="app-view chat-view kakao-chat"><div class="kakao-top-material" aria-hidden="true"></div>'+header+'<div class="chat-bubbles" id="chatBubbles" aria-label="대화 내용">'+kakaoThreadMessages(chat)+'</div>'+composer+'</div>';
  }
  function messageDay(message,chat) { return message.date||chat.baseDate||kakaoDay(); }
  function messageTimestamp(message,chat) { return new Date(messageDay(message,chat)+'T'+(message.time||'00:00')+':00+09:00'); }
  function messageDateLabel(message,chat) {
    const date=messageTimestamp(message,chat);
    if(Number.isNaN(date.getTime()))return message.time||'';
    const options={timeZone:'Asia/Seoul',month:'long',day:'numeric'};
    if(dateParts(date).year!==dateParts().year)options.year='numeric';
    return new Intl.DateTimeFormat('ko-KR',options).format(date)+' '+(message.time||'');
  }
  function messageDateBreak(message,previous,chat) {
    return !previous||messageDay(message,chat)!==messageDay(previous,chat)||messageTimestamp(message,chat)-messageTimestamp(previous,chat)>=30*60000;
  }
  function messageThreadContents(chat) {
    const imessage=chat.transport==='imessage',first=chat.items[0],lastSent=chat.items.findLastIndex(message=>message.mine);
    const start='<div class="message-thread-start"><span class="message-transport">'+(imessage?'iMessage':'문자 메시지 · SMS')+'</span>'+(imessage?'<span class="message-encryption">'+icon('lock')+'암호화됨</span>':'')+(first?'<time class="message-date-separator" datetime="'+esc(messageDay(first,chat))+'">'+esc(messageDateLabel(first,chat))+'</time>':'')+'</div>';
    return start+chat.items.map((message,index)=>{
      const previous=chat.items[index-1],next=chat.items[index+1],dateBreak=messageDateBreak(message,previous,chat);
      const tail=!next||next.mine!==message.mine||messageDateBreak(next,message,chat);
      const date=index&&dateBreak?'<time class="message-date-separator" datetime="'+esc(messageDay(message,chat))+'">'+esc(messageDateLabel(message,chat))+'</time>':'';
      const delivered=imessage&&index===lastSent?'<span class="message-delivered">전송됨</span>':'';
      return date+'<div class="bubble-wrap'+(message.mine?' mine':'')+(tail?' message-group-end':'')+(index&&!dateBreak&&previous.mine!==message.mine?' message-new-speaker':'')+'"><div class="bubble">'+esc(message.text)+'</div>'+delivered+'</div>';
    }).join('');
  }
  function renderMessageThread(chat) {
    const person=contact(chat.id)||chat,imessage=chat.transport==='imessage',transport=imessage?'iMessage':'문자 메시지 · SMS';
    const header='<div class="message-thread-top-fade"></div><header class="message-thread-header"><button class="message-thread-back message-glass" data-action="back" aria-label="메시지 목록으로">'+icon('ios-back')+(unreadCount('messages')?'<span>'+unreadCount('messages')+'</span>':'')+'</button>'+messageAvatar(chat)+'<div class="message-thread-name message-glass"><strong>'+esc(person.name)+'</strong>'+icon('chevron-right')+'</div></header>';
    const footer='<div class="message-thread-bottom-fade"></div><footer class="message-static-composer" aria-label="메시지 입력 사용 안 함"><button class="message-compose-plus message-glass" disabled aria-disabled="true" aria-label="첨부 사용 안 함">'+icon('ios-add')+'</button><div class="message-compose-placeholder message-glass" aria-hidden="true"><span>'+transport+'</span>'+icon('message-mic')+'</div></footer>';
    return '<div class="app-view messages-thread-app" data-channel="'+(imessage?'imessage':'sms')+'">'+header+'<div class="chat-bubbles" id="chatBubbles" aria-label="대화 내용" tabindex="0">'+messageThreadContents(chat)+'</div>'+footer+'</div>';
  }
  function renderThread(route) {
    const chat=state[route.app].find(c=>c.id===route.id);
    if(!chat) return renderMessages(route.app);
    liveNotifications.pending=liveNotifications.pending.filter(item=>item.app!==route.app||item.id!==route.id);
    if(chat.unread){chat.unread=0;save(route.app);renderHome();}
    if(route.app==='kakao')return renderKakaoThread(chat);
    return renderMessageThread(chat);
  }
  function renderNotes(query=state.notesQuery) {
    const filtered=state.notes.filter(n=>(n.title+' '+n.body).toLowerCase().includes(query.toLowerCase()));
    const rows=notes=>notes.map(n=>'<button class="note-row" data-open-note="'+esc(n.id)+'"><strong>'+esc(n.title||(n.kind==='checklist'?n.checklist?.[0]?.text:'')||'새로운 메모')+'</strong><span class="note-preview"><time>'+esc(n.modified)+'</time><span>'+esc((n.kind==='checklist'?n.checklist?.[1]?.text:n.body.split('\n').find(Boolean))||'추가 내용 없음')+'</span></span><span class="note-folder">'+icon('folder')+'메모</span></button>').join('');
    const pinned=filtered.filter(n=>n.pinned),regular=filtered.filter(n=>!n.pinned);
    let lists='';
    if(pinned.length)lists+='<section class="note-group"><h2 class="note-section"><button class="note-pinned-toggle" data-action="notes-pin-toggle" aria-expanded="'+!state.notesPinnedCollapsed+'"><span>고정된 메모</span>'+icon('chevron-down')+'</button></h2>'+(!state.notesPinnedCollapsed||query?'<div class="note-list">'+rows(pinned)+'</div>':'')+'</section>';
    const noteGroup=n=>{
      if(n.modified==='오늘'||n.modified==='어제')return n.modified;
      if(/^\d{4}년$/.test(n.modified))return n.modified;
      const match=n.modified.match(/^(\d{1,2})월\s*(\d{1,2})일$/),d=dateParts();
      if(match){
        const today=Date.UTC(Number(d.year),Number(d.month)-1,Number(d.day));
        const modified=Date.UTC(Number(d.year),Number(match[1])-1,Number(match[2]));
        const days=(today-modified)/86400000;if(days>=0&&days<7)return '이전 7일';
      }
      return '이전 메모';
    };
    const years=Array.from(new Set(regular.map(noteGroup).filter(label=>/^\d{4}년$/.test(label)))).sort((a,b)=>b.localeCompare(a));
    const groups=['오늘','어제','이전 7일',...years,'이전 메모'].map(label=>[label,n=>noteGroup(n)===label]);
    for(const [label,matches] of groups){
      const notes=regular.filter(matches);
      if(notes.length)lists+='<section class="note-group"><h2 class="note-section">'+label+'</h2><div class="note-list">'+rows(notes)+'</div></section>';
    }
    const menu=state.notesMenu?'<div class="notes-more-menu"><button data-action="notes-pin-toggle">고정된 메모 '+(state.notesPinnedCollapsed?'펼치기':'접기')+'</button></div>':'';
    const toolbar='<nav class="app-nav notes-topbar" aria-label="메모 탐색"><button class="nav-btn" data-action="back" aria-label="홈 화면으로 돌아가기">'+icon('ios-back')+'</button><button class="nav-btn" data-action="notes-more" aria-label="메모 보기 옵션" aria-expanded="'+state.notesMenu+'">'+icon('ellipsis')+'</button></nav>';
    const footer='<footer class="native-searchbar"><label class="search-field">'+icon('ios-search')+'<input type="search" data-search="notes" placeholder="검색" aria-label="메모 검색" autocomplete="off" value="'+esc(query)+'"><span class="notes-search-mic" aria-hidden="true">'+icon('ios-mic')+'</span></label><button class="native-compose" data-action="new-note" aria-label="새 메모">'+icon('ios-compose')+'</button></footer>';
    return '<div class="app-view notes notes-library">'+toolbar+'<header class="notes-library-header">'+heading('모든 iCloud')+'<p class="notes-count">'+state.notes.length+'개의 메모</p></header>'+menu+'<div class="app-scroll" id="notesResults">'+(lists||'<p class="empty-state">'+(query?'검색 결과가 없어요.':'아직 적어 둔 메모가 없어요.')+'</p>')+'</div>'+footer+'</div>';
  }
  function renderNoteEditor(id) {
    const n=state.notes.find(n=>n.id===id);
    if(!n)return renderNotes();
    const checklist=n.kind==='checklist';
    const title=n.title||!checklist?'<input class="note-title-input" id="noteTitle" aria-label="메모 제목" placeholder="제목" maxlength="120" value="'+esc(n.title)+'">':'';
    const body=checklist?'<div class="note-checklist">'+(n.checklist||[]).map((item,index)=>'<div class="note-check-row'+(item.checked?' is-checked':'')+'"><button type="button" class="note-check-toggle" role="checkbox" aria-label="'+esc(item.text||'할 일')+'" aria-checked="'+Boolean(item.checked)+'" data-action="note-check" data-index="'+index+'">'+icon('check')+'</button><textarea class="note-check-text" data-note-check-text="'+index+'" aria-label="체크리스트 항목 '+(index+1)+'" rows="1">'+esc(item.text)+'</textarea></div>').join('')+'</div>':'<textarea class="note-body-input" id="noteBody" aria-label="메모 내용" placeholder="메모를 적어 두세요.">'+esc(n.body)+'</textarea>';
    const undoDisabled=!state.noteUndo[id]?.length;
    const top='<nav class="notes-editor-topbar" aria-label="메모 탐색"><button class="notes-glass notes-back" data-action="back" aria-label="메모 목록으로 돌아가기">'+icon('ios-back')+'</button><span class="notes-top-spacer"></span><button class="notes-glass notes-undo-edit" data-action="note-undo-edit" aria-label="실행 취소"'+(undoDisabled?' disabled':'')+'>'+icon('notes-undo')+'</button><div class="notes-glass notes-share-more"><button aria-label="메모 공유" disabled aria-disabled="true">'+icon('notes-share')+'</button><details class="notes-editor-options"><summary aria-label="메모 더 보기">'+icon('ellipsis')+'</summary><div class="notes-editor-options-menu"><button data-action="delete-note">'+icon('trash')+'메모 삭제</button></div></details></div></nav>';
    const tools='<footer class="notes-editor-footer"><nav class="notes-glass notes-editor-tools" aria-label="메모 도구"><button data-action="note-toggle-checklist" aria-label="체크리스트" aria-pressed="'+checklist+'">'+icon('notes-checklist')+'</button><button aria-label="첨부" disabled aria-disabled="true">'+icon('notes-paperclip')+'</button><button aria-label="마크업" disabled aria-disabled="true">'+icon('notes-markup')+'</button><button aria-label="글쓰기 도구" disabled aria-disabled="true">'+icon('notes-writing-tools')+'</button></nav><button class="notes-glass notes-editor-compose" data-action="new-note" aria-label="새 메모">'+icon('notes-editor-compose')+'</button></footer>';
    return '<div class="app-view notes notes-editor-view'+(checklist?' notes-checklist-view':'')+'">'+top+'<div class="app-scroll notes-editor-content">'+title+body+'</div>'+tools+'<span class="notes-save-status" id="noteSaveHint" role="status" aria-live="polite"></span></div>';
  }
  function recordNoteUndo(note) {
    const history=state.noteUndo[note.id]||(state.noteUndo[note.id]=[]);
    history.push(clone(note));if(history.length>50)history.shift();
    const button=$('.notes-undo-edit');if(button)button.disabled=false;
  }
  function syncChecklistBody(note) {
    note.body=(note.checklist||[]).map(item=>item.text).join('\n');
  }
  function persistNoteEdit(note) {
    note.modified='오늘';
    if(save('notes')){const hint=$('#noteSaveHint');if(hint)hint.textContent='저장됨';}
    renderHome();
  }
  function tidyEmptyNote() {
    if(state.route?.app!=='notes'||state.route?.page!=='edit')return;
    const n=state.notes.find(n=>n.id===state.route.id);
    if(n&&!n.title.trim()&&!n.body.trim()){state.notes=state.notes.filter(x=>x.id!==n.id);save('notes');}
  }
  function createNote() {
    state.notesQuery='';state.notesMenu=false;
    const n={id:'note-'+Date.now(),title:'',body:'',modified:'오늘',pinned:false};
    state.notes.unshift(n);save('notes');navigate({app:'notes',page:'edit',id:n.id});
    $('#noteTitle')?.focus();
  }
  function renderPhotos() {
    const total=allPhotos().length,photos=visiblePhotos().slice().reverse();
    const tiles=photos.map(photo=>'<div class="photo-tile"><img src="'+esc(photo.src)+'" alt="'+esc(photo.label)+'" loading="lazy" decoding="async" draggable="false"></div>').join('');
    return '<div class="app-view photo-library"><div class="app-scroll photo-library-scroll" id="photoLibraryScroll" tabindex="0" aria-label="사진 보관함, '+total+'개의 항목 중 최신 '+photos.length+'장"><div class="photo-grid" id="photoLibraryGrid">'+tiles+'</div></div><div class="photo-library-top-fade"></div><header class="photo-library-header"><h1 tabindex="-1">보관함</h1><p class="photo-library-count">'+total+'개의 항목</p><button class="photo-glass-button photo-options-button" aria-label="사진 보기 옵션" disabled aria-disabled="true"><span class="photo-menu-glyph"><i></i><i></i><i></i></span></button><button class="photo-glass-button photo-select-button" disabled aria-disabled="true">선택</button></header><div class="photo-library-bottom-fade"></div><nav class="photo-library-dock" aria-label="사진 앱 탭"><button class="photo-library-tab active" data-tab="library" aria-current="page" disabled aria-disabled="true">'+icon('photo-library')+'<span>보관함</span></button><button class="photo-library-tab" data-tab="collections" disabled aria-disabled="true">'+icon('photo-collections')+'<span>모음</span></button></nav><button class="photo-library-search" aria-label="사진 검색" disabled aria-disabled="true">'+icon('ios-search')+'</button></div>';
  }
  function renderSettings(page) {
    if(page==='about')return '<div class="app-view grouped">'+nav('설정','이 웹사이트에 관하여')+'<div class="app-scroll about-copy"><h2>힐데베르트의 iPhone</h2><p>소설 《블랙배저》의 등장인물 힐데베르트 탈레브의 휴대폰을 상상하며 만든 비공식 팬 창작 사이트입니다.</p><p>원작의 대화와 묘사를 바탕으로 제작했으며, 일부 내용은 개인적인 해석과 상상으로 재구성했습니다. 작품의 주요 전개에 관한 스포일러가 포함되어 있습니다.</p><p>대화, 통화 기록, 사진, 메모, SNS와 검색 기록을 통해 힐데의 일상을 둘러볼 수 있습니다. 화면 속 계정과 게시글, 기사 및 검색 결과는 작품의 세계관을 바탕으로 구성한 가상의 콘텐츠입니다.</p><p>메시지와 카카오톡의 읽음 상태, 카카오톡에서 보낸 답장은 새로고침하면 처음 상태로 돌아갑니다. 작성한 메모와 설정은 지금 사용하는 브라우저에 저장됩니다.</p><p>실제 문자·카카오톡 전송이나 전화 연결은 이루어지지 않으며, 알람은 실제로 울리지 않습니다.</p></div></div>';
    const notificationOptions=C.notifications?.enabled===false?'':'<p class="section-label">알림</p><div class="settings-card"><button class="setting-row" data-action="toggle-auto-notifications" role="switch" aria-checked="'+(state.settings.autoNotifications!==false)+'">'+icon('bell')+'자동 알림<span class="toggle '+(state.settings.autoNotifications!==false?'on':'')+'"></span></button><button class="setting-row" data-action="test-notification">'+icon('messages')+'알림 테스트'+icon('chevron-right')+'</button></div><p class="list-caption notification-setting-caption">휴대폰을 열면 예시 메시지가 순서대로 도착합니다.</p>';
    return '<div class="app-view grouped">'+nav()+heading('설정')+'<div class="app-scroll"><div class="settings-card owner-card">'+avatar({initial:'힐',color:'#77867c'})+'<div><strong>'+esc(C.owner)+'</strong><p>나의 iPhone</p></div></div><p class="section-label">화면</p><div class="settings-card"><button class="setting-row" data-action="lock">'+icon('lock')+'잠금 화면 보기'+icon('chevron-right')+'</button><button class="setting-row" data-action="toggle-previews" role="switch" aria-checked="'+state.settings.previews+'">'+icon('messages')+'알림 미리보기<span class="toggle '+(state.settings.previews?'on':'')+'"></span></button></div><p class="section-label">알림음</p><div class="settings-card"><button class="setting-row" data-action="test-kakao-sound">'+icon('volume')+'카톡 알림음 듣기'+icon('chevron-right')+'</button></div>'+notificationOptions+'<p class="section-label">정보</p><div class="settings-card"><button class="setting-row" data-action="about">이 웹사이트에 관하여'+icon('chevron-right')+'</button></div><p class="list-caption">메모와 설정은 이 브라우저에 저장됩니다.</p></div></div>';
  }
  function calendarEvents(day) {
    return calendarYear===Number(TODAY.year)&&calendarMonth===Number(TODAY.month)-1?C.events.filter(e=>day===undefined||e.day===day):[];
  }
  function calendarEventList(query='') {
    const events=calendarEvents().filter(e=>(e.title+' '+e.time).toLowerCase().includes(query.toLowerCase()));
    return events.length?events.map(e=>'<button class="calendar-list-event" data-action="calendar-day" data-day="'+e.day+'"><span class="calendar-list-date">'+(calendarMonth+1)+'월 <strong>'+e.day+'</strong></span><span class="calendar-list-copy" style="--event-color:'+esc(e.color)+'"><strong>'+esc(e.title)+'</strong><time>'+esc(e.time)+'</time></span>'+icon('chevron-right')+'</button>').join(''):'<p class="empty-state">'+(query?'검색 결과가 없어요.':'등록된 일정이 없어요.')+'</p>';
  }
  function renderCalendar() {
    const start=new Date(calendarYear,calendarMonth,1).getDay(),count=new Date(calendarYear,calendarMonth+1,0).getDate();
    const now=dateParts(),inCurrentMonth=calendarYear===Number(now.year)&&calendarMonth===Number(now.month)-1;
    const rows=Math.ceil((start+count)/7),cells=[];
    for(let i=0;i<rows*7;i++){
      const day=i-start+1,weekend=i%7===0||i%7===6;
      if(day<1||day>count){cells.push('<div class="calendar-empty-cell" aria-hidden="true"></div>');continue;}
      const today=inCurrentMonth&&day===Number(now.day),events=calendarEvents(day);
      cells.push('<button class="calendar-cell'+(weekend?' weekend':'')+(today?' today':'')+(day===calendarDay?' selected':'')+'" data-action="calendar-day" data-day="'+day+'" aria-label="'+(calendarMonth+1)+'월 '+day+'일'+(today?', 오늘':'')+(events.length?', '+events.length+'개의 일정':'')+'" aria-pressed="'+(day===calendarDay)+'"><span class="calendar-date-number">'+day+'</span><span class="calendar-cell-events">'+events.slice(0,2).map(e=>'<span class="calendar-event-chip" style="--event-color:'+esc(e.color)+'">'+esc(e.title)+'</span>').join('')+'</span></button>');
    }
    const toolbar='<nav class="calendar-topbar" aria-label="캘린더 탐색"><button class="calendar-year-button calendar-glass" data-action="calendar-year" aria-expanded="'+state.calendarPicker+'">'+icon('ios-back')+'<span>'+calendarYear+'년</span></button><div class="calendar-top-tools calendar-glass"><button data-action="calendar-view" aria-label="'+(state.calendarList?'월간 보기':'일정 목록 보기')+'" aria-pressed="'+state.calendarList+'">'+icon('calendar-view')+'</button><button data-action="calendar-search" aria-label="일정 검색" aria-expanded="'+state.calendarSearch+'">'+icon('ios-search')+'</button><span class="calendar-tool-decoration" aria-hidden="true">'+icon('ios-add')+'</span></div></nav>';
    const monthHeader='<header class="calendar-month-header"><h1 tabindex="-1">'+(calendarMonth+1)+'월</h1></header>';
    const weekdays='<div class="calendar-weekdays">'+['일','월','화','수','목','금','토'].map(x=>'<span>'+x+'</span>').join('')+'</div>';
    const footer='<div class="calendar-bottom-fade"></div><footer class="calendar-bottom-bar"><button class="calendar-today calendar-glass" data-action="calendar-today">오늘</button><div class="calendar-bottom-tools calendar-glass"><button data-action="calendar-year" aria-label="월 선택">'+icon('calendar-grid')+'</button><span class="calendar-tool-decoration" aria-hidden="true">'+icon('inbox')+'</span></div></footer>';
    let body='';
    if(state.calendarPicker){
      body='<div class="calendar-month-picker app-scroll"><div class="calendar-picker-arrows"><button data-action="prev-year" aria-label="이전 해">'+icon('chevron-left')+'</button><strong>'+calendarYear+'년</strong><button data-action="next-year" aria-label="다음 해">'+icon('chevron-right')+'</button></div><div class="calendar-month-choices">'+Array.from({length:12},(_,month)=>'<button class="'+(month===calendarMonth?'active':'')+'" data-action="calendar-month" data-month="'+month+'">'+(month+1)+'월</button>').join('')+'</div><div class="calendar-month-stepper"><button data-action="prev-month">이전 달</button><button data-action="next-month">다음 달</button></div></div>';
    }else if(state.calendarList||state.calendarSearch){
      body='<div class="calendar-list-panel">'+(state.calendarSearch?'<div class="calendar-search">'+search('일정 검색','calendar').replace('autocomplete="off"','autocomplete="off" value="'+esc(state.calendarQuery)+'"')+'</div>':'')+'<div class="app-scroll" id="calendarSearchResults">'+calendarEventList(state.calendarSearch?state.calendarQuery:'')+'</div></div>';
    }else{
      body=weekdays+'<div class="app-scroll calendar-month-scroll"><div class="calendar-days">'+cells.join('')+'</div><button class="calendar-next-month" data-action="next-month">'+(calendarMonth===11?'1':calendarMonth+2)+'월</button></div>';
    }
    const events=calendarEvents(calendarDay);
    const detail=state.calendarDetail&&!state.calendarPicker&&!state.calendarSearch?'<section class="calendar-agenda"><header><h2 class="agenda-date">'+(calendarMonth+1)+'월 '+calendarDay+'일</h2><button data-action="calendar-close-detail" aria-label="일정 닫기">'+icon('close')+'</button></header>'+(events.length?events.map(e=>'<div class="agenda-event" style="--event-color:'+esc(e.color)+'"><strong>'+esc(e.title)+'</strong><time>'+esc(e.time)+'</time></div>').join(''):'<p class="empty-state">등록된 일정이 없어요.</p>')+'</section>':'';
    return '<div class="app-view calendar-app">'+toolbar+monthHeader+body+detail+footer+'</div>';
  }
  function clockTabs() {
    const tabs=[['world','world-clock','세계 시계'],['alarms','alarm-filled','알람'],['stopwatch','stopwatch-filled','스톱워치'],['timer','timer-outline','타이머']];
    return '<nav class="clock-tabs" aria-label="시계 탭">'+tabs.map(([tab,symbol,label])=>'<button data-action="clock-tab" data-tab="'+tab+'" class="'+(state.clockTab===tab?'active':'')+'" aria-current="'+(state.clockTab===tab?'page':'false')+'">'+icon(symbol)+'<span>'+label+'</span></button>').join('')+'</nav>';
  }
  function stopwatchElapsed() {
    return state.stopwatch.elapsed+(state.stopwatch.running?Math.max(0,Date.now()-state.stopwatch.startedAt):0);
  }
  function stopwatchTime(ms) {
    const ticks=Math.floor(ms/10),seconds=Math.floor(ticks/100),minutes=Math.floor(seconds/60);
    return pad(minutes)+':'+pad(seconds%60)+'.'+pad(ticks%100);
  }
  function timerTime(seconds) {
    const value=Math.max(0,Math.ceil(seconds)),hours=Math.floor(value/3600);
    return (hours?pad(hours)+':':'')+pad(Math.floor(value/60)%60)+':'+pad(value%60);
  }
  function updateClockTools() {
    const stopwatch=$('#stopwatchTime');if(stopwatch)stopwatch.textContent=stopwatchTime(stopwatchElapsed());
    if(state.timer.running&&Date.now()>=state.timer.endsAt){
      state.timer.running=false;state.timer.remaining=0;
      if(state.route?.app==='clock'&&state.clockTab==='timer'&&!state.route.page){navigate({app:'clock'});return;}
    }
    const timer=$('#timerTime');if(timer)timer.textContent=timerTime(state.timer.running?(state.timer.endsAt-Date.now())/1000:state.timer.remaining);
  }
  function timerParts(seconds=state.timer.duration) {
    return {hours:Math.floor(seconds/3600),minutes:Math.floor(seconds/60)%60,seconds:seconds%60};
  }
  function timerPicker() {
    const parts=timerParts();
    return '<div class="timer-picker" aria-label="타이머 시간 설정"><div class="timer-picker-selection" aria-hidden="true"></div>'+[['hours','시간',23],['minutes','분',59],['seconds','초',59]].map(([unit,label,max])=>'<div class="timer-wheel-column"><div class="timer-wheel" tabindex="0" role="spinbutton" data-unit="'+unit+'" data-max="'+max+'" aria-label="'+label+'" aria-valuemin="0" aria-valuemax="'+max+'" aria-valuenow="'+parts[unit]+'" aria-valuetext="'+parts[unit]+label+'">'+Array.from({length:max+1},(_,value)=>'<div class="timer-wheel-value'+(value===parts[unit]?' is-selected':'')+'" aria-hidden="true">'+value+'</div>').join('')+'</div><span class="timer-wheel-unit" aria-hidden="true">'+label+'</span></div>').join('')+'</div><output class="timer-idle-time" id="timerTime" aria-label="선택한 시간">'+timerTime(state.timer.duration)+'</output>';
  }
  function bindTimerWheels() {
    const wheels=$$('.timer-wheel',layer);if(!wheels.length)return;
    const parts=timerParts(),rowHeight=Math.max(22,Math.min(28,window.innerHeight*.033));
    const labels={hours:'시간',minutes:'분',seconds:'초'};
    const paint=(wheel,value)=>{
      wheel.setAttribute('aria-valuenow',value);wheel.setAttribute('aria-valuetext',value+labels[wheel.dataset.unit]);
      $$('.timer-wheel-value',wheel).forEach((el,index)=>{
        const distance=Math.abs(value-index);el.classList.toggle('is-selected',distance===0);
        el.style.setProperty('--wheel-scale',Math.max(.35,1-distance*.13));
        el.style.setProperty('--wheel-opacity',Math.max(.08,1-distance*.22));
      });
    };
    const choose=(wheel,value)=>{
      value=Math.max(0,Math.min(Number(wheel.dataset.max),value));
      parts[wheel.dataset.unit]=value;paint(wheel,value);
      state.timer.duration=parts.hours*3600+parts.minutes*60+parts.seconds;
      state.timer.remaining=state.timer.duration;updateClockTools();
      const start=$('#timerStart');if(start)start.disabled=state.timer.duration===0;
    };
    for(const wheel of wheels){
      wheel.style.setProperty('--wheel-row',rowHeight+'px');
      wheel.scrollTop=parts[wheel.dataset.unit]*rowHeight;paint(wheel,parts[wheel.dataset.unit]);
      wheel.addEventListener('scroll',()=>choose(wheel,Math.round(wheel.scrollTop/rowHeight)),{passive:true});
      wheel.addEventListener('keydown',event=>{
        let value=Number(wheel.getAttribute('aria-valuenow'));
        if(event.key==='ArrowUp'||event.key==='ArrowDown')value+=event.key==='ArrowDown'?1:-1;
        else if(event.key==='PageUp'||event.key==='PageDown')value+=event.key==='PageDown'?5:-5;
        else if(event.key==='Home')value=0;else if(event.key==='End')value=Number(wheel.dataset.max);else return;
        event.preventDefault();event.stopPropagation();choose(wheel,value);wheel.scrollTop=parts[wheel.dataset.unit]*rowHeight;
      });
    }
  }
  function renderClock() {
    const tab=state.clockTab,title={world:'세계 시계',alarms:'알람',stopwatch:'스톱워치',timer:'타이머'}[tab];
    const toolbar=(tab==='alarms'||tab==='world')?'<nav class="clock-topbar" aria-label="시계 탐색">'+(tab==='world'?'<span class="clock-edit clock-glass clock-decoration" aria-hidden="true">편집</span>':tab==='alarms'?'<button class="clock-edit clock-glass" data-action="clock-edit" aria-pressed="'+state.clockEditing+'">'+(state.clockEditing?'완료':'편집')+'</button>':'<span></span>')+(tab==='alarms'?'<button class="clock-add clock-glass" data-action="new-alarm" aria-label="알람 추가">'+icon('ios-add')+'</button>':tab==='world'?'<span class="clock-add clock-glass clock-decoration" aria-hidden="true">'+icon('ios-add')+'</span>':'')+'</nav>':'';
    let content='';
    if(tab==='world'){
      const d=dateParts();
      content='<div class="world-clock-list"><div class="world-clock-row"><div><p>오늘, +0시간</p><h2>센터코어</h2></div><time id="seoulTime" datetime="'+pad(d.hour)+':'+pad(d.minute)+'">'+pad(d.hour)+':'+pad(d.minute)+'</time></div></div>';
    }else if(tab==='alarms'){
      const rows=state.alarms.map(a=>'<div class="alarm-row '+(!a.enabled?'disabled':'')+'">'+(state.clockEditing?'<button class="clock-delete-alarm" data-action="delete-alarm" data-id="'+esc(a.id)+'" aria-label="'+esc(a.label)+' 알람 삭제">'+icon('minus')+'</button>':'')+'<div class="alarm-copy"><div class="alarm-time">'+pad(a.hour)+':'+pad(a.minute)+'</div><div class="alarm-label">'+esc(a.label)+'</div></div><button class="toggle '+(a.enabled?'on':'')+'" data-action="toggle-alarm" data-id="'+esc(a.id)+'" role="switch" aria-label="'+esc(a.label)+' 알람" aria-checked="'+a.enabled+'"></button></div>').join('');
      content='<section class="clock-sleep"><h2>'+icon('bed-filled')+'수면 | 기상</h2><div class="clock-sleep-row"><span>알람 없음</span><button data-action="new-alarm">변경</button></div></section><section class="clock-other-alarms"><h2>기타</h2><div class="alarm-list">'+(rows||'<p class="clock-empty">알람 없음</p>')+'</div></section>';
    }else if(tab==='stopwatch'){
      content='<div class="stopwatch-main"><div class="clock-tool-time" id="stopwatchTime">'+stopwatchTime(stopwatchElapsed())+'</div><div class="clock-round-controls"><button class="clock-secondary" data-action="stopwatch-lap"'+(!state.stopwatch.running&&!state.stopwatch.elapsed?' disabled':'')+'>'+(state.stopwatch.running||!state.stopwatch.elapsed?'랩':'재설정')+'</button><div class="stopwatch-page-dots" aria-hidden="true"><span></span><span></span></div><button class="'+(state.stopwatch.running?'clock-stop':'clock-start')+'" data-action="stopwatch-toggle">'+(state.stopwatch.running?'중단':'시작')+'</button></div><div class="stopwatch-laps">'+state.stopwatch.laps.map((ms,i)=>'<div><span>랩 '+(state.stopwatch.laps.length-i)+'</span><time>'+stopwatchTime(ms-(state.stopwatch.laps[i+1]||0))+'</time></div>').join('')+'</div></div>';
    }else{
      const timer=state.timer,display=timer.running?(timer.endsAt-Date.now())/1000:timer.remaining;
      const idle=!timer.running&&timer.remaining===timer.duration;
      content='<div class="timer-main">'+(idle?timerPicker():'<div class="clock-tool-time timer-countdown" id="timerTime">'+timerTime(display)+'</div>')+'<div class="clock-round-controls"><button class="clock-secondary" data-action="timer-cancel"'+(idle?' disabled':'')+'>취소</button><button class="'+(timer.running?'clock-pause':'clock-start')+'" id="timerStart" data-action="timer-toggle"'+(!timer.running&&timer.duration===0?' disabled':'')+'>'+(timer.running?'일시 정지':timer.remaining>0&&timer.remaining<timer.duration?'재개':'시작')+'</button></div><div class="timer-info-card"><label class="timer-info-row"><span>레이블</span><input id="timerLabel" aria-label="타이머 레이블" placeholder="타이머" maxlength="40" value="'+esc(timer.label)+'"></label><div class="timer-info-row"><span>타이머 종료 시</span><span class="timer-end-action">실행 중단 '+icon('chevron-right')+'</span></div></div></div>';
    }
    return '<div class="app-view clock-app clock-native-app clock-tab-'+tab+'">'+toolbar+(tab!=='stopwatch'?'<h1 class="clock-heading" tabindex="-1">'+title+'</h1>':'')+'<div class="app-scroll clock-content clock-content-'+tab+'">'+content+'</div><div class="clock-bottom-fade"></div>'+clockTabs()+'</div>';
  }

  function renderAlarmForm() {
    return '<div class="app-view clock-app clock-alarm-form">'+nav('알람','알람 추가')+'<form class="alarm-form" id="alarmForm"><label for="alarmTime">시간</label><input id="alarmTime" type="time" value="08:00" required><label for="alarmLabel">레이블</label><input id="alarmLabel" placeholder="알람" maxlength="40"><button type="submit" class="primary-button">저장</button></form></div>';
  }
  function renderContact(id) {
    const c=contact(id);
    if(!c)return state.route?.app==='phone'?renderPhone():renderMessages('kakao');
    const messageApp=c.messageApp||(state.messages.some(chat=>chat.id===id)?'messages':'kakao');
    if(state.route?.app!=='phone')return '<div class="app-view grouped">'+nav('카카오톡')+'<div class="app-scroll"><section class="contact-profile">'+avatar(c)+'<h2>'+esc(c.name)+'</h2><div class="contact-actions"><button class="contact-action" data-action="thread" data-app="'+messageApp+'" data-id="'+esc(id)+'">'+icon('messages')+'메시지</button><button class="contact-action" disabled aria-disabled="true">'+icon('phone')+'통화</button></div></section></div></div>';
    const message='data-action="thread" data-app="'+messageApp+'" data-id="'+esc(id)+'"',call='disabled aria-disabled="true"';
    return '<div class="app-view phone-app phone-native-app phone-contact-app"><header class="phone-profile-header"><button class="phone-profile-back" data-action="back" aria-label="연락처로 돌아가기">'+icon('phone-back')+'</button><strong>'+esc(c.name)+'</strong><button disabled aria-disabled="true">편집</button></header><div class="app-scroll phone-profile-scroll"><section class="contact-profile'+(Array.from(c.name).length>8?' is-long-name':'')+'">'+avatar(c)+'<h2>'+esc(c.name)+'</h2><div class="contact-actions"><button class="contact-action" '+message+' aria-label="메시지">'+icon('messages')+'</button><button class="contact-action" '+call+' aria-label="통화">'+icon('phone')+'</button><button class="contact-action" disabled aria-disabled="true" aria-label="영상 통화">'+icon('profile-video')+'</button><button class="contact-action" disabled aria-disabled="true" aria-label="이메일">'+icon('profile-mail')+'</button></div></section><div class="phone-profile-card phone-contact-poster">'+avatar(c)+'<strong>연락처 사진 및 포스터</strong>'+icon('chevron-right')+'</div><div class="phone-profile-card"><button class="phone-contact-number" '+call+'><span><strong>휴대전화</strong><span>연락처 저장됨</span></span>'+icon('phone')+'</button><div class="phone-contact-memo">메모</div></div><div class="phone-profile-card phone-profile-options"><button '+message+'>메시지 보내기</button><button disabled aria-disabled="true">연락처 공유</button><button disabled aria-disabled="true">즐겨찾기에 추가</button></div><div class="phone-profile-card phone-profile-options"><button disabled aria-disabled="true">긴급 연락처에 추가</button></div><div class="phone-profile-card phone-profile-options"><button disabled aria-disabled="true">연락처 차단</button></div></div>'+phoneTabs()+'</div>';
  }
  function phoneTabs() {
    const tabs=[['recent','phone-tab-calls','통화'],['contacts','person-circle','연락처'],['keypad','keypad','키패드']];
    return '<footer class="phone-bottom-bar"><nav class="phone-tabs" aria-label="전화 탭">'+tabs.map(([tab,symbol,label])=>'<button '+(tab==='keypad'?'disabled aria-disabled="true"':'data-action="phone-tab"')+' data-tab="'+tab+'" class="'+(state.phoneTab===tab?'active':'')+'" aria-current="'+(state.phoneTab===tab?'page':'false')+'">'+icon(symbol)+'<span class="tab-label">'+label+'</span></button>').join('')+'</nav><button class="phone-search-button phone-glass" data-action="phone-search" aria-label="전화 검색" aria-expanded="'+state.phoneSearch+'">'+icon('phone-search')+'</button></footer>';
  }
  function phoneCallRows() {
    const query=state.phoneQuery.trim().toLocaleLowerCase('ko-KR');
    const calls=state.phoneCalls.slice(0,C.phone.historyLimit||50).filter(call=>{
      const c=phoneCaller(call);if(!c)return false;
      return (state.phoneFilter!=='missed'||call.missed)&&(c.name+' '+c.subtitle).toLocaleLowerCase('ko-KR').includes(query);
    });
    return calls.map(call=>{
      const c=phoneCaller(call),parts=call.date?.split('-'),stamp=parts?.length===3?Number(parts[0])+'. '+Number(parts[1])+'. '+Number(parts[2])+'.':call.time;
      return '<div class="phone-call-row'+(call.missed?' is-missed':'')+(c.unsavedNumber?' is-unsaved':'')+(state.phoneEditing?' is-editing':'')+'" data-contact="'+esc(c.id)+'">'+(state.phoneEditing?'<button class="phone-delete-call" data-action="phone-delete-call" data-id="'+esc(call.id)+'" aria-label="'+esc(c.name)+' 통화 기록 삭제">'+icon('minus')+'</button>':'')+'<span class="phone-row-avatar" aria-hidden="true" data-id="'+esc(c.id)+'">'+(c.unsavedNumber?messageAvatar(c):contactAvatar(c))+'</span><div class="phone-call-main"><strong title="'+esc(c.name)+'">'+esc(c.name)+'</strong><span>'+icon(call.direction==='outgoing'?'call-outgoing':'call-incoming')+esc(call.missed?'부재중 전화':c.subtitle||'휴대전화')+'</span></div><time>'+esc(stamp)+'</time><button class="phone-call-button" disabled aria-disabled="true" aria-label="'+esc(c.name)+' 통화">'+icon('phone')+'</button></div>';
    }).join('')||'<div class="phone-empty"><strong>'+(query?'검색 결과 없음':state.phoneFilter==='missed'?'부재중 전화 없음':'최근 통화 없음')+'</strong><p>'+(query?'다른 이름으로 검색해 보세요.':'통화 기록이 여기에 표시됩니다.')+'</p></div>';
  }
  function phoneCaller(call) {
    const number=call.number||state.phoneCalls.find(record=>record.contact===call.contact&&record.number)?.number;
    return contact(call.contact)||(C.phone.people||[]).find(person=>person.id===call.contact)||state.messages.find(chat=>chat.id===call.contact&&chat.unsavedNumber)||(number?{id:call.contact,name:number,unsavedNumber:true}:null);
  }
  function phoneFilters() {
    return [['all','모두'],['missed','부재중 전화']].map(([filter,label])=>'<button data-action="phone-filter" data-filter="'+filter+'" aria-pressed="'+(state.phoneFilter===filter)+'" class="'+(state.phoneFilter===filter?'active':'')+'">'+label+'</button>').join('');
  }
  function phoneContactLetter(name) {
    const ch=Array.from(name.trim())[0]||'#',code=ch.charCodeAt(0);
    if(code>=0xac00&&code<=0xd7a3){
      const initial=['ㄱ','ㄱ','ㄴ','ㄷ','ㄷ','ㄹ','ㅁ','ㅂ','ㅂ','ㅅ','ㅅ','ㅇ','ㅈ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'][Math.floor((code-0xac00)/588)];
      return initial;
    }
    return /[a-z]/i.test(ch)?ch.toUpperCase():'#';
  }
  function phoneContactsMarkup() {
    const query=state.phoneQuery.trim().toLocaleLowerCase('ko-KR');
    const people=C.contacts.filter(person=>person.name.toLocaleLowerCase('ko-KR').includes(query)).slice().sort((a,b)=>a.name.localeCompare(b.name,'ko'));
    const groups=new Map();people.forEach(person=>{const letter=phoneContactLetter(person.name);if(!groups.has(letter))groups.set(letter,[]);groups.get(letter).push(person);});
    const ownCard=query?'':'<div class="phone-my-card">'+contactAvatar({name:C.owner})+'<div><strong>'+esc(C.owner)+'</strong><span>내 카드</span></div></div>';
    return ownCard+Array.from(groups,([letter,people])=>'<section class="phone-contact-group" id="phoneContactGroup-'+letter+'"><h2>'+letter+'</h2>'+people.map(person=>'<button class="contact-row" data-action="phone-info" data-id="'+esc(person.id)+'">'+avatar(person)+'<strong>'+esc(person.name)+'</strong></button>').join('')+'</section>').join('')+'<p class="phone-contact-total">'+people.length+'개의 연락처</p>';
  }
  function phoneContactsIndex() {
    const present=new Set(C.contacts.map(person=>phoneContactLetter(person.name)));
    const letters=[...'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ','#'];
    return '<nav class="phone-contact-index" aria-label="연락처 초성">'+letters.map(letter=>present.has(letter)?'<button data-action="phone-contact-letter" data-letter="'+letter+'" aria-label="'+letter+' 연락처로 이동">'+letter+'</button>':'<span aria-hidden="true">'+letter+'</span>').join('')+'</nav>';
  }
  function refreshPhoneRows() {
    const calls=$('#phoneCallList'),people=$('#phoneContactsList');
    if(calls)calls.innerHTML=phoneCallRows();
    if(people)people.innerHTML=phoneContactsMarkup();
  }
  function phoneSearchPanel() {
    return state.phoneSearch?'<div class="phone-search-panel">'+search('검색','phone')+'<button data-action="phone-search-close">취소</button></div>':'';
  }
  function renderPhone() {
    if(state.phoneTab==='recent'){state.phoneCalls.forEach(call=>call.unread=false);renderHome();}
    if(state.phoneTab==='keypad'){
      const keys=[['1',''],['2','ABC'],['3','DEF'],['4','GHI'],['5','JKL'],['6','MNO'],['7','PQRS'],['8','TUV'],['9','WXYZ'],['*',''],['0','+'],['#','']];
      return '<div class="app-view phone-app phone-native-app phone-keypad-app"><div class="app-scroll phone-keypad-scroll"><div class="phone-keypad-content"><div class="dial-number" id="dialNumber" aria-label="입력한 번호" aria-live="polite">'+esc(state.dial)+'</div><div class="keypad">'+keys.map(([number,letters])=>'<button class="key phone-glass" data-action="dial-key" data-key="'+number+'" aria-label="'+number+'"><span class="key-digit">'+number+'</span><small>'+letters+'</small></button>').join('')+'</div><div class="dial-actions"><button class="call-green" disabled aria-disabled="true" aria-label="통화">'+icon('phone')+'</button><button class="dial-delete" data-action="dial-delete" aria-label="마지막 숫자 지우기"'+(!state.dial?' hidden':'')+'>'+icon('backspace')+'</button></div></div></div><div class="phone-bottom-fade"></div>'+phoneTabs()+'</div>';
    }
    const contacts=state.phoneTab==='contacts';
    const left=contacts?'<button class="phone-header-back phone-glass" data-action="phone-tab" data-tab="recent" aria-label="통화로 돌아가기">'+icon('phone-back')+'</button>':'<button class="phone-edit-button phone-glass" data-action="phone-edit" aria-pressed="'+state.phoneEditing+'">'+(state.phoneEditing?'완료':'편집')+'</button>';
    const right=contacts?'<button class="phone-add-contact phone-glass" disabled aria-disabled="true" aria-label="연락처 추가">'+icon('phone-plus')+'</button>':'<button class="phone-filter-button phone-glass" data-action="phone-filter-menu" aria-label="통화 필터 메뉴" aria-expanded="'+state.phoneMenu+'">'+icon('phone-filter')+'</button>';
    const header='<header class="phone-native-header">'+left+'<h1 tabindex="-1">'+(contacts?'연락처':'통화')+'</h1>'+right+'</header>';
    const menu=!contacts&&state.phoneMenu?'<div class="phone-filter-menu" role="group" aria-label="통화 필터">'+phoneFilters()+'</div>':'';
    const body=contacts?'<div class="app-scroll phone-contacts-list" id="phoneContactsList">'+phoneContactsMarkup()+'</div>'+phoneContactsIndex():'<div class="app-scroll phone-call-list" id="phoneCallList" aria-label="통화 목록">'+phoneCallRows()+'</div>';
    return '<div class="app-view phone-app phone-native-app phone-list-app '+(contacts?'phone-contacts-app':'phone-recent-app')+(state.phoneSearch?' is-searching':'')+'"><div class="phone-top-material" aria-hidden="true"></div>'+header+phoneSearchPanel()+menu+body+'<div class="phone-bottom-fade"></div>'+phoneTabs()+'</div>';
  }
  function updateDialNumber() {
    $('#dialNumber').textContent=state.dial;
    const remove=$('[data-action="dial-delete"]');if(remove)remove.hidden=!state.dial;
  }
  const GOOGLE_SEARCH_QUERY='블랙배저';
  const GOOGLE_PERSON_QUERY='이예현';
  const GOOGLE_FAN_QUERY='힐데베르트 탈레브';
  const googleCanonicalQuery=query=>{
    const value=String(query||'').normalize('NFC').replace(/\s/g,'');
    return [GOOGLE_SEARCH_QUERY,GOOGLE_PERSON_QUERY,GOOGLE_FAN_QUERY].find(query=>query.replace(/\s/g,'')===value)||null;
  };
  const googleQueryAllowed=query=>Boolean(googleCanonicalQuery(query));
  function safariPositionKey(route=state.route) {
    if(route?.app!=='safari'||['community','fan-post'].includes(route.page))return null;
    if(route.page==='fan-community')return 'fan:'+route.board+':'+(route.filter||'all');
    return route.page==='search'?'search:'+route.query:'home';
  }
  function rememberSafariPosition() {
    const key=safariPositionKey(),scroll=$('.google-page,.community-page,.fan-page',layer);
    if(key&&scroll)state.safariPositions[key]=scroll.scrollTop;
  }
  function restoreSafariPosition() {
    const key=safariPositionKey(),scroll=$('.google-page,.community-page,.fan-page',layer);
    if(scroll)scroll.scrollTop=key?(state.safariPositions[key]||0):0;
  }
  function googleWordmark(extra='') {
    return '<img class="google-logo '+extra+'" src="assets/google/wordmark.svg?v=20261018h" alt="Google" draggable="false">';
  }
  function googleProfile() {
    return '<span class="google-avatar" aria-label="Google 프로필"><img src="assets/google/default-profile.svg?v=20261018h" alt="" draggable="false"></span>';
  }
  function googlePersonResults() {
    const data=C.safari.personSearch,profile=data.profile;
    const person='<section class="google-person-card" aria-labelledby="googlePersonName"><header><div><h1 id="googlePersonName">'+esc(profile.name)+'</h1><p>'+esc(profile.role)+'</p></div><img src="'+esc(profile.image)+'" alt="단색 프로필 사진" width="96" height="112"></header></section>';
    const news='<section class="google-top-stories google-person-news" aria-labelledby="googlePersonNewsTitle"><h2 id="googlePersonNewsTitle">뉴스</h2><div class="google-news-list">'+data.news.map(item=>'<article class="google-news-card"><span>'+esc(item.source)+'</span><h3>'+esc(item.title)+'</h3></article>').join('')+'</div></section>';
    const communities='<section class="google-community-results google-fan-results" aria-label="커뮤니티 검색 결과">'+data.posts.map(post=>'<article class="google-community-result">'+googleFanSource(data.gallery)+'<h3><button data-action="google-community" data-id="'+esc(post.id)+'">'+esc(post.title)+'</button></h3><p>'+esc(post.body||post.comments[0].text)+'</p><span class="google-community-count">댓글 '+post.comments.length+'</span></article>').join('')+'</section>';
    return '<nav class="google-result-tabs" aria-label="검색 종류"><strong aria-current="page">전체</strong><span>뉴스</span><span>이미지</span><span>동영상</span></nav>'+person+news+communities;
  }
  function renderGoogleCommunity() {
    return renderFanPost(C.safari.personSearch.gallery);
  }
  function googleResults(query) {
    if(query===GOOGLE_FAN_QUERY)return googleFanResults();
    if(query===GOOGLE_PERSON_QUERY)return googlePersonResults();
    const results=[
      {source:'블랙배저',trail:'공식 홈페이지',badge:'B',kind:'badger-source',title:'블랙배저 | 공식 홈페이지',description:'블랙배저의 공지사항과 활동 소식, 센터코어 관련 안내와 공개 자료를 확인하세요.'},
      {source:'나무위키',trail:'문서 › 블랙배저',badge:'나',kind:'namu-source',title:'블랙배저 - 나무위키',description:'블랙배저의 개요와 관련 인물, 센터코어에 관한 정보를 정리한 문서.'}
    ];
    const news=[
      {source:'관련 보도',title:'CIS 본부 내 교전…힐데베르트 탈레브·돈 차일드 등 다수 사망'},
      {source:'관련 보도',title:'신임 총사령관, 추가 병력·예산 확보 위해 정부 설득 나서'},
      {source:'관련 보도',title:'코어5서 전투 발생…정확한 원인·경위는 아직 불명'}
    ];
    return '<nav class="google-result-tabs" aria-label="검색 종류"><span>AI 모드</span><strong aria-current="page">전체</strong><span>뉴스</span><span>이미지</span><span>동영상</span><span>쇼핑</span></nav><div class="google-results-list">'+results.map(result=>'<article class="google-result-card"><div class="google-result-source"><span class="google-source-badge '+result.kind+'">'+result.badge+'</span><div><strong>'+esc(result.source)+'</strong><span>'+esc(result.trail)+'</span></div><span class="google-result-menu" aria-hidden="true">'+icon('ig-menu')+'</span></div><h2>'+esc(result.title)+'</h2><p>'+esc(result.description)+'</p></article>').join('')+'<section class="google-top-stories" aria-labelledby="googleTopStoriesTitle"><h2 id="googleTopStoriesTitle">뉴스</h2><div class="google-news-list">'+news.map(item=>'<article class="google-news-card"><span>'+esc(item.source)+'</span><h3>'+esc(item.title)+'</h3></article>').join('')+'</div></section></div>';
  }
  function googleFanSource(board) {
    const url={dc:'https://gall.bbinside.com',qoo:'https://takuu.net',crgall:'https://crgall.com'}[board.theme];
    const badge=board.theme==='crgall'?'<svg class="cr-search-emblem" viewBox="0 0 32 48" aria-hidden="true">'+crgallEmblem()+'</svg>':board.theme==='qoo'?'<span>T</span>':'<span>bb</span>';
    const name=board.theme==='qoo'?'<button class="google-fan-source-link" data-action="google-fan-board" data-board="'+esc(board.id)+'" aria-label="타쿠 카테고리 열기">'+esc(board.source)+'</button>':'<strong>'+esc(board.source)+'</strong>';
    return '<div class="google-result-source"><span class="google-source-badge fan-source-'+board.theme+'">'+badge+'</span><div>'+name+'<span>'+esc(url)+'</span></div><span class="google-result-menu google-fan-result-menu" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg></span></div>';
  }
  function googleFanResults() {
    const cards=[...C.safari.fanSearch.sites].sort((a,b)=>a.searchOrder-b.searchOrder).map(board=>{
      const source=googleFanSource(board);
      const postCards=board.posts.filter(post=>post.clickable!==false&&post.searchTerms?.includes(GOOGLE_FAN_QUERY)).sort((a,b)=>b.date.localeCompare(a.date)).map(post=>{
        const takuu=board.theme==='qoo',date=takuu?'':'<span class="google-post-result-date">'+post.date.split('.').map(Number).join('. ')+'. — </span>';
        return '<article class="google-result-card google-gallery-post-result'+(takuu?' google-takuu-post-result':'')+'">'+source+'<h2><button class="google-fan-result-link google-gallery-post-link" data-action="google-fan-post" data-board="'+esc(board.id)+'" data-id="'+esc(post.id)+'">'+esc(post.title)+(board.theme==='dc'?' - '+esc(board.shortName):'')+'</button></h2><p>'+date+esc(post.body.join(' '))+'</p></article>';
      }).join('');
      if(board.searchMode==='posts')return postCards;
      const mixed=board.searchMode==='board-and-posts';
      const sitelinks=mixed?'':'<div class="google-fan-sitelinks">'+board.posts.filter(post=>!post.pinned&&post.clickable!==false).slice(0,2).map(post=>'<button data-action="google-fan-post" data-board="'+esc(board.id)+'" data-id="'+esc(post.id)+'">'+esc(post.title)+'</button>').join('')+'</div>';
      return '<article class="google-result-card google-fan-board-result">'+source+'<h2><button class="google-fan-result-link" data-action="google-fan-board" data-board="'+esc(board.id)+'">'+esc(board.name)+'</button></h2><p>'+esc(board.snippet)+'</p>'+sitelinks+'</article>'+(mixed?postCards:'');
    }).join('');
    return '<nav class="google-result-tabs" aria-label="검색 종류"><strong aria-current="page">전체</strong><span>이미지</span><span>동영상</span><span>뉴스</span></nav><div class="google-results-list google-fan-results">'+cards+'</div>';
  }
  function fanBoard(id=state.route?.board) {
    return C.safari.fanSearch.sites.find(board=>board.id===id)||(C.safari.personSearch.gallery.id===id||(!id&&state.route?.page==='community')?C.safari.personSearch.gallery:undefined);
  }
  function takuuTopbar(board) {
    const login='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M3 12h12M10 7l5 5-5 5"/></svg>';
    return '<header class="takuu-topbar"><button class="takuu-brand" data-action="back" aria-label="이전 화면"><span class="takuu-emblem" aria-hidden="true"><b>ta</b><b>kuu</b></span><strong>'+esc(board.wordmark)+'</strong></button><button class="takuu-login" disabled aria-disabled="true" aria-label="로그인">'+login+'</button></header>';
  }
  function takuuIntro(board,isPost=false) {
    return '<section class="takuu-category"><h'+(isPost?'2':'1')+' tabindex="-1">'+esc(board.title)+' 카테고리</h'+(isPost?'2':'1')+'></section>';
  }
  function takuuTabs(popular=false) {
    return '<nav class="takuu-tabs" aria-label="타쿠 게시글 분류"><button data-action="google-fan-filter" data-filter="all" aria-pressed="'+!popular+'">전체</button><button disabled>잡담</button><button disabled>스퀘어</button><button disabled>알림/결과</button><button disabled>후기</button><button disabled>교환</button><button disabled>나눔</button><span aria-hidden="true">•••</span></nav>';
  }
  function takuuListRow(board,post) {
    if(post.pinned)return '<div class="takuu-notice" role="note"><span>공지</span><strong>'+esc(post.title)+'</strong></div>';
    const count=post.comments?.length??post.commentCount??0;
    const action=post.clickable===false?'disabled aria-disabled="true"':'data-action="google-fan-post" data-board="'+esc(board.id)+'" data-id="'+esc(post.id)+'"';
    return '<button class="takuu-post-row'+(post.titleOnly?' takuu-title-only':'')+'" '+action+'><span class="takuu-row-copy"><span class="takuu-row-title">'+esc(post.title)+'</span><span class="takuu-row-meta"><time>'+esc(post.date.slice(5))+'</time><span>조회 '+post.views.toLocaleString('ko-KR')+'</span><span>'+esc(post.category||'잡담')+'</span></span></span><span class="takuu-row-comments" aria-label="댓글 '+count+'개">'+count+'</span></button>';
  }
  function takuuFooter(board) {
    return '<footer class="takuu-footer"><div><button disabled>로그인</button><button disabled>회원가입</button><button disabled>PC</button></div><div><button disabled>이용약관</button><button disabled>개인정보처리방침</button></div><div><button disabled>청소년 보호정책</button><button disabled>게시중단안내</button></div><p>© takuu</p><span class="takuu-online">회원 '+board.memberCount.toLocaleString('ko-KR')+'명</span></footer>';
  }
  function renderTakuuCommunity(board) {
    const posts=board.posts;
    const tools='<div class="takuu-list-tools"><button class="takuu-hot" disabled aria-disabled="true" aria-pressed="false"><span aria-hidden="true">□</span> HOT</button><button class="takuu-write" disabled>'+icon('compose')+'쓰기</button></div>';
    const pages='<nav class="takuu-pages" aria-label="페이지"><button disabled aria-label="첫 페이지">«</button><button disabled aria-label="이전 페이지">‹</button><span aria-current="page">1</span>'+[2,3,4,5].map(page=>'<button disabled aria-disabled="true" aria-label="'+page+'페이지">'+page+'</button>').join('')+'<button disabled aria-label="다음 페이지">›</button><button disabled aria-label="마지막 페이지">»</button></nav>';
    return '<div class="app-view safari-app google-native-app fan-community-app fan-theme-qoo"><div class="app-scroll fan-page" id="fanPageScroll">'+takuuTopbar(board)+takuuIntro(board)+takuuTabs()+'<section class="takuu-post-list" aria-label="타쿠 게시글">'+posts.map(post=>takuuListRow(board,post)).join('')+'</section>'+tools+pages+takuuFooter(board)+'</div>'+safariChrome('takuu.net')+'</div>';
  }
  function renderTakuuPost(board,post) {
    const listButton='<button data-action="google-fan-list" data-board="'+esc(board.id)+'">'+icon('kk-menu')+'목록</button>';
    const header='<header class="takuu-post-header"><h1 tabindex="-1">'+esc(post.title)+'</h1><p class="takuu-post-url">https://takuu.net/hildebert/'+esc(post.id.replace('qoo-',''))+'</p><p class="takuu-post-byline"><span>'+esc(post.author)+'</span><time>'+esc(post.date.slice(5).replace('.','-'))+'</time><span>조회 수 '+post.views.toLocaleString('ko-KR')+'</span></p></header>';
    const body='<div class="takuu-post-body">'+post.body.map(paragraph=>'<p>'+esc(paragraph)+'</p>').join('')+'</div>';
    const heading='<div class="takuu-comments-heading"><h2 id="fanCommentsTitle">'+icon('comment')+'댓글 <strong>'+post.comments.length+'</strong></h2><span></span><button disabled aria-label="공유">'+icon('notes-share')+'</button><button disabled aria-label="스크랩 0개">'+icon('star')+'0</button>'+listButton+'</div>';
    const comments='<section class="takuu-comments" aria-labelledby="fanCommentsTitle">'+heading+'<ol>'+post.comments.map((comment,index)=>'<li><div><strong>'+(index+1)+'. '+esc(comment.author)+'</strong><time>'+esc(comment.time||post.time)+'</time></div><p>'+esc(comment.text)+'</p></li>').join('')+'</ol><button class="takuu-refresh" disabled>'+icon('reload')+'새 댓글 확인하기</button></section>';
    const bottom='<nav class="takuu-post-bottom" aria-label="게시판 이동">'+listButton+'</nav>';
    return '<div class="app-view safari-app google-native-app fan-community-app fan-theme-qoo"><div class="app-scroll fan-page" id="fanPageScroll">'+takuuTopbar(board)+takuuIntro(board,true)+'<article>'+header+body+comments+'</article>'+bottom+takuuFooter(board)+'</div>'+safariChrome('takuu.net')+'</div>';
  }
  function fanTopbar(board,isPost=false) {
    const back='<button class="fan-back" data-action="back" aria-label="이전 화면">'+icon('chevron-left')+'</button>';
    const search='<button class="fan-icon-button" disabled aria-label="검색">'+icon('search')+'</button>';
    if(board.theme==='qoo')return takuuTopbar(board);
    const header='<header class="fan-topbar bb-topbar'+(isPost?' bb-post-topbar':'')+'"><button class="fan-back bb-brand" data-action="back" aria-label="이전 화면"><span aria-hidden="true">bb</span><span class="bb-brand-label">bbinside</span></button><div class="bb-search-bar"><button disabled aria-label="메뉴"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button><span>갤러리 &amp; 통합검색</span><button disabled aria-label="검색">'+icon('search')+'</button><button class="bb-recent" disabled>최근 방문</button></div></header>';
    const galleryTabs=board.minor===false?'<strong>갤러리</strong><span>마이너갤</span>':'<span>갤러리</span><strong>마이너갤</strong>';
    return header+'<nav class="fan-site-nav dc-site-nav bb-site-nav" aria-label="비비인사이드 메뉴">'+galleryTabs+'<span>미니갤</span><span>인물갤</span><span>갤로그</span><span>이벤트</span></nav>';
  }
  function fanBoardIntro(board,isPost=false) {
    if(board.theme==='qoo')return '<section class="fan-board-intro"><h'+(isPost?'2':'1')+' class="fan-board-name" tabindex="-1">'+esc(board.title)+' <span>카테고리</span></h'+(isPost?'2':'1')+'><p>'+esc(board.description)+'</p></section>';
    return '<section class="fan-board-intro bb-gallery-intro"><h'+(isPost?'2':'1')+' class="fan-board-name" tabindex="-1"'+(board.title==='블랙배저 갤러리'?' hidden':'')+'>'+esc(board.title)+(board.minor===false?'':' <span class="dc-minor-mark" aria-label="마이너 갤러리">m</span>')+'</h'+(isPost?'2':'1')+'><div class="bb-gallery-tools"><button class="bb-info" disabled aria-label="갤러리 정보">'+icon('info')+'</button><button disabled>설정 <i>N</i></button><button disabled>연관</button><button class="fan-write" disabled>글쓰기</button></div></section>';
  }
  function fanGalleryAd() {
    return '<aside class="dc-gallery-ad bb-gallery-ad" aria-label="광고"><div><strong>렉시크 누들</strong><span class="fan-ad-label">AD</span></div><p>힐데베르트 탈레브가 선택한 렉시크 누들 🍜</p></aside>';
  }
  function fanAuthor(author) {
    const parts=author.match(/^(.*?)(\([^()]+\))$/);
    return '<strong>'+esc(parts?parts[1]:author)+'</strong>'+(parts?'<span class="fan-author-ip">'+esc(parts[2])+'</span>':'');
  }
  function fanPostCategory(board,post) {
    if(post.pinned)return '공지';
    if(board.theme==='qoo')return '잡담';
    return post.category||'잡담';
  }
  function fanListRow(board,post) {
    const open='class="fan-post-row'+(post.pinned?' is-notice':'')+'" data-action="google-fan-post" data-board="'+esc(board.id)+'" data-id="'+esc(post.id)+'"';
    if(board.theme==='qoo')return '<button '+open+'><span class="qoo-row-number">'+(post.pinned?'공지':board.posts.length-board.posts.indexOf(post))+'</span><span class="fan-row-category">'+fanPostCategory(board,post)+'</span><span class="fan-row-title"><span class="fan-row-text">'+esc(post.title)+'</span><em>'+post.comments.length+'</em></span><time>'+esc(post.date.slice(5))+'</time><span class="qoo-row-views">'+post.views.toLocaleString('ko-KR')+'</span></button>';
    return '<button '+open+'><span class="dc-row-symbol" aria-hidden="true">'+icon('comment')+'</span><span class="dc-row-content"><span class="fan-row-title"><span class="fan-row-text">'+esc(post.title)+'</span></span></span><em class="bb-row-comment-count">'+post.comments.length+'</em><span class="fan-row-meta"><span>'+fanPostCategory(board,post)+'</span><span>'+esc(post.author)+'</span><time>'+esc(post.date.slice(2))+'</time><span>조회 '+post.views.toLocaleString('ko-KR')+'</span><span>추천 '+post.likes+'</span></span></button>';
  }
  function renderFanCommunity() {
    const board=fanBoard();
    if(!board)return '<div class="app-view safari-app google-native-app"><button data-action="back">검색 결과로</button></div>';
    if(board.theme==='qoo')return renderTakuuCommunity(board);
    const popular=state.route.filter==='popular';
    const posts=board.posts.filter(post=>!popular||post.pinned||post.likes>=90).sort((a,b)=>b.date.localeCompare(a.date));
    const tabs='<nav class="fan-board-tabs" aria-label="게시글 분류">'+[['all','전체'],['popular',board.theme==='dc'?'개념글':'HOT']].map(([value,label])=>'<button data-action="google-fan-filter" data-filter="'+value+'" aria-pressed="'+((popular?'popular':'all')===value)+'">'+label+'</button>').join('')+(board.theme==='dc'?'<button disabled>공지</button>':'')+'<span class="fan-list-count">'+posts.length+'개</span></nav>';
    const categories=board.theme==='dc'?'<div class="dc-category-strip"><strong>전체</strong><span>일반</span><span>뉴스</span><span>목격담</span><span>논쟁</span><span>영상</span></div>':'<div class="fan-list-heading"><span>번호</span><span>카테고리</span><span>제목</span><span>날짜</span><span>조회</span></div>';
    const list='<section class="fan-post-list" aria-label="'+esc(board.name)+' 게시글">'+posts.map(post=>fanListRow(board,post)).join('')+'</section>';
    const bottom='<div class="fan-list-tools"><span class="fan-page-number" aria-current="page">1</span><button class="fan-write" disabled>'+icon('compose')+'글쓰기</button></div><footer class="fan-board-footer"><strong>'+esc(board.theme==='dc'?board.source:board.name)+'</strong>'+(board.theme==='dc'?'<span>'+esc(board.name)+'</span>':'')+'</footer>';
    return '<div class="app-view safari-app google-native-app fan-community-app fan-theme-'+board.theme+'"><div class="app-scroll fan-page" id="fanPageScroll">'+fanTopbar(board)+fanBoardIntro(board)+(board.theme==='dc'?fanGalleryAd():'')+tabs+categories+list+bottom+'</div>'+safariChrome(board.theme==='dc'?'bbinside.com':'takuu.net')+'</div>';
  }
  function bbPostHeader(board,post) {
    return '<header class="fan-post-header bb-post-header"><h1 tabindex="-1"><span>['+esc(fanPostCategory(board,post))+']</span> '+esc(post.title)+' <svg class="bb-mobile-icon" viewBox="0 0 12 18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2" y="1" width="8" height="16" rx="1"/><path d="M4 14h4"/></svg></h1><div class="bb-post-byline"><span class="bb-post-author">'+fanAuthor(post.author)+'<span class="bb-user-device" aria-hidden="true">▣</span></span><time>'+esc(post.date)+' '+esc(post.time)+'</time><button class="bb-gallog" disabled>갤로그 가기</button></div><p class="fan-post-stats bb-post-stats"><span>조회수 '+post.views.toLocaleString('ko-KR')+'</span><span>추천 <strong>'+post.likes+'</strong></span><span class="bb-stat-comments">댓글 <strong>'+post.comments.length+'</strong></span></p></header>';
  }
  function bbActionIcon(name) {
    const shapes={share:'<path d="m7 11 9-5M7 13l9 5"/><circle cx="5" cy="12" r="3"/><circle cx="18" cy="5" r="3"/><circle cx="18" cy="19" r="3"/>',scrap:'<path d="M2 6h7l2 3h11v12H2Z" fill="currentColor" stroke="none"/><path d="M12 12v6m-3-3h6" stroke="#fff"/>',report:'<path d="M6 18v-6a6 6 0 0 1 12 0v6Z" fill="currentColor" stroke="none"/><path d="M3 21h18M12 1v2M4 4l2 2m14-2-2 2"/>'};
    return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+shapes[name]+'</svg>';
  }
  function bbPostActions(board,post) {
    const captcha='<div class="bb-vote-code"><input disabled aria-label="비추천 코드" placeholder="비추천 코드 입력"><div class="bb-captcha"><svg viewBox="0 0 140 34" aria-hidden="true"><g fill="#2497c6" font-family="monospace" font-size="20"><text x="9" y="24" transform="rotate(-13 9 24)">b</text><text x="31" y="25" transform="rotate(12 31 25)">7</text><text x="57" y="24" transform="rotate(-6 57 24)">m</text><text x="82" y="24" transform="rotate(16 82 24)">4</text><text x="110" y="24" transform="rotate(-10 110 24)">q</text></g><path d="M3 22Q35 35 59 8T131 16M17 4l9 28M87 3l5 26" fill="none" stroke="#4badd1" stroke-width=".8"/></svg><span aria-hidden="true">'+icon('reload')+'</span></div></div>';
    const votes='<div class="bb-vote-totals"><strong class="bb-up-count">'+post.likes+'</strong><button class="bb-vote-up" disabled aria-label="개념 추천 '+post.likes+'개"><svg class="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="m16 2 4.3 8.8 9.7 1.4-7 6.8 1.7 9.6-8.7-4.5-8.7 4.5L9 19l-7-6.8 9.7-1.4Z" fill="#ffd000"/></svg><span>개념</span></button><button class="bb-vote-down" disabled aria-label="비추천 '+post.dislikes+'개"><svg class="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M12 3h8v11h8L16 30 4 14h8Z" fill="#fff"/></svg><span>비추</span></button><strong class="bb-down-count">'+post.dislikes+'</strong></div>';
    const tools='<div class="bb-post-tools"><button disabled><b class="bb-tool-b">B</b>실베추</button><button disabled>'+icon('ig-repost')+'퍼옴 0</button><button disabled>'+bbActionIcon('share')+'공유</button><button disabled>'+bbActionIcon('scrap')+'스크랩</button><button disabled>'+bbActionIcon('report')+'신고</button></div>';
    const ad='<aside class="bb-inline-ad" aria-label="광고"><img src="assets/instagram/lexique-noodles-emoji.svg" alt="" width="36" height="36"><div><strong>렉시크 누들</strong><span>힐데베르트 탈레브가 선택한 렉시크 누들 🍜</span></div><span class="fan-ad-label">AD</span></aside>';
    const nav='<nav class="bb-post-navigation" aria-label="게시글 메뉴"><button class="bb-to-list" data-action="google-fan-list" data-board="'+esc(board.id)+'">목록보기</button><button disabled>글쓰기</button></nav>';
    return '<section class="bb-post-actions" aria-label="게시글 추천">'+captcha+votes+tools+'</section>'+ad+nav;
  }
  function bbComments(board,post) {
    const header='<header class="bb-comments-heading"><h2 id="fanCommentsTitle">댓글 <strong>['+post.comments.length+']</strong></h2><button class="bb-comments-refresh" disabled aria-label="댓글 새로고침">'+icon('reload')+'</button><span class="bb-comments-spacer"></span><button class="bb-comment-register" disabled>댓글 등록</button><span>본문</span><span>등록순⌄</span></header>';
    const commentsById=new Map(post.comments.map(comment=>[comment.id,comment]));
    const rows=post.comments.map(comment=>{
      const parent=commentsById.get(comment.parent);
      const target=parent?'<span class="bb-reply-target">@'+esc(parent.author)+'</span> ':'';
      return '<li class="bb-comment'+(comment.parent?' is-reply':'')+'" data-comment="'+esc(comment.id)+'"'+(comment.parent?' data-parent="'+esc(comment.parent)+'" aria-label="대댓글"':'')+'><div class="fan-comment-author bb-comment-author">'+(comment.parent?'<span class="bb-reply-mark" aria-hidden="true"></span>':'')+fanAuthor(comment.author)+'<span class="bb-user-device" aria-hidden="true">▣</span></div><p>'+target+esc(comment.text)+'</p><time>'+esc(comment.timestamp)+'</time></li>';
    }).join('');
    const composer='<div class="fan-comment-compose bb-comment-compose"><div class="dc-comment-identity"><input disabled aria-label="댓글 닉네임" placeholder="닉네임"><input disabled type="password" aria-label="댓글 비밀번호" placeholder="비밀번호"></div><textarea disabled aria-label="댓글 내용" placeholder="댓글을 입력해 주세요"></textarea><div><button disabled>등록</button></div></div>';
    return '<section class="fan-comments bb-comments" aria-labelledby="fanCommentsTitle">'+header+'<ol>'+rows+'</ol>'+composer+'</section>';
  }
  function fanPostActions(board,post) {
    if(board.theme==='qoo')return '<div class="qoo-post-actions"><button disabled>'+icon('bookmark')+'스크랩</button><button disabled>'+icon('notes-share')+'공유</button></div>';
    return bbPostActions(board,post);
  }
  function fanComments(board,post) {
    if(board.theme==='dc')return bbComments(board,post);
    const count=board.theme==='dc'?'전체 댓글 <strong>'+post.comments.length+'</strong>개':'댓글 <strong>'+post.comments.length+'</strong>';
    const comments=post.comments.map((comment,index)=>'<li><div class="fan-comment-author">'+(board.theme==='qoo'?'<span class="qoo-comment-number">'+(index+1)+'.</span>':'')+fanAuthor(comment.author)+'</div><p>'+esc(comment.text)+'</p></li>').join('');
    const composer=board.theme==='dc'?'<div class="dc-comment-identity"><input disabled aria-label="댓글 닉네임" placeholder="닉네임"><input disabled aria-label="댓글 비밀번호" placeholder="비밀번호" type="password"></div>':'';
    return '<section class="fan-comments" aria-labelledby="fanCommentsTitle"><div class="fan-comments-heading"><h2 id="fanCommentsTitle">'+count+'</h2><button disabled aria-label="댓글 새로고침">'+icon('reload')+'</button></div><ol>'+comments+'</ol><div class="fan-comment-compose">'+composer+'<textarea disabled aria-label="댓글 내용" placeholder="댓글을 입력해 주세요"></textarea><div><button disabled>등록</button></div></div></section>';
  }
  function renderFanPost(board=fanBoard()) {
    const post=board?.posts.find(post=>post.id===state.route.id&&post.clickable!==false);
    if(!post)return '<div class="app-view safari-app google-native-app"><button data-action="back">목록으로</button></div>';
    if(board.theme==='crgall')return renderCrgallPost(board,post);
    if(board.theme==='qoo')return renderTakuuPost(board,post);
    const header=board.theme==='dc'?bbPostHeader(board,post):'<header class="fan-post-header"><span class="fan-post-category">'+fanPostCategory(board,post)+'</span><h1 tabindex="-1">'+esc(post.title)+'</h1><p class="fan-post-byline"><span>'+fanAuthor(post.author)+'</span><time>'+esc(post.date)+'</time></p><p class="fan-post-stats"><span>조회 '+post.views.toLocaleString('ko-KR')+'</span><span>추천 '+post.likes+'</span><span>댓글 '+post.comments.length+'</span></p></header>';
    const body='<div class="fan-post-body">'+post.body.map((paragraph,index)=>{
      const level=post.bodyEmphasis?.[index];
      return '<p'+([1,2,3].includes(level)?' class="bb-text-grow-'+level+'"':'')+'>'+esc(paragraph)+'</p>';
    }).join('')+'</div>';
    const bottom='<nav class="fan-post-bottom" aria-label="게시판 이동"><button class="fan-all-posts" data-action="google-fan-board" data-board="'+esc(board.id)+'">전체글</button><button class="fan-list-return" data-action="google-fan-list" data-board="'+esc(board.id)+'">목록</button></nav><footer class="fan-board-footer">'+esc(board.theme==='dc'?board.source:board.name)+'</footer>';
    return '<div class="app-view safari-app google-native-app fan-community-app fan-theme-'+board.theme+'"><div class="app-scroll fan-page" id="fanPageScroll">'+fanTopbar(board,true)+fanBoardIntro(board,true)+(board.theme==='dc'?fanGalleryAd():'')+'<article>'+header+body+fanPostActions(board,post)+fanComments(board,post)+'</article>'+bottom+'</div>'+safariChrome(board.theme==='dc'?'bbinside.com':'takuu.net')+'</div>';
  }
  function crgallEmblem() {
    return '<g fill="#f5b53a" stroke="#fbd476" stroke-width="1.4"><path d="M7 10c1-5 17-4 21 2l-5 6L7 15Z"/><path d="m5 19 21-5 1 9-20 9Z"/><path d="m5 31 20-9-1 10-13 8Z"/><path d="m11 39 13-8c1 8-6 13-13 8Z"/></g><path d="m8 16 15 4M7 30l16-7M12 38l11-6" fill="none" stroke="#fff2bf" stroke-width="2.2"/>';
  }
  function crgallWordmark() {
    return '<svg class="cr-wordmark" viewBox="0 0 202 48" role="img" aria-label="CRGALL">'+crgallEmblem()+'<g fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M62 16c-7-10-21-6-21 9s14 18 21 9M71 39V11h8c14 0 14 17 0 17h-8M80 28l12 11M118 16c-7-10-21-6-21 9s13 19 22 10V25h-9M128 39V21c0-15 18-15 18 0v18M128 26h18M157 11v28h14M182 11v28h14"/></g></svg>';
  }
  function renderCrgallPost(board,post) {
    const header='<header class="hy-topbar">'+crgallWordmark()+'<nav aria-label="코어갤 메뉴"><button disabled>DB</button><button disabled>개념글</button><button disabled>메뉴</button></nav></header>';
    const title='<header class="hy-post-header"><h1 tabindex="-1"><span>'+esc(post.category)+'</span> '+esc(post.title)+'</h1><p><span>'+esc(post.author)+'</span><time>'+esc(post.date)+' '+esc(post.time)+'</time><span>조회 '+post.views.toLocaleString('ko-KR')+'</span><button disabled>내용Skip</button></p><div class="hy-post-number"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="m9 15 6-6M8 10l-3 3a4 4 0 0 0 6 6l3-3M10 8l3-3a4 4 0 0 1 6 6l-3 3"/></svg><span>'+esc(post.number)+'</span></div></header>';
    const body='<div class="hy-post-body">'+post.body.map(text=>'<p>'+esc(text)+'</p>').join('')+'</div>';
    const actions='<div class="hy-post-actions"><button disabled><i class="hy-action-square hy-bookmark-square"></i>북맠</button><button class="hy-recommend" disabled><span class="hy-star" aria-hidden="true">★</span>추천 <strong>'+post.likes+'</strong></button><span class="hy-report-group"><button disabled><i class="hy-action-square hy-report-square"></i>신고</button><button class="hy-more" disabled aria-label="더 보기">+</button></span></div>';
    const ad='<aside class="hy-ad" aria-label="광고"><div><span>힐데베르트 탈레브가 선택한</span><strong>렉시크 누들</strong><small>한 그릇의 즐거움</small></div><img src="assets/instagram/lexique-noodles-emoji.svg" alt="" width="60" height="60"><span class="hy-ad-info" aria-hidden="true">i</span></aside>';
    const comments='<section class="hy-comments" aria-labelledby="hyCommentsTitle"><header><h2 id="hyCommentsTitle">댓글 <strong>('+post.comments.length+')</strong></h2><span aria-hidden="true">↑↓</span></header><ol>'+post.comments.map(comment=>'<li class="hy-comment'+(comment.parent?' is-reply':'')+'" data-comment="'+esc(comment.id)+'"'+(comment.parent?' data-parent="'+esc(comment.parent)+'"':'')+'><p>'+(comment.parent?'<span class="hy-reply-mark" aria-hidden="true">↳</span>':'')+esc(comment.text)+'</p><div class="hy-comment-meta"><span>'+esc(comment.author)+' [Code: '+esc(comment.code)+']</span><time>'+esc(comment.time)+'</time><span class="hy-comment-tools"><button disabled aria-label="댓글 삭제"><svg class="hy-tool-icon hy-tool-delete" viewBox="0 0 24 18" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="square" aria-hidden="true" focusable="false"><path d="m8 5 8 8M16 5l-8 8"/></svg></button><button disabled aria-label="댓글 답글"><svg class="hy-tool-icon hy-tool-reply" viewBox="0 0 24 18" aria-hidden="true" focusable="false"><path d="M14 3H7a5 5 0 0 0 0 10h10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/><path d="m14 8 7 5-7 5Z" fill="currentColor"/></svg></button></span></div></li>').join('')+'</ol><button class="hy-comment-refresh" disabled>댓로고침</button><p class="hy-comment-permission">댓글 작성 권한이 없음</p></section>';
    const bottom='<nav class="hy-board-buttons" aria-label="게시판 메뉴"><button disabled>전체글</button><button disabled>개념글</button><button disabled>글쓰기</button></nav><footer class="hy-site-footer"><span>로그인</span><span>회원가입</span><span class="hy-footer-spacer"></span><span>운영</span><button data-action="crgall-top">TOP</button><span>PC</span></footer>';
    return '<div class="app-view safari-app google-native-app fan-community-app fan-theme-crgall"><div class="app-scroll fan-page hy-page" id="fanPageScroll">'+header+'<article>'+title+body+actions+ad+comments+'</article>'+bottom+'</div>'+safariChrome('crgall.com')+'</div>';
  }
  function safariChrome(result) {
    return '<footer class="google-safari-chrome" aria-label="Safari 도구 막대"><button class="safari-browser-back safari-browser-glass" data-action="safari-back" aria-label="이전 화면">'+icon('phone-back')+'</button><div class="safari-address-pill safari-browser-glass"><button class="safari-page-options" disabled aria-disabled="true" aria-label="페이지 메뉴">'+icon('safari-page-menu')+'</button><button class="safari-location safari-search-shortcut" data-action="safari-search" aria-label="주소 및 검색">'+(result?icon('search'):'')+'<span>'+(result?esc(result):'google.co.kr')+'</span></button><button class="safari-reload" data-action="google-home" aria-label="Google 첫 화면">'+icon('reload')+'</button></div><button class="safari-browser-more safari-browser-glass" disabled aria-disabled="true" aria-label="더 보기">'+icon('ellipsis')+'</button></footer>';
  }
  function renderSafari() {
    state.safariSearchOpen=false;state.safariKeyboardOpen=false;state.safariKeyUndo=[];
    if(state.route?.page==='fan-community')return renderFanCommunity();
    if(state.route?.page==='fan-post')return renderFanPost();
    if(state.route?.page==='community')return renderGoogleCommunity();
    const result=state.route?.page==='search'?state.route.query:'';
    const topbar='<header class="google-topbar">'+(result?googleWordmark('google-result-logo'):'<nav class="google-home-tabs"><strong>전체</strong><span>이미지</span></nav>')+'<span class="google-top-tools"><span class="google-notification" aria-hidden="true">'+icon('bell')+'<i></i></span>'+(!result?'<span class="google-apps-grid" aria-hidden="true">'+icon('google-apps')+'</span>':'')+googleProfile()+'</span></header>';
    const form='<form id="safariForm" class="google-search-form"><div class="google-search-box" role="group" aria-label="Google 검색"><button type="button" class="google-field-leading" data-action="safari-search" aria-label="검색어 입력"><span class="google-field-search">'+icon('search')+'</span><span class="google-field-plus">'+icon('phone-plus')+'</span></button><input id="safariQuery" type="search" inputmode="search" enterkeyhint="search" data-search="safari" placeholder="Google에 물어보세요" aria-label="Google 검색어" maxlength="160" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(result)+'" aria-controls="googleRecentSearches" aria-expanded="false" required><span class="google-field-tools"><button class="google-ai-search" type="button" disabled aria-disabled="true" aria-label="AI 검색">'+icon('google-ai')+'</button><button type="button" disabled aria-disabled="true" aria-label="음성 검색">'+icon('mic')+'</button><button type="button" disabled aria-disabled="true" aria-label="Google 렌즈">'+icon('google-lens')+'</button></span></div></form>';
    const footer='<footer class="google-home-footer"><div>대한민국</div><p><span>어두운 테마: 사용 중지됨</span><span>설정</span><span>개인정보처리방침</span><span>약관</span></p><p><span>광고</span><span>비즈니스</span><span>Google 정보</span></p></footer>';
    return '<div class="app-view safari-app google-app google-native-app'+(result?' is-results':'')+(result===GOOGLE_PERSON_QUERY?' is-person-results':'')+'"><div class="app-scroll google-page">'+topbar+(!result?'<h1 class="google-home-brand" tabindex="-1">'+googleWordmark()+'</h1>':'')+form+(result?'<div class="google-results-content">'+googleResults(result)+'</div>':footer)+'</div><section class="google-history-section" id="googleRecentSearches" aria-label="최근 검색 기록" hidden><div id="googleHistory">'+renderGoogleHistory()+'</div></section>'+safariChrome(result)+'<div class="safari-keyboard-url" hidden>google.co.kr</div><div class="safari-keyboard-accessory" id="safariKeyboardAccessory" hidden><span aria-hidden="true">'+icon('chevron-up')+icon('chevron-down')+'</span><button data-action="safari-keyboard-done" aria-label="키보드 닫기">'+icon('check')+'</button></div><div class="safari-keyboard" id="safariKeyboard" role="group" aria-label="화면 키보드" hidden></div></div>';
  }
  function syncSafariSearchViewport() {
    const root=$('.google-native-app');if(!root)return;
    if(!state.safariSearchOpen){root.style.removeProperty('--safari-visible-height');return;}
    const bounds=device.getBoundingClientRect(),logical=device.clientHeight||844;
    const scale=bounds.height>0?bounds.height/logical:1;
    const viewport=window.visualViewport;
    const bottom=viewport?viewport.offsetTop+viewport.height:window.innerHeight;
    const visible=Math.max(148,Math.min(logical,(bottom-bounds.top)/scale));
    root.style.setProperty('--safari-visible-height',visible+'px');
  }
  function syncSafariSearchUI() {
    const root=$('.google-native-app'),panel=$('#googleRecentSearches'),input=$('#safariQuery');if(!root||!panel||!input)return;
    root.classList.toggle('is-searching',state.safariSearchOpen);root.classList.toggle('keyboard-open',state.safariKeyboardOpen);
    panel.hidden=!state.safariSearchOpen;input.setAttribute('aria-expanded',String(state.safariSearchOpen));
    syncSafariSearchViewport();
    $('#safariKeyboard').hidden=!state.safariKeyboardOpen;$('#safariKeyboardAccessory').hidden=!state.safariKeyboardOpen;$('.safari-keyboard-url').hidden=!state.safariKeyboardOpen;
    const keyboard=$('#safariKeyboard'),layout=[state.safariKeyLanguage,state.safariKeyNumbers,state.safariKeyShift].join(':');
    if(state.safariKeyboardOpen&&keyboard.dataset.layout!==layout){keyboard.innerHTML=safariKeyboardMarkup();keyboard.dataset.layout=layout;}
    const searchButton=$('[data-action="safari-key-search"]',keyboard);if(searchButton)searchButton.disabled=!googleQueryAllowed(input.value);
  }
  function setSafariSearch(open) {
    const input=$('#safariQuery');if(!input)return;
    if(open&&state.safariSearchOpen){
      state.safariKeyboardOpen=false;syncSafariSearchUI();
      return;
    }
    if(!open&&!state.safariSearchOpen&&!state.safariKeyboardOpen)return;
    if(open&&!state.safariSearchOpen)state.safariKeyUndo=[];
    state.safariSearchOpen=open;state.safariKeyboardOpen=false;
    if(open)$('#googleHistory').innerHTML=renderGoogleHistory(input.value);
    else{input.value=state.route?.page==='search'?state.route.query:'';if(document.activeElement===input)input.blur();state.safariKeyUndo=[];}
    syncSafariSearchUI();
  }
  function activateSafariSearch() {
    setSafariSearch(true);
    const input=$('#safariQuery');
    if(input&&document.activeElement!==input)input.focus({preventScroll:true});
  }
  function renderGoogleHistory(query='') {
    const matches=state.safariHistory.filter(q=>q.toLowerCase().includes(query.toLowerCase()));
    return matches.length?matches.map(q=>'<div class="google-history-row"><button'+(googleQueryAllowed(q)?' data-action="google-search"':' disabled aria-disabled="true"')+' data-query="'+esc(q)+'">'+icon('google-history')+'<span>'+esc(q)+'</span></button><button data-action="google-remove" data-query="'+esc(q)+'" aria-label="'+esc(q)+' 검색 기록 삭제">'+icon('close')+'</button></div>').join(''):'<p class="google-history-empty">'+(query?'일치하는 최근 검색이 없습니다.':'최근 검색이 없습니다.')+'</p>';
  }
  function runGoogleSearch(raw) {
    const query=googleCanonicalQuery(raw);if(!query)return;
    if(query===GOOGLE_SEARCH_QUERY){state.safariHistory=[GOOGLE_SEARCH_QUERY,...state.safariHistory.filter(query=>query!==GOOGLE_SEARCH_QUERY)];save('safariHistory');}
    navigate({app:'safari',page:'search',query});
    $('.google-page').scrollTop=0;
  }
  function safariKeyboardMarkup() {
    const ko=state.safariKeyLanguage==='ko',shift=state.safariKeyShift,numbers=state.safariKeyNumbers;
    const rows=numbers?['1234567890','-/:;()₩&@"',shift?'[]{}#%^*+=':'.,?!~_+']:ko?[shift?'ㅃㅉㄸㄲㅆㅛㅕㅑㅒㅖ':'ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ','ㅁㄴㅇㄹㅎㅗㅓㅏㅣ','ㅋㅌㅊㅍㅠㅜㅡ']:['qwertyuiop','asdfghjkl','zxcvbnm'];
    const key=ch=>'<button class="safari-key" data-action="safari-key" data-key="'+esc(ch)+'">'+esc(ch)+'</button>';
    return rows.map((row,index)=>'<div class="safari-keyboard-row safari-keyboard-row-'+index+'">'+(index===2?'<button class="safari-key keyboard-modifier'+(shift?' selected':'')+'" data-action="safari-key-shift" aria-label="Shift">'+(numbers?'#+=':icon('keyboard-shift'))+'</button>':'')+Array.from(row).map(ch=>key(!ko&&!numbers&&shift?ch.toUpperCase():ch)).join('')+(index===2?'<button class="safari-key keyboard-modifier" data-action="safari-key-delete" aria-label="한 글자 지우기">'+icon('backspace')+'</button>':'')+'</div>').join('')+'<div class="safari-keyboard-row safari-keyboard-row-bottom"><button class="safari-key keyboard-number" data-action="safari-key-numbers">'+(numbers?(ko?'한글':'ABC'):'123')+'</button><button class="safari-key keyboard-emoji" disabled aria-disabled="true" aria-label="이모티콘">'+icon('keyboard-emoji')+'</button><button class="safari-key keyboard-space" data-action="safari-key" data-key=" " aria-label="공백">'+(ko?'간격':'')+'</button><button class="safari-key keyboard-search" data-action="safari-key-search" aria-label="검색">'+icon('search')+'</button></div><div class="safari-keyboard-footer"><button data-action="safari-key-language" aria-label="'+(ko?'영문 키보드로 전환':'한글 키보드로 전환')+'">'+icon('globe')+'</button><button disabled aria-disabled="true" aria-label="음성 입력">'+icon('mic')+'</button></div>';
  }
  function appendHangul(text,key) {
    const leading='ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ',vowels='ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ',tails=' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';
    const vowelPairs={'ㅗㅏ':'ㅘ','ㅗㅐ':'ㅙ','ㅗㅣ':'ㅚ','ㅘㅣ':'ㅙ','ㅜㅓ':'ㅝ','ㅜㅔ':'ㅞ','ㅜㅣ':'ㅟ','ㅝㅣ':'ㅞ','ㅡㅣ':'ㅢ'};
    const tailPairs={'ㄱㅅ':'ㄳ','ㄴㅈ':'ㄵ','ㄴㅎ':'ㄶ','ㄹㄱ':'ㄺ','ㄹㅁ':'ㄻ','ㄹㅂ':'ㄼ','ㄹㅅ':'ㄽ','ㄹㅌ':'ㄾ','ㄹㅍ':'ㄿ','ㄹㅎ':'ㅀ','ㅂㅅ':'ㅄ'};
    const last=text.at(-1)||'',prefix=text.slice(0,-1),code=last.charCodeAt(0),isSyllable=code>=0xac00&&code<=0xd7a3;
    const make=(l,v,t=0)=>String.fromCharCode(0xac00+(l*21+v)*28+t);
    if(vowels.includes(key)){
      if(leading.includes(last)&&last)return prefix+make(leading.indexOf(last),vowels.indexOf(key));
      if(isSyllable){
        const value=code-0xac00,l=Math.floor(value/588),v=Math.floor(value/28)%21,t=value%28;
        if(t){const tail=tails[t],split=Object.entries(tailPairs).find(([,joined])=>joined===tail)?.[0]||tail;const left=split.length===2?tails.indexOf(split[0]):0,next=split.at(-1);return prefix+make(l,v,left)+make(leading.indexOf(next),vowels.indexOf(key));}
        const joined=vowelPairs[vowels[v]+key];if(joined)return prefix+make(l,vowels.indexOf(joined));
      }else if(vowels.includes(last)&&last&&vowelPairs[last+key])return prefix+vowelPairs[last+key];
    }else if(isSyllable&&tails.indexOf(key)>0){
      const value=code-0xac00,t=value%28;
      if(!t)return prefix+String.fromCharCode(code+tails.indexOf(key));
      const joined=tailPairs[tails[t]+key];if(joined)return prefix+String.fromCharCode(code-t+tails.indexOf(joined));
    }
    return text+key;
  }
  function typeSafariKey(key) {
    const input=$('#safariQuery');if(!input)return;
    const before=input.value,start=typeof input.selectionStart==='number'?input.selectionStart:before.length,end=typeof input.selectionEnd==='number'?input.selectionEnd:start;
    const prefix=before.slice(0,start),suffix=before.slice(end);
    const next=state.safariKeyLanguage==='ko'&&!state.safariKeyNumbers?appendHangul(prefix,key):prefix+key;
    state.safariKeyUndo.push({value:before,caret:start});input.value=(next+suffix).slice(0,160);input.setSelectionRange?.(next.length,next.length);
    $('#googleHistory').innerHTML=renderGoogleHistory(input.value);
    if(state.safariKeyShift&&!state.safariKeyNumbers)state.safariKeyShift=false;
    syncSafariSearchUI();
  }
  function deleteSafariKey() {
    const input=$('#safariQuery');if(!input)return;
    const previous=state.safariKeyUndo.pop();
    if(previous){input.value=previous.value;input.setSelectionRange?.(previous.caret,previous.caret);}else{const start=typeof input.selectionStart==='number'?input.selectionStart:input.value.length,end=typeof input.selectionEnd==='number'?input.selectionEnd:start;input.value=input.value.slice(0,Math.max(0,start-(start===end?1:0)))+input.value.slice(end);input.setSelectionRange?.(Math.max(0,start-1),Math.max(0,start-1));}
    $('#googleHistory').innerHTML=renderGoogleHistory(input.value);syncSafariSearchUI();
  }
  function igAvatar(person,extra='') {
    return '<span class="avatar ig-avatar '+extra+'" aria-hidden="true"><img src="assets/instagram/default-avatar.png?v=20261018d" alt="" draggable="false"></span>';
  }
  function igPhoto(post) {
    return post.image || C.photos.find(p=>p.id===post.photo) || C.photos[0];
  }
  function igTabs() {
    return '<nav class="social-tabs ig-tabs" aria-label="Instagram 탭">'+[['home','home-filled','홈'],['reels','ig-reels','릴스'],['direct','ig-send','메시지'],['search','ig-search','검색'],['profile','ig-person','프로필']].map(([tab,symbol,label])=>'<button data-action="ig-tab" data-tab="'+tab+'" class="'+(state.igTab===tab?'selected':'')+'" aria-label="'+label+'" aria-current="'+(state.igTab===tab?'page':'false')+'"'+(!['home','profile'].includes(tab)?' disabled aria-disabled="true"':'')+'>'+ (tab==='profile'?'<span class="ig-tab-profile">'+igAvatar()+'<i></i></span>':icon(symbol))+'</button>').join('')+'</nav>';
  }

  function igHeader(profileUsername) {
    if(profileUsername){
      const own=profileUsername===C.instagram.username,person=igAccount(profileUsername);
      return '<header class="ig-profile-nav"><button '+(own&&!state.route?.returnRoute?'data-action="ig-tab" data-tab="home"':'data-action="back"')+' aria-label="Instagram으로 돌아가기">'+icon('chevron-left')+'</button><h1><span class="ig-profile-username">'+esc(profileUsername)+'</span>'+igBadge(person)+'</h1><button data-action="ig-tab" data-tab="saved" aria-label="프로필 더 보기" disabled aria-disabled="true">'+icon('ellipsis')+'</button></header>';
    }
    return '<header class="social-header ig-feed-header"><span class="ig-header-create" aria-hidden="true">'+icon('ig-plus')+'</span><h1 class="ig-wordmark">Instagram</h1><div class="ig-header-actions"><button data-action="ig-tab" data-tab="saved" aria-label="저장한 게시물" disabled aria-disabled="true">'+icon('ig-device-star')+'</button><button class="ig-activity-button" data-action="ig-tab" data-tab="activity" aria-label="알림" disabled aria-disabled="true">'+icon('ig-heart')+'<i></i></button></div></header>';
  }
  function igGrid(posts,profileUsername='') {
    return posts.length ? '<div class="ig-grid">'+posts.map(p=>'<button data-action="ig-post" data-id="'+p.id+'" data-profile="'+esc(profileUsername)+'" aria-label="'+esc(p.username+'의 게시물: '+p.caption)+'"><img src="'+esc(igPhoto(p).src)+'" alt="'+esc(igPhoto(p).label)+'" loading="lazy"></button>').join('')+'</div>' : '<div class="empty-state">'+icon('bookmark')+'<p>아직 저장한 게시물이 없어요.</p></div>';
  }
  function igAccounts() {
    return (C.instagram.connections || []).filter(p=>p.viewable===true);
  }
  function igAccount(username) {
    if(username===C.instagram.username)return {username,name:C.owner,initial:'힐',color:'#77867c',followers:C.instagram.followers,following:C.instagram.following,bio:''};
    return igAccounts().find(p=>p.username===username) || null;
  }

  function igPostsFor(username) {
    const person=igAccount(username);if(!person)return [];
    return C.instagram.posts.filter(p=>p.username===username||(p.collaborators||[]).includes(username)).concat(person.posts || []).sort((a,b)=>(b.publishedAt||'').localeCompare(a.publishedAt||''));
  }
  function igVisiblePostsFor(username) {
    const person=igAccount(username),posts=igPostsFor(username);
    const visible=person?.visiblePostIds?posts.filter(post=>person.visiblePostIds.includes(post.id)):posts;
    return visible.slice(0,person?.visiblePostCount ?? visible.length);
  }
  function igReturnRoute() {
    const route={...state.route},scroll=$('.app-scroll',layer);
    if(scroll)route.igScrollTop=scroll.scrollTop;
    return route;
  }
  function igFindPost(id) {
    return C.instagram.posts.concat(igAccounts().flatMap(p=>p.posts || [])).find(p=>p.id===id);
  }
  function igNumber(value) {
    return value==null?'—':new Intl.NumberFormat('ko-KR').format(value);
  }
  function igProfileCount(value) {
    if(value==null)return '—';
    return value>=10000?new Intl.NumberFormat('ko-KR',{maximumFractionDigits:1}).format(value/10000)+'만':igNumber(value);
  }
  function igBadge(person) {
    return person?.verified?'<span class="ig-verified" aria-label="인증된 계정">'+icon('verified')+'</span>':'';
  }
  function igCommentCount(post) {
    const total=post.commentCount || 0,length=(state.instagram.comments[post.id] || []).length;
    const baselines=state.instagram.commentBaselines || (state.instagram.commentBaselines={});
    if(!baselines[post.id]||baselines[post.id].total!==total){
      baselines[post.id]={total,existing:length};save('instagram');
    }
    return total+Math.max(0,length-baselines[post.id].existing);
  }

  function igPostMedia(post) {
    const profileUsername=state.route?.profileUsername;
    const tags=(profileUsername&&(post.collaborators||[]).includes(profileUsername)?[{username:post.username}]:post.tags||[]).filter(tag=>igAccount(tag.username));
    const showing=Boolean(state.igTagsVisible[post.id]);
    const photo='<img src="'+esc(igPhoto(post).src)+'" alt="'+esc(igPhoto(post).label)+'" loading="lazy">';
    const image=tags.length?'<button class="ig-post-image" data-action="ig-toggle-tags" data-id="'+post.id+'" aria-label="사진 태그 보기">'+photo+'</button>':'<div class="ig-post-image">'+photo+'</div>';
    const marker=tags.length?'<button class="ig-tag-toggle" data-action="ig-toggle-tags" data-id="'+post.id+'" aria-label="태그된 사람 보기" aria-expanded="'+showing+'">'+icon('ig-tag-person')+'</button>':'';
    const labels=showing?'<div class="ig-photo-tags">'+tags.map(tag=>'<button class="ig-photo-tag" data-action="ig-user" data-user="'+esc(tag.username)+'" aria-label="'+esc(igAccount(tag.username).name)+' 프로필 열기">'+esc(tag.username)+'</button>').join('')+'</div>':'';
    return '<div class="ig-post-media">'+image+marker+labels+'</div>';
  }
  function igPostCaption(post) {
    return post.caption?.trim()?'<p class="ig-caption"><strong>'+esc(post.username)+'</strong> '+esc(post.caption)+'</p>':'';
  }
  function igCaptionComment(post) {
    return post.caption?.trim()?'<div class="ig-comment-row">'+igAvatar(post)+'<p><strong>'+esc(post.username)+'</strong> '+esc(post.caption)+'</p></div>':'';
  }

  function igPostAuthors(post) {
    const names=[post.username,...(post.collaborators||[])].filter(username=>igAccount(username)),collab=names.length>1;
    const avatars=collab?'<span class="ig-collab-avatars" aria-hidden="true">'+names.slice(0,2).map(username=>igAvatar(igAccount(username))).join('')+'</span>':igAvatar(igAccount(names[0]),'ig-single-author');
    const authors=names.map((username,index)=>'<span class="ig-author-label"><button class="ig-author-account" data-action="ig-user" data-user="'+esc(username)+'"><strong>'+esc(username)+'</strong>'+igBadge(igAccount(username))+'</button>'+(collab?'<span class="ig-author-suffix">님'+(index<names.length-1?'과 ':'')+'</span>':'')+'</span>').join('');
    return '<div class="ig-post-authors">'+avatars+'<div class="ig-author-names">'+authors+'</div></div>';
  }
  function igLikesSummary(username='blackjack') {
    return '<strong>'+esc(username)+'</strong>님 외 여러 명이 좋아합니다';
  }
  function igPost(post) {
    const liked=state.instagram.likes.includes(post.id);
    return '<article class="ig-post" data-post="'+post.id+'"><header class="ig-post-header">'+igPostAuthors(post)+'<span class="ig-post-menu" aria-hidden="true">'+icon('ig-menu')+'</span></header>'+igPostMedia(post)+'<div class="ig-post-actions"><button class="'+(liked?'liked':'')+'" data-action="ig-like" data-id="'+post.id+'" aria-label="'+(liked?'좋아요 취소':'좋아요')+'" aria-pressed="'+liked+'">'+icon(liked?'ig-heart-filled':'ig-heart')+'</button><button class="ig-comment-button" data-action="ig-comments" data-id="'+post.id+'" aria-label="댓글 '+igNumber(igCommentCount(post))+'개 보기">'+icon('ig-comment')+'<span class="ig-comment-count">'+igNumber(igCommentCount(post))+'</span></button><span class="ig-repost-count" aria-label="리포스트 '+igProfileCount(post.repostCount||0)+'회">'+icon('ig-repost')+'<span>'+igProfileCount(post.repostCount||0)+'</span></span><span class="ig-action-glyph" aria-hidden="true">'+icon('ig-send')+'</span><button class="ig-save" data-action="ig-save" data-id="'+post.id+'" aria-label="게시물 저장" disabled aria-disabled="true">'+icon('ig-bookmark')+'</button></div>'+'<p class="ig-likes-summary">'+igLikesSummary(post.likedBy)+'</p>'+igPostCaption(post)+'<time class="ig-post-date">'+esc(post.date)+'</time></article>';
  }

  function igPostDetailHeader(username) {
    const following=username!==C.instagram.username?'<button class="ig-post-detail-follow" disabled aria-disabled="true">팔로잉</button>':'';
    return '<div class="ig-post-top-material" aria-hidden="true"></div><header class="ig-post-detail-nav"><button class="ig-post-detail-back" data-action="back" aria-label="이전 화면으로">'+icon('chevron-left')+'</button><div class="ig-post-detail-title"><h1>게시물</h1><p>'+esc(username)+'</p></div>'+following+'</header>';
  }
  function igPostFeed(route,post) {
    const username=route.profileUsername||post.username,posts=igVisiblePostsFor(username);
    return '<div class="app-view instagram-app ig-post-detail-app">'+igPostDetailHeader(username)+'<div class="app-scroll ig-post-feed" id="igPostFeed" data-profile="'+esc(username)+'" aria-label="게시물 목록, 최신순" tabindex="0">'+posts.map(igPost).join('')+'</div></div>';
  }
  function igDisplayActions() {
    return '<div class="ig-post-actions ig-display-actions" aria-hidden="true">'+['ig-heart','ig-comment','ig-repost','ig-send'].map(symbol=>'<span class="ig-action-glyph">'+icon(symbol)+'</span>').join('')+'<span class="ig-action-glyph ig-save">'+icon('ig-bookmark')+'</span></div>';
  }
  function igFeedExtras() {
    const extras=C.instagram.feedExtras||[];
    const ads=extras.filter(item=>item.type==='ad').map(item=>'<article class="ig-feed-ad"><header class="ig-extra-header">'+igAvatar()+'<div><strong><span class="ig-ad-username">'+esc(item.username)+'</span><span class="ig-ad-verified" aria-label="인증된 계정">'+icon('verified')+'</span></strong><span>광고</span></div><button class="ig-ad-follow" disabled aria-disabled="true">팔로우</button><span class="ig-extra-menu" aria-hidden="true">'+icon('ig-menu')+'</span></header><div class="ig-ad-media"><img class="ig-ad-poster" src="'+esc(item.poster)+'" alt="'+esc(item.name)+' 광고" loading="lazy"></div><button class="ig-ad-cta" disabled aria-disabled="true"><span>자세히 보기</span>'+icon('chevron-right')+'</button>'+igDisplayActions()+'<p class="ig-ad-likes">'+igLikesSummary()+'</p><p class="ig-ad-copy"><strong>'+esc(item.username)+'</strong> '+esc(item.text)+'</p></article>').join('');
    const reels=extras.filter(item=>item.type==='reel');
    const suggestions=reels.length?'<section class="ig-reel-suggestions" aria-label="추천 릴스"><header><h2>추천 릴스</h2><span aria-hidden="true">'+icon('ellipsis')+'</span></header><div class="ig-reel-strip">'+reels.map(item=>'<figure class="ig-reel-card'+(item.tone==='light'?' is-light':'')+'" data-id="'+esc(item.id)+'" aria-label="'+esc(item.description||item.title)+'"><img src="'+esc(item.poster)+'" alt="'+esc(item.posterLabel||item.title)+'" loading="lazy"><span class="ig-reel-mark" aria-hidden="true">'+icon('ellipsis')+'</span><figcaption><p>'+esc(item.title)+'</p><span class="ig-reel-plays">'+icon('play')+' '+esc(item.plays)+'</span></figcaption></figure>').join('')+'</div></section>':'';
    return ads+suggestions;
  }
  function igProfile(username) {
    const person=igAccount(username);if(!person)return '';
    const own=username===C.instagram.username,posts=igPostsFor(username);
    const postCount=own?posts.length:(person.postCount ?? (posts.length || null));
    const stat=(kind,label,value)=>'<span class="ig-stat" data-kind="'+kind+'"><strong>'+igProfileCount(value)+'</strong>'+label+'</span>';
    const buttons=own?'<span class="ig-profile-button">프로필 편집</span><span class="ig-profile-button">프로필 공유</span>':'<span class="ig-profile-button">팔로잉 '+icon('chevron-down')+'</span><button class="ig-profile-button" data-action="ig-tab" data-tab="direct" disabled aria-disabled="true">메시지</button><span class="ig-profile-add-person" aria-hidden="true">'+icon('ig-add-person')+'</span>';
    const shown=igVisiblePostsFor(username);
    return '<section class="ig-profile"><div class="ig-profile-top">'+igAvatar(person)+'<div class="ig-profile-summary"><strong class="ig-profile-name">'+esc(person.name)+'</strong><div class="ig-profile-stats"><span class="ig-stat"><strong>'+igNumber(postCount)+'</strong>게시물</span>'+stat('followers','팔로워',person.followers)+stat('following','팔로잉',person.following)+'</div></div></div>'+(person.bio?'<p class="ig-profile-bio">'+esc(person.bio)+'</p>':'')+'<div class="ig-profile-actions">'+buttons+'</div></section><nav class="ig-profile-grid-tabs" aria-label="프로필 게시물 유형">'+[['grid','ig-grid','게시물'],['reels','ig-reels','릴스'],['tagged','ig-tagged','태그됨']].map(([kind,symbol,label])=>'<button data-action="ig-profile-tab" data-tab="'+kind+'" class="'+(kind==='grid'?'active':'')+'" aria-label="'+label+'" aria-current="'+(kind==='grid'?'page':'false')+'" disabled aria-disabled="true">'+icon(symbol)+'</button>').join('')+'</nav>'+(shown.length?igGrid(shown,username):'<div class="ig-profile-empty"></div>');
  }
  function igConnectionRow(person) {
    return '<button class="ig-connection" data-action="ig-user" data-user="'+esc(person.username)+'">'+igAvatar(person)+'<span class="ig-connection-copy"><strong>'+esc(person.username)+igBadge(person)+'</strong><span>'+esc(person.name)+'</span></span>'+(person.mutual?'<span class="ig-mutual-pill">맞팔로우</span>':'')+'</button>';
  }
  function igConnections(kind) {
    const label=kind==='followers'?'팔로워':'팔로잉';
    return '<div class="app-view instagram-app">'+nav('프로필',label)+'<div class="app-scroll"><div class="ig-connection-list">'+igAccounts().map(igConnectionRow).join('')+'</div></div></div>';
  }
  function renderInstagram(route) {
    const posts=C.instagram.posts,post=igFindPost(route.id);
    if(route.page==='connections')return igConnections(route.kind);
    if(route.page==='comments'&&post){
      const comments=state.instagram.comments[post.id] || [];
      const preview=(post.commentsPreview || []).map(c=>'<div class="ig-comment-row">'+igAvatar({initial:c.username.slice(0,1).toUpperCase(),color:'#a0a6ad'})+'<p><strong>'+esc(c.username)+'</strong> '+esc(c.text)+'</p></div>').join('');
      return '<div class="app-view instagram-app">'+nav('게시물','댓글 '+igNumber(igCommentCount(post))+'개')+'<div class="app-scroll ig-comment-list" id="igComments">'+igCaptionComment(post)+preview+comments.map(c=>'<div class="ig-comment-row">'+igAvatar({initial:'힐',color:'#77867c'})+'<p><strong>'+esc(C.instagram.username)+'</strong> '+esc(c.text)+'</p></div>').join('')+'</div><form class="ig-comment-form" id="igCommentForm"><input id="igCommentInput" placeholder="댓글 달기..." aria-label="댓글 작성" maxlength="500" required><button type="submit">게시</button></form></div>';
    }
    if(route.page==='post'&&post)return igPostFeed(route,post);
    if(route.page==='profile'&&igAccount(route.username))return '<div class="app-view instagram-app ig-profile-app">'+igHeader(route.username)+'<div class="app-scroll">'+igProfile(route.username)+'</div>'+igTabs()+'</div>';
    let content='';
    if(state.igTab==='home'){
      const own=igAccount(C.instagram.username);
      const stories=igAccounts().concat(C.instagram.stories||[]);
      content='<div class="ig-stories" aria-label="스토리">'+(own?'<button class="ig-own-story" disabled aria-disabled="true" data-id="'+esc(own.username)+'"><span class="ig-story-ring">'+igAvatar(own)+'<i>'+icon('ig-plus')+'</i></span><span>내 스토리</span></button>':'')+stories.map(p=>'<button disabled aria-disabled="true" data-username="'+esc(p.username)+'" aria-label="'+esc(p.name||p.username)+'의 스토리"><span class="ig-story-ring">'+igAvatar(p)+'</span><span>'+esc(p.username)+'</span></button>').join('')+'</div>'+posts.map(igPost).join('')+igFeedExtras();
    }else content=igProfile(C.instagram.username);
    return '<div class="app-view instagram-app'+(state.igTab==='profile'?' ig-profile-app':'')+'">'+igHeader(state.igTab==='profile'?C.instagram.username:undefined)+'<div class="app-scroll" id="igScroll">'+content+'</div>'+igTabs()+'</div>';
  }
  function refreshSocial() {
    const scroll=$('.app-scroll',layer),top=scroll?.scrollTop || 0;
    navigate({...state.route});
    const next=$('.app-scroll',layer);if(next)next.scrollTop=top;
  }
  function youtubeVideos() { return C.youtube.displayOnly?C.youtube.videos:state.youtube.added.concat(C.youtube.videos); }
  function youtubeShorts() { return C.youtube.shorts || []; }
  function youtubeViewCount(views) {
    if(views>=100000000)return new Intl.NumberFormat('ko-KR',{maximumFractionDigits:1}).format(views/100000000)+'억회';
    if(views>=10000)return Math.floor(views/10000)+'만회';
    if(views>=1000)return new Intl.NumberFormat('ko-KR',{maximumFractionDigits:1}).format(views/1000)+'천회';
    return igNumber(views)+'회';
  }
  function youtubeCard(video) {
    const poster=video.poster||'https://i.ytimg.com/vi/'+esc(video.id)+'/hqdefault.jpg';
    const viewMark='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 3 15 9-15 9Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>';
    const metadata=video.sponsored?'스폰서 · '+esc(video.channel):'<span class="yt-meta-channel">'+esc(video.channel)+'</span>'+(Number.isFinite(video.views)?'<span class="yt-meta-views" aria-label="조회수 '+youtubeViewCount(video.views)+'">'+viewMark+esc(youtubeViewCount(video.views).replace(/회$/,''))+'</span>':'')+(video.published?'<time>'+esc(video.published)+'</time>':'');
    const overlay=video.sponsored?'<span class="yt-ad-overlays" aria-hidden="true"><span>'+icon('volume-off')+'</span><span class="yt-cc">CC</span></span><span class="yt-ad-arrow" aria-hidden="true">'+icon('call-outgoing')+'</span>':'';
    const content='<span class="yt-thumbnail"><img src="'+esc(poster)+'" alt="" loading="lazy" data-fallback="assets/placeholders/01.svg">'+overlay+(!video.sponsored&&video.duration?'<span class="yt-duration">'+esc(video.duration)+'</span>':'')+'</span><span class="yt-card-info">'+avatar({initial:video.channel.slice(0,1),color:video.channelColor||(video.sponsored?'#292923':'#87939d')})+'<span class="yt-card-copy"><strong>'+esc(video.title)+'</strong><small class="yt-video-meta">'+metadata+'</small></span><span class="yt-card-more" aria-hidden="true">'+icon('ellipsis')+'</span></span>';
    const cls='yt-card'+(video.sponsored?' yt-sponsored':'');
    return video.clickable===false?'<article class="'+cls+' yt-static-card" data-video-id="'+esc(video.id)+'" aria-label="'+esc(video.title)+'">'+content+'</article>':'<button class="'+cls+'" data-action="yt-video" data-id="'+esc(video.id)+'" aria-label="'+esc(video.title)+' 영상 화면 열기">'+content+'</button>';
  }
  function youtubeCards(videos,message='아직 영상이 없어요.') {
    return videos.length?videos.map(youtubeCard).join(''):'<div class="empty-state">'+icon('youtube')+'<p>'+esc(message)+'</p></div>';
  }
  function youtubeShortCard(video) {
    return '<article class="yt-short-card" data-short-id="'+esc(video.id)+'" aria-label="'+esc(video.title)+'"><div class="yt-short-thumbnail"><img src="'+esc(video.poster)+'" alt="'+esc(video.posterLabel||'단색 썸네일')+'" loading="lazy"><span class="yt-short-more" aria-hidden="true">'+icon('ellipsis')+'</span><strong class="yt-short-title">'+esc(video.title)+'</strong></div><div class="yt-short-info">'+avatar({initial:video.channel.slice(0,1),color:video.channelColor||'#87939d'})+'<div class="yt-short-copy"><p class="yt-short-channel">'+esc(video.channel)+'</p><p class="yt-short-stats">조회수 '+youtubeViewCount(video.views)+(video.published?' · '+esc(video.published):'')+'</p></div></div></article>';
  }
  function youtubeShortsGrid(shorts) {
    return shorts.length?'<div class="yt-shorts-grid">'+shorts.map(youtubeShortCard).join('')+'</div>':youtubeCards([],'Shorts 동영상이 없어요.');
  }
  function youtubeShortsShelf(shorts) {
    return shorts.length?'<section class="yt-shorts-shelf" aria-label="Shorts"><header class="yt-shorts-heading"><span class="yt-shorts-logo" aria-hidden="true">'+icon('shorts')+'</span><h2>Shorts</h2><span class="yt-shorts-menu" aria-hidden="true">'+icon('ellipsis')+'</span></header>'+youtubeShortsGrid(shorts)+'</section>':'';
  }
  function youtubeSearchContents(query='') {
    const q=query.trim().toLowerCase(),matches=video=>(video.title+' '+video.channel).toLowerCase().includes(q),videos=youtubeVideos().filter(matches),shorts=youtubeShorts().filter(matches);
    if(!videos.length&&!shorts.length)return youtubeCards([],'검색 결과가 없어요.');
    return (videos.length?youtubeCards(videos):'')+youtubeShortsShelf(shorts);
  }
  function youtubeTabs() {
    const tab=(id,symbol,label,disabled=false)=>'<button type="button" data-tab="'+id+'" '+(disabled?'disabled aria-disabled="true"':'data-action="yt-tab"')+' class="'+(state.ytTab===id?'selected':'')+'" aria-label="'+label+'" aria-current="'+(state.ytTab===id?'page':'false')+'">'+icon(symbol)+'</button>';
    return '<nav class="social-tabs yt-tabs" aria-label="YouTube 탭">'+tab('home','home-filled','홈')+tab('shorts','shorts','Shorts',true)+'<span class="yt-create-icon" aria-hidden="true">'+icon('add-circle')+'</span><button type="button" data-tab="you" disabled aria-disabled="true" aria-label="내 페이지"><span class="yt-profile-avatar"><img src="assets/youtube-profile.svg?v=20261018bd" alt=""></span></button></nav>';
  }
  function youtubeSections() {
    return '<nav class="yt-sections" aria-label="YouTube 콘텐츠 메뉴">'+[['home','홈'],['subscriptions','구독'],['music','음악'],['live','라이브'],['more','더보기']].map(([section,label])=>'<button type="button" '+(section==='home'?'data-action="yt-section"':'disabled aria-disabled="true"')+' data-section="'+section+'" class="'+(state.ytSection===section?'active':'')+'" aria-current="'+(state.ytSection===section?'page':'false')+'">'+label+'</button>').join('')+'</nav>';
  }
  function youtubeThumb(down=false) {
    return '<svg class="icon'+(down?' yt-thumb-down':'')+'" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 10.4 10.5 4a1.6 1.6 0 0 1 1.5-.9c1.8 0 2.7 1.6 2.3 3.3l-.7 3h4.6c1.7 0 2.9 1.5 2.6 3.1l-1.3 5.9a2.6 2.6 0 0 1-2.5 2.1h-5.9c-.9 0-1.9-.2-2.7-.6l-1.3-.6M3.5 10.4h3.6v10H3.5a.9.9 0 0 1-.9-.9v-8.2a.9.9 0 0 1 .9-.9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function youtubeReplyIcon() {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 4h10.4A3.2 3.2 0 0 1 20.4 7.2v8a3.2 3.2 0 0 1-3.2 3.2H11l-5.5 3.1v-3.3a3.2 3.2 0 0 1-1.9-3V7.2A3.2 3.2 0 0 1 6.8 4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.8 9h8.4m-8.4 4h5.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  }
  function youtubeLikeCount(count=0) {
    if(count>=10000)return new Intl.NumberFormat('ko-KR',{maximumFractionDigits:1}).format(Math.floor(count/1000)/10)+'만';
    if(count>=1000)return new Intl.NumberFormat('ko-KR',{maximumFractionDigits:1}).format(Math.floor(count/100)/10)+'천';
    return igNumber(count);
  }
  function youtubeComments(video) {
    const comments=video.comments||[],children=new Map(),colors=['#7d8c99','#927b89','#758c7c','#9b866c'];
    comments.forEach(comment=>{const parent=comment.parent||null;if(!children.has(parent))children.set(parent,[]);children.get(parent).push(comment);});
    const rows=(parent=null)=>(children.get(parent)||[]).map(comment=>{
      const index=comments.indexOf(comment),replies=children.has(comment.id)?'<ol class="yt-comment-replies" aria-label="답글">'+rows(comment.id)+'</ol>':'';
      return '<li class="yt-comment'+(parent?' is-reply':'')+'" data-comment="'+esc(comment.id)+'"'+(parent?' data-parent="'+esc(parent)+'"':'')+'><div class="yt-comment-row">'+avatar({initial:comment.username.replace(/^@/,'').slice(0,1).toUpperCase(),color:colors[index%colors.length]})+'<div class="yt-comment-body"><header><strong>'+esc(comment.username)+'</strong><span>'+esc(video.published)+'</span></header><p>'+esc(comment.text)+'</p><div class="yt-comment-actions" role="group" aria-label="댓글 반응"><span class="yt-comment-like" role="img" aria-label="좋아요 '+igNumber(comment.likes||0)+'개">'+youtubeThumb()+'<span class="yt-comment-like-count">'+youtubeLikeCount(comment.likes)+'</span></span><span class="yt-comment-dislike" role="img" aria-label="싫어요">'+youtubeThumb(true)+'</span><span class="yt-comment-reply" role="img" aria-label="답글">'+youtubeReplyIcon()+'</span></div></div></div>'+replies+'</li>';
    }).join('');
    return '<section class="yt-comments" aria-labelledby="ytCommentsTitle"><header class="yt-comments-header"><h2 id="ytCommentsTitle">댓글 <span>'+comments.length+'</span></h2><button type="button" disabled aria-disabled="true" aria-label="댓글 정렬">'+icon('filter')+'</button></header><ol class="yt-comment-list" aria-label="전체 댓글">'+rows()+'</ol></section>';
  }
  function renderYouTubeWatch(video) {
    const player='<section class="yt-player yt-preview-player" aria-label="'+esc(video.title)+' 영상 미리보기"><img src="'+esc(video.poster)+'" alt="'+esc(video.posterLabel)+'"><div class="yt-player-topbar"><button type="button" data-action="back" aria-label="영상 목록으로 돌아가기">'+icon('chevron-down')+'</button><button type="button" disabled aria-disabled="true" aria-label="영상 메뉴">'+icon('ellipsis')+'</button></div><span class="yt-player-play" aria-hidden="true">'+icon('play')+'</span><div class="yt-preview-controls" aria-hidden="true"><span>0:00 / '+esc(video.duration||'0:47')+'</span><span class="yt-preview-hd">HD</span><svg class="icon" viewBox="0 0 24 24"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" fill="none" stroke="currentColor" stroke-width="1.7"/></svg></div><span class="yt-preview-progress" aria-hidden="true"></span></section>';
    const info='<section class="yt-watch-info"><h1 tabindex="-1">'+esc(video.title)+'</h1><p class="yt-watch-meta">조회수 '+youtubeViewCount(video.views)+' · '+esc(video.published)+'</p><div class="yt-channel-row">'+avatar({initial:video.channel.slice(0,1),color:video.channelColor})+'<strong>'+esc(video.channel)+'</strong><button type="button" class="yt-subscribe" disabled aria-disabled="true">구독</button></div><div class="yt-watch-actions"><button type="button" disabled aria-disabled="true" aria-label="좋아요 '+igNumber(video.likes||0)+'개">'+youtubeThumb()+'<span>'+youtubeLikeCount(video.likes)+'</span></button><button type="button" disabled aria-disabled="true">'+icon('notes-share')+'공유</button><button type="button" disabled aria-disabled="true">'+icon('bookmark')+'저장</button></div></section>';
    return '<div class="app-view youtube-app yt-watch-page">'+player+'<div class="app-scroll yt-watch-scroll">'+info+youtubeComments(video)+'</div></div>';
  }
  function youtubeId(raw) {
    try{
      const url=new URL(/^https?:\/\//i.test(raw)?raw:'https://'+raw);
      const host=url.hostname.toLowerCase().replace(/^www\./,'');
      let id='';
      if(host==='youtu.be')id=url.pathname.split('/')[1];
      else if(['youtube.com','m.youtube.com','music.youtube.com'].includes(host)){
        if(url.pathname==='/watch')id=url.searchParams.get('v') || '';
        else if(/^\/(shorts|embed|live)\//.test(url.pathname))id=url.pathname.split('/')[2];
      }
      return /^[A-Za-z0-9_-]{11}$/.test(id)?id:null;
    }catch{return null;}
  }
  function renderYouTube(route) {
    const all=youtubeVideos(),shorts=youtubeShorts();
    if(C.youtube.displayOnly&&route.page==='add')return renderYouTube({app:'youtube'});
    if(route.page==='add')return '<div class="app-view youtube-app">'+nav('YouTube','영상 추가')+'<form class="social-form" id="ytAddForm"><label for="ytVideoUrl">YouTube 링크</label><input id="ytVideoUrl" placeholder="https://youtu.be/..." required><label for="ytVideoTitle">영상 제목</label><input id="ytVideoTitle" placeholder="제목" maxlength="120" required><label for="ytVideoChannel">채널 이름</label><input id="ytVideoChannel" placeholder="선택 사항" maxlength="60"><button class="primary-button" type="submit">추가</button><p class="social-form-hint">이 폰에 표시할 영상을 추가합니다.</p></form></div>';
    if(route.page==='video'){
      const v=all.find(v=>v.id===route.id);if(!v||v.clickable===false)return renderYouTube({app:'youtube'});
      if(C.youtube.displayOnly)return renderYouTubeWatch(v);
      const liked=state.youtube.liked.includes(v.id),saved=state.youtube.saved.includes(v.id),subscribed=state.youtube.subscriptions.includes(v.channel);
      return '<div class="app-view youtube-app">'+nav('YouTube')+'<div class="yt-player"><iframe src="https://www.youtube-nocookie.com/embed/'+esc(v.id)+'?playsinline=1&amp;rel=0" title="'+esc(v.title)+'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="app-scroll"><section class="yt-watch-info"><h1 tabindex="-1">'+esc(v.title)+'</h1><div class="yt-channel-row">'+avatar({initial:v.channel.slice(0,1),color:'#70897b'})+'<strong>'+esc(v.channel)+'</strong><button class="yt-subscribe '+(subscribed?'selected':'')+'" data-action="yt-toggle" data-kind="subscriptions" data-value="'+esc(v.channel)+'" aria-pressed="'+subscribed+'">'+(subscribed?'구독 중':'구독')+'</button></div><div class="yt-watch-actions"><button class="'+(liked?'selected':'')+'" data-action="yt-toggle" data-kind="liked" data-value="'+esc(v.id)+'" aria-pressed="'+liked+'">'+icon('heart')+(liked?'좋아요 표시함':'좋아요')+'</button><button class="'+(saved?'selected':'')+'" data-action="yt-toggle" data-kind="saved" data-value="'+esc(v.id)+'" aria-pressed="'+saved+'">'+icon('bookmark')+(saved?'저장됨':'저장')+'</button></div><a class="yt-external" href="https://www.youtube.com/watch?v='+esc(v.id)+'" target="_blank" rel="noopener">YouTube에서 열기 '+icon('chevron-right')+'</a></section><h2 class="social-section-title">다음 영상</h2>'+youtubeCards(all.filter(x=>x.id!==v.id))+'</div></div>';
    }
    if(route.page==='notifications')return '<div class="app-view youtube-app">'+nav('YouTube','알림')+'<div class="app-scroll"><div class="yt-notification-empty">'+icon('bell')+'<h1 tabindex="-1">아직 알림이 없어요</h1></div></div></div>';
    if(route.page==='search')return '<div class="app-view youtube-app"><header class="yt-searchbar"><button data-action="back" aria-label="YouTube로 돌아가기">'+icon('chevron-left')+'</button>'+search('영상 또는 채널 검색','youtube')+'</header><div class="app-scroll yt-feed" id="ytSearchResults">'+youtubeSearchContents()+'</div></div>';
    let content='';
    if(state.ytTab==='you'){
      const list=state.ytLibrary==='saved'?all.filter(v=>state.youtube.saved.includes(v.id)):state.youtube.history.map(id=>all.find(v=>v.id===id)).filter(Boolean);
      content='<section class="yt-you">'+avatar({initial:'힐',color:'#77867c'})+'<h1 tabindex="-1">'+esc(C.owner)+'</h1></section><div class="yt-chips"><button data-action="yt-library" data-tab="history" class="'+(state.ytLibrary==='history'?'selected':'')+'">시청 기록</button><button data-action="yt-library" data-tab="saved" class="'+(state.ytLibrary==='saved'?'selected':'')+'">저장한 영상</button></div>'+youtubeCards(list);
    }else if(state.ytTab==='shorts')content=youtubeShortsGrid(shorts);
    else if(state.ytSection==='subscriptions')content=youtubeCards(all.filter(v=>state.youtube.subscriptions.includes(v.channel)),'구독한 채널이 없어요.');
    else if(state.ytSection==='music')content=youtubeCards(all.filter(v=>v.category==='음악'),'음악 동영상이 없어요.');
    else if(state.ytSection==='live')content=youtubeCards(all.filter(v=>v.isLive===true),'진행 중인 라이브가 없어요.');
    else if(state.ytSection==='more'){
      const filters=['전체',...new Set(all.map(v=>v.category))];
      content='<div class="yt-chips">'+filters.map(filter=>'<button data-action="yt-filter" data-filter="'+esc(filter)+'" class="'+(state.ytFilter===filter?'selected':'')+'">'+esc(filter)+'</button>').join('')+'</div>'+youtubeCards(all.filter(v=>state.ytFilter==='전체'||v.category===state.ytFilter));
    }else content=youtubeCards(all)+youtubeShortsShelf(shorts);
    return '<div class="app-view youtube-app"><header class="social-header yt-header"><h1 class="yt-wordmark" tabindex="-1"><img src="assets/youtube-wordmark.svg?v=20261018bd" alt="YouTube"></h1><span class="social-header-actions"><button type="button" disabled aria-disabled="true" aria-label="알림">'+icon('bell')+'</button><button type="button" disabled aria-disabled="true" aria-label="영상 검색">'+icon('search')+'</button></span></header>'+(state.ytTab==='home'?youtubeSections():'')+'<div class="app-scroll yt-feed">'+content+'</div>'+youtubeTabs()+'</div>';
  }
  function bindView(route) {
    if(route.app==='youtube'&&Number.isFinite(route.ytScrollTop)){
      const scroll=$('.yt-feed',layer);if(scroll)scroll.scrollTop=route.ytScrollTop;
    }
    if(route.app==='instagram'){
      const scroll=$('.app-scroll',layer);
      if(scroll&&Number.isFinite(route.igScrollTop))scroll.scrollTop=route.igScrollTop;
      else if(route.page==='post'&&scroll){
        const selected=$('[data-post="'+route.id+'"]',scroll),first=scroll.firstElementChild;
        if(selected&&first)scroll.scrollTop=Math.max(0,selected.offsetTop-first.offsetTop);
      }
    }
    if(route.app==='safari')restoreSafariPosition();
    if(route.app==='messages'&&!route.page){
      const input=$('[data-search="messages"]');if(input)input.value=state.messagesQuery;
      restoreMessagesListPosition();
    }
    if(route.app==='messages'&&route.page==='thread')$('#chatBubbles').scrollTop=$('#chatBubbles').scrollHeight;
    if(route.app==='kakao'&&!route.page){
      const input=$('[data-search="kakao"]');if(input)input.value=state.kakaoQuery;
      restoreKakaoListPosition();
    }
    if(route.app==='phone'&&route.page==='profile'){
      const scroll=$('.phone-profile-scroll');scroll?.addEventListener('scroll',()=>$('.phone-contact-app')?.classList.toggle('is-collapsed',scroll.scrollTop>230),{passive:true});
    }
    if(route.app==='clock'&&!route.page&&state.clockTab==='timer')bindTimerWheels();
    if(route.app==='phone'&&!route.page){
      const input=$('[data-search="phone"]');if(input){input.value=state.phoneQuery;if(state.phoneSearch)input.focus();}
    }
    if(route.app==='photos'){
      const scroll=$('#photoLibraryScroll'),position=()=>{if(scroll?.isConnected)scroll.scrollTop=scroll.scrollHeight||0;};
      position();if(typeof window.requestAnimationFrame==='function')window.requestAnimationFrame(position);
    }
    $('#igCommentForm')?.addEventListener('submit',e=>{
      e.preventDefault();
      const text=$('#igCommentInput').value.trim();if(!text)return;
      if(!state.instagram.comments[route.id])state.instagram.comments[route.id]=[];
      state.instagram.comments[route.id].push({text:text.slice(0,500)});
      save('instagram');navigate({...route});
    });
    $('#ytAddForm')?.addEventListener('submit',e=>{
      e.preventDefault();
      const id=youtubeId($('#ytVideoUrl').value.trim());
      if(!id){toast('올바른 YouTube 영상 링크를 붙여 넣어 주세요.');return;}
      if(!youtubeVideos().some(v=>v.id===id)){
        const title=$('#ytVideoTitle').value.trim();if(!title)return;
        state.youtube.added.unshift({id,title,channel:$('#ytVideoChannel').value.trim()||'추가한 영상',category:'추가한 영상'});
        save('youtube');
      }
      state.youtube.history=[id].concat(state.youtube.history.filter(x=>x!==id)).slice(0,50);
      save('youtube');navigate({app:'youtube',page:'video',id});
    });
    const composer=$('#chatComposer');
    if(composer){
      const input=$('#messageInput'),send=$('.send-button');
      const updateComposer=()=>{const filled=Boolean(input.value.trim());send.disabled=!filled;if(route.app==='kakao'){send.hidden=!filled;$('.kakao-compose-hash').hidden=filled;}input.style.height='auto';input.style.height=Math.min(input.scrollHeight,100)+'px';};
      input.addEventListener('input',updateComposer);
      const scene=C.kakaoScene;
      const privacyReplyPending=()=>Boolean(scene&&route.app==='kakao'&&route.id===scene.chatId&&kakaoScene.started&&!kakaoScene.replied&&state.kakao.find(chat=>chat.id===scene.chatId)?.items.some(message=>message.eventId===scene.opening.id));
      if(route.app==='kakao'&&route.id===scene?.chatId){
        const prefillPrivacyReply=()=>{
          if(!privacyReplyPending()||input.value.trim())return;
          input.value=scene.sentText;
          input.setSelectionRange?.(input.value.length,input.value.length);
          updateComposer();
        };
        input.addEventListener('focus',prefillPrivacyReply);
        input.addEventListener('click',prefillPrivacyReply);
      }
      composer.addEventListener('submit',event=>{
        event.preventDefault();
        const text=input.value.trim();if(!text)return;
        const chat=state[route.app].find(c=>c.id===route.id);if(!chat)return;
        const d=dateParts(),time=pad(d.hour)+':'+pad(d.minute);
        const sceneReply=privacyReplyPending()&&text===scene.sentText;
        const message={mine:true,text,time};
        if(sceneReply)kakaoScene.replied=true;
        if(route.app==='kakao'){message.date=kakaoDay();message.unreadReaders=0;}
        chat.items.push(message);chat.time=time;save(route.app);
        appendChatBubble(route.app,chat,message);
        input.value='';updateComposer();
        $('#chatBubbles').scrollTop=$('#chatBubbles').scrollHeight;
        renderHome();
        if(sceneReply)replyToKakaoScene();
      });
      $('#chatBubbles').scrollTop=$('#chatBubbles').scrollHeight;
    }
    if(route.app==='notes'&&route.page==='edit'){
      const resize=input=>{input.style.height='auto';input.style.height=Math.max(input.id==='noteBody'?260:26,input.scrollHeight)+'px';};
      const update=()=>{
        const n=state.notes.find(n=>n.id===route.id);if(!n)return;
        recordNoteUndo(n);
        const title=$('#noteTitle'),body=$('#noteBody');
        if(title)n.title=title.value;
        if(body){n.body=body.value;resize(body);}
        if(n.kind==='checklist'){
          layer.querySelectorAll('[data-note-check-text]').forEach(input=>{
            const item=n.checklist[Number(input.dataset.noteCheckText)];
            if(item)item.text=input.value;resize(input);
            input.parentElement.querySelector('[role="checkbox"]').setAttribute('aria-label',input.value||'할 일');
          });
          syncChecklistBody(n);
        }
        persistNoteEdit(n);
      };
      $('#noteTitle')?.addEventListener('input',update);
      $('#noteBody')?.addEventListener('input',update);
      layer.querySelectorAll('.note-body-input,[data-note-check-text]').forEach(input=>{resize(input);if(input.hasAttribute('data-note-check-text'))input.addEventListener('input',update);});
    }
    const alarmForm=$('#alarmForm');
    alarmForm?.addEventListener('submit',e=>{
      e.preventDefault();
      const [hour,minute]=$('#alarmTime').value.split(':').map(Number);
      if(!Number.isFinite(hour)||!Number.isFinite(minute))return;
      state.alarms.push({id:'alarm-'+Date.now(),hour,minute,label:$('#alarmLabel').value.trim()||'알람',enabled:true});
      state.alarms.sort((a,b)=>(a.hour*60+a.minute)-(b.hour*60+b.minute));
      save('alarms');navigate({app:'clock'});
    });
    $('#safariForm')?.addEventListener('submit',e=>{
      e.preventDefault();runGoogleSearch($('#safariQuery').value);
    });

  }
  function openThread(app,id) {
    if(app==='kakao'&&id===C.kakaoScene?.chatId&&!kakaoOpeningSound.played){
      stopKakaoOpeningSound();kakaoOpeningSound.played=true;
    }
    if(!['messages','kakao'].includes(app))return;
    if(!state[app].some(chat=>chat.id===id))return;
    if(app==='kakao'){
      const chat=state.kakao.find(chat=>chat.id===id);
      if(!chat.baseDate){chat.baseDate=kakaoDay();save('kakao');}
      if(![0,1,2].includes(state.kakaoAvatarVariants[id])){state.kakaoAvatarVariants[id]=Math.floor(Math.random()*3);save('kakaoAvatarVariants');}
    }
    navigate({app,page:'thread',id});
  }
  let safariPointerFocus=false;
  document.addEventListener('pointerdown',event=>{
    safariPointerFocus=state.route?.app==='safari'&&!!event.target.closest('#safariForm');
    if(event.target.closest('#safariKeyboard button,#safariKeyboardAccessory button'))event.preventDefault();
  });
  // Keep the origin through iOS focus-induced pointer cancellation.
  // The next pointerdown replaces it before any new intentional tap.
  document.addEventListener('pointercancel',()=>{if(state.route?.app!=='safari')safariPointerFocus=false;});
  document.addEventListener('focusin',event=>{
    // Native keyboard activation can consume the later click on iOS.
    // Show history on focus itself, including pointer-initiated focus.
    if(event.target.id==='safariQuery')setSafariSearch(true);
  });
  document.addEventListener('click',event=>{
    const beganOnSearch=safariPointerFocus;
    safariPointerFocus=false;
    if(state.route?.app==='safari'){
      if(beganOnSearch||event.target.closest('#safariForm')){
        // Opening search can move a history row under the original finger position.
        // Consume that one opening click instead of activating the retargeted row.
        if(beganOnSearch&&!event.target.closest('#safariForm'))event.preventDefault();
        activateSafariSearch();return;
      }
      else if(!event.target.closest('#googleRecentSearches,#safariKeyboard,#safariKeyboardAccessory,[data-action="safari-search"],[data-action="safari-back"]'))setSafariSearch(false);
    }
    if(state.messagesMenu&&!event.target.closest('.messages-menu,.messages-topbar')){
      state.messagesMenu=null;$('.messages-menu')?.remove();$$('.messages-topbar [aria-expanded]').forEach(button=>button.setAttribute('aria-expanded','false'));
    }
    if(state.route?.app==='phone'&&state.phoneMenu&&!event.target.closest('.phone-filter-menu,.phone-filter-button')){
      state.phoneMenu=false;$('.phone-filter-menu')?.remove();
      $('.phone-filter-button')?.setAttribute('aria-expanded','false');
    }
    const el=event.target.closest('button');
    if(!el||el.disabled)return;
    if(el.dataset.open){
      navigate({app:el.dataset.open});return;
    }
    if(el.dataset.openNote){
      if(el.dataset.openNote==='new')createNote();else navigate({app:'notes',page:'edit',id:el.dataset.openNote});
      return;
    }
    const action=el.dataset.action,id=el.dataset.id;
    switch(action){
      case 'control-center':$('#controlCenter').hidden?openControlCenter():closeControlCenter();break;
      case 'control-close':closeControlCenter();break;
      case 'control-toggle':{
        const control=el.dataset.control;
        if(!['airplane','cellular','wifi','bluetooth','rotation','focus'].includes(control))break;
        state.controls[control]=!state.controls[control];renderControlCenter();
        $('#controlCenter [data-control="'+control+'"]')?.focus();break;
      }
      case 'safari-search':if(state.route?.page==='community')navigate({app:'safari',page:'search',query:GOOGLE_PERSON_QUERY});else if(['fan-community','fan-post'].includes(state.route?.page))navigate({app:'safari',page:'search',query:fanBoard()?.searchQuery||GOOGLE_FAN_QUERY});activateSafariSearch();break;
      case 'safari-search-close':setSafariSearch(false);break;
      case 'safari-back':state.safariSearchOpen?setSafariSearch(false):back();break;
      case 'safari-key':typeSafariKey(el.dataset.key);break;
      case 'safari-key-delete':deleteSafariKey();break;
      case 'safari-key-shift':state.safariKeyShift=!state.safariKeyShift;syncSafariSearchUI();break;
      case 'safari-key-numbers':state.safariKeyNumbers=!state.safariKeyNumbers;state.safariKeyShift=false;syncSafariSearchUI();break;
      case 'safari-key-language':state.safariKeyLanguage=state.safariKeyLanguage==='en'?'ko':'en';state.safariKeyNumbers=false;state.safariKeyShift=false;syncSafariSearchUI();break;
      case 'safari-key-search':runGoogleSearch($('#safariQuery')?.value);break;
      case 'safari-keyboard-done':state.safariKeyboardOpen=false;$('#safariQuery')?.blur();syncSafariSearchUI();break;
      case 'back':back();break;
      case 'notification':openThread(el.dataset.app,id);break;
      case 'notification-open':hideNotificationBanner();openThread(el.dataset.app,id);break;
      case 'toggle-auto-notifications':if(C.notifications?.enabled===false)break;state.settings.autoNotifications=state.settings.autoNotifications===false;stopNotificationSchedule();if(state.settings.autoNotifications)startNotificationSchedule();save('settings');navigate({...state.route});break;
      case 'test-kakao-sound':testKakaoOpeningSound();break;
      case 'test-notification':{if(C.notifications?.enabled===false)break;const example=C.notifications?.events?.[0];if(example)deliverLocalNotification(example,true);break;}
      case 'thread':openThread(el.dataset.app,id);break;
      case 'messages-menu':if(!['edit','filter'].includes(el.dataset.menu))break;state.messagesMenu=state.messagesMenu===el.dataset.menu?null:el.dataset.menu;navigate({app:'messages'});break;
      case 'messages-filter':if(!['all','unread'].includes(el.dataset.filter))break;state.messagesFilter=el.dataset.filter;state.messagesMenu=null;navigate({app:'messages'});break;
      case 'messages-mark-read':state.messages.forEach(chat=>chat.unread=0);save('messages');state.messagesMenu=null;navigate({app:'messages'});renderHome();break;
      case 'profile':navigate({app:state.route?.app==='kakao'?'kakao':'phone',page:'profile',id});break;
      case 'kakao-chats':navigate({app:'kakao'});break;
      case 'kakao-search':state.kakaoSearch=!state.kakaoSearch;if(!state.kakaoSearch)state.kakaoQuery='';navigate({app:'kakao'});$('[data-search="kakao"]')?.focus();break;
      case 'kakao-search-close':state.kakaoSearch=false;state.kakaoQuery='';navigate({app:'kakao'});break;
      case 'kakao-filter':if(!['all','unread'].includes(el.dataset.filter))break;state.kakaoFilter=el.dataset.filter;navigate({app:'kakao'});break;
      case 'notes-more':state.notesMenu=!state.notesMenu;navigate({app:'notes'});break;
      case 'notes-pin-toggle':state.notesPinnedCollapsed=!state.notesPinnedCollapsed;state.notesMenu=false;navigate({app:'notes'});break;
      case 'new-note':createNote();break;
      case 'note-check':{
        const note=state.notes.find(n=>n.id===state.route?.id),index=Number(el.dataset.index),item=note?.checklist?.[index];
        if(!item)break;
        recordNoteUndo(note);item.checked=!item.checked;
        el.setAttribute('aria-checked',String(item.checked));el.closest('.note-check-row').classList.toggle('is-checked',item.checked);
        persistNoteEdit(note);break;
      }
      case 'note-toggle-checklist':{
        const note=state.notes.find(n=>n.id===state.route?.id);if(!note)break;
        recordNoteUndo(note);
        if(note.kind==='checklist'){syncChecklistBody(note);delete note.kind;delete note.checklist;}
        else{note.kind='checklist';note.checklist=note.body.split('\n').map(text=>({text,checked:false}));syncChecklistBody(note);}
        persistNoteEdit(note);navigate({...state.route});break;
      }
      case 'note-undo-edit':{
        const id=state.route?.id,history=state.noteUndo[id],index=state.notes.findIndex(n=>n.id===id);
        if(index<0||!history?.length)break;
        state.notes[index]=history.pop();save('notes');navigate({...state.route});renderHome();break;
      }
      case 'delete-note':{
        const i=state.notes.findIndex(n=>n.id===state.route.id);if(i<0)break;
        state.deletedNote={note:state.notes[i],index:i};state.notes.splice(i,1);save('notes');
        navigate({app:'notes'});renderHome();toast('메모를 삭제했어요.',true);break;
      }
      case 'undo-note':{
        if(state.deletedNote){state.notes.splice(state.deletedNote.index,0,state.deletedNote.note);state.deletedNote=null;save('notes');navigate({app:'notes'});renderHome();toast('메모를 복원했어요.');}break;
      }
      case 'lock':lock();break;
      case 'toggle-previews':state.settings.previews=!state.settings.previews;save('settings');navigate({...state.route});renderNotifications();if(liveNotifications.current){pauseNotificationBanner();pumpNotificationQueue();}break;
      case 'about':navigate({app:'settings',page:'about'});break;
      case 'calendar-year':state.calendarPicker=!state.calendarPicker;state.calendarDetail=false;state.calendarSearch=false;navigate({app:'calendar'});break;
      case 'calendar-month':calendarMonth=Number(el.dataset.month);calendarDay=1;state.calendarPicker=false;state.calendarList=false;navigate({app:'calendar'});break;
      case 'prev-year':case 'next-year':calendarYear+=action==='next-year'?1:-1;navigate({app:'calendar'});break;
      case 'calendar-view':state.calendarList=!state.calendarList;state.calendarPicker=false;state.calendarSearch=false;state.calendarDetail=false;navigate({app:'calendar'});break;
      case 'calendar-search':state.calendarSearch=!state.calendarSearch;state.calendarPicker=false;state.calendarDetail=false;navigate({app:'calendar'});$('[data-search="calendar"]')?.focus();break;
      case 'calendar-today':{const d=dateParts();calendarYear=Number(d.year);calendarMonth=Number(d.month)-1;calendarDay=Number(d.day);state.calendarPicker=false;state.calendarList=false;state.calendarSearch=false;state.calendarDetail=false;navigate({app:'calendar'});break;}
      case 'calendar-close-detail':state.calendarDetail=false;navigate({app:'calendar'});break;
      case 'calendar-day':calendarDay=Number(el.dataset.day);state.calendarSearch=false;state.calendarDetail=true;navigate({app:'calendar'});break;
      case 'prev-month':case 'next-month':{
        const next=new Date(calendarYear,calendarMonth+(action==='next-month'?1:-1),1);
        calendarYear=next.getFullYear();calendarMonth=next.getMonth();calendarDay=1;state.calendarPicker=false;state.calendarList=false;state.calendarDetail=false;navigate({app:'calendar'});break;
      }
      case 'clock-tab':if(!['world','alarms','stopwatch','timer'].includes(el.dataset.tab))break;state.clockTab=el.dataset.tab;state.clockEditing=false;navigate({app:'clock'});break;
      case 'clock-edit':state.clockEditing=!state.clockEditing;navigate({app:'clock'});break;
      case 'delete-alarm':state.alarms=state.alarms.filter(a=>a.id!==id);save('alarms');navigate({app:'clock'});break;
      case 'stopwatch-toggle':{const sw=state.stopwatch;if(sw.running){sw.elapsed=stopwatchElapsed();sw.running=false;}else{sw.startedAt=Date.now();sw.running=true;}navigate({app:'clock'});break;}
      case 'stopwatch-lap':if(state.stopwatch.running)state.stopwatch.laps.unshift(stopwatchElapsed());else{state.stopwatch.elapsed=0;state.stopwatch.laps=[];}navigate({app:'clock'});break;
      case 'timer-toggle':{const timer=state.timer;if(timer.running){timer.remaining=Math.max(0,(timer.endsAt-Date.now())/1000);timer.running=false;}else{if(timer.duration<=0)break;if(timer.remaining<=0)timer.remaining=timer.duration;timer.endsAt=Date.now()+timer.remaining*1000;timer.running=true;}navigate({app:'clock'});break;}
      case 'timer-cancel':state.timer.running=false;state.timer.remaining=state.timer.duration;navigate({app:'clock'});break;
      case 'new-alarm':state.clockTab='alarms';navigate({app:'clock',page:'add'});break;
      case 'toggle-alarm':{
        const a=state.alarms.find(a=>a.id===id);if(a){a.enabled=!a.enabled;save('alarms');navigate({app:'clock'});}break;
      }
      case 'phone-tab':
        if(!['recent','contacts'].includes(el.dataset.tab))break;
        state.phoneTab=el.dataset.tab;state.phoneEditing=false;state.phoneMenu=false;state.phoneSearch=false;state.phoneQuery='';navigate({app:'phone'});break;
      case 'phone-search':state.phoneSearch=!state.phoneSearch;state.phoneQuery='';if(state.phoneTab==='keypad')state.phoneTab='recent';state.phoneMenu=false;navigate({app:'phone'});break;
      case 'phone-search-close':state.phoneSearch=false;state.phoneQuery='';navigate({app:'phone'});break;
      case 'phone-contact-letter':$('#phoneContactGroup-'+el.dataset.letter)?.scrollIntoView?.({block:'start',behavior:reducedMotion()?'auto':'smooth'});break;
      case 'phone-filter':state.phoneFilter=el.dataset.filter==='missed'?'missed':'all';state.phoneMenu=false;navigate({app:'phone'});break;
      case 'phone-filter-menu':state.phoneMenu=!state.phoneMenu;navigate({app:'phone'});break;
      case 'phone-edit':state.phoneEditing=!state.phoneEditing;state.phoneMenu=false;navigate({app:'phone'});break;
      case 'phone-delete-call':state.phoneCalls=state.phoneCalls.filter(call=>call.id!==id);save('phoneCalls');refreshPhoneRows();break;
      case 'phone-info':navigate({app:'phone',page:'profile',id});break;
      case 'dial-key':state.dial=(state.dial+el.dataset.key).slice(0,18);updateDialNumber();break;
      case 'dial-delete':state.dial=state.dial.slice(0,-1);updateDialNumber();break;
      case 'dial-call':case 'call':case 'call-toggle':break;
      case 'ig-tab':if(!['home','profile'].includes(el.dataset.tab))break;state.igTab=el.dataset.tab;navigate({app:'instagram'});break;
      case 'ig-post':navigate({app:'instagram',page:'post',id,...(el.dataset.profile?{profileUsername:el.dataset.profile}:{}),returnRoute:igReturnRoute()});break;
      case 'ig-user':{
        if(!igAccount(el.dataset.user))break;
        const returnRoute=state.route?.app==='instagram'?igReturnRoute():undefined;
        navigate({app:'instagram',page:'profile',username:el.dataset.user,returnRoute});break;
      }
      case 'ig-connections':navigate({app:'instagram',page:'connections',kind:el.dataset.kind,returnRoute:igReturnRoute()});break;
      case 'ig-toggle-tags':state.igTagsVisible[id]=!state.igTagsVisible[id];refreshSocial();break;
      case 'ig-comments':navigate({app:'instagram',page:'comments',id,...(state.route?.page==='post'?{returnRoute:igReturnRoute()}:{})});break;
      case 'ig-like':{
        if(!igFindPost(id))break;
        state.instagram.likes=state.instagram.likes.includes(id)?state.instagram.likes.filter(x=>x!==id):state.instagram.likes.concat(id);
        save('instagram');refreshSocial();break;
      }
      case 'yt-tab':
        if(el.dataset.tab!=='home')break;
        state.ytTab=el.dataset.tab;if(state.ytTab==='home')state.ytSection='home';navigate({app:'youtube'});break;
      case 'yt-section':
        if(el.dataset.section!=='home')break;
        state.ytSection=el.dataset.section;state.ytTab='home';navigate({app:'youtube'});break;
      case 'yt-notifications':break;
      case 'yt-library':state.ytLibrary=el.dataset.tab;navigate({app:'youtube'});break;
      case 'yt-filter':state.ytFilter=el.dataset.filter;navigate({app:'youtube'});break;
      case 'yt-search':break;
      case 'yt-add':navigate({app:'youtube',page:'add'});break;
      case 'yt-video':{
        if(!youtubeVideos().some(v=>v.id===id&&v.clickable!==false))break;
        const returnRoute=state.route.page==='video'?(state.route.returnRoute||{app:'youtube'}):{...state.route,ytScrollTop:$('.yt-feed',layer)?.scrollTop||0};
        state.youtube.history=[id].concat(state.youtube.history.filter(x=>x!==id)).slice(0,50);
        save('youtube');navigate({app:'youtube',page:'video',id,returnRoute});break;
      }
      case 'yt-toggle':{
        const field=el.dataset.kind,value=el.dataset.value;
        if(!['liked','saved','subscriptions'].includes(field))break;
        const on=!state.youtube[field].includes(value);
        state.youtube[field]=on?state.youtube[field].concat(value):state.youtube[field].filter(x=>x!==value);
        save('youtube');el.classList.toggle('selected',on);el.setAttribute('aria-pressed',String(on));
        el.innerHTML=field==='subscriptions'?(on?'구독 중':'구독'):field==='liked'?icon('heart')+(on?'좋아요 표시함':'좋아요'):icon('bookmark')+(on?'저장됨':'저장');
        break;
      }
      case 'google-home':navigate({app:'safari'});break;
      case 'google-search':runGoogleSearch(el.dataset.query);break;
      case 'google-fan-board':{
        const board=fanBoard(el.dataset.board);if(state.route?.app!=='safari'||!board)break;
        navigate(board.singlePost?{app:'safari',page:'fan-post',board:board.id,id:board.posts[0].id,returnRoute:{...state.route}}:{app:'safari',page:'fan-community',board:board.id});break;
      }
      case 'google-fan-post':if(state.route?.app==='safari'&&fanBoard(el.dataset.board)?.posts.some(post=>post.id===id&&post.clickable!==false))navigate({app:'safari',page:'fan-post',board:el.dataset.board,id,returnRoute:{...state.route}});break;
      case 'google-fan-filter':if(state.route?.page==='fan-community'&&['all','popular'].includes(el.dataset.filter)&&!(fanBoard()?.theme==='qoo'&&el.dataset.filter==='popular'))navigate({...state.route,filter:el.dataset.filter});break;
      case 'google-fan-list':if(['fan-post','community'].includes(state.route?.page)&&fanBoard(el.dataset.board))navigate({app:'safari',page:'fan-community',board:el.dataset.board,filter:state.route.returnRoute?.filter||'all'});break;
      case 'crgall-top':if(state.route?.app==='safari'&&state.route.page==='fan-post'&&fanBoard()?.theme==='crgall')$('#fanPageScroll').scrollTop=0;break;
      case 'google-community':if(state.route?.app==='safari'&&state.route.query===GOOGLE_PERSON_QUERY&&C.safari.personSearch.posts.some(post=>post.id===id))navigate({app:'safari',page:'community',id});break;
      case 'google-community-back':back();break;
      case 'google-remove':state.safariHistory=state.safariHistory.filter(q=>q!==el.dataset.query);save('safariHistory');$('#googleHistory').innerHTML=renderGoogleHistory($('#safariQuery')?.value || '');break;
    }
  });
  document.addEventListener('input',event=>{
    const control=event.target.dataset.controlRange;
    if(control==='brightness'||control==='volume'){
      const value=Math.max(control==='brightness'?15:0,Math.min(100,Number(event.target.value)||0));
      state.controls[control]=value;
      const slider=event.target.closest('.cc-slider');slider.style.setProperty('--level',value+'%');
      $('output',slider).textContent=value+'%';
      if(control==='brightness')$('#screenDimmer').style.opacity=String((100-value)/125);
      return;
    }
    if(event.target.id==='timerLabel'){state.timer.label=event.target.value.slice(0,40);return;}
    const type=event.target.dataset.search,q=event.target.value;
    if(!type)return;
    if(type==='kakao'){
      rememberKakaoListPosition();state.kakaoQuery=q;
      $('#kakaoListScroll').dataset.viewKey=kakaoListKey();
      $('#chatList').innerHTML=kakaoRows(q);restoreKakaoListPosition();
    }else if(type==='messages'){
      rememberMessagesListPosition();state.messagesQuery=q;
      $('#messagesListScroll').dataset.viewKey=messagesListKey();
      $('#chatList').innerHTML=chatRows(type,q);restoreMessagesListPosition();
    }
    else if(type==='notes'){
      state.notesQuery=q;
      const temp=document.createElement('div');temp.innerHTML=renderNotes(q);
      $('#notesResults').innerHTML=$('#notesResults',temp).innerHTML;
    }else if(type==='youtube'){
      const query=q.toLowerCase();
      $('#ytSearchResults').innerHTML=youtubeSearchContents(query);
    }else if(type==='safari'){
      if(!state.safariSearchOpen)activateSafariSearch();
      state.safariKeyUndo=[];$('#googleHistory').innerHTML=renderGoogleHistory(q);syncSafariSearchUI();
    }else if(type==='phone'){
      state.phoneQuery=q;refreshPhoneRows();
    }else if(type==='calendar'){
      state.calendarQuery=q;$('#calendarSearchResults').innerHTML=calendarEventList(q);

    }
  });
  document.addEventListener('error',event=>{
    const img=event.target;
    if(img.tagName==='IMG'&&img.dataset.fallback){const fallback=img.dataset.fallback;delete img.dataset.fallback;img.src=fallback;}
  },true);
  $('#unlockButton').addEventListener('click',unlock);
  $('#homeButton').addEventListener('click',()=>!$('#controlCenter').hidden?closeControlCenter():device.dataset.mode==='locked'?unlock():home());
  $('#lockScreen').addEventListener('touchstart',e=>{gestureStart=e.touches[0].clientY;},{passive:true});
  $('#lockScreen').addEventListener('touchend',e=>{
    if(gestureStart!==null&&gestureStart-e.changedTouches[0].clientY>45)unlock();
    gestureStart=null;
  },{passive:true});
  device.addEventListener('touchstart',e=>{
    const touch=e.touches[0],bounds=device.getBoundingClientRect();
    if(!bounds.height)return;
    const ratio=(device.clientHeight||844)/bounds.height;
    const x=(touch.clientX-bounds.left)*ratio,y=(touch.clientY-bounds.top)*ratio;
    systemGesture={x,y,startX:touch.clientX,startY:touch.clientY,fromLeft:x<24,fromTop:y<65&&x>(device.clientWidth||390)*.62,fromBottom:y>(device.clientHeight||844)-35,modal:!$('#controlCenter').hidden,slider:!!e.target.closest('.cc-slider')};
  },{passive:true});
  device.addEventListener('touchend',e=>{
    if(!systemGesture)return;
    const dy=e.changedTouches[0].clientY-systemGesture.startY,dx=e.changedTouches[0].clientX-systemGesture.startX;
    if(systemGesture.modal&&!systemGesture.slider&&dy<-65)closeControlCenter();
    else if(systemGesture.fromTop&&dy>40)openControlCenter();
    else if(!systemGesture.modal&&systemGesture.fromLeft&&dx>65&&Math.abs(dy)<55&&state.route?.page)back();
    else if(systemGesture.fromBottom&&dy<-40){
      if(!$('#controlCenter').hidden)closeControlCenter();
      else if(device.dataset.mode==='app')home();
    }
    systemGesture=null;
  },{passive:true});
  device.addEventListener('touchcancel',()=>{systemGesture=null;});
  document.addEventListener('keydown',e=>{
    if(e.key==='Tab')safariPointerFocus=false;
    if(!$('#controlCenter').hidden){
      if(e.key==='Escape'){e.preventDefault();closeControlCenter();return;}
      if(e.key==='Tab'){
        const controls=$$('button,input',$('#controlCenter'));
        const first=controls[0],last=controls[controls.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      }
      return;
    }
    if(e.key==='Escape'&&$('#googleRecentSearches')&&!$('#googleRecentSearches').hidden){e.preventDefault();setSafariSearch(false);return;}
    if(e.key==='Escape'){e.preventDefault();if(device.dataset.mode==='locked')unlock();else back();}
  });
  let bannerTouchY=null;
  $('#notificationBanner').addEventListener('touchstart',event=>{bannerTouchY=event.touches[0]?.clientY??null;},{passive:true});
  $('#notificationBanner').addEventListener('touchend',event=>{
    if(bannerTouchY!==null&&event.changedTouches[0]?.clientY<bannerTouchY-25)hideNotificationBanner();
    bannerTouchY=null;
  },{passive:true});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){pauseNotificationBanner();pauseIncomingSchedule();}else{pumpNotificationQueue();startIncomingSchedule();}
  });
  window.addEventListener('resize',()=>{fitDevice();syncSafariSearchViewport();});
  window.visualViewport?.addEventListener('resize',syncSafariSearchViewport);
  window.visualViewport?.addEventListener('scroll',syncSafariSearchViewport);
  if(state.settings.wallpaperRevision!=='black-gradient-20261019'){state.settings.wallpaper=null;state.settings.wallpaperRevision='black-gradient-20261019';save('settings');}
  if(C.phone.historyRevision&&state.settings.phoneHistoryRevision!==C.phone.historyRevision){
    state.phoneCalls=clone(C.phone.calls);
    try{localStorage.removeItem(PREFIX+'phoneCalls');localStorage.removeItem(PREFIX+'messages');}catch{}
    state.settings.phoneHistoryRevision=C.phone.historyRevision;save('settings');
  }
  const missingPromotions=(C.promotionalMessages||[]).filter(sample=>!state.messages.some(chat=>chat.id===sample.id));
  if(missingPromotions.length){state.messages.push(...clone(missingPromotions));save('messages');}
  state.messages.forEach(chat=>{if(!chat.baseDate)chat.baseDate=kakaoDay(chat.time==='어제'?-1:0);});
  let kakaoChanged=false;
  const palette=[0,1,2];
  for(let i=palette.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[palette[i],palette[j]]=[palette[j],palette[i]];}
  let avatarChanged=false;
  state.kakao.forEach((chat,index)=>{
    if(!chat.baseDate){chat.baseDate=kakaoDay(chat.time==='어제'?-1:0);kakaoChanged=true;}
    if(![0,1,2].includes(state.kakaoAvatarVariants[chat.id])){state.kakaoAvatarVariants[chat.id]=palette[index%3];avatarChanged=true;}
  });
  if(kakaoChanged)save('kakao');if(avatarChanged)save('kakaoAvatarVariants');
  if(state.settings.safariHistoryRevision!=='blackbadger-search-reversed-20261018'){state.safariHistory=clone(C.safari.recentSearches);state.settings.safariHistoryRevision='blackbadger-search-reversed-20261018';save('safariHistory');save('settings');}
  const safariHistoryWithoutWine=state.safariHistory.filter(query=>String(query).replace(/\s/g,'')!=='고급포도주');
  if(safariHistoryWithoutWine.length!==state.safariHistory.length){state.safariHistory=safariHistoryWithoutWine;save('safariHistory');}
  preloadKakaoOpeningSound();
  fitDevice();applyWallpaper();renderHome();updateClock();syncScreenAccessibility();
  setInterval(updateClock,1000);
  setInterval(()=>{if(state.route?.app==='clock'&&state.clockTab==='stopwatch'&&state.stopwatch.running)updateClockTools();},50);
})();
