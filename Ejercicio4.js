import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Ingrese la longitud del lado a: ");
    double ladoA = scanner.nextDouble();

    System.out.print("Ingrese la longitud del lado b: ");
    double ladoB = scanner.nextDouble();

    System.out.print("Ingrese la longitud del lado c: ");
    double ladoC = scanner.nextDouble();

    if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB) {
    if (ladoA == ladoB && ladoB == ladoC) {
    System.out.println("Triangulo equilatero");
} else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
    System.out.println("Triangulo isosceles");
} else {
    System.out.println("Triangulo escaleno");
}
} else {
    System.out.println("Triangulo invalido");
}
}
}