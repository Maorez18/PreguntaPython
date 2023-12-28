var jugadores = [];
var posjugadores = [];
var puntaje = [[], []]
var max=0;
var cont=0;
var ban;
let ficha1 = document.getElementById('ficha1');
let ficha2 = document.getElementById('ficha2');
let ficha3 = document.getElementById('ficha3');
let ficha4 = document.getElementById('ficha4');
const arriba = [490, 490, 490, 490, 490, 490, 490, 490, 400, 400, 400, 400, 400, 400, 400, 400, 330, 330, 330, 330, 330, 330, 330, 330, 250, 250, 250, 250, 250, 250, 250, 250, 180, 180, 180, 180, 180, 180, 180, 180, 110, 110, 110, 110, 110, 110, 110, 110, 30, 30, 30, 30, 30, 30, 30, 30, -50, -50, -50, -50, -50, -50, -50, -50,];
const izquierda = [460, 530, 610, 700, 770, 840, 910, 1000, 1000, 910, 840, 770, 700, 610, 530, 460, 460, 530, 610, 700, 770, 840, 910, 1000, 1000, 910, 840, 770, 700, 610, 530, 460, 460, 530, 610, 700, 770, 840, 910, 1000, 1000, 910, 840, 770, 700, 610, 530, 460, 460, 530, 610, 700, 770, 840, 910, 1000, 1000, 910, 840, 770, 700, 610, 530, 460,];
const posicionesIniciales = [
    { top: '160px', left: '30px' },
    { top: '160px', left: '20px' },
    { top: '300px', left: '-180px' },
    { top: '300px', left: '-190px' },
];
const fichas = document.querySelectorAll('.ball');
let randq;
let randr1;
let randr2;
let randr3;
var fichactu;
var posicionficha;
var fijg;
var turno=0;
var turnotemp;
var intervaloTiempo;
var modo=0;
var myModal=new bootstrap.Modal(document.getElementById('modal1'));
const preguntas = [
    [
        "<p>public class Salud{ <br> &nbsp &nbsp &nbsp public static void main(String[] args){ <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.(________)(\"¡Hola, mundo!\"); <br> &nbsp &nbsp &nbsp } <br> }</p>",
        "(____) (let i = 1; i &lt= 10; i++) { <br> &nbsp &nbsp &nbsp if (i % 2 = = 0) { <br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp console.log(i); <br> &nbsp &nbsp &nbsp} <br>}",
        "#include &ltiostream><br>using namespace std;<br><br>int main() {<br>&nbsp &nbsp &nbsp int num1 = 5, num2 = 10;<br>&nbsp &nbsp &nbsp int suma = num1 + num2; <br>&nbsp &nbsp &nbsp (____) << \"La suma es: \" << suma << endl; <br>&nbsp &nbsp &nbsp return 0; <br>}",
        "SELECT nombre, edad (____) estudiantes (_____) curso = 'Matemáticas';",
        "&lt?php<br>$numero = 5;<br>for ($i = 1; $i <= 10; $i++) {<br>&nbsp &nbsp &nbsp (____) $numero . \" x \" . $i . \" = \" . ($numero * $i) . \"&ltbr>\";<br>}<br>?>",
        "def factorial(n):<br>&nbsp &nbsp &nbsp if n == 0 or n == 1:<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp return 1 <br>&nbsp &nbsp &nbsp else:<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp (______) n * factorial(n - 1) <br><br> print(factorial(5))",
        "<(_____________)><br>&lthtml><br>&lthead><br>&nbsp &nbsp &nbsp &lttitle>Mi Primera Página&lt/title><br>&lt/head><br>&ltbody><br>&nbsp &nbsp &nbsp &lth1>Bienvenido a mi primera página web&lt/h1><br>&nbsp &nbsp &nbsp &ltp>¡Hola, mundo!&lt/p><br>&lt/body><br>&lt/html>",
        "import (_________________);<br><br>public class NumeroPar {<br>&nbsp &nbsp &nbsp public static void main(String[] args) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Scanner scanner = new Scanner(System.in);<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.print(\"Ingresa un número: \");<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp int numero = scanner.nextInt();<br>if (numero % 2 == 0) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.println(\"El número es par.\");<br>&nbsp &nbsp &nbsp} else {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.println(\"El número es impar.\");<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp}<br>}",
        "let num1 = 3;<br>let num2 = 7;<br>let suma = num1 + num2;<br>console.log(\"La suma es: \" + suma);",
        "#include &ltostream><br>using namespace std;<br><br>int main() {<br>&nbsp &nbsp &nbsp int num1 = 10, num2 = 20, num3 = 15;<br>&nbsp &nbsp &nbsp(__) (num1 >= num2 && num1 >= num3){<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp cout << \"El mayor es: \" << num1 << endl;<br>&nbsp &nbsp &nbsp}else{<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp if (num2 >= num1 && num2 >= num3){<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp cout << \"El mayor es: \" << num2 << endl;<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp}(____){<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp cout << \"El mayor es: \" << num3 << endl;<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp return 0;<br>}",
        "INSERT INTO empleados (nombre, salario) (______) ('Juan', 50000);",
        "&lt?php<br>$numeroAleatorio = rand(1, 100);<br>echo \"Número aleatorio: \" . (________________);<br>?>",
        "for i in (_____)(10, 0, -1):<br>&nbsp &nbsp &nbsp print(i)",
        "&lt!DOCTYPE html><br>&lthtml><br>&lthead><br>&nbsp &nbsp &nbsp &lttitle>Lista Numerada&lt/title><br>&lt/head><br>&ltbody><br>&nbsp &nbsp &nbsp &lth2>Top 5 Colores&lt/h2><br>&nbsp &nbsp &nbsp &lt(__)><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Azul&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Rojo&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Verde&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Amarillo&lt(___)><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Rosa&lt/li><br>&nbsp &nbsp &nbsp &lt/ol><br>&lt/body><br>&lt/html>",
        "import java.util.Scanner;<br><br>public class Calificacion {<br>&nbsp &nbsp &nbsp public static void main(String[] args) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Scanner scanner = new Scanner(System.in);<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.print(\"Ingresa tu calificación: \");<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp int calificacion = scanner.(_________);<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp if (calificacion >= 60) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.println(\"¡Felicidades! Has aprobado.\");<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp} else {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.println(\Lo siento, has reprobado.\");<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp}<br>}",
        "function factorial(n) {<br>&nbsp &nbsp &nbsp let resultado = 1;<br>&nbsp &nbsp &nbsp for (let i = 1; i &lt= n; i++) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp resultado *= i;<br>&nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp return resultado;<br>}<br><br>console.log(factorial(4));",
        "int main() {<br>&nbsp &nbsp &nbsp string palabra = \"reconocer\";<br>&nbsp &nbsp &nbsp if (esPalindromo(palabra)){<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp cout &lt&lt \"Es un palíndromo.\" &lt&lt endl;<br>&nbsp &nbsp &nbsp}else{<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp cout &lt&lt \"No es un palíndromo.\" &lt&lt endl;<br>&nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp(________);<br>}",
        "(______) productos SET precio = 20 WHERE categoria = 'juguetes';",
        "&lt(____)<br>$nombre = \"Juan\";<br>$apellido = \"Pérez\";<br>echo \"Nombre completo: \" . $nombre . \" \" . $apellido;<br>?>",
        "(___) fibonacci(n):<br>&nbsp &nbsp &nbsp a, b = 0, 1<br>&nbsp &nbsp &nbsp for _ in range(n):<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp print(a, end=\" \")<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp a, b = b, a + b<br><br> fibonacci(3)",
        "&lt!DOCTYPE html><br>&lthtml><br>&lthead><br>&nbsp &nbsp &nbsp &lttitle>Formulario Simple&lt/title><br> &lt/head><br> &lt(____)><br>&nbsp &nbsp &nbsp &ltform><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltlabel for=\"nombre\">Nombre:&lt/label><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltinput type=\"text\" id=\"nombre\" name=\"nombre\">&ltbr><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltlabel for=\"email\">Email:&lt/label><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltinput type=\"email\" id=\"email\" name=\"email\">&ltbr><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltinput type=\"submit\" value=\"Enviar\"><br>&nbsp &nbsp &nbsp &lt/form><br> &lt(_____)><br> &lt/html>",
        "public class SumaPares {<br>&nbsp &nbsp &nbsp public (________________)(String[] args) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp int suma = 0;<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp for (int i = 2; i &lt= 10; i += 2) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp suma += i;<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.println(\"La suma de números pares del 2 al 10 es: \" + suma);<br>&nbsp &nbsp &nbsp}<br>}",
        "let colores = ['rojo', 'verde', 'azul', 'amarillo'];<br>let colorBuscado = 'azul';<br><br>if (colores.includes(colorBuscado)) {<br>&nbsp &nbsp &nbsp console.log(\"El color \" + colorBuscado + \" está en la lista.\");<br>} else {<br>&nbsp &nbsp &nbsp console.log(\"El color \" + colorBuscado + \" no está en la lista.\");<br>}",
        "#include &ltiostream><br>#include &ltcmath><br>using namespace std;<br><br>int main() {<br>&nbsp &nbsp &nbsp int base = 2, exponente = 3;<br>&nbsp &nbsp &nbsp int resultado = (____________________);<br>&nbsp &nbsp &nbsp cout &lt&lt \"2^3 = \" &lt&lt resultado &lt&lt endl;<br>&nbsp &nbsp &nbsp return 0;<br>}",
        "DELETE (____) estudiantes WHERE promedio &lt 60;",
        "&lt?php<br>$contador = 1;<br>while ($contador &lt= 5) {<br>&nbsp &nbsp &nbsp echo \"Número: \" . $contador . \"&ltbr>\";<br>&nbsp &nbsp &nbsp(___________);<br>}<br>?>",
        "def es_primo((______)):<br>&nbsp &nbsp &nbsp if numero &lt 2:<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp return False<br>&nbsp &nbsp &nbsp for i in range(2, int(numero**0.5) + 1):<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp if numero % i == 0:<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp return False<br>&nbsp &nbsp &nbsp return True<br><br>print(es_primo(7))",
        "&lt!DOCTYPE html><br>&lthtml><br>&lthead><br>&nbsp &nbsp &nbsp &lttitle>Lista Desordenada&lt(______)><br>&lt/head><br>&ltbody><br>&nbsp &nbsp &nbsp &lt(__)>Top 5 Frutas&lt/h2><br>&nbsp &nbsp &nbsp &ltul><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Manzana&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Plátano&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Naranja&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Fresa&lt/li><br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &ltli>Pera&lt/li><br>&nbsp &nbsp &nbsp &lt/ul><br> &lt/body><br> &lt/html>",
        "public class TablaMultiplicar {<br>&nbsp &nbsp &nbsp public static void main(String[] args) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp int numero = 7;<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp for ((___) i = 1; i &lt= 10; i++) {<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp System.out.println(numero + \" x \" + i + \" = \" + (numero * i));<br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp}<br>&nbsp &nbsp &nbsp}<br>}",
        "let numeros = [12, 5, 8, 17, 3];<br>let maximo = Math.max(...numeros);<br>console.log(\"El número máximo en el array es: \" + maximo);",
        "#include &ltiostream><br> using (_____________);<br><br> int main() {<br>&nbsp &nbsp &nbsp float base = 5, altura = 8;<br>&nbsp &nbsp &nbsp float area = 0.5 * base * altura;<br>&nbsp &nbsp &nbsp cout &lt&lt \"El área del triángulo es: \" &lt&lt area &lt&lt endl;<br>&nbsp &nbsp &nbsp return 0;<br>}",
        "SELECT clientes.nombre, pedidos.producto<br>(____) clientes<br>JOIN pedidos (  ) clientes.id = pedidos.id_cliente;",
        "&lt?php<br>$nombres = (_____)(\"Ana\", \"Carlos\", \"Elena\", \"David\");<br>sort($nombres);<br>print_r($nombres);<br>?>",
        "cadena = \"Hola, mundo!\"<br>cadena_invertida = cadena[::-1]<br>print(\"Cadena invertida: \" + cadena_invertida)",
        "&lt!DOCTYPE html><br>&lthtml><br>&lthead><br>&nbsp &nbsp &nbsp &lttitle>Imágenes&lt/title><br> &lt/head><br> &ltbody><br>&nbsp &nbsp &nbsp &lth2>Galería de Imágenes&lt/h2><br>&nbsp &nbsp &nbsp &lt(   ) src=\"imagen1.jpg\" alt=\"Imagen 1\"><br>&nbsp &nbsp &nbsp &ltimg src=\"imagen2.jpg\" alt=\"Imagen 2\"><br>&nbsp &nbsp &nbsp &ltimg (___)=\"imagen3.jpg\" alt=\"Imagen 3\"><br> &lt(_____)><br> &lt/html>"
    ],
    [
        "<p>println</p>",
        "<p>for</p>",
        "<p>cout</p>",
        "<p>FROM, WHERE</p>",
        "<p>echo</p>",
        "<p>return</p>",
        "<p>!DOCTYPE html</p>",
        "<p>java.util.Scanner</p>",
        "<p>La suma es: 10</p>",
        "<p>if, else</p>",
        "<p>VALUES</p>",
        "<p>$numeroAleatorio</p>",
        "<p>range</p>",
        "<p>ol, /li</p>",
        "<p>nextInt()</p>",
        "<p>24</p>",
        "<p>return 0</p>",
        "<p>UPDATE</p>",
        "<p>?php</p>",
        "<p>def</p>",
        "<p>body, /body</p>",
        "<p>static void main</p>",
        "<p>El color azul esta en la lista</p>",
        "<p>pow(base, exponente), 8</p>",
        "<p>FROM</p>",
        "<p>$contador++</p>",
        "<p>numero</p>",
        "<p>/tittle, h2</p>",
        "<p>int</p>",
        "<p>17</p>",
        "<p>namespace std</p>",
        "<p>FROM, ON</p>",
        "<p>array</p>",
        "<p>Python</p>",
        "<p>img, src, /body</p>"
    ]
];

