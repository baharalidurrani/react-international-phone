// The data was originally taken from the form react-phone-input-2
// https://github.com/bl00mber/react-phone-input-2/blob/master/src/rawCountries.js

import { CountryData } from '../types';

// Country model:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Format (if available),
//    Order priority (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]

export const defaultCountries: CountryData[] = [
  ['Afghanistan', 'af', '93'],
  ['Albania', 'al', '355'],
  ['Algeria', 'dz', '213'],
  ['Andorra', 'ad', '376'],
  ['Angola', 'ao', '244'],
  ['Antigua and Barbuda', 'ag', '1268'],
  ['Argentina', 'ar', '54', '(..) ........', 0],
  ['Armenia', 'am', '374', '.. ......'],
  ['Aruba', 'aw', '297'],
  [
    'Australia',
    'au',
    '61',
    {
      default: '. .... ....',
      '/^4/': '... ... ...',
      '/^5(?!50)/': '... ... ...',
      '/^1(3|8)00/': '.... ... ...',
      '/^13/': '.. .. ..',
      '/^180/': '... ....',
    },
    0,
    [],
  ],
  ['Austria', 'at', '43'],
  ['Azerbaijan', 'az', '994', '(..) ... .. ..'],
  ['Bahamas', 'bs', '1242'],
  ['Bahrain', 'bh', '973'],
  ['Bangladesh', 'bd', '880'],
  ['Barbados', 'bb', '1246'],
  ['Belarus', 'by', '375', '(..) ... .. ..'],
  ['Belgium', 'be', '32', '... .. .. ..'],
  ['Belize', 'bz', '501'],
  ['Benin', 'bj', '229'],
  ['Bhutan', 'bt', '975'],
  ['Bolivia', 'bo', '591'],
  ['Bosnia and Herzegovina', 'ba', '387'],
  ['Botswana', 'bw', '267'],
  ['Brazil', 'br', '55', '(..) .........'],
  ['British Indian Ocean Territory', 'io', '246'],
  ['Brunei', 'bn', '673'],
  ['Bulgaria', 'bg', '359'],
  ['Burkina Faso', 'bf', '226'],
  ['Burundi', 'bi', '257'],
  ['Cambodia', 'kh', '855'],
  ['Cameroon', 'cm', '237'],
  [
    'Canada',
    'ca',
    '1',
    '(...) ...-....',
    1,
    [
      '204',
      '226',
      '236',
      '249',
      '250',
      '289',
      '306',
      '343',
      '365',
      '387',
      '403',
      '416',
      '418',
      '431',
      '437',
      '438',
      '450',
      '506',
      '514',
      '519',
      '548',
      '579',
      '581',
      '587',
      '604',
      '613',
      '639',
      '647',
      '672',
      '705',
      '709',
      '742',
      '778',
      '780',
      '782',
      '807',
      '819',
      '825',
      '867',
      '873',
      '902',
      '905',
    ],
  ],
  ['Cape Verde', 'cv', '238'],
  ['Caribbean Netherlands', 'bq', '599', '', 1],
  ['Cayman Islands', 'ky', '1', '... ... ....', 4, ['345']],
  ['Central African Republic', 'cf', '236'],
  ['Chad', 'td', '235'],
  ['Chile', 'cl', '56'],
  ['China', 'cn', '86', '... .... ....'],
  ['Colombia', 'co', '57', '... ... ....'],
  ['Comoros', 'km', '269'],
  ['Congo', 'cd', '243'],
  ['Congo', 'cg', '242'],
  ['Costa Rica', 'cr', '506', '....-....'],
  ["Côte d'Ivoire", 'ci', '225', '.. .. .. .. ..'],
  ['Croatia', 'hr', '385'],
  ['Cuba', 'cu', '53'],
  ['Curaçao', 'cw', '599', '', 0],
  ['Cyprus', 'cy', '357', '.. ......'],
  ['Czech Republic', 'cz', '420', '... ... ...'],
  ['Denmark', 'dk', '45', '.. .. .. ..'],
  ['Djibouti', 'dj', '253'],
  ['Dominica', 'dm', '1767'],
  ['Dominican Republic', 'do', '1', '(...) ...-....', 2, ['809', '829', '849']],
  ['Ecuador', 'ec', '593'],
  ['Egypt', 'eg', '20'],
  ['El Salvador', 'sv', '503', '....-....'],
  ['Equatorial Guinea', 'gq', '240'],
  ['Eritrea', 'er', '291'],
  ['Estonia', 'ee', '372', '.... ......'],
  ['Ethiopia', 'et', '251'],
  ['Fiji', 'fj', '679'],
  ['Finland', 'fi', '358', '.. ... .. ..'],
  ['France', 'fr', '33', '. .. .. .. ..'],
  ['French Guiana', 'gf', '594'],
  ['French Polynesia', 'pf', '689'],
  ['Gabon', 'ga', '241'],
  ['Gambia', 'gm', '220'],
  ['Georgia', 'ge', '995'],
  ['Germany', 'de', '49', '... .........'],
  ['Ghana', 'gh', '233'],
  ['Greece', 'gr', '30'],
  ['Greenland', 'gl', '299', '.. .. ..'],
  ['Grenada', 'gd', '1473'],
  ['Guadeloupe', 'gp', '590', '', 0],
  ['Guam', 'gu', '1671'],
  ['Guatemala', 'gt', '502', '....-....'],
  ['Guinea', 'gn', '224'],
  ['Guinea-Bissau', 'gw', '245'],
  ['Guyana', 'gy', '592'],
  ['Haiti', 'ht', '509', '....-....'],
  ['Honduras', 'hn', '504'],
  ['Hong Kong', 'hk', '852', '.... ....'],
  ['Hungary', 'hu', '36'],
  ['Iceland', 'is', '354', '... ....'],
  ['India', 'in', '91', '.....-.....'],
  ['Indonesia', 'id', '62'],
  ['Iran', 'ir', '98', '... ... ....'],
  ['Iraq', 'iq', '964'],
  ['Ireland', 'ie', '353', '.. .......'],
  ['Israel', 'il', '972', '... ... ....'],
  ['Italy', 'it', '39', '... .......', 0],
  ['Jamaica', 'jm', '1876'],
  ['Japan', 'jp', '81', '.. .... ....'],
  ['Jordan', 'jo', '962'],
  ['Kazakhstan', 'kz', '7', '... ...-..-..', 0],
  ['Kenya', 'ke', '254'],
  ['Kiribati', 'ki', '686'],
  ['Kosovo', 'xk', '383'],
  ['Kuwait', 'kw', '965'],
  ['Kyrgyzstan', 'kg', '996', '... ... ...'],
  ['Laos', 'la', '856'],
  ['Latvia', 'lv', '371', '.. ... ...'],
  ['Lebanon', 'lb', '961'],
  ['Lesotho', 'ls', '266'],
  ['Liberia', 'lr', '231'],
  ['Libya', 'ly', '218'],
  ['Liechtenstein', 'li', '423'],
  ['Lithuania', 'lt', '370'],
  ['Luxembourg', 'lu', '352'],
  ['Macau', 'mo', '853'],
  ['Macedonia', 'mk', '389'],
  ['Madagascar', 'mg', '261'],
  ['Malawi', 'mw', '265'],
  ['Malaysia', 'my', '60', '..-....-....'],
  ['Maldives', 'mv', '960'],
  ['Mali', 'ml', '223'],
  ['Malta', 'mt', '356'],
  ['Marshall Islands', 'mh', '692'],
  ['Martinique', 'mq', '596'],
  ['Mauritania', 'mr', '222'],
  ['Mauritius', 'mu', '230'],
  ['Mexico', 'mx', '52', '... ... ....', 0],
  ['Micronesia', 'fm', '691'],
  ['Moldova', 'md', '373', '(..) ..-..-..'],
  ['Monaco', 'mc', '377'],
  ['Mongolia', 'mn', '976'],
  ['Montenegro', 'me', '382'],
  ['Morocco', 'ma', '212'],
  ['Mozambique', 'mz', '258'],
  ['Myanmar', 'mm', '95'],
  ['Namibia', 'na', '264'],
  ['Nauru', 'nr', '674'],
  ['Nepal', 'np', '977'],
  [
    'Netherlands',
    'nl',
    '31',
    {
      '/^06/': '(.). .........',
      '/^6/': '. .........',
      '/^0(10|13|14|15|20|23|24|26|30|33|35|36|38|40|43|44|45|46|50|53|55|58|70|71|72|73|74|75|76|77|78|79|82|84|85|87|88|91)/':
        '(.).. ........',
      '/^(10|13|14|15|20|23|24|26|30|33|35|36|38|40|43|44|45|46|50|53|55|58|70|71|72|73|74|75|76|77|78|79|82|84|85|87|88|91)/':
        '.. ........',
      '/^0/': '(.)... .......',
      default: '... .......',
    },
  ],
  ['New Caledonia', 'nc', '687'],
  ['New Zealand', 'nz', '64', '...-...-....'],
  ['Nicaragua', 'ni', '505'],
  ['Niger', 'ne', '227'],
  ['Nigeria', 'ng', '234'],
  ['North Korea', 'kp', '850'],
  ['Norway', 'no', '47', '... .. ...'],
  ['Oman', 'om', '968'],
  ['Pakistan', 'pk', '92', '...-.......'],
  ['Palau', 'pw', '680'],
  ['Palestine', 'ps', '970'],
  ['Panama', 'pa', '507'],
  ['Papua New Guinea', 'pg', '675'],
  ['Paraguay', 'py', '595'],
  ['Peru', 'pe', '51'],
  ['Philippines', 'ph', '63', '.... .......'],
  ['Poland', 'pl', '48', '...-...-...'],
  ['Portugal', 'pt', '351'],
  ['Puerto Rico', 'pr', '1', '', 3, ['787', '939']],
  ['Qatar', 'qa', '974'],
  ['Réunion', 're', '262'],
  ['Romania', 'ro', '40'],
  ['Russia', 'ru', '7', '(...) ...-..-..', 1],
  ['Rwanda', 'rw', '250'],
  ['Saint Kitts and Nevis', 'kn', '1869'],
  ['Saint Lucia', 'lc', '1758'],
  ['Saint Vincent and the Grenadines', 'vc', '1784'],
  ['Samoa', 'ws', '685'],
  ['San Marino', 'sm', '378'],
  ['São Tomé and Príncipe', 'st', '239'],
  ['Saudi Arabia', 'sa', '966'],
  ['Senegal', 'sn', '221'],
  ['Serbia', 'rs', '381'],
  ['Seychelles', 'sc', '248'],
  ['Sierra Leone', 'sl', '232'],
  ['Singapore', 'sg', '65', '....-....'],
  ['Slovakia', 'sk', '421'],
  ['Slovenia', 'si', '386'],
  ['Solomon Islands', 'sb', '677'],
  ['Somalia', 'so', '252'],
  ['South Africa', 'za', '27'],
  ['South Korea', 'kr', '82', '... .... ....'],
  ['South Sudan', 'ss', '211'],
  ['Spain', 'es', '34', '... ... ...'],
  ['Sri Lanka', 'lk', '94'],
  ['Sudan', 'sd', '249'],
  ['Suriname', 'sr', '597'],
  ['Swaziland', 'sz', '268'],
  ['Sweden', 'se', '46', '... ... ...'],
  ['Switzerland', 'ch', '41', '.. ... .. ..'],
  ['Syria', 'sy', '963'],
  ['Taiwan', 'tw', '886'],
  ['Tajikistan', 'tj', '992'],
  ['Tanzania', 'tz', '255'],
  ['Thailand', 'th', '66'],
  ['Timor-Leste', 'tl', '670'],
  ['Togo', 'tg', '228'],
  ['Tonga', 'to', '676'],
  ['Trinidad and Tobago', 'tt', '1868'],
  ['Tunisia', 'tn', '216'],
  ['Turkey', 'tr', '90', '... ... .. ..'],
  ['Turkmenistan', 'tm', '993'],
  ['Tuvalu', 'tv', '688'],
  ['Uganda', 'ug', '256'],
  ['Ukraine', 'ua', '380', '(..) ... .. ..'],
  ['United Arab Emirates', 'ae', '971'],
  ['United Kingdom', 'gb', '44', '.... ......'],
  ['United States', 'us', '1', '(...) ...-....', 0],
  ['Uruguay', 'uy', '598'],
  ['Uzbekistan', 'uz', '998', '.. ... .. ..'],
  ['Vanuatu', 'vu', '678'],
  ['Vatican City', 'va', '39', '.. .... ....', 1],
  ['Venezuela', 've', '58'],
  ['Vietnam', 'vn', '84'],
  ['Yemen', 'ye', '967'],
  ['Zambia', 'zm', '260'],
  ['Zimbabwe', 'zw', '263'],
];
