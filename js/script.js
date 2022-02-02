document.write ('Addition of any two numbers<br><br>');
function add(a,b) {
    document.write ( 'Addition of '+ a +' & '+ b +' is '+ (a + b) +'<br>') ;
}
add (4,7);
add (6,8);
add (11,3);
add (9,2);
add (5,5);
add (2,8);
document.write ('<br>Substraction of any two numbers<br><br>');
function subs(a,b) {
    document.write ( 'Substraction of '+ a +' & '+ b +' is '+ (a - b) +'<br>') ;
}
subs (4,7);
subs (6,8);
subs (11,3);
subs (9,2);
subs (5,5);
subs (2,8);
document.write ('<br>Multiplication of any two numbers<br><br>');
function multiply(a,b) {
    document.write ( 'Product of '+ a +' & '+ b +' is '+ (a * b) +'<br>') ;
}
multiply (4,7);
multiply (6,8);
multiply (11,3);
multiply (9,2);
multiply (5,5);
multiply (2,8);
document.write ('<br>Division of any two numbers<br><br>');
function div(a,b) {
    document.write ( 'Quotent of '+ a +' & '+ b +' is '+ (a / b) +'<br>') ;
}
div (4,7);
div (6,8);
div (11,3);
div (9,2);
div (5,5);
div (2,8);
document.write ('<br>Remainder of any two numbers<br><br>');
function rem(a,b) {
    document.write ( 'Remainder of '+ a +' & '+ b +' is '+ (a % b) +'<br>') ;
}
rem (4,7);
rem (6,8);
rem (11,3);
rem (9,2);
rem (5,5);
rem (2,8);
document.write ('<br>Square of any two numbers<br><br>');
function sqrt(a,b) {
    document.write ( 'Square of '+ a +' to the power '+ b +' is '+ (a ** b) +'<br>') ;
}
sqrt (4,7);
sqrt (6,8);
sqrt (11,3);
sqrt (9,2);
sqrt (5,5);
sqrt (2,8);

document.write ('<br> Grade Point <br>')
let x=76;

if ( x >= 80 && x <= 100){
    document.write ('A+<br>');
}
else if ( x>=70 && x<=80){
    document.write ('A<br>');
}
else if ( x>=60 && x<=70){
    document.write ('A-<br>');
}
else if ( x>=50 && x<=60){
    document.write ('B<br>');
}
else if ( x>=40 && x<=50){
    document.write ('C-<br>');
}
else if ( x>=33 && x<=40){
    document.write ('D<br>');
}
else if ( x>=0 && x<=33){
    document.write ('F<br>');
}
else {
    document.write ('Numbers must between 0 to 100');
}

document.write ('<br>Odd Even number testing<br>')
let i;
for (i=1;i<=20;i++) {
    if (i%2==0){
    document.write( i+' is Even Number<br>');
    }
    else{
    document.write( i+' is Odd Number<br>');
    }
}