const respuestas=[
    [
        "<p>println</p>",
        "<p>for</p>",
        "<p>cout</p>",
        "<p>FROM, WHERE</p>",
        "<p>echo</p>",
        "<p>return</p>",
        "<p>!DOCTYPE html</p>",
        "<p>java.util.Scanner</p>",
        "<p>La suma es: 10</p>",
        "<p>if, else</p>",
        "<p>VALUES</p>",
        "<p>$numeroAleatorio</p>",
        "<p>range</p>",
        "<p>ol, /li</p>",
        "<p>nextInt()</p>",
        "<p>24</p>",
        "<p>return 0</p>",
        "<p>UPDATE</p>",
        "<p>?php</p>",
        "<p>def</p>",
        "<p>body, /body</p>",
        "<p>static void main</p>",
        "<p>El color azul esta en la lista</p>",
        "<p>pow(base, exponente), 8</p>",
        "<p>FROM</p>",
        "<p>$contador++</p>",
        "<p>numero</p>",
        "<p>/tittle, h2</p>",
        "<p>int</p>",
        "<p>17</p>",
        "<p>namespace std</p>",
        "<p>FROM, ON</p>",
        "<p>array</p>",
        "<p>Python</p>",
        "<p>img, src, /body</p>"
    ],
    [
        "<p>print</p>",
        "<p>while</p>",
        "<p>show</p>",
        "<p>WHERE, FROM</p>",
        "<p>println</p>",
        "<p>break</p>",
        "<p>html</p>",
        "<p>java.util.scanner</p>",
        "<p>La suma es: 20</p>",
        "<p>elif, else</p>",
        "<p>VALOR</p>",
        "<p>numeroAleatorio</p>",
        "<p>rango</p>",
        "<p>ul, ol</p>",
        "<p>nextln()</p>",
        "<p>20</p>",
        "<p>return</p>",
        "<p>ACTUALIZA</p>",
        "<p>java</p>",
        "<p>function</p>",
        "<p>div, /div</p>",
        "<p>static main</p>",
        "<p>El color negro esta en la lista</p>",
        "<p>round(base, exponente), 2.8</p>",
        "<p>FORM</p>",
        "<p>?contador++</p>",
        "<p>n1</p>",
        "<p>tittle, 2h</p>",
        "<p>entero</p>",
        "<p>15</p>",
        "<p>std</p>",
        "<p>FROM, IN</p>",
        "<p>int=[]</p>",
        "<p>JavaScript</p>",
        "<p>image, src, /body</p>"
    ],
    [
        "<p>cout</p>",
        "<p>do</p>",
        "<p>System.out.println</p>",
        "<p>INT, ADD</p>",
        "<p>print</p>",
        "<p>exit</p>",
        "<p>DOCTYPE html</p>",
        "<p>Scanner</p>",
        "<p>10</p>",
        "<p>if, sino</p>",
        "<p>VALES</p>",
        "<p>$numero</p>",
        "<p>rgn</p>",
        "<p>ol, li</p>",
        "<p>nextFloat()</p>",
        "<p>42</p>",
        "<p>retorno</p>",
        "<p>UPATE</p>",
        "<p>php</p>",
        "<p>definicion</p>",
        "<p>body, /footer</p>",
        "<p>void</p>",
        "<p>El color azul no esta en la lista</p>",
        "<p>sqrt(base, exponente), 8</p>",
        "<p>FOR</p>",
        "<p>contador++</p>",
        "<p>num</p>",
        "<p>span, /tittle</p>",
        "<p>char</p>",
        "<p>71</p>",
        "<p>name std</p>",
        "<p>WHERE, ON</p>",
        "<p>matriz</p>",
        "<p>C++</p>",
        "<p>img, style, /body</p>",
    ]
]

