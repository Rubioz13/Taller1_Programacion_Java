import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Ingrese el dividendo (numero a dividir): ");
    double dividendo = scanner.nextInt();

    System.out.print("Ingrese el divisor (numero por el cual se va a dividir): ");
    double divisor = scanner.nextInt();

    if (divisor != 0) {
    int cociente = dividendo / divisor;
    int residuo = dividendo % divisor;

    if (residuo == 0) {
    System.out.println("La division es exacta.");
} else {
    System.out.println("La division no es exacta.");
}

System.out.println("El cociente es: " + cociente);
System.out.println("El residuo es: " + residuo);
} else {
    System.out.println("No es posible dividir entre cero.");
}
}
}