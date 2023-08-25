
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Ingrese el primer numero: ");
    double numero1 = scanner.nextDouble();
    System.out.print("Ingrese el segundo numero: ");
    double numero2 = scanner.nextDouble();
    System.out.print("Ingrese el tercer numero: ");
    double numero3 = scanner.nextDouble();
    System.out.print("Ingrese el cuarto numero: ");
    double numero4 = scanner.nextDouble();
    double temp;
    if (numero1 > numero2) {
    temp = numero1;
    numero1 = numero2;
    numero2 = temp;
}
if (numero2 > numero3) {
    temp = numero2;
    numero2 = numero3;
    numero3 = temp;
}
if (numero3 > numero4) {
    temp = numero3;
    numero3 = numero4;
    numero4 = temp;
}
if (numero1 > numero2) {
    temp = numero1;
    numero1 = numero2;
    numero2 = temp;
}
if (numero2 > numero3) {
    temp = numero2;
    numero2 = numero3;
    numero3 = temp;
}

System.out.println("Numeros ordenados de menor a mayor:");
System.out.println(numero1 + " " + numero2 + " " + numero3 + " " + numero4);
}
}