//funcion para ver que pregunta se mostrara
function selectQuestion(){
    //establece la primera respuesta que se mostrara
    randr1=Math.floor(Math.random()*3);
    //establece la pregunta que se hara
    randq=Math.floor(Math.random()*35);
    //titulo de modal
    switch(randq){
        case 8:
        case 15:
        case 22:
        case 29:
            document.getElementById("tittle-modal").innerHTML="Que se mostrara por consola?";
            break;
        case 23:
            document.getElementById("tittle-modal").innerHTML="Completa el codigo y Que se mostrara en consola?";
            break;
        case 33:
            document.getElementById("tittle-modal").innerHTML="De que lenguaje de programacion es el siguiente codigo?";
            break;
        default:
            document.getElementById("tittle-modal").innerHTML="Completa el siguiente codigo";
    }
    //establece la segunda respuesta que se mostrara
    do{
        randr2=Math.floor(Math.random()*3);
    } while(randr2==randr1);
    //establece la tercera respuesta que se mostrara
    do{
        randr3=Math.floor(Math.random()*3);
    } while(randr3==randr1 || randr3==randr2);
    //añade informacion de la pregunta y respuestas en HTML
    document.getElementById("pregunta").innerHTML=preguntas[0][randq];
    document.getElementById("option1").innerHTML=respuestas[randr1][randq];
    document.getElementById("option2").innerHTML=respuestas[randr2][randq];
    document.getElementById("option3").innerHTML=respuestas[randr3][randq];
    //tiempo para que el modal se cierre
    setTimeout(()=>{
        myModal.hide();
    }, 5000);
}
function getAnswer(element){
    if(element.innerHTML==preguntas[1][randq]){
        var correcto = new bootstrap.Modal(document.getElementById('correcto'));
        correcto.show();
        console.log(puntaje[1])
        puntaje[1][turnotemp]+=25;
        console.log(puntaje[1])
        switch(posicionficha){
            case 5:
                moverFichasQuestion(fichactu,6);
                break;
            case 18:
                moverFichasQuestion(fichactu,14);
                break;
            case 19:
                moverFichasQuestion(fichactu,18);
                break;
            case 23:
                moverFichasQuestion(fichactu,4);
                break;
            case 39:
                moverFichasQuestion(fichactu,4);
                break;
            case 40:
                moverFichasQuestion(fichactu,15);
                break;
            case 44:
                moverFichasQuestion(fichactu,18);
                break;
            default:
                console.log(1);
        }
    }else{
        var incorrecto = new bootstrap.Modal(document.getElementById('incorrecto'));
        incorrecto.show();
        console.log(puntaje[1])
        puntaje[1][turnotemp]-=15;
        console.log(puntaje[1])
        switch(posicionficha){
            case 17:
                moverFichasQuestion(fichactu,-14);
                break;
            case 22:
                moverFichasQuestion(fichactu,-8);
                break;
            case 26:
                moverFichasQuestion(fichactu,-18);
                break;
            case 51:
                moverFichasQuestion(fichactu,-18);
                break;
            case 54:
                moverFichasQuestion(fichactu,-19);
                break;
            default:
                console.log(0);
        }
    }
}
//Validar si sale modal pregunta o no/////////////////////////
function showQuestion(pos){
    console.log(posicionficha);
    switch(pos){
        case 5:
        case 18:
        case 19:
        case 23:
        case 39:
        case 40:
        case 44:
        case 17:
        case 22:
        case 26:
        case 51:
        case 54:
            var modal1 = new bootstrap.Modal(document.getElementById('modal1'));
            modal1.show(selectQuestion());
            break;
    }
}
/////////////TEMPORIZADOR/////////////////////////////
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return `${minutes}:${remainingSeconds}`;
}

