let randq;
let randr1;
let randr2;
let randr3;
var points=0;
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
//funcion para validar respuesta
function getAnswer(element){
    // console.log(element.innerHTML);
    // console.log(preguntas[1][randq]);
    //validacion de respuesta correcta o incorrecta
    if(element.innerHTML==preguntas[1][randq]){
        alert("Respuesta correcta!");
        points+=25;
    }else{
        alert("Respuesta incorrecta!");
        points-=15;
    }
    // console.log(points);
}

// function showModal(){
//     selectQuestion();
//     setTimeout(() => {
//         myModal.show();
//     },1000);
// }
// showModal();
// document.getElementById("btn-question").onclick=selectQuestion();
// function showModal(){
//     document.getElementById("modal1").style.visibility="visible";
// }
// setTimeout("showModal()",5000);
// function hideModal(){
//     document.getElementById("modal1").style.visibility="hidden";
// }
// setTimeout("hideModal()",5000);
