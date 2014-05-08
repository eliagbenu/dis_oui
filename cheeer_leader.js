
<!-- Begin
var agt=navigator.userAgent.toLowerCase();
if (agt.indexOf("mac") != -1)
var a="\r";
else
var a="\n";
var max=0;
function tlist() {
max=tlist.arguments.length;
for (i=0; i<max; i++)
this[i]=tlist.arguments[i];
}
tl = new tlist(
"   o"+a+
"  /|\\"+a+
" */ \\*        eli"+a,

"   o_"+a+
"  \<| *"+a+
"  *\>\\         eli"+a,

"  _o/*"+a+
" * |"+a+
"  / \\         eli"+a,

" *\o_"+a+
"  /  *"+a+
" \<\\           eli"+a,

"  _o/*"+a+
" * |"+a+
"  / \\         eli"+a,

" *\\c/*"+a+
"   )"+a+
"  / \>         eli"+a,

"     *"+a+
"  \\__/c"+a+
"   \> \\*       eli"+a,

"   __/"+a+
"    (o_*"+a+
"     \\*       eli"+a,

"      \\ /"+a+
"       |"+a+
"     */o\\*    eli"+a,

"       \\_"+a+
"       ("+a+
"     */o\\*    eli"+a,

"        \<_"+a+
"      __("+a+
"     * o|*    eli"+a,

"         /_"+a+
"      __("+a+
"     * o|*    eli"+a,

"         ___"+a+
"      *\/ \>"+a+
"       o|*    eli"+a,

"        *"+a+
"       o|_/"+a+
"      */  \\   eli"+a,

"        *"+a+
"      _o|_"+a+
"     *   \>\\   eli"+a,

"       _o/*"+a+
"      * |"+a+
"       / \\    eli"+a,

"      *\\o/*"+a+
"        |"+a+
"       / \\    eli"+a,

"      c/*"+a+
"      \<\\"+a+
"      */\\     eli"+a,

"      c__"+a+
"      \<\ *"+a+
"      */\\     eli"+a,

"      c__"+a+
"      /\ *"+a+
"     * /\>     eli"+a,

"      c/*"+a+
"     /(__"+a+
"    * /       eli"+a,

"    __o/*"+a+
"    * (__"+a+
"      \<       eli"+a,

"      __o_"+a+
"     * /  *"+a+
"      \<\\      eli"+a,

"     *_o_"+a+
"       | *"+a+
"      \< \\     eli"+a,

"     *_c_*"+a+
"       |"+a+
"       \>\\     eli"+a,

"     *_c_*"+a+
"       |__"+a+
"       \>      eli"+a,

"     *_c_*"+a+
"     __|__"+a+
"              eli"+a,

" "+a+
"     *_c_*"+a+
"     __)__    eli"+a,

" "+a+
"     *\\c/*"+a+
"     __)__    eli"+a

);
var x=0;
function tick() {
document.animation.cheerleader.value = " " + a +
tl[x];
x++;
if (x != max)
setTimeout("tick()", 200);
else
x = 0;
}