function updateTimer() {
    tiempoElement.textContent = formatTime(tiempoTranscurrido);
    tiempoTranscurrido++;
}

const tiempoElement = document.getElementById('tiempo');
let tiempoTranscurrido = 0;

//Numero dado//////////////////////////////////////////////////
function dado() {
    numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numeroAleatorio").innerHTML = "sacaste un: " + numeroAleatorio;
    return numeroAleatorio;
}
//movimiento fichas///////////////////////////////////////////
function moverFicha(ball, i, pasos) {
    let nuevaPosicion = i + (pasos-1);

    // Obtener la posición actual y sumarle los pasos
    let nuevaTop = arriba[nuevaPosicion];
    let nuevaLeft = izquierda[nuevaPosicion];

    // Aplicar las nuevas posiciones
    ball.style.top = nuevaTop + 'px';
    ball.style.left = nuevaLeft + 'px';
}

function moverTodasLasBalls(fichactu, jg) {
    let pasos = dado();
    for(var i=0; i<posjugadores.length; i++){
        if(max<posjugadores[i]){
            max=posjugadores[i];
        }
    }
    var temp=0;
    temp=posjugadores[jg]+pasos;
    if(max<=64){
        moverFicha(fichactu, posjugadores[jg], pasos);
        if(temp<=64){
            posjugadores[jg]+=pasos;
        }
        posicionficha=posjugadores[jg];
        showQuestion(posjugadores[jg]);
        for(var i=0; i<posjugadores.length; i++){
            if(max<posjugadores[i]){
                max=posjugadores[i];
            }
        }
        console.log('maximo: '+max);
        if(max==64){
            clearInterval(intervaloTiempo);
            console.log('turno: '+turnotemp);
            puntaje[1][turno]+=200;
            var maxtemp=0;
            for(var j=0; j<puntaje[1].length; j++){
                if(maxtemp<puntaje[1][j]){
                    maxtemp=puntaje[1][j];
                }
            }
            if(puntaje[1][turnotemp]==maxtemp){
                console.log(puntaje[1]);
                var modalJugad = new bootstrap.Modal(document.getElementById('ganar'));
                modalJugad.show();
                document.getElementById('txtjugador').innerHTML='!!Felicidades Jugador '+(jugadores.indexOf(puntaje[0][turnotemp])+1);
            }else{
                var b=puntaje[1].indexOf(maxtemp);
                var modalJugad = new bootstrap.Modal(document.getElementById('ganar'));
                modalJugad.show();
                document.getElementById('txtjugador').innerHTML='!!Felicidasdes Jugador '+(jugadores.indexOf(puntaje[0][b])+1);
            }
        }
    }
    return max;
}
//Movimiento Fichas despues de pregunta
function moverFichasQuestion(fichactu, n) {
    for(var i=0; i<posjugadores.length; i++){
        if(max<posjugadores[i]){
            max=posjugadores[i];
        }
    }
    if(max<=64){
        moverFicha(fichactu, posjugadores[fijg], n);
        posjugadores[fijg]+=n;
        posicionficha=posjugadores[fijg];
        showQuestion(posjugadores[fijg]);
        for(var i=0; i<posjugadores.length; i++){
            if(max<posjugadores[i]){
                max=posjugadores[i];
            }
        }
        console.log('maximo: '+max);
        if(max==64){
            clearInterval(intervaloTiempo);
        }
    }
    return max;
}
//Poner fichas en casilla 1////////////////////////////////////
function inicializarFichas(njg, ficha){
    switch(njg){
        case 2:
            posjugadores.push(1);
            fichas[ficha].style.position = 'absolute';
            fichas[ficha].style.top = arriba[0]+'px';  
            fichas[ficha].style.left = izquierda[0]+'px';
            cont+=1;
            if(cont==2){
                for(var i=0; i<fichas.length; i++){
                    if(i!=jugadores[0] && i!=jugadores[1]){
                        fichas[i].style.visibility='hidden';
                    }
                }
            }
            break;
        case 3:
            posjugadores.push(1);
            fichas[ficha].style.position = 'absolute';
            fichas[ficha].style.top = arriba[0]+'px';  
            fichas[ficha].style.left = izquierda[0]+'px';
            cont+=1;
            if(cont==3){
                for(var i=0; i<fichas.length; i++){
                    if(i!=jugadores[0] && i!=jugadores[1] && i!=jugadores[2]){
                        fichas[i].style.visibility='hidden';
                    }
                }
            }
            break;
        case 4:
            posjugadores.push(1);
            fichas[ficha].style.position = 'absolute';
            fichas[ficha].style.top = arriba[0]+'px';  
            fichas[ficha].style.left = izquierda[0]+'px';
            break;
    }
}
//////////////MODALES////////////////////////////////

