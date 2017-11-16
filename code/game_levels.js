var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "      yyyy                                                                      ",
   "     yyyyyy                                                    yyyy             ",
   "      yyyy                                                    yyyyyy            ",
   "                            yyy                                yyyy             ",
   "            o              yyyyy              xxxxxxx                           ",
   "          xxxxx             yyy                                                 ",
   "                                    o o                                         ",
   "                                                     o o                        ",
   "                   o               xxxxx           xxxxxxx                      ",
   "                 xxxxx                                                      xx  ",
   "  xx               v                                                         x  ",
   "  x                                                            o             x  ",
   "  x          xxx               xxxxx                         xxxxx         o x  ",
   "  x     xxx  xxx          $      v                 $                         x  ",
   "  x  @  xxx  xxx                                                     ##      x  ",
   "  xxxxxxxxxxxxxxxx   xxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxx  ",
   "                 x!!!x         x   x                  x     x                   ",
   "                 x!!!x         x!!!x                  x!!!!!x                   ",
   "                 x!!!x         x!!!x                  x!!!!!x                   ",
   "                 xxxxx         xxxxx                  xxxxxxx                   ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "      yyyyyy                                                yyyyyy                                                ",
   "     yyyyyyyy                                              yyyyyyyy                                               ",
   "      yyyyyy                                                yyyyyy                                                ",
   "                             yyyyyy                                                      yyyyyy                   ",
   "                            yyyyyyyy                                                    yyyyyyyy                  ",
   "                             yyyyyy                 o                                    yyyyyy                   ",
   "                                                  xxxxx                                                           ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                             xx                                                               o   ",
   "                                             xx                                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                        xx   xx                                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "     @                                  xx!!!xx           xxxxx      xxx              v          v                ",
   "    xxx      xx                    xx   xx!!!xx                                                                   ",
   "    x!x      xxx                  xxx!!!xx!!!xx       o          #######                                         o",
   "!!!!x!x!!!!!!xxxx                xxxx!!!xx!!!xx     xxxxx        xxxxxxx                                        xx",
   "!!!!x!x!!!!!!xxxxx              xxxxx!!!xx!!!xx                  xxxxxxx                                      xxxx",
   "!!!!x!x!!!!!!xxxxxx     oo     xxxxxx!!!xx!!!xx                  xxxxxxx                  o           o     xxxxxx",
   "!!!!x!x!!!!!!xxxxxxx   xxxx   xxxxxxx!!!xx!!!xx                  xxxxxxx       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!x!x!!!!!!xxxxxxxx        xxxxxxxx!!!xx!!!xx                  xxxxxxx                                          ",
   "!!!!x!x!!!!!!xxxxxxxxx!!!!!!xxxxxxxxx!!!xx!!!xx!!!!!!!!!!!!!!!!!!xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!x!x!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                           yyyyyy                      yyyyyy                                                 ",
   "                          yyyyyyyy                    yyyyyyyy                                                ",
   "                           yyyyyy                      yyyyyy               yyyyyy                            ",
   "                                               o                           yyyyyyyy                           ",
   "       yyyyyy                      xxxxxxxxxxxxxxxxxxxxxxxxxxxx             yyyyyy                            ",
   "      yyyyyyyy                           v       v            x                                 yyyyyy        ",
   "       yyyyyy                  o                              x                                yyyyyyyy       ",
   "                              xx                              x                                 yyyyyy        ",
   "                              x                               x                                               ",
   "  xxx                         x                               x                                          xxx  ",
   "  x x                oo       x    xxxxxxxxxxxxxxxxxxxxx      x                                          x x  ",
   "  x          $    xxxxxxxx    xo   x                   x      x                                            x  ",
   "  x          xx               xx   x                          x                                            x  ",
   "  x          x!!!!!!!!!!!!!!!!x    x                          x                                            x  ",
   "!!x          xxxxxxxxxxxxxxxxxx   ox                         xx                                            x!!",
   "!!x                               xx     x  o  x                          xxxxx                         o  x!!",
   "!!xo                               x     xxxxxxx                                                     xxxxxxx!!",
   "!!xxx                              x                 xxxx          xxxxx                           xxxxxxxxx!!",
   "!!xxxx       xxxxxxxxxxxxxxxxxxxxxxx                 x       o                                   xxxxxxxxxxx!!",
   "!!xxxxx  @   x!!!!!!!!!!!!!!!!!!!!!x ##     =     ## x     xxxxx                  x     =      xxxxxxxxxxxxx!!",
   "!!xxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxx!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                ",
   " xx    xx  xxxxxxx  xx   xx                                                     ",
   " xx    xx  xx   xx  xx   xx                                                     ",
   " xx    xx  xx   xx  xx   xx                                                     ",
   " xx    xx  xx   xx  xx   xx                                                     ",
   " xxxxxxxx  xx   xx  xx   xx                                                     ",
   "    xx     xx   xx  xx   xx                                                     ",
   "    xx     xx   xx  xx   xx                                                     ",
   "    xx     xx   xx  xx   xx                                                     ",
   "    xx     xxxxxxx  xxxxxxx                                                     ",
   "                                                                                ",
   " xx      xx  xx  xxxxxxx  xx                                                    ",
   " xx      xx  xx  xx   xx  xx                                                    ",
   " xx      xx  xx  xx   xx  xx                                                    ",
   " xx      xx  xx  xx   xx  xx                                                    ",
   " xx      xx  xx  xx   xx  xx                                                    ",
   " xx  xx  xx  xx  xx   xx  xx                                                    ",
   " xx  xx  xx  xx  xx   xx                                                        ",
   " xx  xx  xx  xx  xx   xx  xx                                                    ",
   " xxxxxxxxxx  xx  xx   xx  xx                                                    ",
   "                                                                                ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                  ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                  ",
   "                                                                                "],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
