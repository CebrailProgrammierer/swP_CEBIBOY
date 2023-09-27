package tr.sma.flug;

public class Test {
    private String Rot;
    public static void main (String[] args) {
        Motor m = new Motor(450, "V-450", "Bmw", 400);
        Motor m1 = new Motor(450, "V-450", "Bmw", 400);
        Motor m2 = new Motor(450, "V-450", "Bmw", 400);
        Motor m3 = new Motor(450, "V-450", "Bmw", 400);
        Motor m4 = new Motor(450, "V-450", "Bmw", 400);
        Flugzeug flugzeug = new Flugzeug("rot", 476);
        flugzeug.setMotorList(m1);
        System.out.println("Die Leistung:" + flugzeug.getLeistung());
    }
}