let modalJugadores, modalComputadora;

document.addEventListener('DOMContentLoaded', function() {
    var miModal = new bootstrap.Modal(document.getElementById('miModal'));
    miModal.show();

    document.getElementById('btnComputadora').addEventListener('click', function() {
        miModal.hide();
        modalComputadora = new bootstrap.Modal(document.getElementById('modalComputadora'));
        modalComputadora.show();
        modo=0;
    });

    document.getElementById('btnJugadores').addEventListener('click', function() {
        miModal.hide();
        modalJugadores = new bootstrap.Modal(document.getElementById('modalJugadores'));
        modalJugadores.show();
        modo=1;
    });
});
////////////////////////////////TEMPORIZADOR FICHA-COMPUTADORA////////////////////////////////////////
function dados() {
    var modalJugad = new bootstrap.Modal(document.getElementById('jugad'));
    modalJugad.show();

    fichactu=fichas[jugadores[turno]];
    fijg=turno;
    maximo=moverTodasLasBalls(fichactu, turno);
    console.log('ficha:'+puntaje[0][turno]);
    console.log('puntaje: '+puntaje[1][turno]);
    turnotemp=turno;
    turno++;
    if(turno>=jugadores.length){
        turno=0;
    }
}
//Seleccion altearia ficha compu
function fichacompu(ficha){
    var fichaAleatoria = Math.floor(Math.random() * fichas.length);
    while (fichaAleatoria == ficha) {
        fichaAleatoria = Math.floor(Math.random() * fichas.length);
    }
    jugadores.push(fichaAleatoria);
    console.log(jugadores);
    puntaje[0].push(0);

    fichas[fichaAleatoria].style.position = 'absolute';
    fichas[fichaAleatoria].style.top = arriba[0] + 'px';
    fichas[fichaAleatoria].style.left = izquierda[0] + 'px';

}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('ficha1.1').addEventListener('click', function() {
        modalComputadora.hide();
        
        jugadores.push(0);
        puntaje[0].push(0);
        fichacompu(jugadores[0]);
        for(var i=0; i<jugadores.length; i++){
            // console.log(jugadores[i]);
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0);
        }
        startTimer();
        cont=0
        //dados();
    });
    
    document.getElementById('ficha1.2').addEventListener('click', function() {
        modalComputadora.hide();
        jugadores.push(1);
        puntaje[0].push(1);
        fichacompu(jugadores[0]);
        for(var i=0; i<jugadores.length; i++){
            // console.log(jugadores[i]);
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0);
        }
        startTimer();
        cont=0
        //dados()
    });
    
    document.getElementById('ficha1.3').addEventListener('click', function() {
        modalComputadora.hide();
        jugadores.push(2);
        puntaje[0].push(2);
        fichacompu(jugadores[0]);
        for(var i=0; i<jugadores.length; i++){
            // console.log(jugadores[i]);
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0);
        }
        startTimer();
        cont=0
        //dados()
    });

    document.getElementById('ficha1.4').addEventListener('click', function() {
        modalComputadora.hide();
        jugadores.push(3);
        puntaje[0].push(3);
        fichacompu(jugadores[0]);
        for(var i=0; i<jugadores.length; i++){
            // console.log(jugadores[i]);
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0);
        }
        startTimer();
        cont=0
        //dados()
    });
});
///////////////////////////////////////////////////////////////////////////
function selectToken() {
    return new Promise((resolve) => {
        if(ficha1.style.visibility='visible'){
            ficha1.addEventListener('click', function () {
                ficha1.style.display = 'none';
                resolve(0);
            });
            ficha1.removeEventListener('click', function(){});
        }
        if(ficha2.style.visibility='visible'){
            ficha2.addEventListener('click', function () {
                ficha2.style.display = 'none';
                resolve(1);
            });
            ficha2.removeEventListener('click', function(){});
        }
        if(ficha3.style.visibility='visible'){
            ficha3.addEventListener('click', function () {
                ficha3.style.display = 'none';
                resolve(2);
            });
        }
        if(ficha4.style.visibility='visible'){
            ficha4.addEventListener('click', function () {
                ficha4.style.display = 'none';
                resolve(3);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var modalComputadora2 = new bootstrap.Modal(document.getElementById('modalComputadora2'));
    for (let i = 0; i < fichas.length; i++) {
        fichas[i].style.top = posicionesIniciales[i].top;
        fichas[i].style.left = posicionesIniciales[i].left;
        console.log(fichas[i].style.top);
    }
    document.getElementById('dosjugadores').addEventListener('click', async function () {
        modalJugadores.hide();
        modalComputadora2.show();
        while(jugadores.length<2){
            result = await selectToken();
            jugadores.push(result);
            puntaje[0].push(result);
        }
        // console.log(jugadores);
        modalComputadora2.hide();
        for(var i=0; i<jugadores.length; i++){
            // console.log(jugadores[i]);
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0)
        }
        startTimer();
        cont=0;
    });
    
    document.getElementById('tresjugadores').addEventListener('click', async function() {
        modalJugadores.hide();
        modalComputadora2.show();
        while(jugadores.length<3){
            var result = await selectToken();
            jugadores.push(result);
            puntaje[0].push(result);
        }
        // console.log(jugadores);
        modalComputadora2.hide();
        for(var i=0; i<jugadores.length; i++){
            // console.log(jugadores[i]);
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0)
        }
        startTimer();
        cont=0;
    });
    
    document.getElementById('cuatrojugadores').addEventListener('click', async function() {
        modalJugadores.hide();
        modalComputadora2.show();
        while(jugadores.length<4){
            var result = await selectToken();
            jugadores.push(result);
            puntaje[0].push(result);
        }
        //console.log(jugadores);
        modalComputadora2.hide();
        for(var i=0; i<jugadores.length; i++){
            inicializarFichas(jugadores.length, jugadores[i]);
            puntaje[1].push(0)
        }
        startTimer();
        cont=0;
    });
});


function startTimer() {
    intervaloTiempo=setInterval(updateTimer, 1000);
    if(modo==1){
        document.querySelector('.dados').addEventListener('click', function () {
            fichactu=fichas[jugadores[turno]];
            fijg=turno;
            maximo=moverTodasLasBalls(fichactu, turno);
            console.log('ficha:'+puntaje[0][turno]);
            console.log('puntaje: '+puntaje[1][turno]);
            turnotemp=turno;
            turno++;
            if(turno>=jugadores.length){
                turno=0;
            }
        })
    }else{
        if(modo==0){
            if(turno==0){
                console.log("turno: "+turno);
                document.querySelector('.dados').addEventListener('click', function () {
                    fichactu=fichas[jugadores[turno]];
                    fijg=turno;
                    maximo=moverTodasLasBalls(fichactu, turno);
                    console.log('ficha:'+puntaje[0][turno]);
                    console.log('puntaje: '+puntaje[1][turno]);
                    turnotemp=turno;
                    turno++;
                    if(turno>=jugadores.length){
                        turno=0;
                    }
                    console.log("turno: "+turno);
                })
            }else{
                if(turno==1){
                    console.log("turno: "+turno);
                    dados();
                }
            }
        }
    }
}
/////////////////////////////////////////////////////////////////////////
