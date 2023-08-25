import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Ingrese la estatura en metros: ");
    double estatura = scanner.nextDouble();

    System.out.print("Ingrese el peso en kilogramos: ");
    double peso = scanner.nextDouble();

    System.out.print("Ingrese la edad: ");
    int edad = scanner.nextInt();

    double imc = peso / (estatura * estatura);

    if (imc < 22) {
    System.out.println("Buena salud");
} else {
    if (edad < 45) {
        System.out.println("Riesgo moderado");
    } else {
        System.out.println("Riesgo de salud alto");
    }
}
}
}