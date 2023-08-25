import java.time.LocalDate;
import java.util.Scanner;

public class EdadDesdeFechaNacimiento {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Ingrese el día de su fecha de nacimiento: ");
    int diaNac = scanner.nextInt();

    System.out.print("Ingrese el mes de su fecha de nacimiento: ");
    int mesNac = scanner.nextInt();

    System.out.print("Ingrese el año de su fecha de nacimiento: ");
    int annoNac = scanner.nextInt();

    LocalDate fechaActual = LocalDate.now();
    int annoActual = fechaActual.getYear();

    int edad = annoActual - annoNac;

    System.out.println("Usted tiene " + edad + " años");
}
}